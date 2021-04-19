<template>
  <lesson-layout
    category="flexbox30"
    :article="article"
    :next="next"
    :lessons="flexbox30Lessons"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { fetchPrevNext } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const article = await $content('flexbox30', params.slug).fetch();

      const { prev, next } = await fetchPrevNext({
        $content,
        params,
        store,
        contentPath: 'flexbox30',
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
    if (this.flexbox30Lessons.length > 0) {
      return;
    }

    const lessons = await this.$content('flexbox30')
      .sortBy('order')
      .only(['path', 'title', 'order'])
      .fetch();

    this.setFlexbox30Lessons(lessons);
  },
  computed: {
    ...mapState('course', ['flexbox30Lessons']),
  },
  methods: {
    ...mapActions('course', ['setFlexbox30Lessons']),
  },
};
</script>
