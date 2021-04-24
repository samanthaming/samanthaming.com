<template>
  <lesson-layout
    :article="article"
    :next="next"
    category="basics"
    :lessons="basicsLessons"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Lesson } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('basics', params.slug).fetch();

      const { prev, next } = await Lesson.fetchPrevNext({
        content: $content,
        contentPath: 'basics',
        params,
        store,
        dispatchType: 'course/setRecentBasics',
        stateName: 'recentBasics',
      });

      return {
        article,
        prev,
        next,
      };
    } catch (error) {
      redirect('/basics', error);
    }
  },
  async fetch() {
    await Lesson.dispatchLessons({
      content: this.$content,
      contentPath: 'basics',
      store: this.$store,
      dispatchType: 'course/setBasicsLessons',
      stateName: 'basicsLessons',
    });
  },
  computed: {
    ...mapState('course', ['basicsLessons']),
  },
};
</script>
