<template>
  <div class="pl-2 md:pl-5 lg:pl-0">
    <section-head
      class="mt-10 mb-3"
      :text="text"
      :direction="direction"
      :size="size"
    />
    <ul class="flex justify-between space-x-4 scrollbar overflow-x-auto">
      <li v-for="tidbit in tidbits" :key="tidbit.slug" class="flex-shrink-0">
        <tidbit-block
          :title="tidbit.title"
          :path="tidbit.path"
          :image="tidbit.slug"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { mapState, mapGetters, mapActions } from 'vuex';

// Available units: https://day.js.org/docs/en/display/difference#list-of-all-available-units
const TIME_TO_REFRESH_UNIT = 'minutes';
const TIME_TO_REFRESH = 10;

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
  },
  data() {
    return {
      tidbits: [],
      refetch: false,
    };
  },
  async fetch() {
    this.refetchTidbits();

    if (!this.refetch && this.randomTidbits.length > 0) {
      this.tidbits = this.randomTidbits;
      return;
    }

    const randomTidbitsOrder = this.getRandomOrderTidbits(6);
    const randomTidbits = await this.$content('tidbits')
      .without(['body'])
      .where({ order: { $in: randomTidbitsOrder } })
      .fetch();

    this.tidbits = randomTidbits;
    this.setRandomTidbits(randomTidbits);
    this.refetch = false;
  },
  computed: {
    ...mapState(['randomTidbits', 'timestamp']),
    ...mapGetters(['getRandomOrderTidbits']),
  },
  methods: {
    ...mapActions(['setRandomTidbits', 'resetTimestamp']),
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
