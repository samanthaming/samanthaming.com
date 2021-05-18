<template>
  <div class="flex items-center justify-center" :class="classes">
    <fa icon="spinner" spin class="text-gray" size="2x" />
  </div>
</template>

<script>
export default {
  props: {
    hasBackground: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return this.hasBackground ? 'bg-gray-lightest rounded-xl' : '';
    },
  },
};
</script>
