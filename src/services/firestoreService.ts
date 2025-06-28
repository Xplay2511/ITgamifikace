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
          badges: [],
          snakeScore: 0,
          spaceScore: 0,
          stars: 0,
          lastActive: new Date().toISOString(),
          dailyQuestsCompleted: [],
          totalQuestsCompleted: 0
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