<template>
  <div :class="backgroundOption.container">
    <div class="max-w-[2300px] mx-auto">
      <section-head
        class="mb-3"
        color="green"
        :text="text"
        :direction="direction"
        :size="size"
        :divider="backgroundOption.divider"
        to="blog"
      />
      <loading-component v-if="isLoading" />
      <ul v-else class="grid grid-flow-col scrollbar overflow-x-auto gap-10">
        <li
          v-for="{ title, slug, path } in blogs"
          :key="slug"
          class="py-5 w-72 group"
        >
          <nuxt-link
            :to="path"
            class="block transform duration-150 ease-in group-hover:-translate-y-2"
            :title="title"
          >
            <page-image
              dir="blog"
              :img="slug"
              :class="backgroundOption.image"
            />
            <div class="h-10 mt-3">
              <heading-tag
                class="leading-tight text-ink-50 font-medium text-base line-clamp-2 group-hover:text-fuscia"
                :level="level"
              >
                {{ title }}
              </heading-tag>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Blog, isArrayEmpty } from '~/lib';

const BACKGROUND_OPTION = {
  none: {
    divider: true,
    container: '',
    image: 'shadow-lg',
  },
  green: {
    divider: false,
    container:
      'border-t-8 border-green bg-green-white py-5 pb-10 px-3 md:px-5 xl:px-10',
    image: 'shadow-dark-md',
  },
};

export default {
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    size: {
      type: String,
      default: 'md',
    },
    text: {
      type: String,
      default: 'Top Articles',
    },
    level: {
      type: Number,
      default: 4,
    },
    count: {
      type: Number,
      default: 4,
    },
    background: {
      type: String,
      default: 'none',
      validator: (value) => Object.keys(BACKGROUND_OPTION).includes(value),
    },
  },
  async fetch() {
    await Blog.dispatchTops({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    blogs() {
      return this.$store.getters[`blog/randomTopBlogs${this.count}`];
    },
    backgroundOption() {
      return BACKGROUND_OPTION[this.background];
    },
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.blogs);
    },
  },
};
</script>
