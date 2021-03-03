<template>
  <nav class="active-route bg-ink h-14 font-head tracking-wide">
    <div class="container mx-auto h-full flex justify-between items-center">
      <!-- <SidebarButton
        class="md:hidden"
        @toggle-sidebar="$emit('toggle-sidebar')"
      /> -->
      <ul class="flex-grow-2 flex content-center justify-between items-center">
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
        <li>
          <nuxt-link
            :to="{ name: 'tidbits' }"
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            exact-active-class="text-white border-b border-gray-light"
          >
            Tidbits
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="{ name: 'tidbits', query: { page: 2 } }"
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            exact-active-class="text-white border-b border-gray-light"
            >Tidbits 2</nuxt-link
          >
        </li>
      </ul>
      <div class="md:flex-grow-1 lg:flex-grow-2 flex justify-end">
        <search-box />
      </div>
    </div>
  </nav>
</template>

<script>
const routes = [
  {
    slug: 'tidbits',
    name: 'Tidbits',
  },
];

export default {
  routes,
};
</script>
