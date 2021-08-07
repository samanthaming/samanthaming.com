<template>
  <div :class="[bgClass, displayClass]">
    <nuxt-picture
      :src="src"
      loading="lazy"
      :width="width"
      :height="height"
      :sizes="combinedSizes"
      :alt="alt"
    />
  </div>
</template>

<script>
import { imgSizesByWidth, imgSizesBySizes } from '~/lib';
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
// const ASPECT_RATIO_OPTION = {
//   '1x1': '100%', // square
//   '2x1': '50%', // course
//   '16x9': '56.25%', // blog
//   '4x3': '75%', // talk
//   '800x381': '47.625%', // Invite me to speak banner
// };

export default {
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
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
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    // To use <app-image :sizes="{xs: 200, xxl: 300}"
    sizes: {
      type: Object,
      default: () => ({}),
    },
    bgClass: {
      type: String,
      default: 'bg-gray-lighter',
    },
    displayClass: {
      type: String,
      default: 'inline-block',
    },
  },
  computed: {
    src() {
      const dir = this.dir.startsWith('/') ? this.dir : `/${this.dir}`;

      return `img${dir}/${this.img}.${this.type}`;
    },
    combinedSizes() {
      if (Object.keys(this.sizes).length) {
        return imgSizesBySizes(this.sizes);
      }

      const width = this.width || this.$attrs.width;
      return imgSizesByWidth(width);
    },
  },
};
</script>
