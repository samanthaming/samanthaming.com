<template>
  <div
    class="py-5 pb-10 border-t-8"
    :class="[categoryOption.background, categoryOption.border]"
  >
    <div class="xl:max-w-screen-3xl mx-auto pl-2 md:pl-5">
      <section-head
        class="mb-3 pl-3"
        :text="categoryOption.text"
        :direction="direction"
        :size="size"
        :background-color="categoryOption.background"
        :divider="false"
        :color="categoryOption.color"
      />
      <ul class="grid grid-flow-col scrollbar overflow-x-auto">
        <li v-for="item in list" :key="item.slug" class="px-3 py-5 w-72">
          <nuxt-link :to="item.path" class="group" :title="item.title">
            <app-image
              :dir="categoryOption.dir"
              :img="item.slug"
              class="transform group-hover:scale-105 duration-100 block shadow-lg"
            />
            <heading-tag
              class="leading-tight md:leading-tight text-sm md:text-base font-medium line-clamp-2 mt-3 group-hover:text-fuscia"
              :level="level"
            >
              {{ item.title }}
            </heading-tag>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const CATEGORY_OPTION = {
  tidbits: {
    border: 'border-orange-dark',
    background: 'bg-orange-white',
    dir: 'tidbits',
    text: 'Recent Tidbits',
    color: 'orange',
  },
  blog: {
    border: 'border-green',
    background: 'bg-green-white',
    dir: 'blog',
    text: 'Recent Articles',
    color: 'green',
  },
};

export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
      validator: (value) => Object.keys(CATEGORY_OPTION).includes(value),
    },
    direction: {
      type: String,
      default: 'left',
    },
    size: {
      type: String,
      default: 'md',
    },
    level: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    categoryOption() {
      return CATEGORY_OPTION[this.category];
    },
  },
};
</script>
