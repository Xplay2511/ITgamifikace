import React from 'react';

interface BonusTasksProps {
  onPlaySnake: () => void;
  onPlaySpace: () => void;
  snakeScore: number;
  spaceScore: number;
  snakeLeaderboard: { name: string; score: number; date: string }[];
  spaceLeaderboard: { name: string; score: number; date: string }[];
}

const BonusTasks: React.FC<BonusTasksProps> = ({ 
  onPlaySnake, 
  onPlaySpace,
  snakeScore, 
  spaceScore,
  snakeLeaderboard,
  spaceLeaderboard
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Snake Game */}
      <div className="arcade-card p-4">
        <div className="flex items-center mb-3">
          <div className="text-3xl mr-3">🐍</div>
          <div>
            <h3 className="text-sm font-arcade text-arcade-dark">
              Hra Snake
            </h3>
            <p className="text-xs font-arcade text-arcade-gray">
              Dosáhni 20+ bodů pro odznak "Hadí mistr"
            </p>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="text-xs font-arcade text-arcade-yellow">
            Tvůj nejlepší skóre: {snakeScore}
          </div>
          {snakeScore >= 20 && (
            <div className="text-xs font-arcade text-arcade-green mt-1">
              🎉 Odznak "Hadí mistr" odemčen!
            </div>
          )}
        </div>
        
        <button
          onClick={onPlaySnake}
          className="w-full arcade-button text-xs py-2"
        >
          🎮 Spustit hru
        </button>
      </div>

      {/* Space Shooter */}
      <div className="arcade-card p-4">
        <div className="flex items-center mb-3">
          <div className="text-3xl mr-3">🚀</div>
          <div>
            <h3 className="text-sm font-arcade text-arcade-dark">
              Space Shooter
            </h3>
            <p className="text-xs font-arcade text-arcade-gray">
              Znič 10+ asteroidů pro odznak "Vesmírný obránce"
            </p>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="text-xs font-arcade text-arcade-yellow">
            Tvůj nejlepší skóre: {spaceScore}
          </div>
          {spaceScore >= 100 && (
            <div className="text-xs font-arcade text-arcade-green mt-1">
              🎉 Odznak "Vesmírný obránce" odemčen!
            </div>
          )}
        </div>
        
        <button
          onClick={onPlaySpace}
          className="w-full arcade-button text-xs py-2"
        >
          🚀 Spustit hru
        </button>
      </div>

      {/* Special Task */}
      <div className="arcade-card p-4">
        <div className="flex items-center mb-3">
          <div className="text-3xl mr-3">⭐</div>
          <div>
            <h3 className="text-sm font-arcade text-arcade-dark">
              Speciální úkol
            </h3>
            <p className="text-xs font-arcade text-arcade-gray">
              Zadej kód: snakepro20
            </p>
          </div>
        </div>
        
        <div className="text-xs font-arcade text-arcade-gray mb-3">
          Pro odemčení odznaku "Hadí mistr"
        </div>
        
        <div className="text-xs font-arcade text-arcade-yellow">
          +150 XP za splnění
        </div>
      </div>

      {/* Quiz Champion */}
      <div className="arcade-card p-4">
        <div className="flex items-center mb-3">
          <div className="text-3xl mr-3">🧠</div>
          <div>
            <h3 className="text-sm font-arcade text-arcade-dark">
              Kvízový šampion
            </h3>
            <p className="text-xs font-arcade text-arcade-gray">
              Splň 10 denních výzev
            </p>
          </div>
        </div>
        
        <div className="text-xs font-arcade text-arcade-gray mb-3">
          Pro odznak "Kvízový šampion"
        </div>
        
        <div className="text-xs font-arcade text-arcade-yellow">
          +80 XP za splnění
        </div>
      </div>

      {/* Snake Leaderboard */}
      <div className="arcade-card p-4">
        <h4 className="text-sm font-arcade text-arcade-purple mb-3">
          🏆 Top 5 ve hře Snake
        </h4>
        <div className="space-y-2">
          {snakeLeaderboard
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-arcade-light-gray rounded"
              >
                <div className="flex items-center">
                  <span className="text-xs font-arcade text-arcade-yellow mr-2">
                    #{index + 1}
                  </span>
                  <span className="text-xs font-arcade text-arcade-dark">
                    {entry.name}
                  </span>
                </div>
                <span className="text-xs font-arcade text-arcade-green">
                  {entry.score} bodů
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Space Leaderboard */}
      <div className="arcade-card p-4">
        <h4 className="text-sm font-arcade text-arcade-purple mb-3">
          🏆 Top 5 ve Space Shooter
        </h4>
        <div className="space-y-2">
          {spaceLeaderboard
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-arcade-light-gray rounded"
              >
                <div className="flex items-center">
                  <span className="text-xs font-arcade text-arcade-yellow mr-2">
                    #{index + 1}
                  </span>
                  <span className="text-xs font-arcade text-arcade-dark">
                    {entry.name}
                  </span>
                </div>
                <span className="text-xs font-arcade text-arcade-cyan">
                  {entry.score} bodů
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BonusTasks; 