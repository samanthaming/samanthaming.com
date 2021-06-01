<template>
  <course-preview
    :course="$options.FLEXBOX30_DATA"
    :lessons="randomFlexbox30Lessons"
    :order="true"
    :pending="isLoading"
    :hide-header="hideHeader"
  />
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson, isArrayEmpty } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  async fetch() {
    await Lesson.dispatchRandom({
      content: this.$content,
      contentPath: 'flexbox30',
      store: this.$store,
      stateName: 'randomFlexbox30Lessons',
      dispatchType: 'course/setRandomFlexbox30Lessons',
      size: FLEXBOX30_DATA.size,
    });
  },
  computed: {
    ...mapState('course', ['randomFlexbox30Lessons']),
    isLoading() {
      return (
        this.$fetchState.pending && isArrayEmpty(this.randomFlexbox30Lessons)
      );
    },
  },
};
</script>
