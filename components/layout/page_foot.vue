<template>
  <div class="bg-ink text-gray pt-10 pb-8">
    <div
      class="mx-auto px-3 sm:px-10 2xl:px-0 lg:max-w-screen-xl grid grid-cols-none lg:grid-cols-10 gap-y-10 md:gap-y-16 lg:gap-y-0 lg:gap-x-5 xl:gap-x-10"
    >
      <!-- LEFT -->
      <div
        class="order-last lg:order-first lg:col-span-3 lg:max-w-sm border-ink-light border-t md:border-0 pt-10 md:pt-0"
      >
        <div
          class="text-center grid sm:flex justify-between sm:text-left lg:grid grid-cols-4 gap-y-10"
        >
          <a
            v-for="(social, index) in $options.SOCIAL_MEDIA"
            :key="index"
            :href="social.path"
            class="transform hover:scale-125 hover:text-fuscia-50 transition-transform duration-150"
            rel="noopener noreferrer"
            target="_blank"
          >
            <fa :icon="['fab', social.icon]" class="text-3xl" />
          </a>
        </div>
        <div class="text-xs mt-10 text-gray-dark">
          &copy; Copyright {{ new Date().getFullYear() }}. Samantha Ming
        </div>
      </div>
      <!-- RIGHT -->
      <div
        class="order-first lg:order-last lg:col-span-7 font-head text-lg xs:text-xl 2xl:max-w-screen-md"
      >
        <div
          class="flex flex-col xs:flex-row justify-around md:justify-normal md:grid grid-cols-none gap-y-6"
        >
          <ul :class="$options.ROUTES_CONTAINER_CLASS">
            <li v-for="mainRoute in $options.MAIN_ROUTES" :key="mainRoute.name">
              <nuxt-link
                :to="mainRoute.path"
                class="uppercase hover:text-fuscia"
                exact-active-class="border-b border-gray-light"
              >
                {{ mainRoute.title }}
              </nuxt-link>
            </li>
          </ul>

          <hr
            class="my-2 xs:my-0 xs:hidden md:block border-ink-light border-t"
          />

          <ul :class="$options.ROUTES_CONTAINER_CLASS">
            <li v-for="subRoute in $options.SUB_ROUTES" :key="subRoute.name">
              <nuxt-link
                :to="subRoute.path"
                class="hover:text-fuscia"
                exact-active-class="border-b border-gray-light"
              >
                {{ subRoute.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIAL_MEDIA_DATA, ROUTE_DATA } from '~/lib';

const SOCIAL_MEDIA = Object.values(SOCIAL_MEDIA_DATA);

const {
  home,
  tidbits,
  blog,
  courses,
  about,
  contact,
  flexbox30,
  codetidbits30,
  pictorials,
  basics,
  talk,
} = ROUTE_DATA;

const MAIN_ROUTES = [home, tidbits, blog, courses, about, contact];

const SUB_ROUTES = [flexbox30, codetidbits30, pictorials, basics, talk];

const ROUTES_CONTAINER_CLASS =
  'text-center xs:text-left space-y-2 xs:space-y-6 md:space-y-0 md:flex justify-between';

export default {
  SOCIAL_MEDIA,
  MAIN_ROUTES,
  SUB_ROUTES,
  ROUTES_CONTAINER_CLASS,
};
</script>
