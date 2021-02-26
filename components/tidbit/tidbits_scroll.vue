<template>
  <div class="pl-2 md:pl-5 lg:pl-0">
    <section-head class="mt-10 mb-3" text="Top Tidbits" />
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
import { mapState } from 'vuex';
import { randomData } from '~/lib';

export default {
  data() {
    return {
      topTidbits: [],
    };
  },
  async fetch() {
    const randomOrderSample = randomData(this.totalTidbitsCount);
    this.topTidbits = await this.$content('tidbits')
      .without(['body'])
      .where({ order: { $in: randomOrderSample } })
      .fetch();
  },
  computed: {
    ...mapState(['totalTidbitsCount']),
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
