<template>
  <nav class="active-route bg-ink h-14 font-head tracking-wide">
    <div
      class="max-w-screen-xl mx-auto h-full flex justify-between items-center"
    >
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
            to="tidbits"
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            exact-active-class="text-white border-b border-gray-light"
          >
            Tidbits
          </nuxt-link>
        </li>
      </ul>
      <!-- <div class="md:flex-grow-1 lg:flex-grow-2 flex justify-end">
        <SearchBox class="sm-searchbox" />
      </div> -->
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
// import SearchBox from '@SearchBox';

const routes = [
  {
    slug: 'tidbits',
    name: 'Tidbits',
  },
];

export default {
  components: {
    // SearchBox,
  },
  routes,
};
</script>
