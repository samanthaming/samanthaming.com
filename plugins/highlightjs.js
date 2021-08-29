import Vue from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import vuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/styles/night-owl.css';

hljs.registerLanguage('javascript', javascript);

Vue.use(vuePlugin);
