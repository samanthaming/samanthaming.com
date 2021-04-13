<template>
  <div>
    <section-head
      :text="text"
      direction="left"
      size="md"
      :color="color"
      :border="border"
    />
    <ul class="mt-3 space-y-2 text-base md:text-lg">
      <li
        v-for="{ slug, title, path, description } in related"
        :key="slug"
        :class="[colorOption]"
      >
        <span class="mr-1">
          <fa icon="caret-right" />
        </span>
        <nuxt-link :to="path" class="hover:underline">
          <span v-if="description">
            <strong>{{ title }}</strong> - {{ description }}
          </span>
          <span v-else>
            {{ title }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: 'text-orange-darker',
  green: 'text-green',
  blue: 'text-blue-dark',
  orchid: 'text-orchid',
};

export default {
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    text: {
      type: String,
      default: 'articles',
    },
    related: {
      type: Array,
      required: true,
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
  },
};
</script>
