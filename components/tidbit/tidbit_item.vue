<template>
  <li>
    <nuxt-link
      :to="path"
      class="inline-block text-center hover:text-fuscia"
      :title="title"
    >
      <app-image-250
        :image="imageSrc"
        class="sm-image shadow-dark inline-block border border-gray-light transform duration-200"
      />
      <div class="mt-1">
        <!-- overflow-ellipsis overflow-hidden -->
        <heading-tag
          class="leading-tight font-medium line-clamp-2"
          :level="level"
        >
          {{ title }}
        </heading-tag>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import AppImage250 from '~/components/image/app_image_250.vue';

export default {
  components: {
    AppImage250,
  },
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

<style scoped>
a:hover .sm-image {
  @apply -translate-y-3 scale-105;
}
</style>
