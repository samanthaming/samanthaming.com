<template>
  <nav class="bg-ink h-14 font-head tracking-wide">
    <div
      class="max-w-screen-2xl mx-auto h-full flex justify-between items-center md:grid grid-cols-12 gap-x-10 md:px-3 lg:px-5"
    >
      <nav-button class="md:hidden" @click="toggleSidebar(true)" />
      <ul class="flex justify-between items-center col-span-8 lg:col-span-7">
        <li>
          <nuxt-link to="/" class="flex items-center">
            <img
              src="~/assets/img/app/samantha-ming-logo.svg"
              alt="Samantha Ming Logo"
              class="w-10"
            />
            <span
              class="hidden xs:block md:hidden pl-3 text-gray-light uppercase leading-none text-base sm:text-xl"
            >
              Samantha Ming
            </span>
          </nuxt-link>
        </li>
        <li v-for="route in routes" :key="route.to" class="hidden md:block">
          <nuxt-link
            :to="{ name: route.to }"
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            exact-active-class="text-white border-b border-gray-light"
          >
            {{ route.text }}
          </nuxt-link>
        </li>
      </ul>
      <div
        class="mr-4 sm:mr-6 md:mr-0 col-span-4 lg:col-span-5 flex justify-end items-center"
      >
        <search />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions('app', ['toggleSidebar']),
  },
};
</script>
