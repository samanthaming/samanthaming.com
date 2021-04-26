<template>
  <div>
    <loading-component v-if="$fetchState.pending" />
    <course-preview
      v-else
      :course="$options.PICTORIALS_DATA"
      :lessons="randomPictorialsLessons"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { COURSES_DATA, Lesson } from '~/lib';

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
  },
};
</script>
