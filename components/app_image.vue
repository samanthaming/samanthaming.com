<template>
  <div class="relative w-full bg-gray-lighter" :style="{ paddingTop }">
    <nuxt-picture
      class="absolute top-0 left-0 h-auto w-full"
      :src="src"
      loading="lazy"
      :width="width"
      :sizes="combinedSizes"
    />
    <!-- <nuxt-img :src="src" :width="width" /> -->
  </div>
</template>

<script>
/*
<nuxt-img>
- "width" set request size

BUG: https://github.com/nuxt/image/issues/201
<nuxt-picture>
- "width" will not set request size, it sets display size
- "sizes" set request size
*/

const ASPECT_RATIO_OPTION = {
  '1x1': '100%', // square
  '2x1': '50%',
  '16x9': '56.25%',
  '4x3': '75%',
};

export default {
  props: {
    name: {
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
    // To use <app-image :sizes="{xs: 200, xxl: 300}"
    sizes: {
      type: Object,
      default: () => ({}),
    },
    aspectRatio: {
      type: String,
      required: true,
      validator: (value) => Object.keys(ASPECT_RATIO_OPTION).includes(value),
    },
  },
  computed: {
    src() {
      const dir = this.dir.startsWith('/') ? this.dir : `/${this.dir}`;

      return `img${dir}/${this.name}.${this.type}`;
    },
    paddingTop() {
      return ASPECT_RATIO_OPTION[this.aspectRatio];
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
