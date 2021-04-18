<template>
  <app-image :dir="dir" :name="img" :aspect-ratio="aspectRatio" />
</template>

<script>
const ASPECT_RATIO_OPTION = {
  blog: '16x9',
  courses: '2x1',
  tidbits: '1x1',
};

export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return `img/${this.dir}/${this.img}.${this.type}`;
    },
    aspectRatio() {
      return ASPECT_RATIO_OPTION[this.dir] || ASPECT_RATIO_OPTION.tidbits;
    },
  },
};
</script>
