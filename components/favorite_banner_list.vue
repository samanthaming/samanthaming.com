<template>
  <ul class="grid grid-cols-3 gap-5 sm:gap-10 md:gap-20 max-w-xl mx-auto">
    <li v-for="fav in $options.FAVORITES" :key="fav.path">
      <nuxt-link
        :to="fav.path"
        class="bg-white px-2 py-3 flex flex-col items-center xs:justify-center border border-green-lighter transform hover:-translate-y-2 duration-200 hover:border-green-light h-full"
      >
        <fa
          :icon="['fas', fav.icon]"
          class="text-2xl xs:text-3xl sm:text-4xl text-green-50 sm:mt-1"
        />
        <div
          class="mt-3 font-head text-green font-light text-center leading-none xs:text-left text-xs sm:text-sm md:text-base"
        >
          {{ fav.title }}
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { ROUTE_DATA } from '~/lib';

const { uses, techstack, favcourse } = ROUTE_DATA;

const FAVORITES = [uses, techstack, favcourse];

export default {
  FAVORITES,
};
</script>
