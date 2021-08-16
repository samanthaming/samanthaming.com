<template>
  <div :class="backgroundOption.container">
    <div :class="$options.TW.SCROLL_CONTAINER">
      <section-head
        class="mb-3"
        :text="text"
        :direction="direction"
        text-class="text-xl xs:text-2xl xl:text-3xl"
        :divider="backgroundOption.divider"
        :to="$options.ROUTE_DATA.tidbits.name"
      />
      <loading-component v-if="isLoading" class="h-72" :has-background="true" />
      <ul v-else :class="$options.TW.SCROLL_UL">
        <li
          v-for="{ title, slug, path } in randomTopTidbits5"
          :key="slug"
          :class="backgroundOption.li"
        >
          <nuxt-link
            :to="path"
            class="relative block transform duration-150 ease-in group-hover:-translate-y-2"
            :title="title"
          >
            <app-image
              dir="tidbits"
              :img="slug"
              :class="backgroundOption.image"
              width="288"
              height="288"
              :alt="`Code snippet of ${title}`"
              :lazy="lazy"
            />
            <div
              class="absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3 flex items-center"
            >
              <heading-tag
                class="text-xs xl:text-sm line-clamp-2 group-hover:text-fuscia"
                :level="level"
              >
                {{ title }}
              </heading-tag>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Tidbit, isArrayEmpty, ROUTE_DATA, TW } from '~/lib';

const BACKGROUND_OPTION = {
  none: {
    divider: true,
    container: '',
    image: 'shadow-lg',
    li: TW.SCROLL_LI,
  },
  orange: {
    divider: false,
    container:
      'border-t-8 border-orange-dark bg-orange-white py-5 pb-10 pl-3 md:pl-5 lg:px-5 xl:px-10',
    image: 'shadow-dark-md',
    li: TW.SCROLL_LI_BKG,
  },
};

export default {
  ROUTE_DATA,
  TW,
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
    background: {
      type: String,
      default: 'none',
      validator: (value) => Object.keys(BACKGROUND_OPTION).includes(value),
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tidbits: [],
    };
  },
  async fetch() {
    await Tidbit.dispatchTops({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters('tidbit', ['randomTopTidbits5']),
    backgroundOption() {
      return BACKGROUND_OPTION[this.background];
    },
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.randomTopTidbits5);
    },
  },
};

// REFERENCE: refetch tidbits after certain time
// import dayjs from 'dayjs';
// import { mapState, mapGetters, mapActions } from 'vuex';
// import {
//   getRandomTidbitOrders,
//   TIME_TO_REFRESH_UNIT,
//   TIME_TO_REFRESH,
// } from '~/lib';

// export default {
//   props: {
//     direction: {
//       type: String,
//       default: 'center',
//     },
//     size: {
//       type: String,
//       default: 'lg',
//     },
//     text: {
//       type: String,
//       default: 'Top Tidbits',
//     },
//     level: {
//       type: Number,
//       default: 4,
//     },
//   },
// data() {
//   return {
//     refetch: false,
//   };
// },
//   async fetch() {
//     this.refetchTidbits();

//     if (!this.refetch && this.randomTidbits5.length !== 0) {
//       return;
//     }

//     if (this.tidbitCount === 0) {
//       // Update once this issue has been addressed
//       // https://github.com/nuxt/content/issues/378
//       const tidbitCount = (await this.$content('tidbits').only([]).fetch())
//         .length;
//       this.setTidbitCount(tidbitCount);
//     }

//     const randomTidbitOrders = getRandomTidbitOrders(this.tidbitCount);

//     const randomTidbits = await this.$content('tidbits')
//       .only(['slug', 'path', 'title', 'order'])
//       .where({ order: { $in: randomTidbitOrders } })
//       .fetch();

//     this.setRandomTidbits(randomTidbits);
//     this.refetch = false;
//   },
//   computed: {
//     ...mapState('tidbit', ['tidbitCount']),
//     ...mapGetters('tidbit', ['randomTidbits5']),
//     ...mapState('app', ['timestamp']),
//   },
//   methods: {
//     ...mapActions('tidbit', ['setRandomTidbits', 'setTidbitCount']),
//     ...mapActions('app', ['resetTimestamp']),
//     refetchTidbits() {
//       const current = dayjs(Date.now());
//       const difference = current.diff(
//         dayjs(this.timestamp),
//         TIME_TO_REFRESH_UNIT,
//       );

//       if (difference > TIME_TO_REFRESH) {
//         this.resetTimestamp();
//         this.refetch = true;
//       }
//     },
//   },
// };
</script>
