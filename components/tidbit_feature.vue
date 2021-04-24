<template>
  <loading-component v-if="$fetchState.pending" />
  <feature-card
    v-else
    :title="recentTidbit.title"
    :description="recentTidbit.description"
    :path="recentTidbit.path"
    badge="new"
  >
    <page-image dir="tidbits" :img="recentTidbit.slug" class="shadow-dark" />
  </feature-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { dispatchRecentTidbits } from '~/lib';

export default {
  async fetch() {
    await dispatchRecentTidbits({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbit']),
  },
};
</script>
