<template>
  <lesson-layout
    :article="article"
    :next="next"
    category="basics"
    :lessons="basicsLessons"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { fetchPrevNext } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('basics', params.slug).fetch();

      const { prev, next } = await fetchPrevNext({
        $content,
        params,
        store,
        contentPath: 'basics',
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
    if (this.basicsLessons.length > 0) {
      return;
    }

    const lessons = await this.$content('basics')
      .sortBy('order')
      .only(['path', 'title', 'order'])
      .fetch();

    this.setBasicsLessons(lessons);
  },
  computed: {
    ...mapState('course', ['basicsLessons']),
  },
  methods: {
    ...mapActions('course', ['setBasicsLessons']),
  },
};
</script>
