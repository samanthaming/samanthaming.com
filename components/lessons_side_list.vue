<template>
  <div>
    <section-head
      class="mb-5"
      size="md"
      direction="left"
      color="blue"
      :text="text"
      :border="true"
      :description="description"
      :to="to"
    />
    <ul class="lg:space-y-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-none">
      <li
        v-for="{ path, title, slug, order } in lessons"
        :key="slug"
        class="text-sm leading-tight group flex items-center border border-gray-lighter lg:border-none -mr-px -mb-px lg:m-0 p-2 lg:p-0"
      >
        <div class="text-gray-dark mr-1.5">{{ order }}.</div>
        <nuxt-link
          :to="path"
          :is-active="currentSlug === slug"
          class="text-blue-darker group-hover:underline group-hover:text-fuscia"
          active-class="font-bold"
        >
          <span>
            {{ title }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    currentSlug() {
      return this.$route.params.slug;
    },
  },
};
</script>
