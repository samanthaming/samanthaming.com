<template>
  <div class="flex justify-center md:justify-end mt-10 lg:mt-8">
    <nuxt-link
      :to="path"
      :class="[categoryOption.buttonClass]"
      class="flex items-center justify-between pl-8 pr-5 rounded-full py-1 bg-gray-light hover:bg-gray text-ink"
    >
      <div class="pr-2">
        <div
          v-if="labelText"
          :class="[categoryOption.labelClass]"
          class="uppercase text-xs"
        >
          {{ labelText }}
        </div>
        <div class="text-sm md:text-base">{{ title }}</div>
      </div>
      <span class="pl-3">
        <fa icon="chevron-circle-right" size="lg" />
      </span>
    </nuxt-link>
  </div>
</template>

<script>
const buttonClass = 'bg-gray-light hover:bg-gray text-ink';
const labelClass = 'text-ink-light';

const CATEGORY_OPTION = {
  tidbit: {
    label: 'Next Tidbit',
    buttonClass,
    labelClass,
  },
  blog: {
    label: 'Next Blog',
    buttonClass,
    labelClass,
  },
  course: {
    label: '',
    buttonClass: 'h-12 bg-fuscia hover:bg-fuscia-darker text-white',
    labelClass: 'text-pink-lighter',
  },
};

export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    path: {
      type: String,
      required: true,
    },
    title: {
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
    labelText() {
      return this.label || this.categoryOption.label;
    },
    categoryOption() {
      return CATEGORY_OPTION[this.category];
    },
  },
};
</script>
