<template>
  <div class="relative">
    <div
      :id="number"
      class="absolute inset-0 flex items-center border-b"
      :class="[colorOption.border, colorOption.background]"
      aria-hidden="true"
    >
      <div class="w-full"></div>
    </div>
    <div class="relative flex justify-start">
      <span class="pr-5 bg-white text-md font-medium" :class="colorOption.text">
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: {
    border: 'border-orange-light',
    background: 'bg-orange-white',
    text: 'text-orange',
  },
  green: {
    border: 'border-green-light',
    background: 'bg-green-white',
    text: 'text-green',
  },
};

export default {
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    number: {
      type: String,
      required: true,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
