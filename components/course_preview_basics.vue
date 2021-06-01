<template>
  <course-preview
    :course="$options.BASICS_DATA"
    :lessons="randomBasicsLessons"
    :pending="isLoading"
  />
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson, isArrayEmpty } from '~/lib';

const { basics: BASICS_DATA } = COURSES_DATA;

export default {
  BASICS_DATA,
  async fetch() {
    await Lesson.dispatchRandom({
      content: this.$content,
      contentPath: 'basics',
      store: this.$store,
      stateName: 'randomBasicsLessons',
      dispatchType: 'course/setRandomBasicsLessons',
      size: BASICS_DATA.size,
    });
  },
  computed: {
    ...mapState('course', ['randomBasicsLessons']),
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.randomBasicsLessons);
    },
  },
};
</script>
