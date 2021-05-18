<template>
  <loading-component
    v-if="$fetchState.pending"
    class="h-80"
    :has-background="true"
  />
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
import { Tidbit } from '~/lib';

export default {
  async fetch() {
    await Tidbit.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbit']),
  },
};
</script>
