<template>
  <div>
    <highlightjs language="js" :code="code" />
  </div>
</template>

<script>
import dedent from 'dedent';
import 'highlight.js/styles/night-owl.css'; // Theme
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

export default {
  components: {
    highlightjs: () =>
      import(
        '@highlightjs/vue-plugin' /* webpackChunkName: "components/playground_hljs" */
      ).then((mod) => mod.default.component),
  },
  data() {
    return {
      code: dedent`<div class="some-class">
        <h2>hello</h2>
      </div>`,
    };
  },
};
</script>
