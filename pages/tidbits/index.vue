<template>
  <div class="mt-7 xs:mt-8 lg:mt-10 mb-16 md:mb-20 lg:mb-24">
    <!-- TOP -->
    <div class="max-w-screen-xl mx-auto">
      <div
        class="xl:min-h-[302px] 2xl:min-h-[350px] grid grid-cols-none md:grid-cols-12 gap-y-5 xs:gap-y-6 sm:gap-y-8 xl:mx-5 2xl:mx-0"
      >
        <!-- LEFT -->
        <div
          class="md:col-span-5 2xl:col-span-4 text-center md:text-left lg:mx-0 md:mt-3 lg:mt-5 px-0.5 md:pl-5 md:pr-3 xl:px-0"
        >
          <h1
            class="font-head font-semibold text-2xl xs:text-3xl lg:text-4xl 2xl:text-5xl leading-tight"
          >
            Code Tidbits
          </h1>
          <p
            class="mt-3 font-light leading-snug text-sm xs:text-lg lg:text-xl xl:text-2xl"
          >
            <span>Every week I share new</span>
            <span class="inline-block md:inline">JS, HTML, CSS tidbits!</span>
          </p>
        </div>
        <!-- RIGHT -->
        <div class="md:col-span-7 2xl:col-span-8 lg:pr-8 xl:pr-14 2xl:pr-20">
          <tidbit-feature />
        </div>
      </div>
    </div>
    <div
      class="mt-10 sm:mt-12 pl-2 sm:pl-3 xl:px-5"
      :class="$options.TW.SECTION_CONTAINER_WIDE"
    >
      <tidbit-scroll />
    </div>
    <!-- Filter scrollTo element: can not be inside sticky div, must be above -->
    <div :id="$route.name"></div>
    <!-- FILTER -->
    <div class="sticky top-navbar z-40">
      <filter-bar class="my-10" type="tidbit" @click="clickFilter" />
    </div>
    <!-- TIDBITS LIST -->
    <div class="tidbit-list-wrap px-2 sm:px-3 xl:px-5 max-w-[2300px]">
      <!-- The loading should improve once converted to GET > https://github.com/nuxt/content/issues/664  -->
      <loading-catalog
        v-if="$fetchState.pending"
        unique-key="tidbits-index-page-loading-catalog"
      />
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
          class="leading-tight xs:leading-tight sm:leading-tight lg:leading-tight text-xs xs:text-2xs sm:text-sm lg:text-base lg:font-medium grid gap-x-2 gap-y-6 xs:gap-y-8 sm:gap-x-3 sm:gap-y-9 md:gap-x-3 md:gap-y-10 lg:gap-x-4 lg:gap-y-12 xl:gap-x-5 xl:gap-y-14 2xl:gap-y-16 grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6"
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
                class="transform duration-200 group-hover:scale-105 group-hover:-translate-y-1"
              >
                <div>
                  <app-image
                    dir="tidbits"
                    :img="slug"
                    class="shadow-dark"
                    width="330"
                    height="330"
                  />
                </div>
              </div>
              <div class="">
                <heading-tag class="mt-2 sm:mt-3 line-clamp-2" :level="4">
                  {{ title }}
                </heading-tag>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
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
import { TW } from '~/lib';

const FETCH_CHUNK_AMOUNT = 20;

export default {
  TW,
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

<style scoped>
/* Reference for size: modules/tailwind/size.js */

@media (min-width: 2560px) {
  .tidbit-list-wrap ul {
    @apply grid-cols-6 gap-x-10;
  }
}
</style>
