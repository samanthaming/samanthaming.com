<template>
  <div class="font-head mt-10 p-5" :class="colorOption.container">
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-y-5 max-w-3xl mx-auto">
      <li v-for="{ icon, link, text, type } in shares" :key="icon">
        <a :href="link" target="_blank" :class="colorOption.anchor">
          <fa :icon="[type, icon]" />
          <span class="pl-1">{{ text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { shareLinks } from '~/lib';

const COLOR_OPTION = {
  orange: {
    container: 'bg-orange-lightest text-orange-darkest',
    anchor: 'hover:text-orange-light',
  },
  green: {
    container: 'bg-green-lightest text-green',
    anchor: 'hover:text-green-light',
  },
};

export default {
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    url() {
      const { host } = this.$site;
      return host + this.path;
    },
    shares() {
      const { url, title, description } = this;

      return shareLinks(url, title, description);
    },
  },
};
</script>
