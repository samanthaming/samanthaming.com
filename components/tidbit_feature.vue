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
import { mapState, mapActions } from 'vuex';

export default {
  async fetch() {
    if (this.recentTidbit) {
      return;
    }

    const [recentTidbit] = await this.$content('tidbits')
      .sortBy('updatedAt', 'desc')
      .only(['slug', 'title', 'description', 'path'])
      .limit(1)
      .fetch();

    this.setRecentTidbit(recentTidbit);
  },
  computed: {
    ...mapState('tidbit', ['recentTidbit']),
  },
  methods: {
    ...mapActions('tidbit', ['setRecentTidbit']),
  },
};
</script>
