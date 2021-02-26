<template>
  <!-- mx-10 md:mx-0  -->
  <button
    class="border border-gray block py-4 text-center bg-gray-lighter font-head font-thin uppercase text-lg text-ink-50 hover:text-white hover:font-semibold cursor-pointer w-full"
    :class="colorOption"
    :disabled="isDisabled"
    @click="onClick"
  >
    <fa v-if="loading" icon="spinner" spin class="mr-1" />
    {{ title }}
  </button>
</template>

<script>
const COLOR_OPTION = {
  default: 'hover:bg-gray hover:border-gray',
  orange: 'hover:border-orange-dark hover:bg-orange-dark',
};

export default {
  props: {
    title: {
      type: String,
      default: 'Load More',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'default',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
  },
  computed: {
    isDisabled() {
      return this.disabled || this.loading;
    },
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
button:disabled {
  @apply opacity-50;
}
</style>
