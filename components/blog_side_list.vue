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
import { mapGetters } from 'vuex';
import { Blog, isArrayEmpty, ROUTE_DATA } from '~/lib';

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
    ...mapGetters({ blogs: 'blog/recentBlogs4' }),
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.blogs);
    },
  },
};
</script>
