<template>
  <new-loading-component v-if="pending" class="h-96" />
  <div v-else>
    <!-- LEFT -->
    <div>
      <nuxt-link
        :to="course.slug"
        class="inline-flex items-center text-blue hover:text-fuscia"
      >
        <h3
          class="font-bold leading-snug text-2xl md:text-3xl font-head mr-1.5 md:mr-2"
        >
          {{ course.title }}
        </h3>
        <span class="text-base md:text-xl">
          <fa :icon="['fas', 'caret-right']" />
        </span>
      </nuxt-link>
      <p class="md:text-lg xl:text-xl">
        {{ course.description }}
      </p>
    </div>
    <!-- RIGHT -->
    <div
      class="pt-7 grid grid-cols-none lg:grid-cols-10 gap-8 lg:gap-5 overflow-scroll grid-flow-col lg:grid-flow-row"
    >
      <!-- COURSE -->
      <div class="col-span-5">
        <div class="min-w-96 lg:min-w-full lg:max-w-xl">
          <nuxt-link
            :to="course.slug"
            :title="course.title"
            class="block transform origin-left hover:-translate-y-2 hover:scale-103 transition duration-200 ease-in"
          >
            <page-image
              dir="courses"
              :img="course.slug"
              :sizes="{ xs: 400 }"
              class="shadow-md"
            />
          </nuxt-link>
        </div>
      </div>
      <!-- LESSONS -->
      <div class="col-span-5">
        <ul
          class="grid grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-8 lg:gap-5 xl:gap-y-8"
        >
          <li v-for="lesson in lessons" :key="lesson.slug">
            <nuxt-link :to="lesson.path" :title="lesson.title" class="group">
              <div
                class="w-40 lg:w-32 xl:w-36 2xl:w-40 mx-auto transform group-hover:-translate-y-2 group-hover:scale-110 transition duration-150 ease-in"
              >
                <page-image
                  :dir="course.slug"
                  :img="lesson.slug"
                  class="shadow-dark-md"
                />
                <span
                  v-if="order"
                  class="-top-1 -left-1 absolute w-8 lg:w-6 py-1 lg:py-0.5 text-center text-white bg-blue text-sm lg:text-xs font-head shadow-md opacity-90"
                >
                  {{ lesson.order }}
                </span>
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
  </div>
</template>

<script>
export default {
  props: {
    pending: {
      type: Boolean,
      default: true,
    },
    course: {
      type: Object,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
    order: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
