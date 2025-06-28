import React, { useState, useEffect, useRef } from 'react';

interface TypingGameProps {
  onComplete: (score: number, accuracy: number) => void;
  onClose: () => void;
}

const TypingGame: React.FC<TypingGameProps> = ({ onComplete, onClose }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [accuracy, setAccuracy] = useState(100);
  const [totalTyped, setTotalTyped] = useState(0);
  const [correctTyped, setCorrectTyped] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const words = [
    'počítač', 'klávesnice', 'myš', 'monitor', 'tiskárna', 'skener', 'sluchátka',
    'mikrofon', 'webkamera', 'procesor', 'paměť', 'disk', 'grafika', 'síť',
    'internet', 'email', 'soubor', 'složka', 'program', 'aplikace', 'software',
    'hardware', 'databáze', 'server', 'router', 'modem', 'wifi', 'bluetooth',
    'usb', 'hdmi', 'vga', 'dvi', 'ethernet', 'firewall', 'antivirus', 'backup',
    'cloud', 'streaming', 'download', 'upload', 'browser', 'web', 'html', 'css',
    'javascript', 'python', 'java', 'c++', 'php', 'sql', 'xml', 'json', 'api'
  ];

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  useEffect(() => {
    if (!gameStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted]);

  useEffect(() => {
    if (gameOver) {
      const finalAccuracy = totalTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 100;
      onComplete(score, finalAccuracy);
    }
  }, [gameOver, score, correctTyped, totalTyped, onComplete]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentWord(getRandomWord());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    setTotalTyped(prev => prev + 1);

    if (value === currentWord) {
      // Správně napsané slovo
      setScore(prev => prev + 10);
      setCorrectTyped(prev => prev + currentWord.length);
      setCurrentWord(getRandomWord());
      setUserInput('');
    } else if (value.length > currentWord.length) {
      // Příliš dlouhé - reset
      setUserInput('');
    }
  };

  const calculateAccuracy = () => {
    return totalTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 100;
  };

  if (!gameStarted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="arcade-card p-6 max-w-md w-full text-center">
          <h2 className="text-2xl font-arcade text-arcade-purple mb-4">
            ⌨️ Rychlé psaní
          </h2>
          <p className="text-arcade-dark mb-6">
            Napiš co nejvíce slov správně za 60 sekund!
            <br />
            Každé správné slovo = 10 bodů
          </p>
          <div className="space-y-4">
            <button
              onClick={startGame}
              className="arcade-button text-lg py-3 px-6 w-full"
            >
              🚀 Začít hru
            </button>
            <button
              onClick={onClose}
              className="arcade-button-secondary text-lg py-3 px-6 w-full"
            >
              ❌ Zavřít
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="arcade-card p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-arcade text-arcade-purple">
            ⌨️ Rychlé psaní
          </h2>
          <div className="flex gap-4 text-sm font-arcade">
            <div className="bg-arcade-dark px-3 py-1 rounded">
              ⏱️ {timeLeft}s
            </div>
            <div className="bg-arcade-dark px-3 py-1 rounded">
              🎯 {score} bodů
            </div>
            <div className="bg-arcade-dark px-3 py-1 rounded">
              📊 {calculateAccuracy()}%
            </div>
          </div>
        </div>

        {!gameOver ? (
          <div className="text-center">
            <div className="mb-8">
              <div className="text-4xl font-arcade text-arcade-neon-green mb-4">
                {currentWord}
              </div>
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-xl font-arcade border-2 border-arcade-neon-green rounded bg-arcade-dark text-white text-center"
                placeholder="Začni psát..."
                autoFocus
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-arcade-dark p-3 rounded">
                <div className="text-arcade-neon-green font-bold">Správně</div>
                <div>{correctTyped}</div>
              </div>
              <div className="bg-arcade-dark p-3 rounded">
                <div className="text-arcade-neon-green font-bold">Celkem</div>
                <div>{totalTyped}</div>
              </div>
              <div className="bg-arcade-dark p-3 rounded">
                <div className="text-arcade-neon-green font-bold">WPM</div>
                <div>{Math.round(correctTyped / 5)}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-arcade text-arcade-purple mb-4">
              🎉 Hra skončila!
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-arcade-dark p-4 rounded">
                <div className="text-arcade-neon-green font-bold text-lg">Celkové skóre</div>
                <div className="text-2xl font-arcade">{score}</div>
              </div>
              <div className="bg-arcade-dark p-4 rounded">
                <div className="text-arcade-neon-green font-bold text-lg">Přesnost</div>
                <div className="text-2xl font-arcade">{calculateAccuracy()}%</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="arcade-button text-lg py-3 px-6"
            >
              ✅ Hotovo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingGame; 