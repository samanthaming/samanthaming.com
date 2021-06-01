<template>
  <div>
    <loading-component v-if="isLoading" class="h-92" :has-background="true" />
    <ul v-else class="space-y-3">
      <li
        v-for="blog in blogs"
        :key="blog.slug"
        class="grid grid-cols-10 gap-x-3"
      >
        <div class="col-span-3 group">
          <div class="max-w-xs">
            <nuxt-link
              :to="blog.path"
              class="transform group-hover:scale-105 duration-100 block"
            >
              <page-image dir="blog" :img="blog.slug" />
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-7">
          <nuxt-link :to="blog.path" class="hover:text-fuscia">
            <h4
              class="font-body font-semibold text-sm sm:text-base md:text-lg leading-tight mt-1"
            >
              {{ blog.title }}
            </h4>
          </nuxt-link>
          <p
            class="text-xs sm:text-sm mt-2 text-ink-lighter font-body leading-tight sm:leading-snug lg:leading-normal"
          >
            {{ blog.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Blog, isArrayEmpty } from '~/lib';

export default {
  async fetch() {
    await Blog.dispatchTops({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters({ blogs: 'blog/randomTopBlogs3' }),
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.blogs);
    },
  },
};
</script>
