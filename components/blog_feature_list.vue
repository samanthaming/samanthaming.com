<template>
  <div>
    <section-head
      class="mb-3 mt-5 lg:-mt-2"
      color="green"
      :text="text"
      size="sm"
      direction="left"
    />
    <loading-component v-if="$fetchState.pending" />
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
              class="font-body font-bold text-sm sm:text-base md:text-lg xl:text-xl leading-tight mt-1"
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
import { TOP_BLOG_SLUGS } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      default: 'Top Articles',
    },
  },
  data: () => ({
    blogs: [],
  }),
  async fetch() {
    const topBlogs = await this.$content('blog')
      .only(['slug', 'path', 'title', 'description'])
      .where({ slug: { $in: TOP_BLOG_SLUGS } })
      .fetch();

    this.blogs = topBlogs;
  },
};
</script>
