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
      <lazy-playground-editor-prism :code="code" />
    </client-only>
    <playground-result :html="html" />
  </div>
</template>

<script>
import dedent from 'dedent';
import { TW } from '~/lib';

export default {
  TW,
  data() {
    return {
      html: `<div class="wrapper">
        <h2>Hello World</h2>
      </div>`,
    };
  },
  computed: {
    code() {
      return dedent`<div class="wrapper">
        <h2>Hello World</h2>
      </div>`;
    },
  },
};
</script>
