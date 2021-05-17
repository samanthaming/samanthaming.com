<template>
  <div>
    <section-head
      class="mb-5"
      :text="text"
      size="sm"
      direction="left"
      :border="true"
    />
    <new-loading-component v-if="$fetchState.pending" class="h-80" />
    <ul v-else class="grid grid-cols-3 gap-5" :class="breakpointOption">
      <li v-for="tidbit in recentTidbits6" :key="tidbit.slug">
        <nuxt-link :to="tidbit.path" class="block group" :title="tidbit.title">
          <div
            class="max-w-7xs mx-auto group-hover:scale-105 transform duration-100"
          >
            <page-image dir="tidbits" :img="tidbit.slug" class="shadow-lg" />
          </div>
          <h5
            class="text-2xs md:text-xs font-medium mt-2 text-center group-hover:text-fuscia line-clamp-2"
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
import { Tidbit } from '~/lib';

const BREAKPOINT_OPTION = {
  md: 'md:grid-cols-2 lg:grid-cols-3',
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
    ...mapGetters('tidbit', ['recentTidbits6']),
    breakpointOption() {
      return BREAKPOINT_OPTION[this.breakpoint];
    },
  },
};
</script>
