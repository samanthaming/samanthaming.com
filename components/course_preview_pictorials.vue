<template>
  <course-preview
    :course="$options.PICTORIALS_DATA"
    :lessons="randomPictorialsLessons"
    :pending="isLoading"
  />
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson, isArrayEmpty } from '~/lib';

const { pictorials: PICTORIALS_DATA } = COURSES_DATA;

export default {
  PICTORIALS_DATA,
  async fetch() {
    await Lesson.dispatchRandom({
      content: this.$content,
      contentPath: 'pictorials',
      store: this.$store,
      stateName: 'randomPictorialsLessons',
      dispatchType: 'course/setRandomPictorialsLessons',
      size: PICTORIALS_DATA.size,
    });
  },
  computed: {
    ...mapState('course', ['randomPictorialsLessons']),
    isLoading() {
      return (
        this.$fetchState.pending && isArrayEmpty(this.randomPictorialsLessons)
      );
    },
  },
};
</script>
