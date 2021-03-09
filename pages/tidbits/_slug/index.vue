<template>
  <div class="w-full max-w-10xl mx-auto mt-10 lg:px-3">
    <div class="lg:grid grid-cols-12 gap-3">
      <div class="hidden lg:block col-span-3 xl:col-span-2">
        <div class="sticky top-20 overflow-y-auto">
          <h5
            class="text-ink uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"
          >
            On this page
          </h5>
          <toc :toc="article.toc" />
        </div>
      </div>
      <div class="col-span-9 px-3 lg:px-0 xl:col-span-7">
        <article
          class="sm-markdown prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
        >
          <h1 class="text-center lg:text-left">
            {{ article.title }}
          </h1>

          <div class="xl:hidden -mt-3 mb-3 flex justify-center">
            <app-image-400 :image="`tidbits/${slug}`" />
          </div>
          <nuxt-content :document="article" />
        </article>
        <article-pagination
          :path="next.path"
          :title="next.title"
          label="Next Tidbit"
        />
        <article-share
          :path="article.path"
          :title="article.title"
          :description="article.description"
        />
        <article-community-edit :path="article.path" />
        <article-related class="mt-14" text="tidbits" :related="related" />
      </div>
      <div class="hidden xl:block xl:col-span-3">
        <div class="sticky top-20 overflow-y-auto">
          <app-image-400 :image="`tidbits/${slug}`" />
          <article-side-share
            :path="article.path"
            :title="article.title"
            :description="article.description"
          />
        </div>
      </div>
    </div>
    <!-- Bottom -->
  </div>
</template>

<script>
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
        related = await await $content('tidbits')
          .where({ tags: { $contains: articleTags } })
          .sortBy('order', 'desc')
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
        slug,
        related,
      };
    } catch (error) {
      redirect('/tidbits');
    }
  },
};
</script>
