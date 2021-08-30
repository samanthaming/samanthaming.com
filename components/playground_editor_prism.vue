<template>
  <div>
    <button @click="resetCode">Refresh Code</button>
    <prism-editor
      v-model="editorCode"
      class="prism-editor"
      :highlight="highlighter"
      line-numbers
      @input="onCodeChange"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      editorCode: this.code,
    };
  },
  methods: {
    ...mapActions('playground', ['setHtmlCode']),
    highlighter(editorCode) {
      return highlight(editorCode, languages.javascript);
    },
    resetCode() {
      this.editorCode = this.code;
    },
    onCodeChange(code) {
      this.setHtmlCode(code);
    },
  },
};
</script>

<style>
/* required class */
.prism-editor {
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
