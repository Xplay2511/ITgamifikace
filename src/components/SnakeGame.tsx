import React, { useState, useEffect, useCallback } from 'react';

interface SnakeGameProps {
  onClose: () => void;
  onScoreUpdate: (score: number) => void;
  currentScore: number;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ onClose, onScoreUpdate, currentScore }) => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const GRID_SIZE = 20;
  const GAME_SPEED = 150;

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * GRID_SIZE),
      Math.floor(Math.random() * GRID_SIZE)
    ];
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake([[10, 10]]);
    setDirection('RIGHT');
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    generateFood();
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = [...newSnake[0]];

      switch (direction) {
        case 'UP':
          head[1] -= 1;
          break;
        case 'DOWN':
          head[1] += 1;
          break;
        case 'LEFT':
          head[0] -= 1;
          break;
        case 'RIGHT':
          head[0] += 1;
          break;
      }

      // Check collision with wall
      if (head[0] < 0 || head[0] >= GRID_SIZE || head[1] < 0 || head[1] >= GRID_SIZE) {
        setGameOver(true);
        if (score > currentScore) {
          onScoreUpdate(score);
        }
        return prevSnake;
      }

      // Check collision with self
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        if (score > currentScore) {
          onScoreUpdate(score);
        }
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(prev => prev + 1);
        generateFood();
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, gameOver, gameStarted, food, score, currentScore, onScoreUpdate, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) {
        setGameStarted(true);
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  const renderCell = (x: number, y: number) => {
    const isSnakeHead = snake[0][0] === x && snake[0][1] === y;
    const isSnakeBody = snake.slice(1).some(segment => segment[0] === x && segment[1] === y);
    const isFood = food[0] === x && food[1] === y;

    let cellClass = 'snake-cell border border-arcade-dark';
    
    if (isSnakeHead) {
      cellClass += ' snake-head';
    } else if (isSnakeBody) {
      cellClass += ' snake-body';
    } else if (isFood) {
      cellClass += ' snake-food';
    }

    return <div key={`${x}-${y}`} className={cellClass} />;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="arcade-card p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-arcade text-arcade-purple">🐍 Snake Game</h2>
          <button onClick={onClose} className="arcade-button text-xs">
            ❌ Zavřít
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-arcade text-arcade-yellow">
            Skóre: {score}
          </div>
          <div className="text-sm font-arcade text-arcade-green">
            Nejlepší: {Math.max(score, currentScore)}
          </div>
        </div>

        {!gameStarted && !gameOver && (
          <div className="text-center mb-4">
            <p className="text-sm font-arcade text-arcade-dark mb-2">
              Použij šipky pro pohyb
            </p>
            <button
              onClick={() => setGameStarted(true)}
              className="arcade-button"
            >
              🎮 Začít hru
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center mb-4">
            <p className="text-lg font-arcade text-arcade-neon-pink mb-2">
              Game Over!
            </p>
            <p className="text-sm font-arcade text-arcade-dark mb-2">
              Skóre: {score}
            </p>
            <button onClick={resetGame} className="arcade-button">
              🔄 Hrát znovu
            </button>
          </div>
        )}

        <div className="flex justify-center">
          <div 
            className="snake-grid grid gap-0"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              width: `${GRID_SIZE * 16}px`,
              height: `${GRID_SIZE * 16}px`
            }}
          >
            {Array.from({ length: GRID_SIZE }, (_, y) =>
              Array.from({ length: GRID_SIZE }, (_, x) => renderCell(x, y))
            )}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs font-arcade text-arcade-gray">
            Dosáhni 20+ bodů pro odznak "Hadí mistr"!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame; 