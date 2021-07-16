<template>
  <div :class="backgroundOption.container">
    <div class="max-w-[2300px] mx-auto">
      <section-head
        class="mb-3"
        :text="text"
        :direction="direction"
        :size="size"
        :divider="backgroundOption.divider"
        to="tidbits"
      />
      <loading-component v-if="isLoading" class="h-72" :has-background="true" />
      <ul
        v-else
        class="flex justify-between space-x-6 scrollbar overflow-x-auto"
      >
        <li
          v-for="{ title, slug, path } in randomTopTidbits5"
          :key="slug"
          class="flex-shrink-0 py-5 w-56 md:w-52 xl:w-56 2xl:w-72 group"
        >
          <nuxt-link
            :to="path"
            class="relative block transform duration-150 ease-in group-hover:-translate-y-2"
            :title="title"
          >
            <app-image
              dir="tidbits"
              :img="slug"
              :class="backgroundOption.image"
              width="288"
              height="288"
            />
            <div
              class="absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3 flex items-center"
            >
              <heading-tag
                class="text-xs xl:text-sm line-clamp-2 group-hover:text-fuscia"
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
import { Tidbit, isArrayEmpty } from '~/lib';

const BACKGROUND_OPTION = {
  none: {
    divider: true,
    container: '',
    image: 'shadow-lg',
  },
  orange: {
    divider: false,
    container:
      'border-t-8 border-orange-dark bg-orange-white py-5 pb-10 pl-3 md:pl-5 lg:px-5 xl:px-10',
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
    isLoading() {
      return this.$fetchState.pending && isArrayEmpty(this.randomTopTidbits5);
    },
  },
};
</script>
