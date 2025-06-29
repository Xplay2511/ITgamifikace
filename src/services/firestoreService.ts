import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  getDocs,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../data/firebase';
import { Student, Badge, Topic, DailyQuest } from '../types';

// Struktura dat v Firestore:
// /students/{userId} - data studenta
// /badges - seznam všech odznaků
// /topics - seznam všech témat
// /dailyQuests - seznam denních výzev
// /leaderboards - leaderboard data

export const firestoreService = {
  // Načtení dat studenta
  async getStudentData(userId: string): Promise<Student | null> {
    try {
      const docRef = doc(db, 'students', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as Student;
      } else {
        // Vytvoření nového studenta s výchozími daty
        const defaultStudent: Student = {
          id: userId,
          name: 'Student',
          avatar: {
            hair: 'brown',
            skinColor: 'light',
            shirtColor: 'blue',
            eyes: 'brown'
          },
          xp: 0,
          level: 1,
          badges: [],
          snakeScore: 0,
          spaceScore: 0,
          stars: 0,
          lastActive: new Date().toISOString(),
          dailyQuestsCompleted: [],
          totalQuestsCompleted: 0,
          loginStreak: 1,
          lastLoginDate: new Date().toISOString(),
          topicsCompleted: [],
          typingScore: 0,
          helpCount: 0,
          creativeProjects: 0
        };
        
        await setDoc(docRef, defaultStudent);
        return defaultStudent;
      }
    } catch (error) {
      console.error('Error getting student data:', error);
      return null;
    }
  },

  // Uložení dat studenta
  async updateStudentData(userId: string, data: Partial<Student>): Promise<boolean> {
    try {
      const docRef = doc(db, 'students', userId);
      await updateDoc(docRef, {
        ...data,
        lastActive: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error('Error updating student data:', error);
      return false;
    }
  },

  // Načtení všech odznaků
  async getBadges(): Promise<Badge[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'badges'));
      return querySnapshot.docs.map(doc => doc.data() as Badge);
    } catch (error) {
      console.error('Error getting badges:', error);
      return [];
    }
  },

  // Načtení všech témat
  async getTopics(): Promise<Topic[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'topics'));
      return querySnapshot.docs.map(doc => doc.data() as Topic);
    } catch (error) {
      console.error('Error getting topics:', error);
      return [];
    }
  },

  // Načtení denních výzev
  async getDailyQuests(): Promise<DailyQuest[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'dailyQuests'));
      return querySnapshot.docs.map(doc => doc.data() as DailyQuest);
    } catch (error) {
      console.error('Error getting daily quests:', error);
      return [];
    }
  },

  // Získání dnešní denní výzvy s automatickou aktualizací
  async getTodaysQuest(): Promise<DailyQuest | null> {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      // Zkus najít dnešní výzvu
      const querySnapshot = await getDocs(collection(db, 'dailyQuests'));
      const todaysQuest = querySnapshot.docs
        .map(doc => doc.data() as DailyQuest)
        .find(quest => quest.date === today);
      
      if (todaysQuest) {
        return todaysQuest;
      }
      
      // Pokud dnešní výzva neexistuje, vytvoř novou
      const allQuests = querySnapshot.docs.map(doc => doc.data() as DailyQuest);
      if (allQuests.length === 0) {
        console.log('Žádné denní výzvy nebyly nalezeny - vrátím null');
        return null;
      }
      
      // Vyber náhodnou výzvu pro dnešek
      const randomQuest = allQuests[Math.floor(Math.random() * allQuests.length)];
      const newTodaysQuest: DailyQuest = {
        ...randomQuest,
        id: `quest_${today}`,
        date: today
      };
      
      // Ulož novou dnešní výzvu
      await setDoc(doc(db, 'dailyQuests', newTodaysQuest.id), newTodaysQuest);
      
      return newTodaysQuest;
    } catch (error) {
      console.error('Error getting today\'s quest:', error);
      return null;
    }
  },

  // Kontrola, zda student splnil dnešní výzvu
  async hasCompletedTodaysQuest(userId: string): Promise<boolean> {
    try {
      const student = await this.getStudentData(userId);
      if (!student) return false;
      
      const today = new Date().toISOString().split('T')[0];
      const todaysQuestId = `quest_${today}`;
      
      return student.dailyQuestsCompleted.includes(todaysQuestId);
    } catch (error) {
      console.error('Error checking today\'s quest completion:', error);
      return false;
    }
  },

  // Kontrola a automatické odemykání odznaků
  async checkAndUnlockAutomaticBadges(userId: string): Promise<string[]> {
    try {
      const student = await this.getStudentData(userId);
      if (!student) return [];

      const badges = await this.getBadges();
      const unlockedBadges: string[] = [];

      for (const badge of badges) {
        if (badge.unlockMethod === 'automatic' && 
            badge.autoUnlockCondition && 
            !student.badges.includes(badge.id)) {
          
          const shouldUnlock = await this.checkBadgeCondition(student, badge.autoUnlockCondition);
          
          if (shouldUnlock) {
            // Odemkni odznak a aktualizuj XP a level
            const updatedBadges = [...student.badges, badge.id];
            const newXp = student.xp + badge.xpReward;
            const newLevel = Math.floor(newXp / 300) + 1; // 300 XP na level
            
            await this.updateStudentData(userId, {
              badges: updatedBadges,
              xp: newXp,
              level: newLevel
            });
            
            unlockedBadges.push(badge.id);
            console.log(`🎉 Automaticky odemčen odznak: ${badge.name}`);
          }
        }
      }

      return unlockedBadges;
    } catch (error) {
      console.error('Error checking automatic badges:', error);
      return [];
    }
  },

  // Kontrola podmínky pro odznak
  async checkBadgeCondition(student: Student, condition: any): Promise<boolean> {
    switch (condition.type) {
      case 'xp_threshold':
        return student.xp >= condition.value;
      
      case 'login_streak':
        // Speciální logika pro "První den" odznak
        if (condition.value === 1) {
          // První den se odemkne, pokud student má loginStreak = 1 a je to jeho první přihlášení
          return student.loginStreak === 1 && student.badges.length === 0;
        }
        return student.loginStreak >= condition.value;
      
      case 'badge_count':
        return student.badges.length >= condition.value;
      
      case 'quest_count':
        return student.totalQuestsCompleted >= condition.value;
      
      case 'game_score':
        // Kontrola nejvyššího skóre ze všech her
        const maxGameScore = Math.max(student.snakeScore, student.spaceScore);
        return maxGameScore >= condition.value;
      
      case 'login_time':
        const now = new Date();
        const hour = now.getHours();
        if (condition.value === 8) {
          return hour < 8; // Ranní ptáče
        } else if (condition.value === 22) {
          return hour >= 22; // Noční sova
        }
        return false;
      
      case 'quest_speed':
        // Toto se bude kontrolovat při splnění denní výzvy
        return false; // Implementováno jinde
      
      case 'help_count':
        return student.helpCount >= condition.value;
      
      case 'creative_projects':
        return student.creativeProjects >= condition.value;
      
      default:
        return false;
    }
  },

  // Aktualizace login streak při přihlášení
  async updateLoginStreak(userId: string): Promise<void> {
    try {
      const student = await this.getStudentData(userId);
      if (!student) return;

      const today = new Date().toISOString().split('T')[0];
      
      // Kontrola, zda lastLoginDate je validní
      let lastLogin: string;
      try {
        const lastLoginDate = new Date(student.lastLoginDate);
        if (isNaN(lastLoginDate.getTime())) {
          // Pokud je lastLoginDate nevalidní, použij dnešní datum
          lastLogin = today;
        } else {
          lastLogin = lastLoginDate.toISOString().split('T')[0];
        }
      } catch (error) {
        // Pokud je chyba při parsování, použij dnešní datum
        lastLogin = today;
      }
      
      let newStreak = student.loginStreak || 1;
      
      if (today === lastLogin) {
        // Již přihlášen dnes
        return;
      } else if (this.isConsecutiveDay(lastLogin, today)) {
        // Po sobě jdoucí den
        newStreak += 1;
      } else {
        // Přerušený streak
        newStreak = 1;
      }

      await this.updateStudentData(userId, {
        loginStreak: newStreak,
        lastLoginDate: new Date().toISOString()
      });

      console.log(`📅 Login streak aktualizován: ${newStreak} dní`);
    } catch (error) {
      console.error('Error updating login streak:', error);
    }
  },

  // Kontrola, zda jsou dva dny po sobě
  isConsecutiveDay(date1: string, date2: string): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  },

  // Načtení všech studentů (pro učitele)
  async getAllStudents(): Promise<Student[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'students'));
      return querySnapshot.docs.map(doc => doc.data() as Student);
    } catch (error) {
      console.error('Error getting all students:', error);
      return [];
    }
  },

  // Uložení leaderboard dat
  async updateLeaderboard(type: 'snake' | 'space', data: { name: string; score: number; date: string }): Promise<boolean> {
    try {
      const docRef = doc(db, 'leaderboards', type);
      await setDoc(docRef, { scores: data }, { merge: true });
      return true;
    } catch (error) {
      console.error('Error updating leaderboard:', error);
      return false;
    }
  },

  // Načtení leaderboard dat
  async getLeaderboard(type: 'snake' | 'space'): Promise<{ name: string; score: number; date: string }[]> {
    try {
      const docRef = doc(db, 'leaderboards', type);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const scores = docSnap.data().scores;
        return Array.isArray(scores) ? scores : [];
      }
      return [];
    } catch (error) {
      console.error('Error getting leaderboard:', error);
      return [];
    }
  },

  // Smazání studenta
  async deleteStudent(userId: string): Promise<boolean> {
    try {
      const docRef = doc(db, 'students', userId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error('Error deleting student:', error);
      return false;
    }
  }
}; 