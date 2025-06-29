import React, { useState } from 'react';
import { Topic } from '../types';

interface TopicGridProps {
  topics: Topic[];
  onCompleteTopic: (topicId: string) => void;
  completedTopics?: string[]; // Nový prop pro dokončená témata studenta
}

const TopicGrid: React.FC<TopicGridProps> = ({ topics, onCompleteTopic, completedTopics = [] }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Funkce pro kontrolu, zda je téma dokončené
  const isTopicCompleted = (topicId: string) => {
    return completedTopics.includes(topicId);
  };

  const handleTopicClick = (topic: Topic) => {
    console.log('Kliknutí na téma:', topic.name, 'ID:', topic.id);
    console.log('Dokončená témata:', completedTopics);
    console.log('Je téma dokončené?', isTopicCompleted(topic.id));
    
    if (isTopicCompleted(topic.id)) {
      console.log('Téma je již dokončené, návrat');
      return;
    }
    
    if (topic.externalLink) {
      console.log('Otevírám modal pro téma s externím odkazem');
      setSelectedTopic(topic);
      setShowModal(true);
    } else {
      console.log('Splňuji jednoduché téma bez externího odkazu');
      onCompleteTopic(topic.id);
    }
  };

  const handleExternalLinkClick = () => {
    if (selectedTopic?.externalLink) {
      window.open(selectedTopic.externalLink, '_blank');
    }
  };

  const handleAnswerSubmit = () => {
    if (!selectedTopic?.answer) return;
    
    console.log('Odpověď odeslána:', userAnswer);
    console.log('Správná odpověď:', selectedTopic.answer);
    
    const correct = userAnswer.toLowerCase().trim() === selectedTopic.answer.toLowerCase().trim();
    console.log('Je odpověď správná?', correct);
    
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      console.log('Správná odpověď - volám onCompleteTopic');
      setTimeout(() => {
        onCompleteTopic(selectedTopic.id);
        setShowModal(false);
        setShowResult(false);
        setUserAnswer('');
        setSelectedTopic(null);
      }, 1500);
    } else {
      console.log('Špatná odpověď - modal zůstává otevřený');
      setTimeout(() => {
        setShowResult(false);
      }, 1500);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`arcade-card p-4 transition-all duration-300 cursor-pointer ${
              isTopicCompleted(topic.id)
                ? 'border-arcade-neon-green animate-pulse-neon' 
                : 'border-arcade-gray hover:border-arcade-neon-blue hover:scale-105'
            }`}
            onClick={() => handleTopicClick(topic)}
          >
            <div className="flex items-center mb-3">
              <div className="text-3xl mr-3">{topic.icon}</div>
              <div className="flex-1">
                <h3 className="text-sm font-arcade text-arcade-dark">
                  {topic.name}
                </h3>
                <p className="text-xs font-arcade text-arcade-gray">
                  {topic.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-arcade text-arcade-yellow">
                +{topic.xpReward} XP
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-arcade ${getDifficultyColor(topic.difficulty)}`}>
                  {getDifficultyIcon(topic.difficulty)} {topic.difficulty}
                </span>
                <span className="text-xs font-arcade text-arcade-gray">
                  ⏱️ {topic.estimatedTime}min
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs font-arcade">
                {isTopicCompleted(topic.id) ? (
                  <span className="text-arcade-green">✅ Splněno</span>
                ) : (
                  <span className="text-arcade-gray">🔒 Zamčeno</span>
                )}
              </div>
              {topic.externalLink && !isTopicCompleted(topic.id) && (
                <span className="text-xs font-arcade text-arcade-neon-blue">
                  🌐 Externí odkaz
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal pro externí témata */}
      {showModal && selectedTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="arcade-card p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">{selectedTopic.icon}</div>
              <div>
                <h3 className="text-lg font-arcade text-arcade-purple">
                  {selectedTopic.name}
                </h3>
                <p className="text-sm font-arcade text-arcade-gray">
                  Obtížnost: {getDifficultyIcon(selectedTopic.difficulty)} {selectedTopic.difficulty} | 
                  Čas: ⏱️ {selectedTopic.estimatedTime} min
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-arcade text-arcade-dark mb-4">
                {selectedTopic.externalDescription}
              </p>
              
              <div className="bg-arcade-dark p-4 rounded mb-4">
                <h4 className="text-sm font-arcade text-arcade-yellow mb-2">
                  📚 Úkol:
                </h4>
                <p className="text-sm font-arcade text-arcade-gray mb-3">
                  {selectedTopic.question}
                </p>
                
                <button
                  onClick={handleExternalLinkClick}
                  className="arcade-button text-sm py-2 px-4 mb-4"
                >
                  🌐 Otevřít studijní materiál
                </button>
              </div>

              {!showResult && (
                <div className="mb-4">
                  <label className="block text-sm font-arcade text-arcade-dark mb-2">
                    💭 Tvoje odpověď:
                  </label>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Zadej svou odpověď..."
                    className="w-full px-3 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none bg-arcade-dark text-white"
                    onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
                  />
                </div>
              )}

              {showResult && (
                <div className={`mb-4 p-3 rounded text-center font-arcade ${
                  isCorrect ? 'bg-arcade-green bg-opacity-20 text-arcade-green' : 'bg-arcade-neon-pink bg-opacity-20 text-arcade-neon-pink'
                }`}>
                  {isCorrect ? (
                    <div>🎉 Správně! +{selectedTopic.xpReward} XP</div>
                  ) : (
                    <div>❌ Špatně! Zkus to znovu</div>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-3">
              {!showResult && (
                <button
                  onClick={handleAnswerSubmit}
                  disabled={!userAnswer.trim()}
                  className="flex-1 arcade-button text-sm py-2 disabled:opacity-50"
                >
                  🎯 Odeslat odpověď
                </button>
              )}
              <button
                onClick={() => {
                  setShowModal(false);
                  setShowResult(false);
                  setUserAnswer('');
                  setSelectedTopic(null);
                }}
                className="flex-1 arcade-button text-sm py-2 bg-arcade-gray"
              >
                ❌ Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopicGrid; 