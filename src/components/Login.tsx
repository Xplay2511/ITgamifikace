import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/firebase';

interface LoginProps {
  onLogin: (user: { uid: string; email: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        onLogin({ uid: cred.user.uid, email: cred.user.email || '' });
      } else {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        onLogin({ uid: cred.user.uid, email: cred.user.email || '' });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-arcade-purple to-arcade-cyan">
      <div className="arcade-card p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-arcade text-center mb-8 text-arcade-purple">
          🎮 Gamifikace Informatika
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              E-mail:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"
              placeholder="Zadej svůj e-mail"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-arcade text-arcade-dark mb-2">
              Heslo:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-arcade-neon-green rounded font-arcade text-sm focus:border-arcade-neon-blue focus:outline-none"
              placeholder="Zadej heslo"
              required
            />
          </div>
          {error && <div className="text-red-600 text-xs font-arcade">{error}</div>}
          <button
            type="submit"
            className="w-full arcade-button text-lg py-3"
            disabled={loading}
          >
            {isRegister ? '📝 Registrovat' : '🔑 Přihlásit'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-xs font-arcade text-arcade-neon-blue underline"
            onClick={() => setIsRegister((r) => !r)}
          >
            {isRegister ? 'Už mám účet – přihlásit' : 'Nemám účet – registrace'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 