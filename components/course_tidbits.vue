<template>
  <!-- TODO: consider adding min-height to avoid loading jump while image load -->
  <ul
    class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10"
  >
    <li v-for="tidbit in tidbits" :key="tidbit.slug">
      <app-tag
        :tag="tidbit.path ? 'nuxt-link' : 'div'"
        :to="tidbit.path"
        class="block"
        :class="{ group: tidbit.path }"
      >
        <div
          class="shadow-dark group-hover:scale-105 transform duration-100 relative"
        >
          <page-image :dir="$route.name" :img="tidbit.slug" />
          <span
            v-if="order"
            class="-top-1 -left-1 absolute w-6 sm:w-8 md:w-10 lg:w-14 py-0.5 sm:py-1 lg:py-2 text-center text-white bg-blue text-xs sm:text-sm md:text-lg lg:text-xl font-medium sm:font-semibold md:font-bold font-head shadow-md opacity-90"
          >
            {{ tidbit.order }}
          </span>
        </div>
        <h3
          class="mt-3 font-medium text-sm md:text-base xl:text-lg group-hover:text-fuscia"
        >
          {{ tidbit.title }}
        </h3>
      </app-tag>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tidbits: {
      type: Array,
      required: true,
    },
    order: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
