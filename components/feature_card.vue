<template>
  <div>
    <nuxt-link
      :to="path"
      class="inline-flex flex-col lg:flex-row pt-10 lg:pt-12 pb-10 px-2 lg:px-6 shadow-none lg:shadow-md transition duration-200 ease-out transform hover:-translate-y-1 hover:scale-105"
      :class="colorOption.background"
    >
      <div>
        <slot></slot>
      </div>
      <div class="text-center lg:text-left pt-8 lg:pt-0 lg:pl-5">
        <span
          v-if="badge"
          class="hidden lg:inline-flex items-center px-3 rounded text-sm font-bold font-head uppercase text-white mb-3"
          :class="colorOption.badge"
        >
          {{ badge }}
        </span>
        <h2 class="font-bold text-3xl leading-none" :class="colorOption.text">
          {{ title }}
        </h2>
        <p
          class="text-default text-ink-50 font-normal leading-normal text-lg mt-6 font-body"
        >
          {{ description }}
        </p>
        <div
          class="mt-8 w-8/10 xs:w-3/4 sm:w-1/2 mx-auto lg:mx-0 lg:flex lg:text-left"
        >
          <div
            class="button uppercase text-sm font-light py-1 px-6 border text-center rounded-full bg-white text-fuscia border-fuscia"
          >
            Read more
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: {
    background: 'bg-orange-lightest',
    badge: 'bg-orange-dark',
    text: 'text-orange-dark',
  },
};

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'orange',
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>

<style lang="scss" scoped>
a:hover .button {
  @apply bg-fuscia text-white;
}
</style>
