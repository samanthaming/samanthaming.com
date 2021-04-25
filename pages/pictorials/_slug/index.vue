<template>
  <lesson-layout
    :article="article"
    :next="next"
    category="pictorials"
    :lessons="pictorialsLessons"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Lesson } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('pictorials', params.slug).fetch();

      const { prev, next } = await Lesson.fetchPrevNext({
        content: $content,
        contentPath: 'pictorials',
        params,
        store,
        dispatchType: 'course/setRecentPictorials',
        stateName: 'recentPictorials',
      });

      return {
        article,
        prev,
        next,
      };
    } catch (error) {
      redirect('/pictorials', error);
    }
  },
  async fetch() {
    await Lesson.dispatchAll({
      content: this.$content,
      contentPath: 'pictorials',
      store: this.$store,
      dispatchType: 'course/setPictorialsLessons',
      stateName: 'pictorialsLessons',
    });
  },
  computed: {
    ...mapState('course', ['pictorialsLessons']),
  },
};
</script>
