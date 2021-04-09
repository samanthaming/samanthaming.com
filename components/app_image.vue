<template>
  <div class="relative w-full bg-gray-lighter" :style="{ paddingTop }">
    <nuxt-picture
      class="absolute top-0 left-0 h-auto w-full"
      :src="src"
      loading="lazy"
      :width="width"
      :sizes="combinedSizes"
    />
  </div>
</template>

<script>
const PADDING_TOP_OPTION = {
  blog: '56.25%',
  courses: '50%',
  tidbits: '100%',
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
    type: {
      type: String,
      default: 'jpg',
    },
    width: {
      type: [Number, String],
      default: undefined,
    },
    sizes: {
      type: Object,
      default: () => ({}),
    },
    aspectRatio: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return `img/${this.dir}/${this.img}.${this.type}`;
    },
    paddingTop() {
      return (
        this.aspectRatio ||
        PADDING_TOP_OPTION[this.dir] ||
        PADDING_TOP_OPTION.tidbits
      );
    },
    combinedSizes() {
      const defaultSizes = {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      };

      const mergeSizes = {
        ...defaultSizes,
        ...this.sizes,
      };

      return Object.entries(mergeSizes)
        .map((size) => size.join(':'))
        .join(' ');
    },
  },
};
</script>
