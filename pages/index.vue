<template>
  <div class="container mx-auto mt-5">
    <div class="bg-orange-lightest p-3 mb-10">
      <h2>{{ recentTidbit.title }}</h2>
    </div>
    <ul class="grid grid-cols-6">
      <li
        v-for="tidbit in tidbits"
        :key="tidbit.slug"
        class="border border-orange-light p-3"
      >
        <h2 class="font-medium text-sm mb-2 leading-tight">
          {{ tidbit.title }}
        </h2>
        <p class="text-sm">{{ tidbit.tags }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from 'vuex';
import { isValidTag } from '~/lib/index';

const TIDBITS_FETCH_COUNT = 5;

export default {
  async fetch() {
    const { page, tag } = this.$route.query;
    const LIMIT = page * TIDBITS_FETCH_COUNT || TIDBITS_FETCH_COUNT;

    if (isValidTag(tag) && tag) {
      this.tidbits = await this.$content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .where({ tags: { $contains: tag } })
        .limit(LIMIT)
        .fetch();
      return;
    }
    this.tidbits = await this.$content('tidbits')
      .sortBy('order', 'desc')
      .without(['body'])
      .limit(LIMIT)
      .fetch();
  },
  data: () => ({
    tidbits: [],
  }),
  computed: {
    ...mapState(['recentTidbit']),
  },
};
</script>
