<script>
// TODO: Keeping this for "refetch" reference. Delete Later
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
//   data() {
//     return {
//       refetch: false,
//     };
//   },
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
