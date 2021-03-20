<template>
  <article-slug-page
    :article="article"
    :next="next"
    :related="related"
    :banner="banner"
    category="blog"
  />
</template>

<script>
import { RECENT_DATA_LIMIT } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('blog', params.slug).fetch();
      let related;

      const [prev, next] = await $content('blog')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'desc')
        .surround(params.slug)
        .fetch();

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('blog')
          .where({ slug: { $ne: slug }, tags: { $containsAny: articleTags } })
          .sortBy('createdAt', 'desc')
          .only(['title', 'path', 'slug'])
          .limit(5)
          .fetch();
      }

      if (store.getters['blog/recentBlogs5'].length === 0) {
        const banners = await $content('blog')
          .only(['path', 'title', 'slug', 'dir'])
          .sortBy('createdAt', 'desc')
          .limit(RECENT_DATA_LIMIT)
          .fetch();

        store.dispatch('blog/setRecentBlogs', banners);
      }

      const banner = store.getters['blog/recentBlogs5'];

      return {
        article,
        prev,
        next,
        related,
        banner,
      };
    } catch (error) {
      redirect('/blog', error);
    }
  },
};
</script>
