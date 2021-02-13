<template>
  <div class="container mx-auto lg:mt-10">
    <!-- FEATURE BANNER -->
    <div class="flex flex-col lg:flex-row">
      <div
        class="font-head pb-8 px-6 lg:py-6 lg:p-8 pt-10 xxl:pt-8 text-center lg:text-left"
      >
        <h1
          class="leading-tight font-semibold text-2xl sm:text-3xl lg:text-5xl"
        >
          Code Tidbits
        </h1>
        <p class="mt-3 font-light leading-snug sm:text-lg lg:text-2xl">
          Every week I share new JS, HTML, CSS tidbits!
        </p>
      </div>
      <feature-card
        :title="recentTidbit.title"
        :description="recentTidbit.description"
        :path="recentTidbit.path"
        badge="new"
      >
        <app-image-300 :image="`tidbits/${recentTidbit.slug}`" />
      </feature-card>
    </div>
    <!-- TOP TIDBITS -->
    <tidbits-scroll :tidbits="topTidbits" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const tidbits = await $content('tidbits')
        .sortBy('order')
        .without(['body'])
        .fetch();
      const [recentTidbit] = tidbits.slice(-1);

      const topTidbits = await $content('tidbits')
        .without(['body'])
        .where({ order: { $in: [3, 5, 2, 10, 9] } })
        .fetch();

      return {
        tidbits,
        recentTidbit,
        topTidbits,
      };
    } catch (error) {
      // redirect("/posts");
    }
  },
};
</script>
