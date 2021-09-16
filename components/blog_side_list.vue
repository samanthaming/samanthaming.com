<template>
  <div>
    <loading-component v-if="isLoading" />
    <side-list
      v-else
      :text="text"
      :list="blogs"
      v-bind="$attrs"
      :to="$options.ROUTE_DATA.blog.name"
    />
  </div>
</template>

<script>
import { Blog, isArrayEmpty, getStoreResults, ROUTE_DATA } from '~/lib';

export default {
  ROUTE_DATA,
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
    blogs() {
      return getStoreResults(this, {
        getter: 'blog/recentBlogs',
        count: 4,
      });
    },
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.blogs);
    },
  },
};
</script>
