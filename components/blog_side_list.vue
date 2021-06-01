<template>
  <div>
    <loading-component v-if="isLoading" />
    <side-list v-else :text="text" :list="blogs" v-bind="$attrs" to="blogs" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Blog, isArrayEmpty } from '~/lib';

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
    ...mapGetters({ blogs: 'blog/recentBlogs4' }),
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.blogs);
    },
  },
};
</script>
