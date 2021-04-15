<template>
  <div>
    <div class="w-full max-w-screen-3xl mx-auto mt-10 lg:px-5 2xl:pr-8">
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
        <div class="col-span-9 xl:col-span-7 px-3 sm:px-4 md:px-5 lg:px-5">
          <article class="mb-14 mx-auto lg:mx-0 md:max-w-4xl xl:mx-auto">
            <div class="sm-markdown">
              <h1>
                {{ article.title }}
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

            <!-- IMAGE -->
            <div class="mt-6 bg-gray-lightest shadow-md">
              <div
                class="mx-auto flex justify-center"
                :class="categoryOption.image"
              >
                <app-image :dir="categoryOption.dir" :img="article.slug" />
              </div>
            </div>

            <hr class="border-gray-lighter mt-8" />

            <article-avatar class="mt-10" :updated-at="article.updatedAt" />

            <nuxt-content class="sm-markdown mt-10" :document="article" />
          </article>
          <!-- TODO: add prev support -->
          <article-pagination
            v-if="next"
            :path="next.path"
            :title="next.title"
            :label="categoryOption.paginateLabel"
          />
          <article-share
            class="mt-10"
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
          <tidbit-side breakpoint="xl" />
          <blog-side-list class="mt-8" size="md" :border="true" />
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <div class="mx-auto mt-16">
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
    relatedText: 'Related Tidbits',
    paginateLabel: 'Next Tidbit',
    image: 'max-w-xs md:max-w-sm xl:max-w-md',
  },
  blog: {
    color: 'green',
    dir: 'blog',
    relatedText: 'Related Articles',
    paginateLabel: 'Next Article',
    image: 'max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl',
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
    // TODO: remove if not being used
    // banner: {
    //   type: Array,
    //   required: true,
    // },
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
