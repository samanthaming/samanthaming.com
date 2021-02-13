<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t-8" :class="colorOption.border"></div>
    </div>
    <div class="relative flex" :class="directionOption">
      <h2
        class="pl-3 pr-3.5 bg-white text-3xl font-black italic font-head uppercase"
        :class="colorOption.text"
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
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
};

export default {
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    text: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'center',
      validator: (value) => Object.keys(DIRECTION_OPTION).includes(value),
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    directionOption() {
      return DIRECTION_OPTION[this.direction];
    },
  },
};
</script>
