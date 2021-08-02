<template>
  <article-layout
    :article="article"
    :next="next"
    :related="related"
    category="tidbits"
  >
    <template #bottom>
      <tidbit-scroll
        class="mt-16"
        direction="left"
        background="orange"
        text="Top Tidbits"
      />
    </template>
  </article-layout>
</template>

<script>
import { Tidbit } from '~/lib';

export default {
  async asyncData({ $content, params, redirect, store }) {
    try {
      const { slug } = params;
      const article = await $content('tidbits', params.slug).fetch();
      let related; // FIXME: this doesn't makes sense, we should add default. If no related, use recent or empty array.

      const { prev, next } = await Tidbit.fetchPrevNext({
        content: $content,
        params,
        store,
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
