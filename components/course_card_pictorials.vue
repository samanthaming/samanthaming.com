<template>
  <course-card :course="$options.PICTORIALS_DATA" :lessons="lessons" />
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters({ lessons: 'course/randomPictorialsLessons3' }),
  },
};
</script>
