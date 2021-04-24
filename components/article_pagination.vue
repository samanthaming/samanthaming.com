<template>
  <div class="flex justify-center md:justify-end mt-10 lg:mt-8">
    <nuxt-link
      :to="path"
      :class="colorOption.buttonClass"
      class="flex items-center justify-between pl-5 pr-4 rounded-md py-1.5 bg-gray-light hover:bg-gray text-ink min-h-[3rem] shadow-sm"
    >
      <div class="pr-2">
        <div
          v-if="label"
          :class="colorOption.labelClass"
          class="uppercase text-xs mt-0.5"
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
    labelClass: 'text-ink-lighter',
  },
  fuscia: {
    buttonClass: 'bg-fuscia hover:bg-fuscia-darker text-white',
    labelClass: 'text-pink-lighter',
  },
  indigo: {
    buttonClass: 'bg-indigo hover:bg-indigo-dark text-white',
    labelClass: 'text-indigo-light',
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
