<template>
  <div class="pl-2 md:pl-5 lg:pl-0">
    <section-head
      class="mt-10 mb-3"
      :text="text"
      :direction="direction"
      :size="size"
    />
    <ul class="flex justify-between space-x-4 scrollbar overflow-x-auto">
      <li v-for="tidbit in topTidbits" :key="tidbit.slug" class="flex-shrink-0">
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
import { mapState, mapGetters } from 'vuex';
import { randomData } from '~/lib';

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
      topTidbits: [],
    };
  },
  async fetch() {
    // TODO: MOVE THIS TO STORE (as this component would be used on different pages and this call will be unnecessarily called multiple times)
    const randomOrderSample = randomData(this.totalTidbitsCount);
    this.topTidbits = await this.$content('tidbits')
      .without(['body'])
      .where({ order: { $in: randomOrderSample } })
      .fetch();
  },
  computed: {
    ...mapState(['totalTidbitsCount']),
    ...mapGetters(['recentTidbits5']),
  },
  activated() {
    // TODO: implement store and call rehydrate store after certain seconds
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
};
</script>
