<template>
  <div>
    <section-head
      text="Courses"
      color="blue"
      direction="left"
      size="sm"
      :border="true"
      to="courses"
    />
    <ul :class="breakpointOption.ul">
      <li v-for="{ title, slug, description } in courses" :key="slug">
        <nuxt-link
          :to="slug"
          class="py-3 px-4 shadow-sm border border-gray-lighter block rounded hover:border-blue-light transform hover:-translate-y-0.5 hover:scale-102 hover:text-fuscia duration-100"
          :class="breakpointOption.anchor"
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

const BREAKPOINT_OPTION = {
  sm: {
    ul: 'space-y-3',
    anchor: 'md:text-sm xl:text-base',
  },
  md: {
    ul:
      'md:grid grid-cols-2 gap-5 lg:block space-y-3 md:space-y-0 lg:space-y-3',
    anchor: 'md:text-sm lg:text-base',
  },
};

export default {
  props: {
    breakpoint: {
      type: String,
      default: null,
    },
  },
  computed: {
    courses() {
      return Object.values(COURSES_DATA);
    },
    breakpointOption() {
      return this.breakpoint && BREAKPOINT_OPTION[this.breakpoint];
    },
  },
};
</script>
