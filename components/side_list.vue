<template>
  <div>
    <section-head
      class="mb-5"
      :color="color"
      :text="text"
      :text-class="$options.TW.SECTION_HEAD_SIDE_TEXT"
      direction="left"
      :border="border"
      :to="to"
    />
    <ul class="space-y-4 ml-1">
      <li
        v-for="{ title, path } in list"
        :key="path"
        class="font-medium flex leading-tight"
        :class="[colorOption, textClass]"
      >
        <span class="mr-2 lg:mr-1">
          <fa icon="caret-right" :size="iconSize" />
        </span>
        <nuxt-link :to="path" class="hover:underline">
          {{ title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { TW } from '~/lib';

const COLOR_OPTION = {
  green: 'text-green',
  orchid: 'text-orchid',
};

export default {
  TW,
  props: {
    color: {
      type: String,
      default: 'green',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    list: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
      default: null,
    },
    textClass: {
      type: String,
      default: 'text-sm xs:text-base sm:text-lg lg:text-sm',
    },
    iconSize: {
      type: String,
      default: 'sm',
    },
    border: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
