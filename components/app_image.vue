<template>
  <div class="inline-block" :class="bgClass">
    <nuxt-picture
      :src="src"
      loading="lazy"
      :width="width"
      :height="height"
      :sizes="combinedSizes"
    />
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

Tips:
- Always set width and height for CLS!
- Pass the largest width & height of the aspect ratio (this will also be used in the request)
  - That way when you scale up and down, it will not be cut due to small request size
  - Don't worry, our CSS will then scale down appropriatedly
*/

// aspect ratio = height/width
const ASPECT_RATIO_OPTION = {
  '1x1': '100%', // square
  '2x1': '50%',
  '16x9': '56.25%',
  '4x3': '75%',
  '800x381': '47.625%', // Invite me to speak banner
};

export default {
  inheritAttrs: false,
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
    height: {
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
      required: false,
      default: undefined,
      validator: (value) => Object.keys(ASPECT_RATIO_OPTION).includes(value),
    },
    bgClass: {
      type: String,
      default: 'bg-gray-lighter',
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

      const width = this.width || this.$attrs.width;

      // TODO: we might not want this, need to re-explore this
      // If there is width, it will set all "sizes" to that width
      if (width) {
        return Object.entries(defaultSizes)
          .map(([key, _value]) => [key, width].join(':'))
          .join(' ');
      }

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
