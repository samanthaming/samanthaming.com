<template>
  <div>
    <article class="mb-14 mx-auto lg:mx-0 md:max-w-4xl xl:mx-auto">
      <div class="sm-markdown">
        <h1 class="flex">
          <div
            v-if="categoryOption.order"
            class="mr-2 text-ink-lightest font-thin"
          >
            {{ article.order }}.
          </div>
          <span v-html="formattedTitle"></span>
        </h1>
      </div>

      <p
        v-if="article.description"
        class="mt-3 text-gray-dark max-w-prose leading-tight md:leading-snug text-base md:text-lg lg:text-xl"
      >
        {{ article.description }}
      </p>

      <article-share-list
        class="mt-6"
        :color="categoryOption.color"
        :path="article.path"
        :title="article.title"
        :description="article.description"
      />

      <!-- Top Image -->
      <div v-if="article.imageTop || categoryOption.imageTop">
        <div class="mt-6 bg-gray-lightest shadow-md">
          <div
            class="mx-auto flex justify-center"
            :class="categoryOption.image"
          >
            <page-image :dir="categoryOption.dir" :img="article.slug" />
          </div>
        </div>
        <hr class="border-gray-lighter mt-8" />
      </div>

      <article-avatar class="mt-10" :updated-at="article.updatedAt" />

      <nuxt-content class="sm-markdown mt-10" :document="article" />

      <!-- Bottom Image -->
      <div
        v-if="article.imageBottom || categoryOption.imageBottom"
        class="mx-auto md:mx-0 max-w-md mt-14 shadow-md"
      >
        <page-image :dir="categoryOption.dir" :img="article.slug" />
      </div>
    </article>

    <!-- TODO: add prev -->
    <article-pagination
      v-if="next"
      :path="next.path"
      :color="categoryOption.paginationColor"
      :label="categoryOption.paginationLabel"
      :text="paginationText"
    />

    <article-share
      class="mt-12"
      :color="categoryOption.color"
      :path="article.path"
      :title="article.title"
      :description="article.description"
    />
    <article-community-edit :path="article.path" />

    <article-related
      class="mt-14"
      :text="categoryOption.relatedText"
      :color="categoryOption.relatedColor"
      :border="categoryOption.relatedBorder"
      :related="related"
    />
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

function formatTitle(str) {
  const regex = /`(.*)`/;
  return str.replace(regex, '<code>$1</code>');
}

const SQUARE_IMAGE = 'max-w-xs md:max-w-sm xl:max-w-md';
const COURSE_OPTION = {
  color: 'blue',
  image: SQUARE_IMAGE,
  relatedText: 'Free Courses',
  relatedColor: 'orchid',
  relatedBorder: true,
  paginationColor: 'indigo',
};

const CATEGORY_OPTION = {
  tidbits: {
    dir: 'tidbits',
    imageTop: true,
    imageBottom: true,
    order: false,
    color: 'orange',
    image: SQUARE_IMAGE,
    relatedText: 'Related Tidbits',
    relatedColor: 'orange',
    relatedBorder: true,
    paginationLabel: 'Next Tidbit',
  },
  blog: {
    dir: 'blog',
    imageTop: true,
    imageBottom: false,
    order: false,
    color: 'green',
    image: 'max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl',
    relatedText: 'Related Articles',
    relatedColor: 'green',
    relatedBorder: true,
    paginationLabel: 'Next Article',
  },
  flexbox30: {
    dir: 'flexbox30',
    imageTop: false,
    imageBottom: true,
    order: true,
    ...COURSE_OPTION,
  },
  basics: {
    dir: 'basics',
    imageTop: true,
    imageBottom: true,
    order: false,
    ...COURSE_OPTION,
  },
  pictorials: {
    dir: 'pictorials',
    imageTop: true,
    imageBottom: false,
    order: false,
    ...COURSE_OPTION,
  },
};

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      default: undefined,
    },
    category: {
      type: String,
      required: true,
      validator: (value) => Object.keys(CATEGORY_OPTION).includes(value),
    },
    related: {
      type: Array,
      required: true,
    },
    paginationLabel: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    categoryOption() {
      return CATEGORY_OPTION[this.category];
    },
    formattedTitle() {
      const html = formatTitle(this.article.title);

      return sanitizeHtml(html);
    },
    paginationText() {
      if (this.categoryOption.order) {
        return `${this.next.order}. ${this.next.title}`;
      }

      return this.next.title;
    },
  },
};
</script>
