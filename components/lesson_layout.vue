<template>
  <div>
    <div class="page-container mt-10">
      <div class="px-3 md:px-5 lg:grid grid-cols-12 gap-5">
        <!-- LEFT -->
        <div class="col-span-9 xl:mx-auto">
          <article-content-layout
            :article="article"
            :next="next"
            :category="category"
            :related="related"
          />
        </div>
        <!-- RIGHT -->
        <div class="col-span-3 mt-14 lg:mt-0">
          <div class="sticky top-20 overflow-y-auto">
            <lessons-side-list
              :text="course.title"
              :description="course.description"
              :lessons="lessons"
            />
          </div>
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
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    course() {
      return COURSES_DATA[this.category];
    },
    related() {
      return Object.values(COURSES_DATA);
    },
  },
};
</script>
