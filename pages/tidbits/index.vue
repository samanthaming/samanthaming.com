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
      :id="$options.TIDBITS_HASH"
      class="my-10"
      @click="clickFilter"
    />

    <!-- TIDBITS LIST -->
    <div class="px-1 lg:px-3 xl:px-5 2xl:px-10" style="min-height: 300px">
      <!-- Note: min height is to prevent scroll bounce when click filter and tidbits are loading  -->
      <div
        v-for="(tidbits, index) in tidbitChunks"
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
            :key="`tidbit-item-${tidbit.order}`"
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
import AppImage250 from '~/components/image/app_image_250.vue';
import LoadMore from '~/components/load_more.vue';

const FETCH_CHUNK_AMOUNT = 5;
const TIDBITS_HASH = 'tidbits';

export default {
  components: {
    AppImage250,
    LoadMore,
  },
  data: () => ({
    tidbitChunks: [],
    page: 1,
    loading: false,
    hasLoadMore: true,
  }),
  async fetch() {
    const limit = this.pageQuery * FETCH_CHUNK_AMOUNT || FETCH_CHUNK_AMOUNT;
    let tidbits = [];

    if (this.tagQuery) {
      tidbits = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .where({ tags: { $contains: this.tagQuery } })
        .without(['body'])
        .limit(limit)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
    } else {
      tidbits = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .limit(limit)
        .fetch()
        .catch((err) => {
          console.error(err);
        });
    }

    if (this.pageQuery) {
      this.tidbitChunks = _chunk(tidbits, FETCH_CHUNK_AMOUNT);
    } else {
      this.tidbitChunks.push(tidbits);
    }
  },
  computed: {
    // TODO: remove 'totalTidbitsCount', not being used!
    ...mapState(['recentTidbit', 'totalTidbitsCount']),
    pageQuery() {
      return this.$route.query?.page;
    },
    tagQuery() {
      return this.$route.query?.tag;
    },
    currentTidbitsCount() {
      return this.tidbitChunks.flat().length;
    },
  },
  watch: {
    '$route.query.tag'() {
      this.tidbitChunks = [];
      this.resetLoadMore();
      this.$fetch();
    },
  },
  methods: {
    clickLoadMore() {
      const page = +this.pageQuery + 1 || 2;

      this.page = page;
      this.loading = true;

      this.loadMoreTidbits();
    },
    resetLoadMore() {
      this.hasLoadMore = true;
      this.loading = false;
    },
    clickFilter(value) {
      const routerObject = {
        name: 'tidbits',
        hash: `#${TIDBITS_HASH}`,
      };

      if (value) {
        routerObject.query = { tag: value };
      }

      this.$router.push(routerObject);
    },
    incrementPageQuery() {
      const tag = this.tagQuery ? { tag: this.tagQuery } : {};

      this.$router.push({
        name: 'tidbits',
        query: { page: this.page, ...tag },
        hash: `#${this.page}`,
      });
    },
    async loadMoreTidbits() {
      const skip = this.currentTidbitsCount;
      let moreTidbits = [];

      if (this.tagQuery) {
        moreTidbits = await this.$content('tidbits')
          .sortBy('order', 'desc')
          .where({ tags: { $contains: this.tagQuery } })
          .without(['body'])
          .skip(skip)
          .limit(FETCH_CHUNK_AMOUNT)
          .fetch()
          .catch((err) => {
            console.error(err);
          });
      } else {
        moreTidbits = await this.$content('tidbits')
          .sortBy('order', 'desc')
          .without(['body'])
          .skip(skip)
          .limit(FETCH_CHUNK_AMOUNT)
          .fetch()
          .catch((err) => {
            console.error(err);
          });
      }

      if (!moreTidbits.length) {
        this.hasLoadMore = false;
        this.page = +this.page - 1;
        return;
      }

      this.incrementPageQuery();
      this.loading = false;
      this.tidbitChunks.push(moreTidbits);
    },
  },
  TIDBITS_HASH,
};
</script>
