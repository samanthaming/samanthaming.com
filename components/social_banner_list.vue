<template>
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
    <li v-for="{ icon, path, description } in socials" :key="icon" class="">
      <a
        :href="path"
        class="flex items-center justify-center bg-white rounded-full w-14 h-14 lg:w-20 lg:h-20 mx-auto transform hover:scale-125 duration-200 hover:text-fuscia"
        rel="noopener noreferrer"
        target="_blank"
      >
        <fa :icon="['fab', icon]" class="text-4xl" />
      </a>
      <div
        class="text-gray text-center text-xs xs:text-sm lg:text-base leading-snug mt-4"
      >
        <div>{{ description }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { SOCIAL_MEDIA_DATA } from '~/lib';

const { instagram, twitter, medium, github } = SOCIAL_MEDIA_DATA;

export default {
  computed: {
    socials() {
      return [instagram, twitter, medium, github];
    },
  },
};
</script>
