import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './data/firebase';
import { firestoreService } from './services/firestoreService';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AvatarBuilder from './components/AvatarBuilder';
import { AppState, Student, AvatarSettings } from './types';
import { initialBadges, initialTopics, initialDailyQuests, initialTeacherSettings } from './data/initialData';
import { calculateLevel } from './utils/initializeFirestore';
import { soundEffects } from './utils/soundEffects';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentUser: null,
    isTeacher: false,
    students: [],
    badges: initialBadges,
    topics: initialTopics,
    dailyQuests: initialDailyQuests,
    snakeLeaderboard: [],
    spaceLeaderboard: [],
    gameState: {
      snake: {
        snake: [[10, 10]],
        food: [5, 5],
        direction: 'RIGHT',
        score: 0,
        gameOver: false
      },
      space: {
        player: { x: 400, y: 500 },
        bullets: [],
        asteroids: [],
        score: 0,
        gameOver: false,
        lives: 3
      }
    },
    teacherSettings: initialTeacherSettings
  });

  const [showAvatarBuilder, setShowAvatarBuilder] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  // Sledování stavu autentizace
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Uživatel je přihlášen
        setAppState(prev => ({
          ...prev,
          currentUser: user.uid,
          isTeacher: user.email === 'teacher@itgamifikace.cz' // Speciální e-mail pro učitele
        }));

        if (user.email === 'teacher@itgamifikace.cz') {
          // Načtení dat pro učitele
          await loadTeacherData();
        } else {
          // Načtení dat pro studenta
          await loadStudentData(user.uid);
          await loadTodaysQuest(); // Načti dnešní denní výzvu
        }
      } else {
        // Uživatel není přihlášen
        setAppState(prev => ({
          ...prev,
          currentUser: null,
          isTeacher: false
        }));
        setCurrentStudent(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Načti základní data při startu aplikace
    const loadInitialData = async () => {
      try {
        const badges = await firestoreService.getBadges();
        const topics = await firestoreService.getTopics();
        const dailyQuests = await firestoreService.getDailyQuests();
        const snakeLeaderboard = await firestoreService.getLeaderboard('snake');
        const spaceLeaderboard = await firestoreService.getLeaderboard('space');

        setAppState(prev => ({
          ...prev,
          badges: badges.length > 0 ? badges : initialBadges,
          topics: topics.length > 0 ? topics : initialTopics,
          dailyQuests: dailyQuests.length > 0 ? dailyQuests : initialDailyQuests,
          snakeLeaderboard,
          spaceLeaderboard
        }));
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    };

    loadInitialData();
  }, []);

  const loadTeacherData = async () => {
    try {
      const students = await firestoreService.getAllStudents();
      const badges = await firestoreService.getBadges();
      const topics = await firestoreService.getTopics();
      const dailyQuests = await firestoreService.getDailyQuests();
      const snakeLeaderboard = await firestoreService.getLeaderboard('snake');
      const spaceLeaderboard = await firestoreService.getLeaderboard('space');

      setAppState(prev => ({
        ...prev,
        students: students.length > 0 ? students : [],
        badges: badges.length > 0 ? badges : initialBadges,
        topics: topics.length > 0 ? topics : initialTopics,
        dailyQuests: dailyQuests.length > 0 ? dailyQuests : initialDailyQuests,
        snakeLeaderboard,
        spaceLeaderboard
      }));
    } catch (error) {
      console.error('Error loading teacher data:', error);
    }
  };

  const loadStudentData = async (userId: string) => {
    try {
      const student = await firestoreService.getStudentData(userId);
      if (student) {
        setCurrentStudent(student);
        
        // Aktualizuj login streak při přihlášení
        await firestoreService.updateLoginStreak(userId);
        
        // Kontrola automatických odznaků při přihlášení
        const unlockedBadges = await firestoreService.checkAndUnlockAutomaticBadges(userId);
        if (unlockedBadges.length > 0) {
          const updatedBadges = appState.badges.map(badge => 
            unlockedBadges.includes(badge.id) ? { ...badge, unlocked: true } : badge
          );
          setAppState(prev => ({ ...prev, badges: updatedBadges }));
          
          unlockedBadges.forEach(badgeId => {
            const badge = appState.badges.find(b => b.id === badgeId);
            if (badge) {
              alert(`🎉 Nový odznak odemčen: ${badge.name}! +${badge.xpReward} XP`);
            }
          });
        }
      }
    } catch (error) {
      console.error('Error loading student data:', error);
    }
  };

  const loadTodaysQuest = async () => {
    try {
      const todaysQuest = await firestoreService.getTodaysQuest();
      if (todaysQuest) {
        // Aktualizuj denní výzvy s dnešní výzvou
        const existingQuests = appState.dailyQuests.filter(q => q.id !== todaysQuest.id);
        setAppState(prev => ({ 
          ...prev, 
          dailyQuests: [...existingQuests, todaysQuest] 
        }));
      }
    } catch (error) {
      console.error('Error loading today\'s quest:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowAvatarBuilder(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleAvatarChange = async (newAvatar: AvatarSettings) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;

    const updatedStudent = { ...currentStudent, avatar: newAvatar };
    setCurrentStudent(updatedStudent);
    
    await firestoreService.updateStudentData(appState.currentUser, { avatar: newAvatar });
  };

  const handleUnlockBadge = async (badgeId: string) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;

    const badge = appState.badges.find(b => b.id === badgeId);
    if (!badge) return;

    const newXp = currentStudent.xp + badge.xpReward;
    const newLevel = calculateLevel(newXp);
    const oldLevel = currentStudent.level || 1;

    const updatedStudent = {
      ...currentStudent,
      badges: currentStudent.badges.includes(badgeId) 
        ? currentStudent.badges 
        : [...currentStudent.badges, badgeId],
      xp: newXp,
      level: newLevel
    };

    setCurrentStudent(updatedStudent);
    await firestoreService.updateStudentData(appState.currentUser, {
      badges: updatedStudent.badges,
      xp: updatedStudent.xp,
      level: updatedStudent.level
    });

    // Zvukový efekt pro odznak
    soundEffects.playBadgeUnlock();

    // Pokud se zvýšil level, zobraz notifikaci
    if (newLevel > oldLevel) {
      alert(`🎊 Gratulujeme! Dosáhl jsi levelu ${newLevel}!`);
    }
  };

  const handleDailyQuestComplete = async (questId: string, correct: boolean) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;

    const quest = appState.dailyQuests.find(q => q.id === questId);
    if (!quest) return;

    const newTotalQuests = currentStudent.totalQuestsCompleted + 1;
    const newXp = currentStudent.xp + (correct ? quest.xpReward : 0);
    const newLevel = calculateLevel(newXp);
    const oldLevel = currentStudent.level || 1;

    const updatedStudent = {
      ...currentStudent,
      xp: newXp,
      level: newLevel,
      dailyQuestsCompleted: currentStudent.dailyQuestsCompleted.includes(questId)
        ? currentStudent.dailyQuestsCompleted
        : [...currentStudent.dailyQuestsCompleted, questId],
      totalQuestsCompleted: newTotalQuests
    };

    setCurrentStudent(updatedStudent);
    await firestoreService.updateStudentData(appState.currentUser, {
      xp: updatedStudent.xp,
      level: updatedStudent.level,
      dailyQuestsCompleted: updatedStudent.dailyQuestsCompleted,
      totalQuestsCompleted: newTotalQuests
    });

    // Pokud se zvýšil level, zobraz notifikaci
    if (newLevel > oldLevel) {
      alert(`🎊 Gratulujeme! Dosáhl jsi levelu ${newLevel}!`);
    }

    // Kontrola automatických odznaků
    const unlockedBadges = await firestoreService.checkAndUnlockAutomaticBadges(appState.currentUser);
    if (unlockedBadges.length > 0) {
      // Aktualizuj lokální stav
      const updatedBadges = appState.badges.map(badge => 
        unlockedBadges.includes(badge.id) ? { ...badge, unlocked: true } : badge
      );
      setAppState(prev => ({ ...prev, badges: updatedBadges }));
      
      // Zvukový efekt pro automatické odznaky
      soundEffects.playBadgeUnlock();
      
      // Zobraz notifikaci
      unlockedBadges.forEach(badgeId => {
        const badge = appState.badges.find(b => b.id === badgeId);
        if (badge) {
          alert(`🎉 Nový odznak odemčen: ${badge.name}! +${badge.xpReward} XP`);
        }
      });
    }

    // Check for quiz champion badge
    if (newTotalQuests >= 10) {
      handleUnlockBadge('quiz-champion');
    }
  };

  const handleCompleteTopic = async (topicId: string) => {
    console.log('handleCompleteTopic voláno s topicId:', topicId);
    
    if (!appState.currentUser || appState.isTeacher || !currentStudent) {
      console.log('Chyba: chybí currentUser, isTeacher nebo currentStudent');
      return;
    }

    const topic = appState.topics.find(t => t.id === topicId);
    if (!topic) {
      console.log('Chyba: téma nenalezeno');
      return;
    }

    console.log('Téma nalezeno:', topic.name);
    console.log('Aktuální XP studenta:', currentStudent.xp);
    console.log('Aktuální dokončená témata:', currentStudent.topicsCompleted);

    // Zajistím, že topicsCompleted existuje
    const currentTopicsCompleted = currentStudent.topicsCompleted || [];

    const newXp = currentStudent.xp + topic.xpReward;
    const newLevel = calculateLevel(newXp);
    const oldLevel = currentStudent.level || 1;

    const updatedStudent = {
      ...currentStudent,
      xp: newXp,
      level: newLevel,
      topicsCompleted: currentTopicsCompleted.includes(topicId)
        ? currentTopicsCompleted
        : [...currentTopicsCompleted, topicId]
    };

    console.log('Nové XP:', updatedStudent.xp);
    console.log('Nový level:', updatedStudent.level);
    console.log('Nová dokončená témata:', updatedStudent.topicsCompleted);

    setCurrentStudent(updatedStudent);
    await firestoreService.updateStudentData(appState.currentUser, {
      xp: updatedStudent.xp,
      level: updatedStudent.level,
      topicsCompleted: updatedStudent.topicsCompleted
    });

    // Po splnění tématu načti aktuálního studenta z databáze (pro jistotu propsání XP i splněných témat)
    const freshStudent = await firestoreService.getStudentData(appState.currentUser);
    if (freshStudent) {
      console.log('Načtený fresh student:', freshStudent);
      setCurrentStudent(freshStudent);
    }

    // Aktualizuj lokální stav témat
    const updatedTopics = appState.topics.map(t => 
      t.id === topicId ? { ...t, completed: true } : t
    );
    setAppState(prev => ({ ...prev, topics: updatedTopics }));

    // Zobraz notifikaci o splnění tématu
    let notification = `🎉 Téma "${topic.name}" splněno! +${topic.xpReward} XP`;
    
    // Pokud se zvýšil level, přidej notifikaci
    if (newLevel > oldLevel) {
      notification += `\n🎊 Gratulujeme! Dosáhl jsi levelu ${newLevel}!`;
    }
    
    alert(notification);

    // Kontrola automatických odznaků
    const unlockedBadges = await firestoreService.checkAndUnlockAutomaticBadges(appState.currentUser);
    if (unlockedBadges.length > 0) {
      const updatedBadges = appState.badges.map(badge => 
        unlockedBadges.includes(badge.id) ? { ...badge, unlocked: true } : badge
      );
      setAppState(prev => ({ ...prev, badges: updatedBadges }));
      
      // Zvukový efekt pro automatické odznaky
      soundEffects.playBadgeUnlock();
      
      // Zobraz notifikaci
      unlockedBadges.forEach(badgeId => {
        const badge = appState.badges.find(b => b.id === badgeId);
        if (badge) {
          alert(`🎉 Nový odznak odemčen: ${badge.name}! +${badge.xpReward} XP`);
        }
      });
    }
  };

  const handleSnakeScoreUpdate = async (score: number) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;

    const xpGain = Math.floor(score / 5); // XP za každých 5 bodů
    const newXp = currentStudent.xp + xpGain;
    const newLevel = calculateLevel(newXp);
    const oldLevel = currentStudent.level || 1;

    const updatedStudent = {
      ...currentStudent,
      snakeScore: Math.max(currentStudent.snakeScore, score),
      xp: newXp,
      level: newLevel
    };

    setCurrentStudent(updatedStudent);
    await firestoreService.updateStudentData(appState.currentUser, {
      snakeScore: updatedStudent.snakeScore,
      xp: updatedStudent.xp,
      level: updatedStudent.level
    });

    // Pokud se zvýšil level, zobraz notifikaci
    if (newLevel > oldLevel) {
      alert(`🎊 Gratulujeme! Dosáhl jsi levelu ${newLevel}!`);
    }

    // Kontrola automatických odznaků
    const unlockedBadges = await firestoreService.checkAndUnlockAutomaticBadges(appState.currentUser);
    if (unlockedBadges.length > 0) {
      const updatedBadges = appState.badges.map(badge => 
        unlockedBadges.includes(badge.id) ? { ...badge, unlocked: true } : badge
      );
      setAppState(prev => ({ ...prev, badges: updatedBadges }));
      
      // Zvukový efekt pro automatické odznaky
      soundEffects.playBadgeUnlock();
      
      // Zobraz notifikaci
      unlockedBadges.forEach(badgeId => {
        const badge = appState.badges.find(b => b.id === badgeId);
        if (badge) {
          alert(`🎉 Nový odznak odemčen: ${badge.name}! +${badge.xpReward} XP`);
        }
      });
    }
  };

  const handleSpaceScoreUpdate = async (score: number) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;

    const xpGain = Math.floor(score / 3); // XP za každé 3 asteroidy
    const newXp = currentStudent.xp + xpGain;
    const newLevel = calculateLevel(newXp);
    const oldLevel = currentStudent.level || 1;

    const updatedStudent = {
      ...currentStudent,
      spaceScore: Math.max(currentStudent.spaceScore, score),
      xp: newXp,
      level: newLevel
    };

    setCurrentStudent(updatedStudent);
    await firestoreService.updateStudentData(appState.currentUser, {
      spaceScore: updatedStudent.spaceScore,
      xp: updatedStudent.xp,
      level: updatedStudent.level
    });

    // Pokud se zvýšil level, zobraz notifikaci
    if (newLevel > oldLevel) {
      alert(`🎊 Gratulujeme! Dosáhl jsi levelu ${newLevel}!`);
    }

    // Kontrola automatických odznaků
    const unlockedBadges = await firestoreService.checkAndUnlockAutomaticBadges(appState.currentUser);
    if (unlockedBadges.length > 0) {
      const updatedBadges = appState.badges.map(badge => 
        unlockedBadges.includes(badge.id) ? { ...badge, unlocked: true } : badge
      );
      setAppState(prev => ({ ...prev, badges: updatedBadges }));
      
      // Zvukový efekt pro automatické odznaky
      soundEffects.playBadgeUnlock();
      
      // Zobraz notifikaci
      unlockedBadges.forEach(badgeId => {
        const badge = appState.badges.find(b => b.id === badgeId);
        if (badge) {
          alert(`🎉 Nový odznak odemčen: ${badge.name}! +${badge.xpReward} XP`);
        }
      });
    }
  };

  const handleUpdateStudent = async (studentId: string, updates: Partial<Student>) => {
    await firestoreService.updateStudentData(studentId, updates);
    
    // Refresh teacher data
    if (appState.isTeacher) {
      await loadTeacherData();
    }
  };

  const handleUpdateStudentName = async (newName: string) => {
    if (!appState.currentUser || appState.isTeacher || !currentStudent) return;
    await firestoreService.updateStudentData(appState.currentUser, { name: newName });
    setCurrentStudent({ ...currentStudent, name: newName });
    setAppState(prev => ({ ...prev, currentUser: newName }));
  };

  const handleExportData = () => {
    const data = {
      students: appState.students,
      badges: appState.badges,
      topics: appState.topics,
      dailyQuests: appState.dailyQuests,
      snakeLeaderboard: appState.snakeLeaderboard,
      spaceLeaderboard: appState.spaceLeaderboard,
      teacherSettings: appState.teacherSettings,
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gamifikace-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDeleteStudent = async (studentId: string) => {
    await firestoreService.deleteStudent(studentId);
    if (appState.isTeacher) {
      await loadTeacherData();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan">
        <div className="arcade-card p-8 text-center">
          <div className="text-2xl font-arcade text-arcade-purple mb-4">
            🎮 Načítání...
          </div>
          <div className="w-8 h-8 border-4 border-arcade-neon-green border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!appState.currentUser) {
    return <Login onLogin={() => {}} />;
  }

  return (
    <div>
      {/* Header with logout and avatar */}
      <div className="bg-arcade-dark p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-arcade text-white">
            🎮 Gamifikace Informatika
          </h1>
          <div className="flex items-center gap-4">
            {!appState.isTeacher && currentStudent && (
              <AvatarBuilder
                avatar={currentStudent.avatar}
                onAvatarChange={handleAvatarChange}
                onComplete={() => setShowAvatarBuilder(false)}
                isCompact={true}
                onOpenEditor={() => setShowAvatarBuilder(true)}
              />
            )}
            <span className="text-sm font-arcade text-arcade-light-gray">
              {appState.isTeacher ? '👨‍🏫 Učitel' : '👨‍🎓 Student'}: {appState.isTeacher ? 'teacher@itgamifikace.cz' : currentStudent?.name || 'Student'}
            </span>
            <button onClick={handleLogout} className="arcade-button text-xs">
              🚪 Odhlásit
            </button>
          </div>
        </div>
      </div>

      {showAvatarBuilder && currentStudent && (
        <AvatarBuilder
          avatar={currentStudent.avatar}
          onAvatarChange={handleAvatarChange}
          onComplete={() => setShowAvatarBuilder(false)}
        />
      )}

      {appState.isTeacher ? (
        <TeacherDashboard
          students={appState.students}
          badges={appState.badges}
          onUpdateStudent={handleUpdateStudent}
          onExportData={handleExportData}
          onDeleteStudent={handleDeleteStudent}
        />
      ) : currentStudent ? (
        <StudentDashboard
          currentUser={currentStudent.name}
          badges={appState.badges}
          topics={appState.topics}
          students={[currentStudent]}
          dailyQuests={appState.dailyQuests}
          snakeLeaderboard={appState.snakeLeaderboard}
          spaceLeaderboard={appState.spaceLeaderboard}
          onUnlockBadge={handleUnlockBadge}
          onCompleteTopic={handleCompleteTopic}
          onSnakeScoreUpdate={handleSnakeScoreUpdate}
          onSpaceScoreUpdate={handleSpaceScoreUpdate}
          onDailyQuestComplete={handleDailyQuestComplete}
          onUpdateName={handleUpdateStudentName}
        />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan">
          <div className="arcade-card p-8 text-center">
            <div className="text-2xl font-arcade text-arcade-purple">
              ⚠️ Chyba při načítání dat
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App; 