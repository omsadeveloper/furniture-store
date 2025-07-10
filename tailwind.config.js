const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-nav-menu': {
          'clip-path': ' polygon(0 0, 100% 0, 100% 0, 0 0);',
          'transition': 'clip-path 0.3s ease-in-out',
          'overflow': 'hidden',
          'will-change': 'clip-path',
          'pointer-events': 'none',
        },
        '.show-nav-menu': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          'transition': 'clip-path 0.3s ease-in-out',
          'overflow': 'hidden',
          'will-change': 'clip-path',
          'pointer-events': 'auto',
        },
      }, ['responsive']);
    }
  ],
  darkMode:'selector'
}