<template>
  <div class="flex justify-center md:justify-end mt-10 lg:mt-8">
    <nuxt-link
      :to="path"
      :class="colorOption.buttonClass"
      class="flex items-center justify-between pl-8 pr-5 rounded-full py-1 bg-gray-light hover:bg-gray text-ink"
    >
      <div class="pr-2">
        <div
          v-if="label"
          :class="colorOption.labelClass"
          class="uppercase text-xs"
        >
          {{ label }}
        </div>
        <div class="text-sm md:text-base">{{ text }}</div>
      </div>
      <span class="pl-3">
        <fa icon="chevron-circle-right" size="lg" />
      </span>
    </nuxt-link>
  </div>
</template>

<script>
const COLOR_OPTION = {
  gray: {
    buttonClass: 'bg-gray-light hover:bg-gray text-ink',
    labelClass: 'text-ink-light',
  },
  fuscia: {
    buttonClass: 'h-12 bg-fuscia hover:bg-fuscia-darker text-white',
    labelClass: 'text-pink-lighter',
  },
};

export default {
  props: {
    label: {
      type: String,
      default: undefined,
    },
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'gray',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
