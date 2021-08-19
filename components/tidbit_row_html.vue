<template>
  <div>
    <tidbit-row
      text="HTML"
      icon="html5"
      color="purple"
      :loading="isLoading"
      :tidbits="htmlTopTidbits"
      :to="{
        name: 'tidbits',
        query: { tag: $options.TAG_HTML },
        hash: '#tidbits',
      }"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Tidbit, TAG_HTML } from '~/lib';

export default {
  TAG_HTML,
  data() {
    return {
      tidbits: [],
    };
  },
  async fetch() {
    await Tidbit.dispatchHtmlTops({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapState('tidbit', ['htmlTopTidbits']),
    isLoading() {
      return this.$fetchState.pending && this.htmlTopTidbits.length === 0;
    },
  },
};
</script>
