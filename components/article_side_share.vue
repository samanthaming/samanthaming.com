<template>
  <div class="mt-8">
    <ul class="grid grid-cols-6 gap-y-4 ml-4">
      <li v-for="{ icon, link, text, type } in shares" :key="icon" class="">
        <a
          :href="link"
          target="_blank"
          :title="text"
          class="rounded-full inline-flex items-center justify-center h-10 w-10"
          :class="colorOption"
        >
          <fa :icon="[type, icon]" class="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { shareLinks } from '~/lib';

const COLOR_OPTION = {
  orange: 'bg-orange-lightest text-orange-darkest hover:text-orange-light',
  green: 'bg-green-lightest text-green hover:text-green-light',
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
