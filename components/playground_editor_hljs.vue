<template>
  <div>
    <button @click="resetCode">Refresh Code</button>
    <highlightjs language="html" :code="editorCode" />
  </div>
</template>

<script>
import 'highlight.js/styles/night-owl.css'; // Theme
import hljs from 'highlight.js/lib/core';
// Supported Languages:
// https://github.com/highlightjs/highlight.js/tree/main/src/languages
// https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

export default {
  components: {
    highlightjs: () =>
      import(
        '@highlightjs/vue-plugin' /* webpackChunkName: "components/playground_hljs" */
      ).then((mod) => mod.default.component),
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editorCode: this.code,
    };
  },
  methods: {
    resetCode() {
      this.editorCode = this.code;
    },
  },
};
</script>
