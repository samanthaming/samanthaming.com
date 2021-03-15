<template>
  <div
    class="py-5 pb-10 border-t-8"
    :class="[$options.COLOR_OPTION.background, $options.COLOR_OPTION.border]"
  >
    <div class="xl:max-w-screen-3xl mx-auto pl-2 md:pl-5">
      <section-head
        class="mb-3 pl-3"
        color="green"
        :text="text"
        :direction="direction"
        :size="size"
        :background-color="$options.COLOR_OPTION.background"
        :divider="false"
      />
      <ul class="grid grid-flow-col scrollbar overflow-x-auto">
        <li
          v-for="blog in recentBlogs5"
          :key="blog.slug"
          class="px-3 py-5 w-72"
        >
          <nuxt-link :to="blog.path" class="group" :title="blog.title">
            <app-image
              dir="blog"
              :img="blog.slug"
              class="transform group-hover:scale-105 duration-100 block shadow-lg"
            />
            <heading-tag
              class="leading-tight md:leading-tight text-sm md:text-base font-medium line-clamp-2 mt-3 group-hover:text-fuscia"
              :level="level"
            >
              {{ blog.title }}
            </heading-tag>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { RECENT_BLOG_LIMIT } from '~/lib';

const COLOR_OPTION = {
  border: 'border-green',
  background: 'bg-green-white',
};

export default {
  COLOR_OPTION,
  props: {
    direction: {
      type: String,
      default: 'center',
    },
    size: {
      type: String,
      default: 'lg',
    },
    text: {
      type: String,
      default: 'Top Tidbits',
    },
    level: {
      type: Number,
      default: 4,
    },
  },
  async fetch() {
    if (this.recentBlogs5.length > 0) {
      return;
    }

    const recentBlogs = await this.$content('blog')
      .only(['path', 'title', 'slug'])
      .limit(RECENT_BLOG_LIMIT)
      .fetch();

    this.setRecentBlogs(recentBlogs);
  },
  computed: {
    ...mapGetters('blog', ['recentBlogs5']),
  },
  methods: {
    ...mapActions('blog', ['setRecentBlogs']),
  },
};
</script>
