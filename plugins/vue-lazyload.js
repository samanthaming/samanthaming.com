import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

// https://yasminzy.com/nuxt/vue-lazyload/#steps

// import error from "../assets/error.svg";
// import loading from "../assets/loading.svg";

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // attempt: 1,
  // error,
  loading: '../assets/images/500kb.jpg',
});
