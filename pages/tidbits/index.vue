<template>
  <div class="mt-8 lg:mt-10">
    <div class="lg:container mx-auto">
      <!-- FEATURE BANNER -->
      <div class="lg:grid grid-cols-8">
        <div
          class="pb-8 px-2 sm:px-3 lg:px-0 lg:pt-8 font-head text-center lg:text-left col-span-3"
        >
          <h1
            class="leading-tight font-semibold text-3xl lg:text-4xl 2xl:text-5xl"
          >
            Code Tidbits
          </h1>
          <p class="mt-3 font-light leading-snug text-xl xl:text-2xl">
            Every week I share new JS, HTML, CSS tidbits!
          </p>
        </div>
        <feature-card
          :title="recentTidbit.title"
          :description="recentTidbit.description"
          :path="recentTidbit.path"
          badge="new"
          class="col-span-5"
        >
          <app-image-250 :image="`tidbits/${recentTidbit.slug}`" />
        </feature-card>
      </div>
      <tidbits-scroll direction="left" />
    </div>
    <!-- FILTER -->
    <filter-bar
      :id="$route.name"
      class="my-10"
      type="tidbit"
      @click="clickFilter"
    />

    <!-- TIDBITS LIST -->
    <div class="px-1 lg:px-3 xl:px-5 2xl:px-10" style="min-height: 300px">
      <!-- Note: min height is to prevent scroll bounce when click filter and tidbits are loading  -->
      <loading-component v-if="$fetchState.pending" />
      <div
        v-for="(tidbits, index) in resultChunks"
        v-else
        :key="`tidbit-chunks-${index}`"
      >
        <page-chunk-divider
          color="orange"
          :number="`${+index + 1}`"
          :class="index === 0 ? 'invisible' : 'mt-5 mb-10'"
        />
        <ul
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-8 justify-items-center"
        >
          <tidbit-item
            v-for="tidbit in tidbits"
            :key="`tidbit-item-${tidbit.slug}`"
            :title="tidbit.title"
            :path="tidbit.path"
            :image="tidbit.slug"
          />
        </ul>
      </div>
    </div>

    <div class="lg:container mx-auto">
      <load-more
        v-if="hasLoadMore"
        class="mt-16"
        color="orange"
        :loading="loading"
        @click="clickLoadMore"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import _chunk from 'lodash/chunk';
import { resultMixin } from '../result.mixin';
import AppImage250 from '~/components/image/app_image_250.vue';
import LoadMore from '~/components/load_more.vue';

const FETCH_CHUNK_AMOUNT = 5;

export default {
  components: {
    AppImage250,
    LoadMore,
  },
  mixins: [resultMixin],
  async fetch() {
    const limit = this.pageQuery * FETCH_CHUNK_AMOUNT || FETCH_CHUNK_AMOUNT;
    let results = [];

    if (this.tagQuery) {
      results = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .where({ tags: { $contains: this.tagQuery } })
        .only(['slug', 'path', 'title', 'description'])
        .limit(limit)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
    } else {
      results = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .only(['slug', 'path', 'title', 'description'])
        .limit(limit)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
    }

    if (this.pageQuery) {
      this.resultChunks = _chunk(results, FETCH_CHUNK_AMOUNT);
    } else {
      this.resultChunks.push(results);
    }
  },
  computed: {
    ...mapState(['recentTidbit']),
  },
  methods: {
    async loadMoreResults() {
      const skip = this.currentResultsCount;
      let moreResults = [];

      if (this.tagQuery) {
        moreResults = await this.$content('tidbits')
          .sortBy('order', 'desc')
          .where({ tags: { $contains: this.tagQuery } })
          .only(['slug', 'path', 'title', 'description'])
          .skip(skip)
          .limit(FETCH_CHUNK_AMOUNT)
          .fetch()
          .catch((err) => {
            console.error(err);
          });
      } else {
        moreResults = await this.$content('tidbits')
          .sortBy('order', 'desc')
          .only(['slug', 'path', 'title', 'description'])
          .skip(skip)
          .limit(FETCH_CHUNK_AMOUNT)
          .fetch()
          .catch((err) => {
            console.error(err);
          });
      }

      if (!moreResults.length) {
        this.hasLoadMore = false;
        this.page = +this.page - 1;
        return;
      }

      this.incrementPageQuery();
      this.loading = false;
      this.resultChunks.push(moreResults);
    },
  },
};
</script>
