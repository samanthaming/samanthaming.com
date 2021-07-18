<template>
  <div>
    <aside
      class="h-full fixed top-0 z-50 w-5/6 xs:w-4/5 sm:w-1/2 md:w-1/2 bg-black border-r border-gray overflow-y-auto overflow-x-hidden transform transition-transform duration-300"
      :class="`${
        sidebar ? 'opacity-100 translate-0' : 'opacity-0 -translate-x-full'
      }`"
    >
      <div
        class="flex items-center justify-between py-4 pl-5 xs:pl-8 border-b border-ink"
      >
        <a class="flex items-center" href="/" @click.prevent="onClick('index')">
          <img
            src="~/assets/img/app/samantha-ming-logo.svg"
            alt="Samantha Ming Logo"
            class="w-10 xs:w-12"
          />
          <span
            class="uppercase tracking-wide leading-tight xs:leading-tight text-gray pl-3 text-sm xs:text-base sm:text-lg"
          >
            Samantha Ming
          </span>
        </a>
        <nav-close-button @click="toggleSidebar(false)" />
      </div>
      <ul class="space-y-1 mt-5">
        <li
          v-for="route in routes"
          :key="route.to"
          class="flex items-center py-4 pl-8 xs:pl-10"
        >
          <a
            class="text-gray-light uppercase text-lg hover:text-fuscia"
            :href="`/${route.to}`"
            @click.prevent="onClick(route.to)"
          >
            {{ route.text }}
          </a>
        </li>
      </ul>
    </aside>
    <!-- This lies on top of the entire app, but lower z-index than side nav.
    This gives effect of clicking outside of the side nav  -->
    <div
      class="fixed top-0 left-0 right-0 opacity-100 min-h-screen h-full z-40"
      :class="`${sidebar ? '' : 'hidden'}`"
      style="background-color: rgba(0, 0, 0, 0.5)"
      @click="toggleSidebar(false)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState('app', ['sidebar']),
  },
  methods: {
    ...mapActions('app', ['toggleSidebar']),
    onClick(routeName) {
      this.toggleSidebar(false);
      this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>
