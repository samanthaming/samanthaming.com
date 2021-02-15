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

    <hr class="my-10" />

    <!-- TIDBITS -->
    <ul
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8"
    >
      <tidbit-item
        v-for="tidbit in tidbits"
        :key="`tidbit-item-${tidbit.order}`"
        :title="tidbit.title"
        :path="tidbit.path"
        :image="tidbit.slug"
      />
    </ul>

    <!-- LOAD MORE -->
    <load-more
      v-if="hasLoadMore"
      :loading="loading"
      class="mt-10"
      @click="onClick"
    />
  </div>
</template>

<script>
const INTITAL_TIDBITS_COUNT = 5;

export default {
  async asyncData({ $content, query, redirect, route }) {
    const { page } = query;
    const limitNumber = page ? page * 5 : 5;
    try {
      const tidbits = await $content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .limit(limitNumber)
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
        initialTidbitsLength: tidbits.length,
      };
    } catch (error) {
      // redirect("/posts");
    }
  },
  data: () => ({
    tidbits: [],
    initialTidbitsLength: 0,
    pageNumber: 1,
    loading: false,
    hasLoadMore: true,
  }),
  mounted() {
    // When page is refresh, the "page" query param is not picked up
    // (Not an issue if refresh on the client side due to how vue router works)
    // Once mounted is triggered, the query will be recognized
    // So we're calling fetch again (which will load the tidbits), if needed
    const { page } = this.$route.query;

    if (page && this.initialTidbitsLength !== INTITAL_TIDBITS_COUNT * page) {
      console.log('re-hydrate');
      this.loading = true;
      this.replenishMissingTidbits();
    }
  },
  methods: {
    onClick() {
      this.loading = true;
      this.pageNumber++;
      this.loadMoreTidbits();
      this.$router.push({ name: 'tidbits', query: { page: this.pageNumber } });
    },
    async replenishMissingTidbits() {
      const { page } = this.$route.query;

      const missingTidbitsCount =
        page * INTITAL_TIDBITS_COUNT - INTITAL_TIDBITS_COUNT;

      const moreTidbits = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .skip(INTITAL_TIDBITS_COUNT)
        .limit(missingTidbitsCount)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
      this.loading = false;
      this.tidbits.push(...moreTidbits);
    },
    async loadMoreTidbits() {
      const skipNumber = this.pageNumber * 5;
      const moreTidbits = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .skip(skipNumber)
        .limit(5)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
      this.loading = false;

      if (!moreTidbits.length) {
        this.hasLoadMore = false;
      }

      this.tidbits.push(...moreTidbits);
    },
  },
};
</script>
