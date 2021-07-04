<template>
  <div>
    <!-- COURSE -->
    <div class="mx-auto">
      <nuxt-link
        :to="course.slug"
        :title="`${course.title} Course`"
        class="block transform hover:-translate-y-2 hover:scale-103 transition duration-150 ease-in"
      >
        <app-image
          dir="courses"
          :img="course.slug"
          class="shadow-dark-md"
          width="704"
          height="352"
        />
      </nuxt-link>
    </div>
    <!-- LESSONS -->
    <div class="mt-3 xs:mt-5 md:mt-8">
      <ul
        class="grid grid-cols-3 xs:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-12 2xl:gap-14"
      >
        <li
          v-for="(lesson, index) in lessons"
          :key="lesson.slug"
          :class="index === 2 ? 'xs:hidden md:block' : ''"
        >
          <nuxt-link :to="lesson.path" :title="lesson.title" class="group">
            <div
              class="mx-auto transform group-hover:-translate-y-2 group-hover:scale-105 transition duration-150 ease-in"
            >
              <app-image
                :dir="course.slug"
                :img="lesson.slug"
                class="shadow-dark-md"
                width="197"
                height="197"
              />
            </div>
            <p
              class="text-ink-50 text-2xs xl:text-sm leading-tight leading-tight mt-1.5 xs:mt-2 md:mt-3 text-center md:font-medium group-hover:text-fuscia xs:line-clamp-2 md:line-clamp-none"
            >
              {{ lesson.title }}
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO: add loading prop (for lessons) -- optional since it's quite below the page
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
};
</script>
