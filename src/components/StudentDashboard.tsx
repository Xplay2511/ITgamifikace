import React, { useState, useEffect } from 'react';
import { Badge, Topic, Student, DailyQuest } from '../types';
import BadgeGrid from './BadgeGrid';
import TopicGrid from './TopicGrid';
import BonusTasks from './BonusTasks';
import Leaderboard from './Leaderboard';
import SnakeGame from './SnakeGame';
import SpaceShooter from './SpaceShooter';
import TypingGame from './TypingGame';
import DailyQuestComponent from './DailyQuest';
import LevelUpAnimation from './LevelUpAnimation';
import { getXpInCurrentLevel, getXpForNextLevel } from '../utils/initializeFirestore';
import { soundEffects } from '../utils/soundEffects';

interface StudentDashboardProps {
  currentUser: string;
  badges: Badge[];
  topics: Topic[];
  students: Student[];
  dailyQuests: DailyQuest[];
  snakeLeaderboard: { name: string; score: number; date: string }[];
  spaceLeaderboard: { name: string; score: number; date: string }[];
  onUnlockBadge: (badgeId: string) => void;
  onCompleteTopic: (topicId: string) => void;
  onSnakeScoreUpdate: (score: number) => void;
  onSpaceScoreUpdate: (score: number) => void;
  onDailyQuestComplete: (questId: string, correct: boolean) => void;
  onUpdateName?: (newName: string) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentUser,
  badges,
  topics,
  students,
  dailyQuests,
  snakeLeaderboard,
  spaceLeaderboard,
  onUnlockBadge,
  onCompleteTopic,
  onSnakeScoreUpdate,
  onSpaceScoreUpdate,
  onDailyQuestComplete,
  onUpdateName
}) => {
  const [showSnakeGame, setShowSnakeGame] = useState(false);
  const [showSpaceShooter, setShowSpaceShooter] = useState(false);
  const [showTypingGame, setShowTypingGame] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [newName, setNewName] = useState(currentUser);
  
  // Animace a efekty
  const [showLevelUpAnimation, setShowLevelUpAnimation] = useState(false);
  const [newLevel, setNewLevel] = useState(1);
  const [xpGainAnimation, setXpGainAnimation] = useState(false);
  const [progressPulse, setProgressPulse] = useState(false);
  const [previousXp, setPreviousXp] = useState(0);
  const [previousLevel, setPreviousLevel] = useState(1);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const currentStudent = students.find(s => s.name === currentUser);
  const unlockedBadges = badges.filter(b => currentStudent?.badges.includes(b.id));
  const totalXP = currentStudent?.xp || 0;
  const currentLevel = currentStudent?.level || 1;
  const xpInCurrentLevel = getXpInCurrentLevel(totalXP);
  const xpForNextLevel = getXpForNextLevel(currentLevel);
  const progressPercentage = (xpInCurrentLevel / 300) * 100; // 300 XP na level
  const totalBadges = currentStudent?.badges.length || 0;
  const snakeScore = currentStudent?.snakeScore || 0;
  const spaceScore = currentStudent?.spaceScore || 0;
  const totalQuestsCompleted = currentStudent?.totalQuestsCompleted || 0;

  // Sledování změn XP a levelu pro animace
  useEffect(() => {
    if (currentStudent) {
      // XP animace
      if (totalXP > previousXp) {
        setXpGainAnimation(true);
        setProgressPulse(true);
        soundEffects.playXpGain();
        
        setTimeout(() => {
          setXpGainAnimation(false);
          setProgressPulse(false);
        }, 600);
      }

      // Level-up animace
      if (currentLevel > previousLevel) {
        setNewLevel(currentLevel);
        setShowLevelUpAnimation(true);
        soundEffects.playLevelUp();
      }

      setPreviousXp(totalXP);
      setPreviousLevel(currentLevel);
    }
  }, [totalXP, currentLevel, currentStudent, previousXp, previousLevel]);

  // Sledování online/offline stavu
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const badge = badges.find(b => b.code === codeInput);
    if (badge) {
      onUnlockBadge(badge.id);
      setCodeInput('');
      alert(`🎉 Odznak "${badge.name}" odemčen!`);
    } else {
      alert('❌ Nesprávný kód!');
    }
  };

  // Get today's quest
  const today = new Date().toISOString().split('T')[0];
  const todaysQuest = dailyQuests.find(q => q.date === today);
  const hasCompletedToday = todaysQuest && currentStudent?.dailyQuestsCompleted.includes(todaysQuest.id) || false;

  // Render avatar
  const renderAvatar = (avatar: any) => {
    if (!avatar) return null;
    
    const skinColors = {
      light: '#FFDBB4',
      medium: '#C68642',
      dark: '#8D5524',
      tan: '#D2B48C'
    };

    const hairColors = {
      brown: '#8B4513',
      blonde: '#F4D03F',
      black: '#2C3E50',
      red: '#E74C3C',
      gray: '#95A5A6',
      white: '#ECF0F1',
      purple: '#9B59B6'
    };

    const shirtColors = {
      blue: '#3498DB',
      red: '#E74C3C',
      green: '#2ECC71',
      purple: '#9B59B6',
      pink: '#E91E63',
      yellow: '#F1C40F',
      orange: '#E67E22',
      black: '#2C3E50',
      white: '#ECF0F1'
    };

    return (
      <div className="w-16 h-16 bg-arcade-dark rounded-lg p-2">
        <div className="w-full h-full relative">
          {/* Hlava */}
          <div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full"
            style={{ backgroundColor: skinColors[avatar.skinColor as keyof typeof skinColors] }}
          />
          
          {/* Vlasy */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-t-full"
            style={{ backgroundColor: hairColors[avatar.hair as keyof typeof hairColors] }}
          />
          
          {/* Oči */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: avatar.eyes === 'brown' ? '#8B4513' : 
                      avatar.eyes === 'blue' ? '#3498DB' : 
                      avatar.eyes === 'green' ? '#27AE60' : 
                      avatar.eyes === 'hazel' ? '#D68910' : '#95A5A6' }}
            />
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: avatar.eyes === 'brown' ? '#8B4513' : 
                      avatar.eyes === 'blue' ? '#3498DB' : 
                      avatar.eyes === 'green' ? '#27AE60' : 
                      avatar.eyes === 'hazel' ? '#D68910' : '#95A5A6' }}
            />
          </div>

          {/* Ústa */}
          {avatar.mouth && (
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-black rounded-full"></div>
          )}
          
          {/* Tělo */}
          <div 
            className="absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-8 rounded"
            style={{ backgroundColor: shirtColors[avatar.shirtColor as keyof typeof shirtColors] }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-arcade-purple to-arcade-cyan p-4">
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-arcade-neon-orange text-arcade-dark text-center py-2 px-4 z-50 font-arcade text-sm">
          📡 Offline režim - aplikace funguje offline
        </div>
      )}
      
      {showSnakeGame ? (
        <SnakeGame 
          onClose={() => setShowSnakeGame(false)}
          onScoreUpdate={onSnakeScoreUpdate}
          currentScore={snakeScore}
        />
      ) : showSpaceShooter ? (
        <SpaceShooter
          onClose={() => setShowSpaceShooter(false)}
          onScoreUpdate={onSpaceScoreUpdate}
          currentScore={spaceScore}
        />
      ) : showTypingGame ? (
        <TypingGame
          onClose={() => setShowTypingGame(false)}
          onComplete={(score, accuracy) => {
            // Zde by se měla přidat logika pro uložení skóre
            console.log(`Typing game completed: ${score} points, ${accuracy}% accuracy`);
            setShowTypingGame(false);
          }}
        />
      ) : (
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-6 px-2 md:px-0">
          {/* Header */}
          <div className="arcade-card p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
              <div className="flex items-center">
                {renderAvatar(currentStudent?.avatar)}
                <div className="ml-3 md:ml-4">
                  <h1 className="text-lg md:text-2xl font-arcade text-arcade-purple flex items-center gap-2 flex-wrap">
                    Ahoj, {currentUser}! 👋
                    <button
                      className="arcade-button text-xs ml-2 p-2 md:p-1"
                      onClick={() => setShowNameDialog(true)}
                      title="Změnit jméno"
                    >
                      ✏️
                    </button>
                  </h1>
                  <p className="text-xs md:text-sm font-arcade text-arcade-gray">
                    Úrovní: {currentLevel} | Výzev: {totalQuestsCompleted}
                  </p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className={`text-xs md:text-sm font-arcade text-arcade-dark ${xpGainAnimation ? 'xp-gain-text' : ''}`}>
                  Level {currentLevel} | XP: {totalXP} | Odznaky: {unlockedBadges.length}/{totalBadges}
                </div>
                <div className="text-xs font-arcade text-arcade-gray">
                  {xpInCurrentLevel}/300 XP do dalšího levelu
                </div>
                <div className={`progress-bar mt-2 ${progressPulse ? 'xp-pulse' : ''}`}>
                  <div 
                    className={`progress-fill ${xpGainAnimation ? 'xp-gain' : ''} ${currentLevel > previousLevel ? 'level-up' : ''}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Code Input */}
            <form onSubmit={handleCodeSubmit} className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Zadej kód pro odznak..."
                className="flex-1 px-3 py-3 md:py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"
              />
              <button type="submit" className="arcade-button py-3 md:py-2 text-base md:text-sm">
                🔓 Odemknout
              </button>
            </form>
          </div>

          {/* Daily Quest */}
          {todaysQuest && (
            <div className="arcade-card p-4 md:p-6">
              <DailyQuestComponent
                quest={todaysQuest}
                onComplete={onDailyQuestComplete}
                isCompleted={hasCompletedToday}
              />
            </div>
          )}

          {/* Badges Section */}
          <div className="arcade-card p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-arcade text-arcade-purple mb-4">
              🏅 Tvůj profil – získané odznaky
            </h2>
            <BadgeGrid 
              badges={badges}
              unlockedBadges={currentStudent?.badges || []}
            />
          </div>

          {/* Topics Section */}
          <div className="arcade-card p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-arcade text-arcade-purple mb-4">
              🧩 Témata k procvičení
            </h2>
            <TopicGrid 
              topics={topics}
              onCompleteTopic={onCompleteTopic}
              completedTopics={currentStudent?.topicsCompleted || []}
            />
          </div>

          {/* Bonus Tasks */}
          <div className="arcade-card p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-arcade text-arcade-purple mb-4">
              🕹️ Bonusové úkoly
            </h2>
            <BonusTasks 
              onPlaySnake={() => setShowSnakeGame(true)}
              onPlaySpace={() => setShowSpaceShooter(true)}
              onPlayTyping={() => setShowTypingGame(true)}
              snakeScore={snakeScore}
              spaceScore={spaceScore}
              snakeLeaderboard={snakeLeaderboard}
              spaceLeaderboard={spaceLeaderboard}
            />
          </div>

          {/* Leaderboard */}
          <div className="arcade-card p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-arcade text-arcade-purple mb-4">
              🏆 Žebříček
            </h2>
            <Leaderboard 
              students={students}
              currentUser={currentUser}
            />
          </div>

          {/* Level Up Animation */}
          <LevelUpAnimation
            isVisible={showLevelUpAnimation}
            newLevel={newLevel}
            onAnimationComplete={() => setShowLevelUpAnimation(false)}
          />

          {showNameDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
              <div className="arcade-card p-4 md:p-6 w-full max-w-md">
                <h2 className="text-base md:text-lg font-arcade text-arcade-purple mb-2">Změnit jméno</h2>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="px-3 py-3 md:py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm mb-4 w-full"
                  placeholder="Nové jméno"
                />
                <div className="flex flex-col md:flex-row gap-2 justify-end">
                  <button className="arcade-button py-3 md:py-2 text-base md:text-sm" onClick={() => setShowNameDialog(false)}>Zrušit</button>
                  <button
                    className="arcade-button py-3 md:py-2 text-base md:text-sm"
                    onClick={() => {
                      if (onUpdateName && newName.trim()) {
                        onUpdateName(newName.trim());
                        setShowNameDialog(false);
                      }
                    }}
                  >Uložit</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard; 