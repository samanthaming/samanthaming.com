<template>
  <!-- :aspect-ratio="aspectRatio"  -->
  <app-image :name="img" v-bind="$attrs" />
</template>

<script>
const ASPECT_RATIO_OPTION = {
  blog: '16x9',
  courses: '2x1',
  tidbits: '1x1',
};

export default {
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  computed: {
    aspectRatio() {
      const { dir } = this.$attrs;
      return ASPECT_RATIO_OPTION[dir] || ASPECT_RATIO_OPTION.tidbits;
    },
  },
};
</script>
