<template>
  <div>
    <!-- COURSE -->
    <div class="mx-auto w-full sm:w-10/12 md:w-full">
      <nuxt-link
        :to="course.slug"
        :title="course.title"
        class="block transform hover:-translate-y-2 hover:scale-103 transition duration-150 ease-in"
      >
        <!-- :sizes="{ xs: 400 }" -->
        <app-image
          dir="courses"
          :img="course.slug"
          class="shadow-md"
          width="704"
          height="352"
        />
      </nuxt-link>
    </div>
    <!-- LESSONS -->
    <div class="mt-8">
      <ul class="grid grid-cols-3 gap-5 lg:gap-8 xl:gap-12 2xl:gap-14">
        <li v-for="lesson in lessons" :key="lesson.slug">
          <nuxt-link :to="lesson.path" :title="lesson.title" class="group">
            <div
              class="mx-auto transform group-hover:-translate-y-2 group-hover:scale-105 transition duration-150 ease-in"
            >
              <page-image
                :dir="course.slug"
                :img="lesson.slug"
                class="shadow-dark-md"
                width="197"
                height="197"
              />
            </div>
            <p
              class="text-ink-50 leading-tight md:leading-tight text-xs xl:text-sm mt-3 text-center font-medium group-hover:text-fuscia"
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
