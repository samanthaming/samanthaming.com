<template>
  <div>
    <section-head
      class="mb-3"
      :color="color"
      :text="text"
      size="sm"
      direction="left"
    />
    <ul class="mt-3 space-y-2">
      <li
        v-for="{ slug, title, path } in list"
        :key="slug"
        class="text-sm font-medium"
        :class="[colorOption]"
      >
        <span class="mr-1">
          <fa icon="caret-right" size="xs" />
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

export default {
  props: {
    color: {
      type: String,
      default: 'green',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    list: {
      type: Array,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
