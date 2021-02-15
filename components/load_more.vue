<template>
  <!-- mx-10 md:mx-0  -->
  <button
    class="border border-gray block py-4 text-center bg-gray-lighter font-head font-thin uppercase text-lg text-ink-50 hover:text-white hover-transition-fast hover:font-semibold cursor-pointer hover:bg-gray hover:border-gray w-full"
    :disabled="isDisabled"
    @click="onClick"
  >
    <fa v-if="loading" icon="spinner" spin class="mr-1" />
    {{ title }}
  </button>
</template>

<script>
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
  },
  computed: {
    isDisabled() {
      return this.disabled || this.loading;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style>
button:disabled {
  @apply opacity-50 pointer-events-none;
}
</style>
