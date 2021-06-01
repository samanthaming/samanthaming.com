<template>
  <div>
    <section-head
      v-if="!hideHeader"
      text="Courses"
      color="blue"
      :direction="direction"
      :size="size"
      class="mb-5"
      to="courses"
    />
    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-10">
      <li
        v-for="{ title, slug, description } in courses"
        :key="slug"
        class="block"
      >
        <nuxt-link
          :to="slug"
          class="block border border-gray-white bg-white shadow-dark p-2 xs:p-3 lg:py-4 lg:px-6 transform hover:-translate-y-2 duration-200 h-full hover:border-blue-50"
        >
          <heading-tag
            class="text-lg xs:text-xl lg:text-2xl font-head leading-tight font-semibold"
            :level="level"
          >
            {{ title }}
          </heading-tag>
          <p
            class="mt-2 lg:mt-3 text-ink-light font-head text-xs xs:text-sm sm:text-base xl:text-lg sm:leading-tight xl:leading-tight"
          >
            {{ description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { COURSES_DATA } from '~/lib';

export default {
  props: {
    except: {
      type: String,
      required: false,
      default: '',
    },
    level: {
      type: Number,
      required: false,
      default: 4,
    },
    direction: {
      type: String,
      default: 'left',
    },
    size: {
      type: String,
      default: 'lg',
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    courses() {
      return Object.keys(COURSES_DATA).reduce((accumulator, course) => {
        if (course !== this.except) {
          accumulator.push(COURSES_DATA[course]);
        }
        return accumulator;
      }, []);
    },
  },
};
</script>
