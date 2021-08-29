<template>
  <div
    class="mt-16 mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-36"
    :class="[
      $options.TW.SECTION_CONTAINER,
      $options.TW.SECTION_P,
      $options.TW.SECTION_P_DESKTOP,
    ]"
  >
    <client-only placeholder="Loading...">
      <!-- <playground-prism-editor :code="html" /> -->
      <!-- <highlightjs language="js" code="console.log('Hello World');" /> -->
      <lazy-playground-hljs />
      <!-- <playground-hljs /> -->
    </client-only>
    <playground :html="html" />
  </div>
</template>

<script>
import { TW } from '~/lib';

export default {
  TW,
  computed: {
    html() {
      return `<div class="wrapper">
        <h2>Hello World</h2>
      </div>`;
    },
  },
};
</script>
