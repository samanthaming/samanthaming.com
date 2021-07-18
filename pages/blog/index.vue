<template>
  <div class="mt-8 lg:mt-10 mb-16 md:mb-20 lg:mb-24">
    <!-- HERO -->
    <div
      :class="[$options.TW.SECTION_CONTAINER, $options.TW.SECTION_P_DESKTOP]"
    >
      <div :class="$options.TW.HERO_BLOG_CONTAINER">
        <!-- List -->
        <div :class="$options.TW.HERO_BLOG_LIST">
          <section-head
            class="mb-3 mt-5 md:-mt-2"
            color="green"
            text="Top Articles"
            size="md"
            direction="left"
            to="blog"
          />
          <blog-feature-list />
        </div>
        <!-- Image -->
        <div :class="$options.TW.HERO_BLOG_FEATURE">
          <blog-feature />
        </div>
      </div>
    </div>
    <!-- Filter scrollTo element: can not be inside sticky div, must be above -->
    <div :id="$route.name"></div>
    <!-- FILTER -->
    <div class="sticky top-navbar z-40">
      <filter-bar color="green" type="blog" class="mt-8" @click="clickFilter" />
    </div>
    <!-- CONTENT -->
    <div
      class="mt-10 px-3 sm:px-5 md:px-3 lg:px-6"
      :class="[
        $options.TW.SECTION_CONTAINER_WIDE,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <div
        class="md:grid md:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-10 md:gap-x-3 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-24"
      >
        <!-- LEFT LIST -->
        <div class="col-span-9 lg:col-span-8 2xl:col-span-6 sm:pr-5 lg:pr-0">
          <loading-list
            v-if="$fetchState.pending"
            unique-key="blog-index-page-loading-list"
            height="190"
          />
          <div
            v-for="(blogs, index) in resultChunks"
            v-else
            :key="`blog-chunks-${index}`"
          >
            <page-chunk-divider
              color="green"
              :number="`${+index + 1}`"
              :class="index === 0 ? 'invisible' : 'my-10'"
            />
            <ul class="space-y-4 xl:space-y-3 divide-y divide-gray-lighter">
              <li
                v-for="blog in blogs"
                :key="blog.slug"
                class="grid grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 gap-x-3 xl:gap-x-5 pt-3 2xl:pt-4"
              >
                <!-- Image -->
                <div
                  class="col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3 2xl:col-span-3 group"
                >
                  <nuxt-link
                    :to="blog.path"
                    class="transform duration-100 block group-hover:scale-105"
                  >
                    <app-image
                      dir="blog"
                      :img="blog.slug"
                      width="280"
                      height="158"
                      class="shadow-dark"
                    />
                  </nuxt-link>
                </div>
                <!-- Content -->
                <div
                  class="col-span-7 md:col-span-7 lg:col-span-8 xl:col-span-9 2xl:col-span-7"
                >
                  <div class="max-w-prose">
                    <nuxt-link :to="blog.path" class="hover:text-fuscia">
                      <h4
                        class="font-body font-semibold leading-none text-sm sm:text-base xl:text-xl 2xl:text-2xl xl:mt-1"
                      >
                        {{ blog.title }}
                      </h4>
                    </nuxt-link>
                    <p
                      class="text-xs sm:text-sm xl:text-base mt-2 text-ink-lighter font-body max-w-prose"
                    >
                      {{ blog.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="lg:container mx-auto">
            <load-more
              v-if="hasLoadMore"
              class="mt-10"
              color="green"
              :loading="loading"
              @click="clickLoadMore"
            />
          </div>
        </div>
        <!-- RIGHT SIDE -->
        <div class="col-span-3 lg:col-span-4 2xl:col-span-4 mt-10 md:mt-0">
          <tidbit-side />
          <course-side-list breakpoint="sm" class="mt-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _chunk from 'lodash/chunk';
import { resultMixin } from '../result.mixin';
import { TW } from '~/lib';

const FETCH_CHUNK_AMOUNT = 10;

export default {
  TW,
  mixins: [resultMixin],
  async fetch() {
    const limit = this.pageQuery * FETCH_CHUNK_AMOUNT || FETCH_CHUNK_AMOUNT;
    let results = [];

    if (this.tagQuery) {
      results = await this.$content('blog')
        .sortBy('createdAt', 'desc')
        .where({ tags: { $contains: this.tagQuery } })
        .only(['slug', 'path', 'title', 'description'])
        .limit(limit)
        .fetch();
    } else {
      results = await this.$content('blog')
        .sortBy('createdAt', 'desc')
        .only(['slug', 'path', 'title', 'description'])
        .limit(limit)
        .fetch();
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
        moreResults = await this.$content('blog')
          .sortBy('createdAt', 'desc')
          .where({ tags: { $contains: this.tagQuery } })
          .only(['slug', 'path', 'title', 'description'])
          .skip(skip)
          .limit(FETCH_CHUNK_AMOUNT)
          .fetch()
          .catch((err) => {
            console.error(err);
          });
      } else {
        moreResults = await this.$content('blog')
          .sortBy('createdAt', 'desc')
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
