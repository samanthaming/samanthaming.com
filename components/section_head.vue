<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t-8" :class="colorOption.border"></div>
    </div>
    <div class="relative flex">
      <h2
        class="bg-white font-black italic font-head uppercase"
        :class="[colorOption.text, sizeOption, directionOption]"
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
};

const DIRECTION_OPTION = {
  center: 'justify-center pr-3.5',
  left: 'justify-start pr-3.5',
  right: 'justify-end pl-3',
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
