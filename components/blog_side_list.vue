<template>
  <div>
    <side-list :text="text" :list="recentTidbits4" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { RECENT_BLOG_LIMIT } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      default: 'Top Articles',
    },
  },
  async fetch() {
    if (this.recentTidbits4.length > 0) {
      return;
    }

    const recentBlogs = await this.$content('blog')
      .only(['path', 'title'])
      .limit(RECENT_BLOG_LIMIT)
      .fetch();

    this.setRecentBlogs(recentBlogs);
  },
  computed: {
    ...mapGetters('blog', ['recentTidbits4']),
  },
  methods: {
    ...mapActions('blog', ['setRecentBlogs']),
  },
};
</script>
