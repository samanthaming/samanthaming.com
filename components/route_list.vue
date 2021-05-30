<template>
  <ul class="space-y-6 sm:w-4/5 md:w-3/4 lg:w-72 xl:w-80 2xl:w-2/4">
    <li v-for="(route, index) in routes" :key="route.name">
      <nuxt-link
        :to="route.path"
        :class="variantOption.anchor"
        class="font-head text-lg py-3 block text-center rounded transform duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
      >
        {{ route.title }}
      </nuxt-link>
      <hr
        v-if="index === 2"
        class="border-purple-lightest border-t-2 mt-8 hidden lg:block"
      />
    </li>
  </ul>
</template>

<script>
const VARIANT_OPTION = {
  primary: {
    anchor: 'uppercase bg-purple-dark text-white',
  },
  secondary: {
    anchor: 'bg-purple-white text-purple-dark border border-purple-dark',
  },
};

export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => Object.keys(VARIANT_OPTION).includes(value),
    },
  },
  computed: {
    variantOption() {
      return VARIANT_OPTION[this.variant];
    },
  },
};
</script>
