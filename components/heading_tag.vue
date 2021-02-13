<template>
  <h1 v-if="level === 1">
    <slot />
  </h1>
  <h2 v-else-if="level === 2">
    <slot />
  </h2>
  <h3 v-else-if="level === 3">
    <slot />
  </h3>
  <h4 v-else-if="level === 4">
    <slot />
  </h4>
  <h5 v-else-if="level === 5">
    <slot />
  </h5>
  <h6 v-else-if="level === 6">
    <slot />
  </h6>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>
