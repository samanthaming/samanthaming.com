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

export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const { slug } = params;
      const article = await $content('basics', params.slug).fetch();
      let related;

      const [prev, next] = await $content('basics')
        .only(['title', 'slug', 'order'])
        .sortBy('order')
        .surround(params.slug)
        .fetch();

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('basics')
          .where({ slug: { $ne: slug }, tags: { $containsAny: articleTags } })
          .sortBy('order')
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
      redirect('/basics', error);
    }
  },
  async fetch() {
    if (this.setBasicsLessons.length > 0) {
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
