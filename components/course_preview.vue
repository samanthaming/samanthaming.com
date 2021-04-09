<template>
  <div>
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
    <div
      class="pt-7 grid grid-cols-none lg:grid-cols-10 gap-8 lg:gap-5 overflow-scroll grid-flow-col lg:grid-flow-row"
    >
      <!-- COURSE -->
      <div class="col-span-5">
        <div class="min-w-96 lg:min-w-full lg:max-w-xl">
          <nuxt-link
            :to="course.slug"
            :title="course.title"
            class="block transform hover:-translate-y-2 hover:scale-100 transition duration-200 ease-in"
          >
            <app-image
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
        <loading-component v-if="fetchState.pending" class="h-full" />
        <ul
          v-else
          class="grid grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-8 lg:gap-5 xl:gap-y-8"
        >
          <li v-for="{ slug, title, path } in lessons" :key="slug">
            <nuxt-link :to="path" :title="title" class="group">
              <div
                class="w-40 lg:w-auto lg:max-w-9xs mx-auto transform group-hover:-translate-y-2 group-hover:scale-110 transition duration-150 ease-in"
              >
                <app-image
                  :dir="course.slug"
                  :img="slug"
                  class="shadow-dark-md"
                />
              </div>
              <p
                class="text-ink-50 leading-tight md:leading-tight text-xs xl:text-sm mt-3 text-center font-medium group-hover:text-fuscia"
              >
                {{ title }}
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
    course: {
      type: Object,
      required: true,
    },
    fetchState: {
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
