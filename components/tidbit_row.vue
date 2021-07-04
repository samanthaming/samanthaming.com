<template>
  <div>
    <loading-component v-if="loading" class="h-72" :has-background="true" />
    <ul v-else class="grid grid-flow-col scrollbar overflow-x-auto gap-6">
      <li class="my-5 w-16">
        <nuxt-link
          :to="to"
          class="group border text-white rounded h-full py-6 flex flex-col items-center justify-between transform duration-100"
          :class="[colorOption.background, colorOption.hover]"
        >
          <div class="text-center">
            <h3 class="font-light">{{ text }}</h3>
            <div class="text-3xl pt-2">
              <fa :icon="['fab', icon]" />
            </div>
          </div>
          <span class="text-xs group-hover:underline" :class="colorOption.text">
            more
          </span>
        </nuxt-link>
      </li>
      <li
        v-for="{ title, slug, path } in tidbits"
        :key="slug"
        class="py-5 w-48 md:w-52 lg:w-56 2xl:w-64 group"
      >
        <nuxt-link
          :to="path"
          class="relative block transform duration-150 ease-in group-hover:-translate-y-2"
          :title="title"
        >
          <app-image dir="tidbits" :img="slug" width="256" height="256" />
          <div
            class="absolute bottom-0 w-full bg-orange-lightest opacity-80 h-10 px-3 flex items-center"
          >
            <heading-tag
              class="leading-tight text-xs mx-auto line-clamp-2 group-hover:text-fuscia"
              :level="4"
            >
              {{ title }}
            </heading-tag>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const COLOR_OPTION = {
  orange: {
    background: 'bg-orange',
    hover: 'hover:border-orange-darkest',
    text: 'text-orange-darkest',
  },
};

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    to: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    tidbits: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
