<template>
  <div class="mt-8 lg:mt-10">
    <!-- TOP -->
    <div class="page-container">
      <!-- BANNER -->
      <div class="lg:grid grid-cols-10 gap-4 lg:px-5">
        <!-- Left -->
        <div
          class="mx-auto col-span-3 xl:col-span-4 pb-8 px-2 sm:px-3 lg:px-0 lg:pt-8 font-head text-center lg:text-left"
        >
          <h1
            class="leading-tight font-semibold text-3xl md:text-4xl 2xl:text-5xl"
          >
            {{ course.title }}
          </h1>
          <p class="mt-3 font-light leading-snug text-xl xl:text-2xl">
            {{ course.description }}
          </p>
          <div class="hidden lg:block mt-10 xl:w-6/10">
            <button
              type="button"
              class="w-full text-center px-4 py-2.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
        <!-- Right -->
        <div class="col-span-7 xl:col-span-6">
          <!-- TODO: adjust link -->
          <nuxt-link to="/" class="group">
            <div
              class="max-w-2xl mx-auto relative transform group-hover:-translate-y-2 duration-200"
            >
              <app-image
                dir="courses"
                :img="$route.name"
                class="shadow-dark-md"
              />
              <div
                class="absolute bottom-0 lg:hidden w-full text-center px-4 py-2.5 text-base font-medium text-white bg-blue"
              >
                {{ buttonText }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- SHARE -->
      <div class="bg-blue-lighter mt-12 lg:mt-16">
        <ul class="max-w-screen-xl mx-auto flex items-center justify-around">
          <li
            v-for="{ icon, link, name, text, type } in shares"
            :key="icon"
            class="py-1.5"
          >
            <a
              :href="link"
              target="_blank"
              class="group inline-block py-1.5 text-blue-dark hover:text-blue-darker text-2xl md:text-base"
            >
              <fa :icon="[type, icon]" />
              <span class="pl-1 group-hover:underline">
                <span class="hidden xl:inline">{{ text }}</span>
                <span class="hidden md:inline xl:hidden">{{ name }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- CONTENT -->
    <div class="page-container mt-16 lg:mt-20 space-y-14 xl:space-y-24">
      <loading-component v-if="fetchState.pending" />
      <div v-for="[section, lessons] in chunks" v-else :key="section">
        <div :id="encodeURIComponent(section)" class="top-nav-offset"></div>
        <div class="relative mb-10 xl:mb-12">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-light"></div>
          </div>
          <div class="relative flex justify-center">
            <nuxt-link :to="`#${encodeURIComponent(section)}`">
              <h2
                class="px-2 md:px-5 bg-white text-lg xs:text-xl md:text-2xl lg:text-3xl font-black uppercase text-ink-light font-body"
              >
                {{ section }}
              </h2>
            </nuxt-link>
          </div>
        </div>
        <ul
          class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10"
        >
          <li v-for="lesson in lessons" :key="lesson.slug">
            <nuxt-link :to="lesson.path" class="group">
              <div
                class="shadow-dark group-hover:scale-105 transform duration-100 relative"
              >
                <app-image :dir="$route.name" :img="lesson.slug" />
                <span
                  class="-top-1 -left-1 absolute w-6 sm:w-8 md:w-10 lg:w-14 py-0.5 sm:py-1 lg:py-2 text-center text-white bg-blue text-xs sm:text-sm md:text-lg lg:text-xl font-medium sm:font-semibold md:font-bold font-head shadow-md opacity-90"
                >
                  {{ lesson.order }}
                </span>
              </div>
              <h3
                class="mt-3 font-medium text-sm md:text-base xl:text-lg group-hover:text-fuscia"
              >
                {{ lesson.title }}
              </h3>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- BOTTOM -->
    <div class="page-container mt-14">
      <course-card-list />
    </div>
    <tidbit-scroll class="mt-16" direction="left" background="orange" />
  </div>
</template>

<script>
import { shareLinks, COURSES_DATA } from '~/lib';

export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Start',
    },
    fetchState: {
      type: Object,
      required: true,
    },
    chunks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    shares() {
      const { title, description } = this;
      const { host } = this.$site;
      const { path } = this.$route;
      const url = host + path;

      return shareLinks(url, title, description);
    },
    course() {
      return COURSES_DATA[this.$route.name];
    },
  },
};
</script>
