<template>
  <article-layout
    :article="article"
    :next="next"
    :related="related"
    category="blog"
  >
    <template #bottom>
      <blog-scroll background="green" />
    </template>
  </article-layout>
</template>

<script>
import { Blog, routeMeta } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('blog', params.slug).fetch();
      let related; // FIXME: this doesn't makes sense, we should add default. If no related, use recent or empty array.

      const { prev, next } = await Blog.fetchPrevNext({
        content: $content,
        params,
        store,
      });

      const articleTags = article.tags || [];

      if (articleTags.length > 0) {
        related = await $content('blog')
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
      store.dispatch('app/setFlash', { message: 'Oops! Blob page not found.' });
      redirect('/blog', error);
    }
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path }, this.article);
  },
};
</script>
