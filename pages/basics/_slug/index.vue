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
import { Lesson, routeMeta } from '~/lib';

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
      store.dispatch('app/setFlash', {
        message: 'Oops! Code Basics page not found.',
      });
      redirect('/basics', error);
    }
  },
  async fetch() {
    await Lesson.dispatchAll({
      content: this.$content,
      contentPath: 'basics',
      store: this.$store,
      dispatchType: 'course/setBasicsLessons',
      stateName: 'basicsLessons',
    });
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path }, this.article);
  },
  computed: {
    ...mapState('course', ['basicsLessons']),
  },
};
</script>
