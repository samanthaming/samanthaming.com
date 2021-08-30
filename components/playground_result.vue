<template>
  <div>
    <iframe
      style="visibility: hidden"
      onload="this.style.visibility = 'visible';"
      class="border border-gray"
      height="100%"
      width="100%"
      frameBorder="0"
      :srcDoc="srcDoc"
      loading="lazy"
    />
    <button @click="runResult">Run Code</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getSrcDoc } from '~/lib';

// TODO: prevent flash or add loading status
// style="visibility:hidden;" onload="this.style.visibility = 'visible';"

export default {
  props: {
    html: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      srcDoc: this.loadSrcDoc(),
    };
  },
  computed: {
    ...mapState('playground', ['htmlCode']),
  },
  methods: {
    runResult() {
      if (this.htmlCode) {
        this.setSrcDoc({ html: this.htmlCode });
      }
    },
    loadSrcDoc() {
      return getSrcDoc({
        html: this.html,
        css: 'p { color: blue; } ',
        js: 'console.log("hi")',
      });
    },
    setSrcDoc({ html }) {
      this.srcDoc = getSrcDoc({
        html,
        css: 'p { color: blue; } ',
        js: 'console.log("hi")',
      });
    },
  },
};
</script>
