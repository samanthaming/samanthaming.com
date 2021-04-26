<template>
  <div class="space-y-14 xl:space-y-24">
    <div v-for="[section, lessons] in chunks" :key="section">
      <div :id="encodeURIComponent(section)" class="navbar-offset"></div>
      <div class="relative mb-10 xl:mb-12">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-light"></div>
        </div>
        <div class="relative flex justify-center">
          <nuxt-link :to="`#${encodeURIComponent(section)}`">
            <h2
              class="px-2 md:px-5 bg-white text-lg xs:text-xl md:text-2xl lg:text-3xl font-black uppercase text-ink-light font-body"
            >
              {{ section }}
            </h2>
          </nuxt-link>
        </div>
      </div>
      <course-tidbits :tidbits="lessons" :order="order" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chunks: {
      type: Array,
      required: true,
    },
    order: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
