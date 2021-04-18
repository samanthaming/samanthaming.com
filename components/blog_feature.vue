<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <div v-else>
      <div class="grid grid-cols-10 gap-x-3 lg:block">
        <div class="col-span-4 group">
          <div
            class="max-w-lg transform group-hover:scale-105 duration-200 ease-in"
          >
            <nuxt-link :to="blog.path">
              <page-image dir="blog" :img="blog.slug" />
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-6">
          <nuxt-link :to="blog.path" class="hover:text-fuscia">
            <h2
              class="lg:pt-4 lg:pb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-head font-bold leading-snug"
            >
              {{ blog.title }}
            </h2>
          </nuxt-link>
          <p
            class="max-w-prose text-xs sm:text-sm mt-2 lg:mt-0 md:text-base font-body leading-tight sm:leading-snug lg:leading-normal"
          >
            {{ blog.description }}
          </p>
        </div>
      </div>
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
