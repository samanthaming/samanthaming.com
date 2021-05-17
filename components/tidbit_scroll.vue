<template>
  <div :class="backgroundOption.container">
    <div class="max-w-[2300px] mx-auto">
      <section-head
        class="mb-3"
        :text="text"
        :direction="direction"
        :size="size"
        :divider="backgroundOption.divider"
      />
      <new-loading-component v-if="$fetchState.pending" class="h-72" />
      <ul v-else class="grid grid-flow-col scrollbar overflow-x-auto gap-6">
        <li
          v-for="{ title, slug, path } in randomTopTidbits5"
          :key="slug"
          class="py-5 w-72 group"
        >
          <nuxt-link
            :to="path"
            class="relative block transform duration-150 ease-in group-hover:-translate-y-2"
            :title="title"
          >
            <page-image
              dir="tidbits"
              :img="slug"
              :class="backgroundOption.image"
            />
            <div
              class="absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3 flex items-center"
            >
              <heading-tag
                class="leading-tight text-sm line-clamp-2 group-hover:text-fuscia"
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
import { Tidbit } from '~/lib';

const BACKGROUND_OPTION = {
  none: {
    divider: true,
    container: '',
    image: 'shadow-lg',
  },
  orange: {
    divider: false,
    container:
      'border-t-8 border-orange-dark bg-orange-white py-5 pb-10 px-3 md:px-5 xl:px-10',
    image: 'shadow-dark-md',
  },
};

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
    level: {
      type: Number,
      default: 4,
    },
    background: {
      type: String,
      default: 'none',
      validator: (value) => Object.keys(BACKGROUND_OPTION).includes(value),
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
  },
};
</script>
