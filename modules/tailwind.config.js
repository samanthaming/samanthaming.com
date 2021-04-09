const { screens } = require('tailwindcss/defaultTheme');
const { color } = require('./tailwind/palette');
const { size } = require('./tailwind/size');

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
  darkMode: false,
  // Reference: https://tailwindcss.com/docs/theme
  theme: {
    colors: {
      ...color,
    },
    screens: {
      // Because how min-width works, the order matters (must be sequential).
      // Smaller size must be preceded, so we can't just "extend"
      xs: '400px',
      ...screens,
    },
    fontFamily: {
      head: ['Nunito', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      // body: ['Nunito Sans', 'Impact', 'Arial', 'sans-serif'],
      // body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
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
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      flexGrow: {
        2: 2,
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '0.875rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '5xl': ['2.75rem', { lineHeight: '3rem' }],
      },
      // https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
      minWidth: {
        96: '24rem',
      },
      maxWidth: {
        '2xs': '18rem',
        // '3xs': '16rem',
        // '4xs': '14rem',
        // '6xs': '12rem',
        '7xs': '10rem',
        // '8xs': '8rem',
        '9xs': '6rem',
        // '10xs': '4rem',
        ...size,
      },
      spacing: {
        '2%': '2%',
        '4%': '4%',
        '6%': '6%',
        '8%': '8%',
        '10%': '10%',
      },
      // Default Styles: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.head').join(),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h3: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h4: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h5: {
              fontFamily: theme('fontFamily.head').join(),
            },
            a: {
              color: color.fuscia,
              textDecoration: 'none',
              fontWeight: theme('fontWeight.normal'),
              '&:hover': {
                color: color['fuscia-70'],
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: color['gray-dark'],
              backgroundColor: color['gray-lightest'],
              fontWeight: theme('fontWeight.normal'),
            },
            'blockquote > p': {
              paddingTop: theme('spacing.6'),
              paddingBottom: theme('spacing.6'),
            },
            code: {
              color: color['purple-dark'],
              backgroundColor: color['gray-lightest'],
              padding: `${theme('spacing["0.5"]')} ${theme('spacing["1.5"]')}`,
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
        lg: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
            },
          ],
        },
        xl: {
          css: [
            {
              h1: {
                fontSize: '2.75rem',
              },
            },
          ],
        },
      }),
    },
  },
  // TODO: check if can remove > https://github.com/tailwindlabs/tailwindcss-jit
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
