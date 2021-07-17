<template>
  <div class="mt-8 lg:mt-10">
    <!-- TOP -->
    <div
      :class="[
        $options.TW.SECTION_CONTAINER,
        $options.TW.SECTION_P,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
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
          <div v-if="buttonText" class="hidden lg:block mt-10 xl:w-6/10">
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
          <div class="max-w-2xl mx-auto relative">
            <app-image
              dir="courses"
              :img="$route.name"
              class="shadow-dark-md"
              width="672"
              height="336"
            />
            <div
              class="absolute bottom-0 lg:hidden w-full text-center px-4 py-2.5 text-base font-medium text-white bg-blue"
            >
              {{ buttonText }}
            </div>
          </div>
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
    <div
      class="mt-16 lg:mt-20"
      :class="[
        $options.TW.SECTION_CONTAINER,
        $options.TW.SECTION_P,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <slot></slot>
      <course-card-list class="mt-20" />
    </div>
    <!-- BOTTOM -->
    <tidbit-scroll class="mt-24" direction="left" background="orange" />
  </div>
</template>

<script>
import { shareLinks, COURSES_DATA, TW } from '~/lib';

export default {
  TW,
  props: {
    buttonText: {
      type: String,
      required: false,
      default: null,
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
