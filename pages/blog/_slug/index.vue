<template>
  <article-slug-page
    :article="article"
    :next="next"
    :related="related"
    category="blog"
  >
    <template #bottom>
      <blog-banner size="md" text="Fresh Articles" direction="left" />
    </template>
  </article-slug-page>
</template>

<script>
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
      } else {
        console.log(store);
      }

      return {
        article,
        prev,
        next,
        related,
      };
    } catch (error) {
      redirect('/blog');
    }
  },
};
</script>
