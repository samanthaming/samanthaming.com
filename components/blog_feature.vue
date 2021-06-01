<template>
  <div>
    <loading-component v-if="isLoading" class="h-92" :has-background="true" />
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
            class="mt-2 lg:mt-0 font-body max-w-prose text-xs sm:text-sm md:text-base leading-tight sm:leading-snug lg:leading-normal"
          >
            {{ blog.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Blog, isObjectEmpty } from '~/lib';

export default {
  async fetch() {
    await Blog.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters({ blog: 'blog/recentBlog' }),
    isLoading() {
      return this.$fetchState.pending && isObjectEmpty(this.blog);
    },
  },
};
</script>
