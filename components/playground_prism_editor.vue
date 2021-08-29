<template>
  <prism-editor
    v-model="editorCode"
    class="my-editor"
    :highlight="highlighter"
    line-numbers
  />
</template>

<script>
import dedent from 'dedent';
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'vue-prism-editor/dist/prismeditor.min.css';

// Reference for themes:
// https://github.com/PrismJS/prism/tree/master/themes
import 'prismjs/themes/prism-tomorrow.css';

// Reference for language and grammer:
// https://github.com/PrismJS/prism/blob/master/components.json

// Javascript
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// HTML
import 'prismjs/components/prism-markup';
// CSS
import 'prismjs/components/prism-css';

export default {
  components: {
    PrismEditor,
  },
  props: {
    code: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  data() {
    return {
      editorCode: this.setInitialCode(),
    };
  },
  methods: {
    setInitialCode() {
      return dedent`<div class="some-class">
        <h2>hello</h2>
      </div>`;
      // return `
      //   function(code) {
      //     console.log('hi')
      //   }
      // `;
    },
    highlighter(editorCode) {
      return highlight(editorCode, languages.javascript);
    },
  },
};
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
