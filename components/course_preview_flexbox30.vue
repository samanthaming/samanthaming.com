<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <course-preview
      v-else
      :course="$options.FLEXBOX30_DATA"
      :lessons="randomFlexbox30Lessons"
      :order="true"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
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
  },
};
</script>
