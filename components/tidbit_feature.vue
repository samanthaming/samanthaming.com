<template>
  <loading-component v-if="isLoading" class="h-80" :has-background="true" />
  <feature-card
    v-else
    :title="recentTidbit.title"
    :description="recentTidbit.description"
    :path="recentTidbit.path"
    badge="new"
  >
    <app-image
      dir="tidbits"
      :img="recentTidbit.slug"
      class="shadow-dark"
      width="288"
      height="288"
    />
  </feature-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { Tidbit, isObjectEmpty } from '~/lib';

export default {
  async fetch() {
    await Tidbit.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbit']),
    isLoading() {
      return this.$fetchState.pending && isObjectEmpty(this.recentTidbit);
    },
  },
};
</script>
