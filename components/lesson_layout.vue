<template>
  <div>
    <div class="page-container mt-10">
      <div class="px-3 md:px-5 lg:grid grid-cols-12 gap-5">
        <!-- LEFT -->
        <div class="col-span-9">
          <article>
            <div class="sm-markdown">
              <h1 class="flex">
                <div class="mr-2 text-ink-lightest font-thin">
                  {{ article.order }}.
                </div>
                {{ article.title }}
              </h1>
            </div>

            <article-share-list
              class="mt-6"
              color="blue"
              :path="article.path"
              :title="article.title"
              :description="article.description"
            />

            <article-avatar class="mt-9" :updated-at="article.updatedAt" />

            <!-- For longer text, put image on top. "imageTop" option set in frontmatter -->
            <div
              v-if="article.imageTop"
              class="mx-auto md:mx-0 max-w-md mt-8 shadow-md"
              :class="categoryOption.image"
            >
              <app-image :dir="categoryOption.dir" :img="article.slug" />
            </div>

            <nuxt-content
              class="sm-markdown mt-8 max-w-prose-lg"
              :document="article"
            />

            <!-- IMAGE -->
            <div
              class="mx-auto md:mx-0 max-w-md mt-14 shadow-md"
              :class="categoryOption.image"
            >
              <app-image :dir="categoryOption.dir" :img="article.slug" />
            </div>
          </article>
          <article-pagination
            v-if="next"
            category="course"
            :path="next.path"
            :title="`${next.order}. ${next.title}`"
          />
          <article-share
            color="blue"
            class="mt-12"
            :path="article.path"
            :title="article.title"
            :description="article.description"
          />
          <article-community-edit :path="article.path" />

          <article-related
            class="mt-14"
            text="Free Courses"
            color="orchid"
            :border="true"
            :related="related"
          />
        </div>
        <!-- RIGHT -->
        <div class="col-span-3 mt-14 lg:mt-0">
          <lessons-side-list
            :text="course.title"
            :description="course.description"
            :lessons="lessons"
          />
        </div>
      </div>
    </div>
    <div class="mt-24">
      <tidbit-scroll
        direction="left"
        background="orange"
        text="Top Tidbits"
        size="md"
      />
    </div>
  </div>
</template>

<script>
import { COURSES_DATA } from '~/lib';

const CATEGORY_OPTION = {
  flexbox30: {
    dir: 'flexbox30',
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
    category: {
      type: String,
      required: true,
      validator: (value) => Object.keys(CATEGORY_OPTION).includes(value),
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    categoryOption() {
      return CATEGORY_OPTION[this.category];
    },
    course() {
      return COURSES_DATA[this.category];
    },
    related() {
      return Object.values(COURSES_DATA);
    },
  },
};
</script>
