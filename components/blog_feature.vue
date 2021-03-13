<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <div v-else class="group">
      <nuxt-link
        class="transform group-hover:-translate-y-1 duration-200 ease-in block"
        :to="blog.path"
      >
        <div>
          <app-image dir="blog" :img="blog.slug" />
        </div>
        <h2
          class="lg:pt-4 lg:pb-2 text-xl md:text-2xl lg:text-2xl font-head font-bold leading-snug group-hover:text-fuscia"
        >
          {{ blog.title }}
        </h2>
        <p
          class="max-w-prose text-xs xs:text-sm mt-2 lg:mt-0 md:text-base font-body leading-tight sm:leading-snug lg:leading-normal"
        >
          {{ blog.description }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    blog: {},
  }),
  async fetch() {
    const { path } = this.recentBlog;

    if (path) {
      this.blog = this.recentBlog;
      return;
    }

    const [recentBlog] = await this.$content('blog')
      .sortBy('updatedAt', 'desc')
      .only(['slug', 'title', 'description', 'path'])
      .limit(1)
      .fetch();

    this.blog = recentBlog;
    this.setRecentBlog(recentBlog);
  },
  computed: {
    ...mapState('blog', ['recentBlog']),
  },
  methods: {
    ...mapActions('blog', ['setRecentBlog']),
  },
};
</script>
