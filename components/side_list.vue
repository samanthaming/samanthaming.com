<template>
  <div>
    <section-head
      class="mb-3"
      :color="color"
      :text="text"
      :size="sizeOption.title"
      direction="left"
      :border="border"
    />
    <ul class="mt-3 space-y-2">
      <li
        v-for="{ slug, title, path } in list"
        :key="slug"
        class="font-medium"
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
    title: 'md',
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
