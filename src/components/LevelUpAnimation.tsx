import React, { useEffect, useState } from 'react';

interface LevelUpAnimationProps {
  isVisible: boolean;
  newLevel: number;
  onAnimationComplete: () => void;
}

const LevelUpAnimation: React.FC<LevelUpAnimationProps> = ({ 
  isVisible, 
  newLevel, 
  onAnimationComplete 
}) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, color: string}>>([]);

  useEffect(() => {
    if (isVisible) {
      // Vytvoření konfetových částic
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        vx: (Math.random() - 0.5) * 10,
        vy: -Math.random() * 15 - 5,
        color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'][Math.floor(Math.random() * 7)]
      }));
      setParticles(newParticles);

      // Zastavení animace po 3 sekundách
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationComplete]);

  useEffect(() => {
    if (!isVisible || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vy: particle.vy + 0.5 // gravitace
      })));
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, particles]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Konfety */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            transform: `rotate(${particle.id * 7}deg)`
          }}
        />
      ))}
      
      {/* Level-up banner */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-r from-arcade-purple to-arcade-cyan p-8 rounded-lg shadow-2xl border-4 border-arcade-neon-green animate-bounce">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-pulse">🎊</div>
            <h2 className="text-4xl font-arcade text-white mb-2 animate-pulse">
              LEVEL UP!
            </h2>
            <p className="text-2xl font-arcade text-arcade-neon-green">
              Dosáhl jsi levelu {newLevel}!
            </p>
            <div className="text-lg font-arcade text-arcade-neon-blue mt-2">
              🚀 Pokračuj v dobývání XP!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelUpAnimation; 