<template>
  <div
    class="pt-5 pb-4 border-b shadow-md flex justify-center font-head space-x-5"
    :class="[colorOption.background, colorOption.border]"
  >
    <button
      v-for="({ value, text }, index) in $options.FILTER_OPTION.tidbit"
      :key="index"
      class="inline-flex items-center justify-center w-32 py-2 border text-base font-medium rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-ink"
      :class="value === activeButton ? activeButtonClass : inactiveButtonClass"
      :disabled="value === activeButton"
      @click="onClick(value)"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: {
    border: 'border-orange-light',
    background: 'bg-orange-lighter',
    text: 'text-orange-darker',
    buttonBackground: 'bg-orange-white hover:bg-orange-lightest',
    buttonBorder: 'border-orange-light hover:border-orange',
    active: 'bg-orange border-orange',
  },
};

const FILTER_OPTION = {
  tidbit: [
    {
      text: 'Show All',
      value: null,
    },
    {
      text: 'JS',
      value: 'javascript',
    },
    {
      text: 'CSS',
      value: 'css',
    },
  ],
};

export default {
  FILTER_OPTION,
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
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
  },
  methods: {
    onClick(value) {
      this.$emit('click', value);
    },
  },
};
</script>
