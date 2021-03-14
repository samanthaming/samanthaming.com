<template>
  <div>
    <section-head class="mb-5" :text="text" size="sm" direction="left" />
    <loading-component v-if="$fetchState.pending" />
    <ul v-else class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <li v-for="tidbit in recentTidbits6" :key="tidbit.slug">
        <nuxt-link to="tidbit.path" class="block group">
          <div
            class="max-w-7xs mx-auto group-hover:scale-105 transform duration-100"
          >
            <app-image dir="tidbits" :img="tidbit.slug" class="" />
          </div>
          <h5
            class="text-2xs md:text-xs font-medium mt-2 text-center group-hover:text-fuscia"
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
import { RECENT_TIDBIT_LIMIT } from '~/lib';

export default {
  props: {
    text: {
      type: String,
      default: 'Fresh Tidbits',
    },
  },
  async fetch() {
    if (this.recentTidbits6.length > 0) {
      return;
    }

    const recentTidbits = await this.$content('tidbits')
      .only(['path', 'title', 'slug'])
      .sortBy('order', 'desc')
      .limit(RECENT_TIDBIT_LIMIT)
      .fetch();

    this.setRecentTidbits(recentTidbits);
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbits6']),
  },
  methods: {
    ...mapActions('tidbit', ['setRecentTidbits']),
  },
};
</script>
