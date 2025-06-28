import React from 'react';
import { Badge } from '../types';

interface BadgeGridProps {
  badges: Badge[];
  unlockedBadges: string[];
}

const BadgeGrid: React.FC<BadgeGridProps> = ({ badges, unlockedBadges }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge) => {
        const isUnlocked = unlockedBadges.includes(badge.id);
        
        return (
          <div
            key={badge.id}
            className={`arcade-card p-4 text-center transition-all duration-300 ${
              isUnlocked 
                ? 'badge-unlocked border-arcade-neon-green' 
                : 'badge-locked border-arcade-gray'
            }`}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <h3 className="text-sm font-arcade text-arcade-dark mb-1">
              {badge.name}
            </h3>
            <p className="text-xs font-arcade text-arcade-gray mb-2">
              {badge.description}
            </p>
            <div className="text-xs font-arcade">
              {isUnlocked ? (
                <span className="text-arcade-green">✅ Odemčeno</span>
              ) : (
                <span className="text-arcade-gray">🔒 Zamčeno</span>
              )}
            </div>
            {isUnlocked && (
              <div className="text-xs font-arcade text-arcade-yellow mt-1">
                +{badge.xpReward} XP
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BadgeGrid; 