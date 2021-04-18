<template>
  <div class="markdown-image" :class="maxWidthClass">
    <app-image :dir="directory" :name="name" :aspect-ratio="aspectRatio" />
  </div>
</template>

<script>
const WIDTH_OPTION = {
  '1x1': 'max-w-md',
  '2x1': 'max-w-md',
  '16x9': 'max-w-md',
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      default: undefined,
    },
    aspectRatio: {
      type: String,
      default: '1x1',
    },
  },
  computed: {
    directory() {
      return this.dir || this.$route.path;
    },
    maxWidthClass() {
      return WIDTH_OPTION[this.aspectRatio];
    },
  },
};
</script>
