import React, { useState } from 'react';
import { Badge, Topic, Student, DailyQuest } from '../types';
import BadgeGrid from './BadgeGrid';
import TopicGrid from './TopicGrid';
import BonusTasks from './BonusTasks';
import Leaderboard from './Leaderboard';
import SnakeGame from './SnakeGame';
import SpaceShooter from './SpaceShooter';
import TypingGame from './TypingGame';
import DailyQuestComponent from './DailyQuest';

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

  const currentStudent = students.find(s => s.name === currentUser);
  const unlockedBadges = badges.filter(b => currentStudent?.badges.includes(b.id));
  const totalXP = currentStudent?.xp || 0;
  const totalBadges = currentStudent?.badges.length || 0;
  const snakeScore = currentStudent?.snakeScore || 0;
  const spaceScore = currentStudent?.spaceScore || 0;
  const totalQuestsCompleted = currentStudent?.totalQuestsCompleted || 0;

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
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="arcade-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {renderAvatar(currentStudent?.avatar)}
                <div className="ml-4">
                  <h1 className="text-2xl font-arcade text-arcade-purple flex items-center gap-2">
                    Ahoj, {currentUser}! 👋
                    <button
                      className="arcade-button text-xs ml-2"
                      onClick={() => setShowNameDialog(true)}
                      title="Změnit jméno"
                    >
                      ✏️
                    </button>
                  </h1>
                  <p className="text-sm font-arcade text-arcade-gray">
                    Úrovní: {Math.floor(totalXP / 100) + 1} | Výzev: {totalQuestsCompleted}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-arcade text-arcade-dark">
                  XP: {totalXP} | Odznaky: {unlockedBadges.length}/{totalBadges}
                </div>
                <div className="progress-bar mt-2">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(totalXP % 100) / 100 * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Code Input */}
            <form onSubmit={handleCodeSubmit} className="flex gap-2">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Zadej kód pro odznak..."
                className="flex-1 px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"
              />
              <button type="submit" className="arcade-button">
                🔓 Odemknout
              </button>
            </form>
          </div>

          {/* Daily Quest */}
          {todaysQuest && (
            <div className="arcade-card p-6">
              <DailyQuestComponent
                quest={todaysQuest}
                onComplete={onDailyQuestComplete}
                isCompleted={hasCompletedToday}
              />
            </div>
          )}

          {/* Badges Section */}
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
              🏅 Tvůj profil – získané odznaky
            </h2>
            <BadgeGrid 
              badges={badges}
              unlockedBadges={currentStudent?.badges || []}
            />
          </div>

          {/* Topics Section */}
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
              🧩 Témata k procvičení
            </h2>
            <TopicGrid 
              topics={topics}
              onCompleteTopic={onCompleteTopic}
            />
          </div>

          {/* Bonus Tasks */}
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
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
          <div className="arcade-card p-6">
            <h2 className="text-xl font-arcade text-arcade-purple mb-4">
              🏆 Žebříček
            </h2>
            <Leaderboard 
              students={students}
              currentUser={currentUser}
            />
          </div>

          {showNameDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="arcade-card p-6">
                <h2 className="text-lg font-arcade text-arcade-purple mb-2">Změnit jméno</h2>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm mb-4 w-full"
                  placeholder="Nové jméno"
                />
                <div className="flex gap-2 justify-end">
                  <button className="arcade-button" onClick={() => setShowNameDialog(false)}>Zrušit</button>
                  <button
                    className="arcade-button"
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