<template>
  <div class="relative w-full bg-gray-lighter" :style="{ paddingTop }">
    <nuxt-picture
      class="absolute top-0 left-0 h-auto w-full"
      :src="src"
      loading="lazy"
      :width="width"
    />
  </div>
</template>

<script>
const PADDING_TOP_OPTION = {
  blog: '56.25%',
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
      validator: (value) => Object.keys(PADDING_TOP_OPTION).includes(value),
    },
    type: {
      type: String,
      default: 'jpg',
    },
    width: {
      type: [Number, String],
      default: undefined,
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
      return this.aspectRatio || PADDING_TOP_OPTION[this.dir];
    },
  },
};
</script>
