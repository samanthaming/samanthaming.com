<template>
  <div class="relative">
    <div
      v-if="divider"
      class="absolute inset-0 flex items-center"
      aria-hidden="true"
    >
      <div class="w-full border-t-8" :class="colorOption.border"></div>
    </div>
    <div class="relative flex" :class="directionOption.parent">
      <h2
        class="font-black italic font-head uppercase"
        :class="[
          colorOption.text,
          sizeOption,
          directionOption.text,
          `${divider ? 'bg-white' : ''}`,
        ]"
      >
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: {
    border: 'border-orange-dark',
    text: 'text-orange-dark',
  },
  green: {
    border: 'border-green',
    text: 'text-green',
  },
  blue: {
    border: 'border-blue',
    text: 'text-blue',
  },
};

const DIRECTION_OPTION = {
  center: {
    parent: 'justify-center',
    text: 'pr-3.5 pl-3',
  },
  left: {
    parent: 'justify-start',
    text: 'pr-3.5',
  },
  right: {
    parent: 'justify-end',
    text: 'pl-3',
  },
};

const SIZE_OPTION = {
  sm: 'text-lg sm:text-xl',
  md: 'text-xl sm:text-2xl',
  lg: 'text-2xl sm:text-3xl',
};

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    direction: {
      type: String,
      default: 'center',
      validator: (value) => Object.keys(DIRECTION_OPTION).includes(value),
    },
    size: {
      type: String,
      default: 'lg',
      validator: (value) => Object.keys(SIZE_OPTION).includes(value),
    },
    divider: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    directionOption() {
      return DIRECTION_OPTION[this.direction];
    },
    sizeOption() {
      return SIZE_OPTION[this.size];
    },
  },
};
</script>
