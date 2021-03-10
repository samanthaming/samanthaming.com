<template>
  <div
    class="py-5 pb-10 border-t-8"
    :class="[colorOption.background, colorOption.border]"
  >
    <div class="container mx-auto pl-2 md:pl-5 lg:pl-0">
      <section-head
        class="mb-5"
        :text="text"
        :direction="direction"
        :size="size"
        :background-color="colorOption.background"
        :divider="false"
      />
      <ul class="flex justify-between space-x-4 scrollbar overflow-x-auto">
        <li v-for="tidbit in tidbits" :key="tidbit.slug" class="flex-shrink-0">
          <tidbit-block
            :title="tidbit.title"
            :path="tidbit.path"
            :image="tidbit.slug"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO: combine this with tidbits_scroll.vue
const COLOR_OPTION = {
  orange: {
    border: 'border-orange-dark',
    background: 'bg-orange-white',
  },
};

export default {
  props: {
    direction: {
      type: String,
      default: 'center',
    },
    size: {
      type: String,
      default: 'lg',
    },
    text: {
      type: String,
      default: 'Top Tidbits',
    },
    tidbits: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
  },
};
</script>
