<template>
  <loading-component v-if="pending" class="h-96" :has-background="true" />
  <div v-else>
    <!-- LEFT -->
    <div v-if="!hideHeader">
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
      class="scrollbar lg-no-scrollbar pb-6 lg:pb-0 pt-7 grid grid-cols-none lg:grid-cols-10 gap-8 lg:gap-5 overflow-x-scroll grid-flow-col lg:grid-flow-row"
    >
      <!-- COURSE -->
      <div class="col-span-5">
        <!--  -->
        <div class="min-w-96 lg:min-w-full lg:max-w-xl">
          <nuxt-link
            :to="course.slug"
            :title="course.title"
            class="block transform origin-left hover:-translate-y-2 hover:scale-103 transition duration-200 ease-in"
          >
            <app-image
              dir="courses"
              :img="course.slug"
              class="shadow-md"
              width="750"
              height="375"
            />
          </nuxt-link>
        </div>
      </div>
      <!-- LESSONS -->
      <div class="col-span-5">
        <ul
          class="grid grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-8 lg:gap-5 2xl:gap-y-8"
        >
          <li v-for="lesson in lessons" :key="lesson.slug">
            <nuxt-link :to="lesson.path" :title="lesson.title" class="group">
              <div
                class="mx-auto transform group-hover:-translate-y-2 group-hover:scale-110 transition duration-150 ease-in"
              >
                <div class="w-48 lg:w-28 xl:w-32 2xl:w-40 relative mx-auto">
                  <!-- NOTE: change to "block" so image fills in height,
                  otherwise text banner won't align with image edge due to a space gap
                  (not sure why there is a gap) -->
                  <app-image
                    :dir="course.slug"
                    :img="lesson.slug"
                    class="shadow-dark-md"
                    display-class="block"
                    width="192"
                    height="192"
                  />
                  <span
                    v-if="order"
                    class="-top-1 -left-1 absolute w-8 lg:w-6 py-1 lg:py-0.5 2xl:py-1 xl:w-8 2xl:w-10 text-center text-white bg-blue text-sm lg:text-xs xl:text-sm font-head shadow-md bg-opacity-90"
                  >
                    {{ lesson.order }}
                  </span>
                </div>
                <!-- NOTE: when using "line-clamp", it will override "display". It sets "display: -webkit-box;", hence we are wrapping another div so "flex" can take effect -->
                <div
                  class="absolute bottom-0 h-8 px-1 lg:static lg:h-full bg-blue-lightest lg:bg-transparent bg-opacity-50 lg:mt-1.5 xl:mt-2.5 2xl:mt-3 w-full flex justify-center items-center lg:block"
                >
                  <h4
                    class="text-ink-50 text-2xs lg:text-xs xl:text-sm leading-tight md:leading-tight font-medium line-clamp-2 lg:md:line-clamp-none group-hover:text-fuscia text-center"
                  >
                    {{ lesson.title }}
                  </h4>
                </div>
              </div>
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
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
