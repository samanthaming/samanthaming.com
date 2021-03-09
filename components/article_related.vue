<template>
  <div>
    <section-head :text="fullText" direction="left" size="md" :color="color" />
    <ul class="mt-3 space-y-2">
      <li
        v-for="{ slug, title, path } in related"
        :key="slug"
        class="text-orange-dark"
      >
        <span class="mr-1">
          <fa icon="caret-right" />
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
  orange: {
    border: 'border-orange-light',
    background: 'bg-orange-lighter',
    text: 'text-orange-darker',
    buttonBackground: 'bg-orange-white hover:bg-orange-lightest',
    buttonBorder: 'border-orange-light hover:border-orange',
    active: 'bg-orange border-orange',
  },
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
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    fullText() {
      return `Related ${this.text}`;
    },
  },
};
</script>
