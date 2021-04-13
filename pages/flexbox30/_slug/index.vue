<template>
  <lesson-layout
    :article="article"
    :next="next"
    category="flexbox30"
    :lessons="flexbox30Lessons"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('flexbox30', params.slug).fetch();
      let related;

      const [prev, next] = await $content('flexbox30')
        .only(['title', 'slug', 'order'])
        .sortBy('createdAt', 'desc')
        .surround(params.slug)
        .fetch();

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('flexbox30')
          .where({ slug: { $ne: slug }, tags: { $containsAny: articleTags } })
          .sortBy('createdAt', 'desc')
          .only(['title', 'path', 'slug'])
          .limit(5)
          .fetch();
      }

      return {
        article,
        prev,
        next,
        related,
      };
    } catch (error) {
      redirect('/flexbox30', error);
    }
  },
  async fetch() {
    if (this.setFlexbox30Lessons.length > 0) {
      return;
    }

    const lessons = await this.$content('flexbox30')
      .sortBy('order')
      .only(['path', 'title', 'order', 'slug'])
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
