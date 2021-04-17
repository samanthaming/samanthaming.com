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

export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const { slug } = params;
      const article = await $content('pictorials', params.slug).fetch();
      let related;

      const [prev, next] = await $content('pictorials')
        .only(['title', 'slug', 'order'])
        .sortBy('order')
        .surround(params.slug)
        .fetch();

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('pictorials')
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
      redirect('/pictorials', error);
    }
  },
  async fetch() {
    if (this.setPictorialsLessons.length > 0) {
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
