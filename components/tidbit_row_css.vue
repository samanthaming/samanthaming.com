<template>
  <div>
    <tidbit-row
      text="CSS"
      icon="css3-alt"
      color="indigo"
      :loading="isLoading"
      :tidbits="cssTopTidbits"
      :to="{
        name: 'tidbits',
        query: { tag: $options.TAG_CSS },
        hash: '#tidbits',
      }"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Tidbit, TAG_CSS } from '~/lib';

export default {
  TAG_CSS,
  data() {
    return {
      tidbits: [],
    };
  },
  async fetch() {
    await Tidbit.dispatchCssTops({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapState('tidbit', ['cssTopTidbits']),
    isLoading() {
      return this.$fetchState.pending && this.cssTopTidbits.length === 0;
    },
  },
};
</script>
