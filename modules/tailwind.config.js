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
    fontFamily: {
      head: ['Nunito', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      // body: ['Nunito Sans', 'Impact', 'Arial', 'sans-serif'],
      body: [
        '-system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      // body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
