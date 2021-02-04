const { color } = require('./tailwind/palette');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins.{js,ts}',
      'nuxt.config.{js,ts}',
      'assets/css/**/*.{scss,css}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...color,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
