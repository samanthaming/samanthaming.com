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
          <article-content-layout
            :article="article"
            :next="next"
            :category="category"
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
    // FIXME: remove
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
