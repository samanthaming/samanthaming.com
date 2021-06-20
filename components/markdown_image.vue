<template>
  <div class="markdown-image max-w-md mx-auto lg:mx-0" :class="$attrs.class">
    <app-image
      :dir="directory"
      :img="img"
      :width="imageWidth"
      :height="imageHeight"
      class="shadow-md"
    />
  </div>
</template>

<script>
const ASPECT_RATIO_OPTION = {
  '1x1': {
    width: 500,
    height: 500,
  },
  '2x1': {
    width: 500,
    height: 250,
  },
};

export default {
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      default: undefined,
    },
    width: {
      type: [Number, String],
      default: undefined,
    },
    height: {
      type: [Number, String],
      default: undefined,
    },
    aspectRatio: {
      type: String,
      default: '1x1',
      validator: (value) => Object.keys(ASPECT_RATIO_OPTION).includes(value),
    },
  },
  computed: {
    directory() {
      return this.dir || this.$route.path;
    },
    aspectRatioOption() {
      return ASPECT_RATIO_OPTION[this.aspectRatio];
    },
    imageWidth() {
      return this.width ? this.width : this.aspectRatioOption?.width;
    },
    imageHeight() {
      return this.height ? this.height : this.aspectRatioOption?.height;
    },
  },
};
</script>
