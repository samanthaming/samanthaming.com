<template>
  <div>
    <div class="w-full max-w-10xl mx-auto mt-10 lg:px-5">
      <div class="lg:grid grid-cols-12 gap-5">
        <!-- LEFT -->
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
        <!-- CENTER -->
        <div class="col-span-9 px-3 lg:px-0 xl:col-span-7">
          <article class="mx-auto lg:mx-0 xl:mx-auto max-w-prose">
            <h1
              class="text-3xl lg:text-4xl xl:text-5xl font-head font-bold mb-3 lg:mb-5"
            >
              {{ article.title }}
            </h1>

            <article-avatar class="mb-8" :updated-at="article.updatedAt" />

            <div class="xl:hidden mb-3 flex justify-center">
              <app-image dir="blog" :img="article.slug" />
            </div>
            <nuxt-content
              class="sm-markdown prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
              :document="article"
            />
          </article>
          <!-- TODO: add prev support -->
          <article-pagination
            v-if="next"
            :path="next.path"
            :title="next.title"
            label="Next Article"
          />
          <article-share
            :path="article.path"
            :title="article.title"
            :description="article.description"
            color="green"
          />
          <article-community-edit :path="article.path" />
          <article-related
            class="mt-14"
            color="green"
            text="articles"
            :related="related"
          />
        </div>
        <!-- RIGHT -->
        <div class="hidden xl:block xl:col-span-3">
          <app-image dir="blog" :img="article.slug" />
          <article-side-share
            color="green"
            :path="article.path"
            :title="article.title"
            :description="article.description"
          />
          <tidbit-side class="mt-10" breakpoint="xl" />
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <div class="mx-auto mt-20">
      <blog-banner size="md" text="Fresh Articles" direction="left" />
    </div>
  </div>
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
        slug,
        related,
      };
    } catch (error) {
      redirect('/blog');
    }
  },
};
</script>
