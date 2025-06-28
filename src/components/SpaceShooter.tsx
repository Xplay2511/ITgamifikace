import React, { useState, useEffect, useCallback } from 'react';

interface SpaceShooterProps {
  onClose: () => void;
  onScoreUpdate: (score: number) => void;
  currentScore: number;
}

const SpaceShooter: React.FC<SpaceShooterProps> = ({ onClose, onScoreUpdate, currentScore }) => {
  const [gameState, setGameState] = useState({
    player: { x: 400, y: 500 },
    bullets: [] as Array<{ x: number; y: number; id: number }>,
    asteroids: [] as Array<{ x: number; y: number; size: number; id: number }>,
    score: 0,
    gameOver: false,
    lives: 3,
    gameStarted: false,
    gameTime: 0,
    difficulty: 1
  });

  const [bulletId, setBulletId] = useState(0);
  const [asteroidId, setAsteroidId] = useState(0);
  const [keys, setKeys] = useState<Set<string>>(new Set());

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  const PLAYER_SPEED = 5;
  const BULLET_SPEED = 10;
  const BASE_ASTEROID_SPEED = 1.5;
  const BASE_ASTEROID_SPAWN_RATE = 0.01;

  const generateAsteroid = useCallback(() => {
    const newAsteroid = {
      x: Math.random() * (GAME_WIDTH - 40),
      y: -50,
      size: Math.random() * 30 + 20,
      id: asteroidId
    };
    setAsteroidId(prev => prev + 1);
    return newAsteroid;
  }, [asteroidId]);

  const shoot = useCallback(() => {
    if (gameState.gameOver || !gameState.gameStarted) return;
    
    const newBullet = {
      x: gameState.player.x + 20,
      y: gameState.player.y,
      id: bulletId
    };
    setBulletId(prev => prev + 1);
    
    setGameState(prev => ({
      ...prev,
      bullets: [...prev.bullets, newBullet]
    }));
  }, [gameState.player, gameState.gameOver, gameState.gameStarted, bulletId]);

  const resetGame = () => {
    setGameState({
      player: { x: 400, y: 500 },
      bullets: [],
      asteroids: [],
      score: 0,
      gameOver: false,
      lives: 3,
      gameStarted: false,
      gameTime: 0,
      difficulty: 1
    });
    setBulletId(0);
    setAsteroidId(0);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameState.gameStarted) {
        setGameState(prev => ({ ...prev, gameStarted: true }));
        return;
      }

      setKeys(prev => new Set(prev).add(e.code));

      if (e.code === 'Space') {
        e.preventDefault();
        shoot();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(e.code);
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState.gameStarted, shoot]);

  // Game loop
  useEffect(() => {
    if (!gameState.gameStarted || gameState.gameOver) return;

    const gameLoop = setInterval(() => {
      setGameState(prev => {
        // Update game time and difficulty
        const newGameTime = prev.gameTime + 16; // 16ms per frame
        const newDifficulty = Math.min(5, 1 + Math.floor(newGameTime / 30000)); // Increase difficulty every 30 seconds
        
        // Calculate current asteroid speed and spawn rate based on difficulty
        const currentAsteroidSpeed = BASE_ASTEROID_SPEED + (newDifficulty - 1) * 0.5;
        const currentSpawnRate = BASE_ASTEROID_SPAWN_RATE + (newDifficulty - 1) * 0.005;

        // Move player
        let newX = prev.player.x;
        if (keys.has('ArrowLeft')) newX = Math.max(0, newX - PLAYER_SPEED);
        if (keys.has('ArrowRight')) newX = Math.min(GAME_WIDTH - 40, newX + PLAYER_SPEED);

        // Move bullets
        const newBullets = prev.bullets
          .map(bullet => ({ ...bullet, y: bullet.y - BULLET_SPEED }))
          .filter(bullet => bullet.y > -10);

        // Move asteroids
        const newAsteroids = prev.asteroids
          .map(asteroid => ({ ...asteroid, y: asteroid.y + currentAsteroidSpeed }))
          .filter(asteroid => asteroid.y < GAME_HEIGHT + 50);

        // Generate new asteroids based on current difficulty
        let asteroids = newAsteroids;
        if (Math.random() < currentSpawnRate) {
          asteroids = [...asteroids, generateAsteroid()];
        }

        // Check collisions
        let score = prev.score;
        let lives = prev.lives;
        let gameOver = prev.gameOver;

        // Bullet-Asteroid collisions
        const remainingBullets = [...newBullets];
        const remainingAsteroids = [...asteroids];

        for (let i = remainingBullets.length - 1; i >= 0; i--) {
          for (let j = remainingAsteroids.length - 1; j >= 0; j--) {
            const bullet = remainingBullets[i];
            const asteroid = remainingAsteroids[j];
            
            if (bullet && asteroid &&
                bullet.x < asteroid.x + asteroid.size &&
                bullet.x + 4 > asteroid.x &&
                bullet.y < asteroid.y + asteroid.size &&
                bullet.y + 8 > asteroid.y) {
              
              remainingBullets.splice(i, 1);
              remainingAsteroids.splice(j, 1);
              score += 10;
              break;
            }
          }
        }

        // Player-Asteroid collisions
        for (const asteroid of remainingAsteroids) {
          if (newX < asteroid.x + asteroid.size &&
              newX + 40 > asteroid.x &&
              500 < asteroid.y + asteroid.size &&
              500 + 40 > asteroid.y) {
            
            lives--;
            if (lives <= 0) {
              gameOver = true;
              if (score > currentScore) {
                onScoreUpdate(score);
              }
            }
            break;
          }
        }

        // Check for asteroids that passed the player (lose life)
        for (const asteroid of remainingAsteroids) {
          if (asteroid.y > GAME_HEIGHT + 10 && asteroid.y < GAME_HEIGHT + 20) {
            // Asteroid just passed the bottom of the screen
            lives--;
            if (lives <= 0) {
              gameOver = true;
              if (score > currentScore) {
                onScoreUpdate(score);
              }
            }
            // Remove the asteroid that caused life loss
            const asteroidIndex = remainingAsteroids.indexOf(asteroid);
            if (asteroidIndex > -1) {
              remainingAsteroids.splice(asteroidIndex, 1);
            }
            break;
          }
        }

        return {
          ...prev,
          player: { x: newX, y: 500 },
          bullets: remainingBullets,
          asteroids: remainingAsteroids,
          score,
          lives,
          gameOver,
          gameTime: newGameTime,
          difficulty: newDifficulty
        };
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [gameState.gameStarted, gameState.gameOver, keys, generateAsteroid, currentScore, onScoreUpdate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="arcade-card p-6 max-w-4xl w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-arcade text-arcade-purple">🚀 Space Shooter</h2>
          <button onClick={onClose} className="arcade-button text-xs">
            ❌ Zavřít
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-arcade text-arcade-yellow">
            Skóre: {gameState.score}
          </div>
          <div className="text-sm font-arcade text-arcade-green">
            Životy: {'❤️'.repeat(gameState.lives)}
          </div>
          <div className="text-sm font-arcade text-arcade-cyan">
            Nejlepší: {Math.max(gameState.score, currentScore)}
          </div>
          <div className="text-sm font-arcade text-arcade-neon-pink">
            Úroveň: {gameState.difficulty}
          </div>
        </div>

        {!gameState.gameStarted && !gameState.gameOver && (
          <div className="text-center mb-4">
            <p className="text-sm font-arcade text-arcade-dark mb-2">
              Šipky = pohyb, Mezerník = střelba
            </p>
            <p className="text-xs font-arcade text-arcade-gray mb-2">
              ⚠️ Pozor! Asteroidy které proletí kolem vás vám ubere život!
            </p>
            <button
              onClick={() => setGameState(prev => ({ ...prev, gameStarted: true }))}
              className="arcade-button"
            >
              🚀 Začít hru
            </button>
          </div>
        )}

        {gameState.gameOver && (
          <div className="text-center mb-4">
            <p className="text-lg font-arcade text-arcade-neon-pink mb-2">
              Game Over!
            </p>
            <p className="text-sm font-arcade text-arcade-dark mb-2">
              Skóre: {gameState.score} | Dosáhnutá úroveň: {gameState.difficulty}
            </p>
            <button onClick={resetGame} className="arcade-button">
              🔄 Hrát znovu
            </button>
          </div>
        )}

        <div className="flex justify-center">
          <div 
            className="snake-grid relative overflow-hidden"
            style={{
              width: GAME_WIDTH,
              height: GAME_HEIGHT
            }}
          >
            {/* Player */}
            <div
              className="absolute w-10 h-10 bg-arcade-yellow rounded"
              style={{
                left: gameState.player.x,
                top: gameState.player.y
              }}
            />

            {/* Bullets */}
            {gameState.bullets.map(bullet => (
              <div
                key={bullet.id}
                className="absolute w-1 h-2 bg-arcade-neon-green"
                style={{
                  left: bullet.x,
                  top: bullet.y
                }}
              />
            ))}

            {/* Asteroids */}
            {gameState.asteroids.map(asteroid => (
              <div
                key={asteroid.id}
                className="absolute bg-arcade-neon-pink rounded"
                style={{
                  left: asteroid.x,
                  top: asteroid.y,
                  width: asteroid.size,
                  height: asteroid.size
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs font-arcade text-arcade-gray">
            Znič 10+ asteroidů pro odznak "Vesmírný obránce"!
          </p>
          <p className="text-xs font-arcade text-arcade-neon-pink">
            Obtížnost se zvyšuje každých 30 sekund!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpaceShooter; 