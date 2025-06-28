/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'arcade': ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        'arcade': {
          'yellow': '#FFD700',
          'purple': '#8A2BE2',
          'cyan': '#00CED1',
          'green': '#32CD32',
          'neon-green': '#00FF00',
          'neon-pink': '#FF1493',
          'neon-blue': '#00BFFF',
          'dark': '#1a1a1a',
          'gray': '#808080',
          'light-gray': '#D3D3D3',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 0.6s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00' },
          '100%': { boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' }
        }
      }
    },
  },
  plugins: [],
} 