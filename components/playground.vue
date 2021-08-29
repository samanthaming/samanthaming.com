<template>
  <div>
    <iframe
      class="border border-gray"
      height="100%"
      width="100%"
      frameBorder="0"
      :srcDoc="srcDoc"
      loading="lazy"
    />
  </div>
</template>

<script>
import { getSrcDoc } from '~/lib';

export default {
  props: {
    html: {
      type: String,
      default: null,
    },
  },
  computed: {
    srcDoc() {
      return getSrcDoc({
        html: this.html,
        css: 'p { color: blue; } ',
        js: 'console.log("hi")',
      });
    },
  },
};
</script>
