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
      },
  },
  plugins: [],
};
