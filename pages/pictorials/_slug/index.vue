<template>
  <lesson-layout
    :article="article"
    :next="next"
    category="pictorials"
    :lessons="pictorialsLessons"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { fetchCoursePrevNext } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('pictorials', params.slug).fetch();

      const { prev, next } = await fetchCoursePrevNext({
        $content,
        params,
        store,
        contentPath: 'pictorials',
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
    if (this.pictorialsLessons.length > 0) {
      return;
    }

    const lessons = await this.$content('pictorials')
      .sortBy('order')
      .only(['path', 'title', 'order'])
      .fetch();

    this.setPictorialsLessons(lessons);
  },
  computed: {
    ...mapState('course', ['pictorialsLessons']),
  },
  methods: {
    ...mapActions('course', ['setPictorialsLessons']),
  },
};
</script>
