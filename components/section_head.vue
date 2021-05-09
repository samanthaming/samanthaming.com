<template>
  <div class="relative" :class="[colorOption.border, borderTop]">
    <div
      v-if="!border && divider"
      aria-hidden="true"
      class="inset-0 flex items-center"
      :class="{ absolute: text }"
    >
      <div class="w-full border-t-8" :class="colorOption.border"></div>
    </div>
    <div v-if="text" class="relative flex" :class="directionOption.parent">
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
    <p
      v-if="description"
      class="text-gray-darker text-sm font-head font-medium"
    >
      {{ description }}
    </p>
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
  orchid: {
    border: 'border-orchid',
    text: 'text-orchid',
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
      default: null,
    },
    description: {
      type: String,
      default: undefined,
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
    border: {
      type: Boolean,
      default: false,
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
    borderTop() {
      return this.border ? 'border-t-8 pt-1 mb-4' : '';
    },
  },
};
</script>
