<template>
  <nav class="bg-ink h-14 font-head tracking-wide">
    <div
      class="xl:container mx-auto h-full flex justify-between items-center md:px-5 xl:px-0"
    >
      <nav-side class="md:hidden" @toggle-sidebar="$emit('toggle-sidebar')" />
      <ul class="flex flex-grow-2 content-center justify-between items-center">
        <li class="m-auto md:m-0">
          <nuxt-link to="/">
            <img
              src="~/assets/img/app/samantha-ming-logo.svg"
              alt="Samantha Ming Logo"
              class="w-10"
            />
            <span
              class="navbar-mobile-title pl-3 font-light text-gray-light uppercase text-xl hidden xs:block md:hidden"
            >
              Samantha Ming
            </span>
          </nuxt-link>
        </li>
        <li
          v-for="route in $options.ROUTES"
          :key="route.to"
          class="hidden md:block"
        >
          <nuxt-link
            :to="{ name: route.to }"
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            exact-active-class="text-white border-b border-gray-light"
          >
            {{ route.text }}
          </nuxt-link>
        </li>
      </ul>
      <div class="flex mr-6 md:mr-0 md:pl-10 lg:flex-grow-2 justify-end">
        <search />
      </div>
    </div>
  </nav>
</template>

<script>
import NavSide from '~/components/layout/nav_side';

// :to="{ name: 'tidbits', query: { page: 2 } }"
const ROUTES = [
  { to: 'tidbits', text: 'Tidbits' },
  { to: 'blog', text: 'Blog' },
  { to: 'courses', text: 'Courses' },
  { to: 'contact', text: 'Contact' },
];

export default {
  ROUTES,
  components: {
    NavSide,
  },
};
</script>
