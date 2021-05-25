<template>
  <div>
    <tidbit-row
      text="JS"
      icon="js"
      color="orange"
      :loading="$fetchState.pending"
      :tidbits="tidbits"
      :to="{
        name: 'tidbits',
        query: { tag: 'javascript' },
        hash: '#tidbits',
      }"
    />
  </div>
</template>

<script>
import { Tidbit, TAG_JS } from '~/lib';

export default {
  data() {
    return {
      tidbits: [],
    };
  },
  // TODO: consider if we should also dispatch?
  async fetch() {
    this.tidbits = await Tidbit.fetchByLanguage(TAG_JS, {
      content: this.$content,
    });
  },
};
</script>
