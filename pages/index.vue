<template>
  <div class="container mx-auto mt-5">
    <div class="bg-orange-lightest p-3 mb-10">
      <h2>{{ recentTidbit.title }}</h2>
    </div>
    <ul class="grid grid-cols-5">
      <li
        v-for="tidbit in tidbits"
        :key="tidbit.slug"
        class="border border-orange-light p-3"
      >
        <div>
          <app-image-250 :image="`tidbits/${tidbit.slug}`" />
        </div>
        <h2 class="font-medium text-sm my-2 leading-tight">
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
import AppImage250 from '~/components/image/app_image_250.vue';
import { isValidTag } from '~/lib/index';

const TIDBITS_FETCH_COUNT = 5;

export default {
  components: { AppImage250 },
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
