<template>
  <div>
    <section-head
      class="mb-5"
      :text="text"
      :text-class="$options.TW.SECTION_HEAD_SIDE_TEXT"
      direction="left"
      :border="true"
      :to="$options.ROUTE_DATA.tidbits.name"
    />
    <loading-component v-if="isLoading" class="h-80" :has-background="true" />
    <ul v-else class="grid grid-cols-3 gap-5" :class="breakpointOption">
      <li v-for="tidbit in tidbits" :key="tidbit.slug">
        <nuxt-link :to="tidbit.path" class="block group" :title="tidbit.title">
          <div
            class="max-w-[9rem] mx-auto group-hover:scale-105 transform duration-100"
          >
            <app-image
              dir="tidbits"
              :img="tidbit.slug"
              width="160"
              height="160"
              class="shadow"
            />
          </div>
          <!-- px-0.5 md:px-1 lg:px-0.5 xl:px-0 -->
          <h5
            class="mt-2 text-center group-hover:text-fuscia line-clamp-2 text-ink-light font-medium"
            :class="textClass"
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
import { Tidbit, ROUTE_DATA, isArrayEmpty, TW } from '~/lib';

// TODO: Remove option and allow custom, similar to textClass
const BREAKPOINT_OPTION = {
  md: 'md:grid-cols-2 lg:grid-cols-3',
  lg: 'lg:grid-cols-2 xl:grid-cols-3',
  xl: 'xl:grid-cols-2 2xl:grid-cols-3',
};

export default {
  ROUTE_DATA,
  TW,
  props: {
    text: {
      type: String,
      default: 'Recent Tidbits',
    },
    textClass: {
      type: String,
      default: 'text-2xs xs:text-xs md:text-sm lg:text-xs',
    },
    colsClass: {
      type: String,
      default: null,
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
      if (this.colsClass) {
        return this.colsClass;
      }
      return BREAKPOINT_OPTION[this.breakpoint];
    },
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.tidbits);
    },
  },
};
</script>
