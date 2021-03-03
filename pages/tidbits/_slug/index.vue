<template>
  <div class="container mx-auto mt-10">
    <div class="lg:grid grid-cols-10 gap-x-6">
      <article class="col-span-7 overflow-auto">
        <div class="max-w-prose">
          <h1 class="font-head font-bold text-4xl mb-8">
            {{ article.title }}
          </h1>
        </div>

        <nuxt-content
          class="sm-markdown prose prose-lg max-w-none"
          :document="article"
        />
      </article>
      <div class="col-span-3">
        <div class="sticky top-20 overflow-y-auto">
          <h5
            class="text-ink uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"
          >
            On this page
          </h5>
          <toc :toc="article.toc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const article = await $content('tidbits', params.slug).fetch();

      const [prev, next] = await $content('tidbits')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug) // same as: .surround(params.slug, { before: 1, after: 1 })
        .fetch();

      return {
        article,
        prev,
        next,
      };
    } catch (error) {
      redirect('/tidbits');
    }
  },
};
</script>
