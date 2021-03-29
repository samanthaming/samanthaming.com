<template>
  <div class="mt-8 lg:mt-10">
    <div class="page-container">
      <!-- HERO -->
      <div class="lg:grid grid-cols-10 gap-x-4 lg:px-5">
        <!-- LEFT -->
        <div
          class="col-span-3 xl:col-span-4 pb-8 px-2 sm:px-3 lg:px-0 lg:pt-8 font-head text-center lg:text-left"
        >
          <h1
            class="leading-tight font-semibold text-3xl md:text-4xl 2xl:text-5xl"
          >
            {{ title }}
          </h1>
          <p
            v-if="description"
            class="mt-3 font-light leading-snug text-xl xl:text-2xl"
          >
            {{ description }}
          </p>
          <slot name="hero-text"></slot>
        </div>
        <!-- RIGHT -->
        <div class="col-span-7 xl:col-span-6">
          <slot name="hero-media"></slot>
        </div>
      </div>
      <slot name="top"></slot>
    </div>
    <!-- CONTENT -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
