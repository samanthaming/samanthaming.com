<template>
  <div>
    <div
      class="shadow-none lg:shadow-md lg:grid grid-cols-6 lg:gap-x-3 xl:gap-x-5 py-7 lg:px-5"
      :class="colorOption.background"
    >
      <div class="flex justify-center col-span-2">
        <nuxt-link
          :to="path"
          class="transition duration-200 ease-out transform hover:-translate-y-1 hover:scale-105"
        >
          <slot></slot>
        </nuxt-link>
      </div>
      <div
        class="text-center lg:text-left pt-8 lg:pt-0 col-span-4 px-2 lg:px-0 lg:max-w-xl"
      >
        <span
          v-if="badge"
          class="hidden lg:inline-flex items-center px-3 rounded text-sm font-bold font-head uppercase text-white mb-3"
          :class="colorOption.badge"
        >
          {{ badge }}
        </span>
        <nuxt-link :to="path">
          <h2
            class="font-bold text-xl md:text-2xl leading-none hover:text-fuscia hover:underline"
            :class="colorOption.text"
          >
            {{ title }}
          </h2>
        </nuxt-link>
        <p
          class="text-ink-50 font-normal leading-normal text-sm md:text-base mt-4 md:mt-5 font-body"
        >
          {{ description }}
        </p>
        <div class="mt-8">
          <nuxt-link
            :to="path"
            class="uppercase text-sm font-light inline-block w-3/4 md:w-1/2 py-2 lg:py-1 border text-center rounded-full bg-white text-fuscia border-fuscia hover:bg-fuscia hover:text-white"
          >
            Read more
          </nuxt-link>
        </div>
      </div>
    </div>
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
