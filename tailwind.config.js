/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx', './src/**/*.ts', './index.html'],
  theme: {
      extend: {
          colors: {
              background: '#09090A',
          },
          gridTemplateRows: {
              7: 'repeat(7, minmax(0, 1fr))',
          },
          animation: {
            typing: 'typing 5s steps(31)',
            typingLoop: 'typing 5s infinite steps(31)',
          },
          keyframes: {
            typing: {
              '0%': {
                width: '0',
              },
              '80%': {
                width: '31ch',
              },
              '100%': {
                width: '31ch',
              },
            },
            shimmer: {
              '100%': {
                transform: 'translateX(100%)',
              },
            },
          },
      },
  },
  plugins: [],
};
