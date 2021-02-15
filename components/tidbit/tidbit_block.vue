<template>
  <div>
    <nuxt-link
      :to="path"
      class="relative inline-block shadow-lg transition duration-200 ease-out transform hover:-translate-y-2 hover:text-fuscia my-3"
    >
      <app-image-250 :image="imageSrc" />
      <div
        class="flex items-center justify-center absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3"
      >
        <heading-tag
          class="leading-tight text-sm overflow-ellipsis overflow-hidden"
          :level="level"
        >
          {{ title }}
        </heading-tag>
      </div>
    </nuxt-link>
  </div>
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
