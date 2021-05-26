<template>
  <div>
    <tidbit-row
      text="JS"
      icon="js"
      color="orange"
      :loading="isLoading"
      :tidbits="jsTopTidbits"
      :to="{
        name: 'tidbits',
        query: { tag: 'javascript' },
        hash: '#tidbits',
      }"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Tidbit } from '~/lib';

export default {
  data() {
    return {
      tidbits: [],
    };
  },
  async fetch() {
    await Tidbit.dispatchJsTops({ content: this.$content, store: this.$store });
  },
  computed: {
    ...mapState('tidbit', ['jsTopTidbits']),
    isLoading() {
      return this.$fetchState.pending && this.jsTopTidbits.length === 0;
    },
  },
};
</script>
