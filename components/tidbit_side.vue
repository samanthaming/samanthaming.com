<template>
  <loading-component v-if="$fetchState.pending" />
  <div v-else>
    <section-head class="mb-5" :text="text" size="sm" direction="left" />
    <ul class="grid grid-cols-2 lg:grid-cols-3 gap-5">
      <li v-for="tidbit in recentTidbits6" :key="tidbit.slug">
        <nuxt-link to="tidbit.path">
          <div class="max-w-xs">
            <app-image dir="tidbits" :img="tidbit.slug" />
          </div>
        </nuxt-link>
        <h5 class="text-xs font-medium mt-2">
          {{ tidbit.title }}
        </h5>
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
