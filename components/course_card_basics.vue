<template>
  <course-card :course="$options.BASICS_DATA" :lessons="lessons" />
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters({ lessons: 'course/randomBasicsLessons3' }),
  },
};
</script>
