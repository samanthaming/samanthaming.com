<template>
  <div class="px-4 xs:px-3 sm:px-5 md:px-10 lg:px-7 xl:px-10 2xl:px-5">
    <section-head
      text="Samantha Ming"
      color="purple"
      direction="left"
      size="sm"
      :border="true"
    />
    <div
      class="mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-12 gap-x-9 sm:gap-x-0 gap-y-10 xs:gap-y-14 lg:gap-10 2xl:gap-0"
    >
      <div
        class="order-1 lg:order-none col-span-full lg:col-span-3 2xl:col-span-2 pt-8 xs:pt-10 lg:pt-0 sm:mx-8 md:mx-10 lg:mx-0 border-t-2 border-purple-lighter lg:border-0"
      >
        <div
          class="text-center grid sm:flex justify-between sm:text-left lg:grid grid-cols-4 gap-y-8"
        >
          <a
            v-for="(social, index) in $options.SOCIAL_MEDIA"
            :key="index"
            :href="social.path"
            class="transform hover:scale-125 hover:text-fuscia-50 transition-transform duration-150 text-purple-dark"
            rel="noopener noreferrer"
            target="_blank"
          >
            <fa :icon="['fab', social.icon]" class="text-3xl" />
          </a>
        </div>
      </div>
      <div class="lg:col-span-5">
        <route-list :routes="$options.MAIN_ROUTES" class="mx-auto" />
      </div>
      <div class="lg:col-span-4 2xl:col-span-5">
        <route-list
          :routes="$options.SUB_ROUTES"
          variant="secondary"
          class="mx-auto lg:ml-auto 2xl:mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIAL_MEDIA_DATA, ROUTE_DATA } from '~/lib';

const {
  tidbits,
  blog,
  courses,
  about,
  contact,
  flexbox30,
  talk,
  uses,
} = ROUTE_DATA;
const SOCIAL_MEDIA = Object.values(SOCIAL_MEDIA_DATA);
const MAIN_ROUTES = [tidbits, blog, courses, flexbox30];
const SUB_ROUTES = [contact, about, talk, uses];

export default {
  SOCIAL_MEDIA,
  MAIN_ROUTES,
  SUB_ROUTES,
};
</script>
