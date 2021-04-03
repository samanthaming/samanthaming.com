<template>
  <div>
    <div class="w-full max-w-10xl mx-auto mt-10 lg:px-5">
      <div class="lg:grid grid-cols-12">
        <!-- LEFT -->
        <div class="hidden lg:block col-span-3 xl:col-span-2">
          <div class="sticky top-20 overflow-y-auto">
            <h5
              class="text-ink uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"
            >
              On this page
            </h5>
            <toc :toc="article.toc" />
          </div>
        </div>
        <!-- CENTER -->
        <div class="col-span-9 px-3 lg:px-5 xl:col-span-7">
          <article class="mx-auto lg:mx-0 xl:mx-auto max-w-prose">
            <h1
              class="text-3xl lg:text-4xl xl:text-5xl font-head font-bold mb-3 lg:mb-5"
            >
              {{ article.title }}
            </h1>

            <article-avatar class="mb-8" :updated-at="article.updatedAt" />

            <div class="xl:hidden mb-3 flex justify-center">
              <app-image :dir="categoryOption.dir" :img="article.slug" />
            </div>
            <nuxt-content
              class="sm-markdown prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
              :document="article"
            />
          </article>
          <!-- TODO: add prev support -->
          <article-pagination
            v-if="next"
            :path="next.path"
            :title="next.title"
            :label="categoryOption.paginateLabel"
          />
          <article-share
            :path="article.path"
            :title="article.title"
            :description="article.description"
            :color="categoryOption.color"
          />
          <article-community-edit :path="article.path" />
          <article-related
            class="mt-14"
            :color="categoryOption.color"
            :text="categoryOption.relatedText"
            :related="related"
          />
        </div>
        <!-- RIGHT -->
        <div class="hidden xl:block xl:col-span-3">
          <app-image :dir="categoryOption.dir" :img="article.slug" />
          <article-side-share
            :color="categoryOption.color"
            :path="article.path"
            :title="article.title"
            :description="article.description"
          />
          <tidbit-side class="mt-10" breakpoint="xl" />
          <blog-side-list class="mt-8" />
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <div class="mx-auto mt-20">
      <tidbit-scroll
        class="mt-16"
        direction="left"
        background="orange"
        text="Top Tidbits"
        size="md"
      />
    </div>
  </div>
</template>

<script>
const CATEGORY_OPTION = {
  tidbits: {
    color: 'orange',
    dir: 'tidbits',
    relatedText: 'Tidbits',
    paginateLabel: 'Next Tidbit',
  },
  blog: {
    color: 'green',
    dir: 'blog',
    relatedText: 'articles',
    paginateLabel: 'Next Article',
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
      default: null,
      // Can't set "required: true" b/c next can be null
    },
    related: {
      type: Array,
      required: true,
    },
    banner: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
      validator: (value) => Object.keys(CATEGORY_OPTION).includes(value),
    },
  },
  computed: {
    categoryOption() {
      return CATEGORY_OPTION[this.category];
    },
  },
};
</script>
