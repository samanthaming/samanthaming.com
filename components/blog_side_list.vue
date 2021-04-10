<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <side-list v-else :text="text" :list="recentBlogs4" v-bind="$attrs" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { RECENT_DATA_LIMIT } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      default: 'Recent Articles',
    },
  },
  async fetch() {
    if (this.recentBlogs4.length > 0) {
      return;
    }

    const recentBlogs = await this.$content('blog')
      .only(['path', 'title', 'dir'])
      .limit(RECENT_DATA_LIMIT)
      .fetch();

    this.setRecentBlogs(recentBlogs);
  },
  computed: {
    ...mapGetters('blog', ['recentBlogs4']),
  },
  methods: {
    ...mapActions('blog', ['setRecentBlogs']),
  },
};
</script>
