<template>
  <div class="markdown-image mx-auto lg:mx-0" :class="classes">
    <app-image
      :alt="alt"
      :dir="directory"
      :img="img"
      :width="imageWidth"
      :height="imageHeight"
      class="shadow-md"
    />
  </div>
</template>

<script>
const WIDTH_OPTION = {
  default: 'max-w-md md:max-w-xl lg:max-w-full',
  square: 'max-w-md',
  full: 'max-w-full',
};

const DEFAULT_ROUTE_OPTION = {
  'tidbits-slug': {
    dir: 'tidbits',
  },
  'pictorials-slug': {
    width: 448,
    height: 448,
    widthClasses: WIDTH_OPTION.square,
  },
};

export default {
  inheritAttrs: false,
  props: {
    alt: {
      type: String,
      default: '',
    },
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
    widthOption: {
      type: String,
      default: undefined,
      validator: (value) => Object.keys(WIDTH_OPTION).includes(value),
    },
  },
  computed: {
    classes() {
      return (
        this.$attrs.class ||
        this.widthClasses ||
        this.routeOption?.widthClasses ||
        WIDTH_OPTION.default
      );
    },
    routeOption() {
      return DEFAULT_ROUTE_OPTION[this.$route.name];
    },
    directory() {
      // tidbits slug -> /tidbits/[image name]
      // rest -> /tidbits/[match route path]/[image name]

      return this.dir || this.routeOption?.dir || this.$route.path;
    },
    widthClasses() {
      const widthOption =
        this.imageWidth === this.imageHeight
          ? WIDTH_OPTION.square
          : WIDTH_OPTION[this.widthOption];

      return this.widthOption && widthOption;
    },
    imageWidth() {
      return this.width || this.routeOption.width;
    },
    imageHeight() {
      return this.height || this.routeOption.height;
    },
  },
};
</script>
