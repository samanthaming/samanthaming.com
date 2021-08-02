<template>
  <article-layout
    :article="article"
    :next="next"
    :related="related"
    :category="category"
  >
    <template #center>
      <lessons-table
        class="-mt-3"
        :text="course.title"
        :description="course.description"
        :lessons="lessons"
        :to="course.slug"
      />
    </template>
    <template #right>
      <lessons-side-list
        :text="course.title"
        :description="course.description"
        :lessons="lessons"
        :to="course.slug"
      />
    </template>
    <template #bottom>
      <tidbit-scroll direction="left" background="orange" text="Top Tidbits" />
    </template>
  </article-layout>
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
      const { [this.category]: currentCourse, ...otherCourse } = COURSES_DATA;

      return Object.values(otherCourse);
    },
  },
};
</script>
