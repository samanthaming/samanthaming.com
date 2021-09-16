<template>
  <div :class="backgroundOption.container">
    <div :class="$options.TW.SCROLL_CONTAINER">
      <section-head
        class="mb-3"
        color="green"
        :text="text"
        :direction="direction"
        text-class="text-xl xs:text-2xl 2xl:text-3xl"
        :divider="backgroundOption.divider"
        :to="$options.ROUTE_DATA.blog.name"
      />
      <loading-component v-if="isLoading" class="h-72" :has-background="true" />
      <ul v-else :class="$options.TW.SCROLL_UL">
        <li
          v-for="{ title, slug, path } in blogs"
          :key="slug"
          :class="backgroundOption.li"
        >
          <nuxt-link
            :to="path"
            class="block transform duration-150 ease-in group-hover:-translate-y-2"
            :title="title"
          >
            <app-image
              dir="blog"
              :img="slug"
              :class="backgroundOption.image"
              width="288"
              height="162"
            />
            <div class="h-10 mt-3">
              <heading-tag
                class="text-ink-50 font-medium text-sm 2xl:text-base leading-tight 2xl:leading-tight line-clamp-2 group-hover:text-fuscia"
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
import { Blog, isArrayEmpty, getStoreResults, ROUTE_DATA, TW } from '~/lib';

const BACKGROUND_OPTION = {
  none: {
    divider: true,
    container: '',
    image: 'shadow-lg',
    li: TW.SCROLL_LI,
  },
  green: {
    divider: false,
    container:
      'border-t-8 border-green bg-green-white py-5 pb-10 px-3 md:px-5 xl:px-10',
    image: 'shadow-dark-md',
    li: TW.SCROLL_LI_BKG,
  },
};

export default {
  ROUTE_DATA,
  TW,
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    text: {
      type: String,
      default: 'Top Articles',
    },
    level: {
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
      return getStoreResults(this, {
        getter: 'blog/topBlogs',
        count: 5,
      });
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
