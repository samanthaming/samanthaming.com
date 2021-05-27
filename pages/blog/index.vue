<template>
  <div class="mt-8 lg:mt-10 mb-16 md:mb-20 lg:mb-24">
    <div class="page-container">
      <div class="grid gap-x-10 grid-cols-1 lg:grid-cols-12">
        <div class="col-span-6 order-2 lg:order-1">
          <section-head
            class="mb-3 mt-5 lg:-mt-2"
            color="green"
            text="Top Articles"
            size="sm"
            direction="left"
          />
          <blog-feature-list />
        </div>
        <div class="col-span-6 order-1 lg:order-2">
          <blog-feature />
        </div>
      </div>
    </div>
    <div class="page-container-full">
      <filter-bar
        :id="$route.name"
        color="green"
        type="blog"
        class="mt-8"
        @click="clickFilter"
      />
    </div>
    <div class="mt-10 page-container">
      <div class="md:grid grid-cols-10 gap-x-10">
        <!-- LEFT LIST -->
        <div class="col-span-6">
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
            <ul class="space-y-3 divide-y divide-gray-lighter">
              <li
                v-for="blog in blogs"
                :key="blog.slug"
                class="grid grid-cols-10 gap-x-3 pt-3"
              >
                <div class="col-span-3 md:col-span-4 lg:col-span-2 group">
                  <nuxt-link
                    :to="blog.path"
                    class="transform duration-100 block group-hover:scale-105"
                  >
                    <page-image dir="blog" :img="blog.slug" />
                  </nuxt-link>
                </div>
                <div class="col-span-7 md:col-span-6 lg:col-span-8">
                  <div class="max-w-prose">
                    <nuxt-link :to="blog.path" class="hover:text-fuscia">
                      <h4
                        class="font-body font-semibold leading-none text-sm sm:text-base lg:text-lg mt-1"
                      >
                        {{ blog.title }}
                      </h4>
                    </nuxt-link>
                    <p
                      class="text-xs sm:text-sm lg:text-base mt-2 text-ink-lighter font-body"
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
        <div class="col-span-4 mt-10 md:mt-0">
          <tidbit-side />
          <course-side-list class="mt-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _chunk from 'lodash/chunk';
import { resultMixin } from '../result.mixin';

const FETCH_CHUNK_AMOUNT = 10;

export default {
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
