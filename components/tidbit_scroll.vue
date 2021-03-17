<template>
  <div class="pl-2 md:pl-5 lg:pl-0">
    <section-head
      class="mt-10 mb-3"
      :text="text"
      :direction="direction"
      :size="size"
    />
    <loading-component v-if="$fetchState.pending" />
    <ul v-else class="grid grid-flow-col scrollbar overflow-x-auto">
      <li
        v-for="{ title, slug, path } in tidbits"
        :key="slug"
        class="px-3 py-5 w-72 mx-auto group"
      >
        <nuxt-link
          :to="path"
          class="relative block transform duration-150 ease-in group-hover:-translate-y-2"
          :title="title"
        >
          <app-image dir="tidbits" :img="slug" class="shadow-lg" />
          <div
            class="absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3 flex items-center"
          >
            <heading-tag
              class="leading-tight text-sm line-clamp-2 group-hover:text-fuscia"
              :level="level"
            >
              {{ title }}
            </heading-tag>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { TOP_TIDBIT_SLUGS, getRandomTopTidbits } from '~/lib';

export default {
  props: {
    direction: {
      type: String,
      default: 'center',
    },
    size: {
      type: String,
      default: 'lg',
    },
    text: {
      type: String,
      default: 'Top Tidbits',
    },
    level: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      tidbits: [],
    };
  },
  async fetch() {
    if (this.topTidbits.length === 0) {
      const topTidbits = await this.$content('tidbits')
        .only(['slug', 'path', 'title'])
        .where({ slug: { $in: TOP_TIDBIT_SLUGS } })
        .fetch();

      this.setTopTidbits(topTidbits);
    }

    this.fetchTidbits();
  },
  computed: {
    ...mapState('tidbit', ['topTidbits']),
  },
  methods: {
    ...mapActions('tidbit', ['setTopTidbits']),
    fetchTidbits() {
      if (this.tidbits.length !== 0) {
        return;
      }

      this.tidbits = getRandomTopTidbits(this.topTidbits);
    },
  },
};
</script>
