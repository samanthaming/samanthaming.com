<template>
  <div class="flex justify-center md:justify-end mt-10 lg:mt-8">
    <nuxt-link
      :to="path"
      class="flex items-center justify-between px-8 rounded-full py-1 bg-gray-light hover:bg-gray text-ink"
    >
      <div class="pr-2">
        <div class="uppercase text-xs text-ink-light">{{ label }}</div>
        <div class="text-sm md:text-base">{{ title }}</div>
      </div>
      <fa icon="chevron-circle-right" />
    </nuxt-link>
  </div>
</template>

<script>
const CATEGORY_OPTION = {
  tidbit: 'Next Tidbit',
  blog: 'Next Blog',
};

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'tidbit',
      validator: (value) => Object.keys(CATEGORY_OPTION).includes(value),
    },
  },
  computed: {
    title() {
      return CATEGORY_OPTION[this.category];
    },
  },
};
</script>
