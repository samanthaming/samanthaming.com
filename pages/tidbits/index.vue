<template>
  <div class="mt-8 lg:mt-10">
    <!-- TOP -->
    <div class="max-w-screen-2xl mx-auto">
      <div class="lg:grid grid-cols-10 gap-x-4 lg:px-5">
        <!-- LEFT -->
        <div
          class="col-span-3 xl:col-span-4 pb-8 px-2 sm:px-3 lg:px-0 lg:pt-8 font-head text-center lg:text-left"
        >
          <h1
            class="leading-tight font-semibold text-3xl md:text-4xl 2xl:text-5xl"
          >
            Code Tidbits
          </h1>
          <p class="mt-3 font-light leading-snug text-xl xl:text-2xl">
            Every week I share new JS, HTML, CSS tidbits!
          </p>
        </div>
        <!-- RIGHT -->
        <div class="col-span-7 xl:col-span-6">
          <tidbit-feature />
        </div>
      </div>
      <tidbit-scroll />
    </div>
    <!-- FILTER -->
    <filter-bar
      :id="$route.name"
      class="my-10"
      type="tidbit"
      @click="clickFilter"
    />

    <!-- TIDBITS LIST -->
    <div class="px-2 sm:px-3 xl:px-5 2xl:px-10" style="min-height: 300px">
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
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-8"
        >
          <li
            v-for="{ slug, title, path } in tidbits"
            :key="`tidbit-item-${slug}`"
          >
            <nuxt-link
              :to="path"
              class="hover:text-fuscia group"
              :title="title"
            >
              <div
                class="transform duration-200 shadow-md-dark group-hover:scale-105 group-hover:-translate-y-1"
              >
                <app-image dir="tidbits" :img="slug" class="" />
              </div>
              <heading-tag
                class="leading-tight lg:leading-tight mt-2 line-clamp-2 text-xs sm:text-sm lg:text-base"
                :level="4"
              >
                {{ title }}
              </heading-tag>
            </nuxt-link>
          </li>
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
import _chunk from 'lodash/chunk';
import { resultMixin } from '../result.mixin';

const FETCH_CHUNK_AMOUNT = 6;

export default {
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
