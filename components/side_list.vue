<template>
  <div>
    <section-head
      class="mb-5"
      :color="color"
      :text="text"
      :size="sizeOption.title"
      direction="left"
      :border="border"
    />
    <ul class="space-y-4">
      <li
        v-for="{ slug, title, path } in list"
        :key="slug"
        class="font-medium flex leading-tight"
        :class="[colorOption, sizeOption.text]"
      >
        <span class="mr-1">
          <fa icon="caret-right" :size="sizeOption.icon" />
        </span>
        <nuxt-link :to="path" class="hover:underline">
          {{ title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const COLOR_OPTION = {
  green: 'text-green',
};

const SIZE_OPTION = {
  sm: {
    title: 'sm',
    text: 'text-sm',
    icon: 'xs',
  },
  md: {
    title: 'sm',
    text: 'text-base',
    icon: 'sm',
  },
};

export default {
  props: {
    color: {
      type: String,
      default: 'green',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    list: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (value) => Object.keys(SIZE_OPTION).includes(value),
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    sizeOption() {
      return SIZE_OPTION[this.size];
    },
  },
};
</script>
