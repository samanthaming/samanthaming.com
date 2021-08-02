<template>
  <div>
    <hr class="border-gray-lighter border-dotted mb-5" />
    <section-head
      class="mb-5"
      text-class="text-lg md:text-xl lg:text-2xl"
      direction="left"
      color="blue"
      :text="text"
      :divider="false"
      :description="description"
      :to="to"
    />
    <ul class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
      <!-- Prevent double border (mimick border collapse) due to limitation of grid
          "border -mr-px -mb-px"
          Reference: https://stackoverflow.com/questions/42215700/html-grid-layout-with-border-collapse -->
      <li
        v-for="{ path, title, slug, order } in lessons"
        :key="slug"
        class="text-2xs md:text-xs 2xl:text-sm leading-none md:leading-none lg:leading-tight 2xl:leading-tight border border-gray-lighter -mr-px -mb-px"
      >
        <nuxt-link
          class="group flex items-center h-full p-2 hover:bg-blue-lightest"
          active-class="font-bold bg-blue-lightest"
          :to="path"
          :is-active="currentSlug === slug"
        >
          <div class="flex">
            <span class="text-gray-dark mr-1.5">{{ order }}.</span>
            <span
              class="text-blue-darker"
              :class="{ 'group-hover:text-fuscia': currentSlug !== slug }"
            >
              {{ title }}
            </span>
          </div>
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
