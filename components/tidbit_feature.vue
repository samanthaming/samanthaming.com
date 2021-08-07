<template>
  <loading-component v-if="isLoading" class="h-80" :has-background="true" />
  <feature-card
    v-else
    :title="recentTidbit.title"
    :description="recentTidbit.description"
    :path="recentTidbit.path"
    :text="text"
    badge="new"
  >
    <app-image
      dir="tidbits"
      :img="recentTidbit.slug"
      class="shadow-dark"
      width="288"
      height="288"
      :alt="`Code snippet of ${recentTidbit.title}`"
    />
  </feature-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { Tidbit, isObjectEmpty } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      required: false,
      default: undefined,
    },
  },
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
