<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <side-list v-else :text="text" :list="recentBlogs4" v-bind="$attrs" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Blog } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      default: 'Recent Articles',
    },
  },
  async fetch() {
    await Blog.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters('blog', ['recentBlogs4']),
  },
};
</script>
