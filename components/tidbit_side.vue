<template>
  <div>
    <section-head
      class="mb-5"
      :text="text"
      size="sm"
      direction="left"
      :border="true"
    />
    <loading-component v-if="$fetchState.pending" />
    <ul v-else class="grid grid-cols-3 gap-5" :class="breakpointOption">
      <li v-for="tidbit in recentTidbits6" :key="tidbit.slug">
        <nuxt-link :to="tidbit.path" class="block group" :title="tidbit.title">
          <div
            class="max-w-7xs mx-auto group-hover:scale-105 transform duration-100"
          >
            <app-image dir="tidbits" :img="tidbit.slug" class="shadow-lg" />
          </div>
          <h5
            class="text-2xs md:text-xs font-medium mt-2 text-center group-hover:text-fuscia line-clamp-2"
          >
            {{ tidbit.title }}
          </h5>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { RECENT_DATA_LIMIT } from '~/lib';

const BREAKPOINT_OPTION = {
  md: 'md:grid-cols-2 lg:grid-cols-3',
  xl: 'xl:grid-cols-2 2xl:grid-cols-3',
};

export default {
  props: {
    text: {
      type: String,
      default: 'Recent Tidbits',
    },
    breakpoint: {
      type: String,
      default: 'md',
    },
  },
  async fetch() {
    if (this.recentTidbits6.length > 0) {
      return;
    }

    const recentTidbits = await this.$content('tidbits')
      .only(['path', 'title', 'slug', 'dir'])
      .sortBy('order', 'desc')
      .limit(RECENT_DATA_LIMIT)
      .fetch();

    this.setRecentTidbits(recentTidbits);
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbits6']),
    breakpointOption() {
      return BREAKPOINT_OPTION[this.breakpoint];
    },
  },
  methods: {
    ...mapActions('tidbit', ['setRecentTidbits']),
  },
};
</script>
