import React from 'react';
import { Topic } from '../types';

interface TopicGridProps {
  topics: Topic[];
  onCompleteTopic: (topicId: string) => void;
}

const TopicGrid: React.FC<TopicGridProps> = ({ topics, onCompleteTopic }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className={`arcade-card p-4 transition-all duration-300 ${
            topic.completed 
              ? 'border-arcade-neon-green animate-pulse-neon' 
              : 'border-arcade-gray hover:border-arcade-neon-blue'
          }`}
        >
          <div className="flex items-center mb-3">
            <div className="text-3xl mr-3">{topic.icon}</div>
            <div>
              <h3 className="text-sm font-arcade text-arcade-dark">
                {topic.name}
              </h3>
              <p className="text-xs font-arcade text-arcade-gray">
                {topic.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-xs font-arcade text-arcade-yellow">
              +{topic.xpReward} XP
            </div>
            <div className="text-xs font-arcade">
              {topic.completed ? (
                <span className="text-arcade-green">✅ Splněno</span>
              ) : (
                <span className="text-arcade-gray">🔒 Zamčeno</span>
              )}
            </div>
          </div>
          
          {!topic.completed && (
            <button
              onClick={() => onCompleteTopic(topic.id)}
              className="w-full mt-3 arcade-button text-xs py-2"
            >
              🎯 Splnit úkol
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicGrid; 