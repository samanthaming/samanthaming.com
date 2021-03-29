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
    </div>
    <div class="page-container">
      <tidbit-scroll />
    </div>
    <!-- FILTER -->
    <div>
      <filter-bar
        :id="$route.name"
        class="my-10"
        type="tidbit"
        @click="clickFilter"
      />
    </div>
    <!-- TIDBITS LIST -->
    <div class="tidbit-list-wrap p-container" style="min-height: 300px">
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
          class="leading-tight md:leading-tight text-xs sm:text-sm md:text-base lg:font-medium grid gap-3 sm:gap-5 md:gap-8 xl:gap-10 2xl:gap-x-12 2xl:gap-y-10 lg:mx-3 grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
        >
          <li
            v-for="{ slug, title, path } in tidbits"
            :key="`tidbit-item-${slug}`"
            class=""
          >
            <nuxt-link
              :to="path"
              class="hover:text-fuscia group"
              :title="title"
            >
              <div
                class="transform duration-200 group-hover:scale-105 group-hover:-translate-y-1"
              >
                <div class="">
                  <app-image dir="tidbits" :img="slug" class="shadow-dark" />
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

const FETCH_CHUNK_AMOUNT = 20;

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

<style scoped>
/* Reference for size: modules/tailwind/size.js */

@media (min-width: 1920px) {
  .tidbit-list-wrap {
    @apply mx-5;
  }

  .tidbit-list-wrap ul {
    @apply grid-cols-6;
  }
}

@media (min-width: 2560px) {
  .tidbit-list-wrap {
    @apply mx-10;
  }

  .tidbit-list-wrap ul {
    @apply gap-x-14 text-lg leading-tight;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (min-width: 3840px) {
  .tidbit-list-wrap {
    margin-right: 3%;
    margin-left: 3%;
  }

  .tidbit-list-wrap ul {
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  }
}
</style>
