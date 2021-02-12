<template>
  <div class="container-wide mx-auto lg:mt-10">
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
        <app-image-300
          img="tidbits/1-convert-array-like-to-true-array"
          :size="300"
        />
      </feature-card>
    </div>
    <!-- TOP TIDBITS -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const tidbits = await $content('tidbits').without(['body']).fetch();
      const [recentTidbit] = tidbits;

      return {
        tidbits,
        recentTidbit,
      };
    } catch (error) {
      // redirect("/posts");
    }
  },
};
</script>
