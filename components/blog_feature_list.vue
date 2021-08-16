<template>
  <div>
    <loading-component v-if="isLoading" class="h-92" :has-background="true" />

    <ul v-else class="sm:space-y-5 md:space-y-6">
      <li
        v-for="blog in blogs"
        :key="blog.slug"
        class="grid grid-cols-10 gap-x-3 border-t border-gray-lighter sm:border-0 pt-2 xs:py-4 sm:py-0"
        :class="{ 'first:border-0': !hasBorderFirst }"
      >
        <div class="col-span-3 group">
          <div class="lg:max-w-xs">
            <nuxt-link
              :to="blog.path"
              class="transform group-hover:scale-105 duration-100 block"
            >
              <app-image
                dir="blog"
                :img="blog.slug"
                width="216"
                height="122"
                class="shadow"
                :lazy="lazy"
              />
            </nuxt-link>
          </div>
        </div>

        <div class="col-span-7">
          <nuxt-link :to="blog.path" class="hover:text-fuscia">
            <h4
              class="text-ink-50 xs:text-ink font-body font-semibold text-sm sm:text-lg md:text-base xl:text-lg 2xl:text-xl leading-tight md:leading-tight"
            >
              {{ blog.title }}
            </h4>
          </nuxt-link>
          <p
            class="hidden xs:block text-xs sm:text-sm md:text-xs xl:text-sm leading-tight max-w-prose mt-2 text-ink-lighter font-body"
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
  props: {
    hasBorderFirst: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
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
