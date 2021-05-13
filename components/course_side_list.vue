<template>
  <div>
    <section-head
      text="Courses"
      color="blue"
      direction="left"
      size="sm"
      :border="true"
    />
    <ul class="space-y-3">
      <li v-for="{ title, slug, description } in courses" :key="slug">
        <nuxt-link
          :to="slug"
          class="py-3 px-4 shadow-sm border border-gray-lighter block rounded hover:border-blue-light transform hover:-translate-y-0.5 hover:scale-102 hover:text-fuscia duration-100 md:text-sm xl:text-base"
        >
          <h3 class="font-medium">{{ title }}</h3>
          <p class="text-ink-light">{{ description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { COURSES_DATA } from '~/lib';

export default {
  computed: {
    courses() {
      return Object.values(COURSES_DATA);
    },
  },
};
</script>
