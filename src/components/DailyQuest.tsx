import React, { useState, useEffect } from 'react';
import { DailyQuest as DailyQuestType } from '../types';

interface DailyQuestProps {
  quest: DailyQuestType;
  onComplete: (questId: string, correct: boolean) => void;
  isCompleted: boolean;
}

const DailyQuest: React.FC<DailyQuestProps> = ({ quest, onComplete, isCompleted }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeUntilNextQuest, setTimeUntilNextQuest] = useState('');

  // Výpočet času do další denní výzvy
  useEffect(() => {
    const updateTimeUntilNextQuest = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeUntilNextQuest(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimeUntilNextQuest();
    const interval = setInterval(updateTimeUntilNextQuest, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isCompleted || showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === quest.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onComplete(quest.id, correct);
      setShowResult(false);
      setSelectedAnswer(null);
    }, 2000);
  };

  const getAnswerClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index 
        ? 'border-arcade-neon-blue bg-arcade-cyan bg-opacity-20' 
        : 'border-arcade-gray hover:border-arcade-neon-green';
    }
    
    if (index === quest.correctAnswer) {
      return 'border-arcade-green bg-arcade-green bg-opacity-20 animate-pulse-neon';
    }
    
    if (index === selectedAnswer && !isCorrect) {
      return 'border-arcade-neon-pink bg-arcade-neon-pink bg-opacity-20 animate-shake';
    }
    
    return 'border-arcade-gray opacity-50';
  };

  if (isCompleted) {
    return (
      <div className="arcade-card p-6 border-arcade-green">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3">✅</div>
          <div>
            <h3 className="text-lg font-arcade text-arcade-green">
              Denní výzva splněna!
            </h3>
            <p className="text-sm font-arcade text-arcade-gray">
              +{quest.xpReward} XP získáno
            </p>
          </div>
        </div>
        <div className="text-sm font-arcade text-arcade-dark mb-3">
          {quest.question}
        </div>
        <div className="text-xs font-arcade text-arcade-gray">
          ⏰ Další výzva za: {timeUntilNextQuest}
        </div>
      </div>
    );
  }

  return (
    <div className="arcade-card p-6">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{quest.icon}</div>
        <div>
          <h3 className="text-lg font-arcade text-arcade-purple">
            🧠 Denní výzva
          </h3>
          <p className="text-xs font-arcade text-arcade-gray">
            Kategorie: {quest.category}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-arcade text-arcade-dark mb-4">
          {quest.question}
        </p>
        
        <div className="space-y-3">
          {quest.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-3 text-left font-arcade text-sm border-2 rounded transition-all ${getAnswerClass(index)}`}
            >
              <span className="mr-2 text-arcade-yellow">
                {String.fromCharCode(65 + index)})
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mb-4 p-3 rounded text-center">
          {isCorrect ? (
            <div className="text-arcade-green font-arcade">
              🎉 Správně! +{quest.xpReward} XP
            </div>
          ) : (
            <div className="text-arcade-neon-pink font-arcade">
              ❌ Špatně! Správná odpověď: {String.fromCharCode(65 + quest.correctAnswer)})
            </div>
          )}
        </div>
      )}

      {selectedAnswer !== null && !showResult && (
        <button
          onClick={handleSubmit}
          className="w-full arcade-button text-lg py-3"
        >
          🎯 Odeslat odpověď
        </button>
      )}

      <div className="mt-4 text-center">
        <p className="text-xs font-arcade text-arcade-gray">
          Odpověď správně = +{quest.xpReward} XP
        </p>
        <p className="text-xs font-arcade text-arcade-gray mt-1">
          ⏰ Další výzva za: {timeUntilNextQuest}
        </p>
      </div>
    </div>
  );
};

export default DailyQuest; 