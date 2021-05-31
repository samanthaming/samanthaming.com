<template>
  <div
    class="px-2 py-4 lg:pt-5 lg:pb-4 border-b shadow-md flex justify-center font-head space-x-6 md:space-x-7 lg:space-x-5"
    :class="[colorOption.background, colorOption.border]"
  >
    <button
      v-for="({ value, text }, index) in filterOptions"
      :key="index"
      class="inline-flex items-center justify-center w-24 sm:w-28 md:w-32 py-2 border text-xs sm:text-sm md:text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-ink"
      :class="value === activeButton ? activeButtonClass : inactiveButtonClass"
      :disabled="value === activeButton"
      @click="onClick(value)"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
import { TAG_JS, TAG_CSS, TAG_PROGRAMMING, TAG_CAREER } from '~/lib';

const COLOR_OPTION = {
  orange: {
    border: 'border-orange-light',
    background: 'bg-orange-lighter',
    text: 'text-orange-darker',
    buttonBackground: 'bg-orange-white hover:bg-orange-lightest',
    buttonBorder: 'border-orange-light hover:border-orange',
    active: 'bg-orange border-orange',
  },
  green: {
    border: 'border-green-light',
    background: 'bg-green-lightest',
    text: 'text-green-dark',
    buttonBackground: 'bg-white hover:bg-green-lighter',
    buttonBorder: 'border-green-light hover:border-green',
    active: 'bg-green border-green text-white',
  },
};

const FILTER_OPTION = {
  tidbit: [
    {
      text: 'JS',
      value: TAG_JS,
    },
    {
      text: 'CSS',
      value: TAG_CSS,
    },
  ],
  blog: [
    {
      text: 'Programming',
      value: TAG_PROGRAMMING,
    },
    {
      text: 'Career',
      value: TAG_CAREER,
    },
  ],
};

export default {
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    type: {
      type: String,
      required: true,
      validator: (value) => Object.keys(FILTER_OPTION).includes(value),
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    tagQuery() {
      return this.$route.query?.tag;
    },
    inactiveButtonClass() {
      const { buttonBackground, buttonBorder, text } = this.colorOption;
      return [buttonBackground, buttonBorder, text];
    },
    activeButtonClass() {
      return this.colorOption.active;
    },
    activeButton() {
      return this.$route.query?.tag || null;
    },
    filterOptions() {
      return [
        {
          text: 'Show All',
          value: null,
        },
        ...FILTER_OPTION[this.type],
      ];
    },
  },
  methods: {
    onClick(value) {
      this.$emit('click', value);
    },
  },
};
</script>
