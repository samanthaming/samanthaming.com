import fontawesome from './modules/fontawesome';
// import webfontloader from './modules/webfontloader';
// import optimizedImages from './modules/optimized_images';
import image from './modules/image';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'samanthaming.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,900;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sm-site',
    '~/plugins/vue-lazyload',
    '~/plugins/vue-scrollactive',
    '~/plugins/bootstrap',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: ['~/components/', { path: '~/components/layout/' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@aceforth/nuxt-optimized-images',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
    '@nuxt/content', // https://go.nuxtjs.dev/content
    'nuxt-webfontloader',
  ],

  fontawesome,
  // webfontloader,
  // optimizedImages,
  image,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // https://tailwindcss.nuxtjs.org
  tailwindcss: {
    viewer: false,
    configPath: '~/modules/tailwind.config.js',
    jit: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      prism: {
        // theme: 'prism-themes/themes/prism-material-oceanic.css',
        // theme: 'prism-themes/themes/prism-coldark-dark.css',
        // theme: 'prism-themes/themes/prism-xonokai.css',
        // theme: 'prism-themes/themes/prism-dracula.css',
        // theme: 'prism-themes/themes/prism-hopscotch.css',
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
