<template>
  <div>
    <div
      class="shadow-none lg:shadow-md lg:grid grid-cols-6 gap-x-5 py-7 lg:px-5"
      :class="colorOption.background"
    >
      <!-- LEFT -->
      <div class="col-span-2">
        <div class="max-w-xs mx-auto group">
          <nuxt-link
            :to="path"
            class="transform group-hover:-translate-y-2 duration-200 inline-block h-full w-full"
          >
            <slot></slot>
          </nuxt-link>
        </div>
      </div>
      <!-- RIGHT -->
      <div
        class="col-span-4 max-w-prose lg:max-w-xl mx-auto pt-5 lg:pt-0 px-4 lg:px-0"
      >
        <div class="flex justify-center items-center lg:block">
          <span
            v-if="badge"
            class="inline-flex items-center text-xs lg:text-sm font-semibold lg:font-bold font-head uppercase text-white py-0.5 lg:py-0 px-2 lg:px-3 lg:mb-3 mr-2 lg:mr-0 rounded-full lg:rounded"
            :class="colorOption.badge"
          >
            {{ badge }}
          </span>
          <nuxt-link :to="path">
            <h2
              class="font-bold text-xl md:text-2xl leading-none hover:text-fuscia hover:underline text-center lg:text-left"
              :class="colorOption.text"
            >
              {{ title }}
            </h2>
          </nuxt-link>
        </div>
        <p
          class="text-ink-50 leading-snug md:leading-snug text-base md:text-lg mt-3 md:mt-5 font-body"
        >
          {{ description }}
        </p>
        <div class="mt-8 hidden xl:block">
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
