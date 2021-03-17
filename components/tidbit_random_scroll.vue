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
        v-for="{ title, slug, path } in randomTidbits5"
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
// TODO: Keeping this for "refetch" reference. Delete Later
import dayjs from 'dayjs';
import { mapState, mapGetters, mapActions } from 'vuex';
import {
  getRandomTidbitOrders,
  TIME_TO_REFRESH_UNIT,
  TIME_TO_REFRESH,
} from '~/lib';

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
      refetch: false,
    };
  },
  async fetch() {
    this.refetchTidbits();

    if (!this.refetch && this.randomTidbits5.length !== 0) {
      return;
    }

    if (this.tidbitCount === 0) {
      // Update once this issue has been addressed
      // https://github.com/nuxt/content/issues/378
      const tidbitCount = (await this.$content('tidbits').only([]).fetch())
        .length;
      this.setTidbitCount(tidbitCount);
    }

    const randomTidbitOrders = getRandomTidbitOrders(this.tidbitCount);

    const randomTidbits = await this.$content('tidbits')
      .only(['slug', 'path', 'title', 'order'])
      .where({ order: { $in: randomTidbitOrders } })
      .fetch();

    this.setRandomTidbits(randomTidbits);
    this.refetch = false;
  },
  computed: {
    ...mapState('tidbit', ['tidbitCount']),
    ...mapGetters('tidbit', ['randomTidbits5']),
    ...mapState('app', ['timestamp']),
  },
  methods: {
    ...mapActions('tidbit', ['setRandomTidbits', 'setTidbitCount']),
    ...mapActions('app', ['resetTimestamp']),
    refetchTidbits() {
      const current = dayjs(Date.now());
      const difference = current.diff(
        dayjs(this.timestamp),
        TIME_TO_REFRESH_UNIT,
      );

      if (difference > TIME_TO_REFRESH) {
        this.resetTimestamp();
        this.refetch = true;
      }
    },
  },
};
</script>
