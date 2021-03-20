<template>
  <article-slug-page
    :article="article"
    :next="next"
    :related="related"
    :banner="banner"
    category="tidbits"
  />
</template>

<script>
import { RECENT_DATA_LIMIT } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('tidbits', params.slug).fetch();
      let related;

      const [prev, next] = await $content('tidbits')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug) // same as: .surround(params.slug, { before: 1, after: 1 })
        .fetch();

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('tidbits')
          .where({ slug: { $ne: slug }, tags: { $containsAny: articleTags } })
          .sortBy('order', 'desc')
          .only(['title', 'path', 'slug'])
          .limit(5)
          .fetch();
      }

      if (store.getters['tidbit/recentTidbits5'].length === 0) {
        const banners = await $content('tidbits')
          .only(['path', 'title', 'slug', 'dir'])
          .sortBy('createdAt', 'desc')
          .limit(RECENT_DATA_LIMIT)
          .fetch();

        store.dispatch('tidbit/setRecentTidbits', banners);
      }

      const banner = store.getters['tidbit/recentTidbits5'];

      return {
        article,
        prev,
        next,
        related,
        banner,
      };
    } catch (error) {
      // redirect('/tidbits');
    }
  },
};
</script>
