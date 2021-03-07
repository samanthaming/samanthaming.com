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
      <article class="col-span-9 px-3 md:px-0 xl:col-span-7">
        <div
          class="sm-markdown prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
        >
          <h1 class="text-center lg:text-left text-9xl">
            {{ article.title }}
          </h1>
          <div class="xl:hidden -mt-3 mb-3 flex justify-center">
            <app-image-400 :image="`tidbits/${slug}`" />
          </div>
          <nuxt-content :document="article" />
        </div>
        <!-- Pagination -->
        <div class="flex justify-center md:justify-end mt-10 lg:mt-8">
          <nuxt-link
            :to="next.path"
            class="flex items-center justify-between px-8 rounded-full py-1 bg-gray-light hover:bg-gray text-ink"
          >
            <div class="pr-2">
              <div class="uppercase text-xs text-ink-light">Next Tidbit</div>
              <div>{{ next.title }}</div>
            </div>
            <fa icon="chevron-circle-right" />
          </nuxt-link>
        </div>
      </article>
      <div class="hidden xl:block xl:col-span-3">
        <div class="sticky top-20 overflow-y-auto">
          <app-image-400 :image="`tidbits/${slug}`" />
        </div>
      </div>
    </div>
    <!-- Bottom -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const { slug } = params;
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
        slug,
      };
    } catch (error) {
      redirect('/tidbits');
    }
  },
};
</script>
