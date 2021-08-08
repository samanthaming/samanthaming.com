<template>
  <div
    class="shadow-none md:shadow-md pb-5 pt-7 xs:pb-6 md:pt-6 md:pb-4 lg:pt-6 lg:pb-4 2xl:py-7 px-3 lg:px-5 md:grid grid-cols-10"
    :class="[sizeOption.parent, colorOption.background]"
  >
    <!-- LEFT: MEDIA -->
    <div :class="sizeOption.media">
      <div class="mx-auto group" :class="sizeOption.image">
        <nuxt-link
          :to="path"
          class="inline-block text-center md:text-left h-full w-full transform hover:-translate-y-1 hover:scale-105 transition duration-150 ease-in-out"
        >
          <slot></slot>
        </nuxt-link>
      </div>
    </div>
    <!-- RIGHT: CONTENT -->
    <div
      class="pt-4 xs:pt-5 md:pt-0 lg:pt-0.5 text-center md:text-left"
      :class="sizeOption.content"
    >
      <div class="flex justify-center items-center md:block">
        <span
          v-if="badge"
          class="hidden xs:inline-flex items-center text-xs md:text-2xs lg:text-sm font-semibold lg:font-bold font-head uppercase text-white py-0.5 md:py-0 lg:py-0 px-2 lg:px-3 md:mb-2 lg:mb-3 mr-2 lg:mr-0 rounded-full md:rounded"
          :class="colorOption.badge"
        >
          {{ badge }}
        </span>
        <nuxt-link :to="path">
          <h2
            class="font-bold hover:text-fuscia hover:underline text"
            :class="[colorOption.text, textOption.title]"
          >
            {{ title }}
          </h2>
        </nuxt-link>
      </div>
      <p
        class="text-ink-50 mt-3 md:mt-2 lg:mt-5 font-body"
        :class="textOption.description"
      >
        {{ description }}
      </p>
      <div class="mt-8 hidden lg:block">
        <nuxt-link
          :to="path"
          class="uppercase lg:text-xs xl:text-sm font-light inline-block w-3/4 md:w-1/2 py-2 lg:py-1 border text-center rounded-full bg-white text-fuscia border-fuscia hover:bg-fuscia hover:text-white"
        >
          Read more
        </nuxt-link>
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
  blue: {
    background: 'bg-blue-lightest',
    badge: 'bg-blue-dark',
    text: 'text-blue-dark',
  },
};

const SIZE_OPTION = {
  square: {
    parent: 'gap-3 lg:gap-5',
    media: 'col-span-6',
    content: 'col-span-4',
    image: 'max-w-6xs xs:max-w-5xs md:max-w-3xs 2xl:max-w-2xs',
  },
  landscape: {
    parent: 'gap-8 xl:gap-10',
    media: 'col-span-5 md:order-2 md:mr-auto',
    content: 'col-span-5 md:order-1 md:mx-auto',
    image: 'max-w-md md:max-w-sm xl:max-w-md 2xl:max-w-xl',
  },
};

const baseTextTitle =
  'text-lg lg:text-xl lg:leading-tight leading-none 2xl:text-2xl';
const baseTextDescription =
  'text-sm lg:text-sm xl:text-base 2xl:text-lg leading-snug lg:leading-snug';

const TEXT_OPTION = {
  home: {
    title: `${baseTextTitle} md:text-sm md:leading-tight`,
    description: `${baseTextDescription} md:text-xs md:leading-snug`,
  },
  default: {
    title: `${baseTextTitle} md:text-base`,
    description: `${baseTextDescription} md:text-xs`,
  },
  course: {
    title: 'text-2xl md:text-3xl 2xl:text-4xl',
    description: 'text-lg md:text-xl 2xl:text-2xl',
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
    size: {
      type: String,
      default: 'square',
    },
    text: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    sizeOption() {
      return SIZE_OPTION[this.size];
    },
    textOption() {
      return TEXT_OPTION[this.text];
    },
  },
};
</script>
