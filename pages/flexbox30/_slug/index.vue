<template>
  <lesson-layout
    category="flexbox30"
    :article="article"
    :next="next"
    :lessons="flexbox30Lessons"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Lesson } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('flexbox30', params.slug).fetch();

      const { prev, next } = await Lesson.fetchPrevNext({
        content: $content,
        contentPath: 'flexbox30',
        params,
        store,
        dispatchType: 'course/setRecentFlexbox30',
        stateName: 'recentFlexbox30',
      });

      return {
        article,
        prev,
        next,
      };
    } catch (error) {
      redirect('/flexbox30', error);
    }
  },
  async fetch() {
    await Lesson.dispatchLessons({
      content: this.$content,
      contentPath: 'flexbox30',
      store: this.$store,
      dispatchType: 'course/setFlexbox30Lessons',
      stateName: 'flexbox30Lessons',
    });
  },
  computed: {
    ...mapState('course', ['flexbox30Lessons']),
  },
};
</script>
