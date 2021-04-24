<template>
  <article-layout
    :article="article"
    :next="next"
    :related="related"
    category="tidbits"
  />
</template>

<script>
import { fetchRecentTidbits, TEMPfetchPrevNext } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('tidbits', params.slug).fetch();
      let related; // FIXME: this doesn't makes sense, we should add default. If no related, use recent or empty array.

      // http://localhost:3000/tidbits/1-convert-array-like-to-true-array
      const { prev, next } = await TEMPfetchPrevNext({
        content: $content,
        params,
        store,
        contentPath: 'tidbits',
        fetchRecent: fetchRecentTidbits,
      });

      // TAGS
      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('tidbits')
          .where({ slug: { $ne: slug }, tags: { $containsAny: articleTags } })
          .sortBy('order', 'desc')
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
      redirect('/tidbits');
    }
  },
};
</script>
