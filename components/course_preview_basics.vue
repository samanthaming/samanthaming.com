<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <course-preview
      v-else
      :course="$options.BASICS_DATA"
      :lessons="randomBasicsLessons"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson } from '~/lib';

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
  },
};
</script>
