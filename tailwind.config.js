
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
            overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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
            overlayShow: {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
            contentShow: {
              from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
              to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            },
          },
      },
  },
  plugins: [],
};
