<template>
  <li>
    <nuxt-link :to="path" class="inline-block hover:text-fuscia">
      <app-image-250
        :image="imageSrc"
        class="shadow-dark inline-block border border-gray-light transform duration-200"
      />
      <div class="mt-1">
        <heading-tag
          class="leading-tight font-medium overflow-ellipsis overflow-hidden"
          :level="level"
        >
          {{ title }}
        </heading-tag>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    imageSrc() {
      return `tidbits/${this.image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
a:hover picture {
  @apply -translate-y-3 scale-105;
}
</style>
