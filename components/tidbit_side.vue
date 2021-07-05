<template>
  <div>
    <section-head
      class="mb-5"
      :text="text"
      size="sm"
      direction="left"
      :border="true"
      to="tidbits"
    />
    <loading-component v-if="isLoading" class="h-80" :has-background="true" />
    <ul v-else class="grid grid-cols-3 gap-5" :class="breakpointOption">
      <li v-for="tidbit in tidbits" :key="tidbit.slug">
        <nuxt-link :to="tidbit.path" class="block group" :title="tidbit.title">
          <div
            class="max-w-7xs mx-auto group-hover:scale-105 transform duration-100"
          >
            <app-image
              dir="tidbits"
              :img="tidbit.slug"
              width="160"
              height="160"
              class="shadow"
            />
          </div>
          <h5
            class="text-xs md:text-2xs 2xl:text-xs mt-2 text-center group-hover:text-fuscia line-clamp-2 text-ink-50"
          >
            {{ tidbit.title }}
          </h5>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Tidbit, isArrayEmpty } from '~/lib';

const BREAKPOINT_OPTION = {
  md: 'md:grid-cols-2 lg:grid-cols-3',
  lg: 'lg:grid-cols-2 xl:grid-cols-3',
  xl: 'xl:grid-cols-2 2xl:grid-cols-3',
};

export default {
  props: {
    text: {
      type: String,
      default: 'Recent Tidbits',
    },
    breakpoint: {
      type: String,
      default: 'md',
    },
  },
  async fetch() {
    await Tidbit.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });
  },
  computed: {
    ...mapGetters({ tidbits: 'tidbit/recentTidbits6' }),
    breakpointOption() {
      return BREAKPOINT_OPTION[this.breakpoint];
    },
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.tidbits);
    },
  },
};
</script>
