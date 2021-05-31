<template>
  <div
    class="page-container-full px-3 xs:px-4 sm:px-5 md:px-8 lg:px-6 mt-16 lg:mt-20 mb-16 md:mb-20 lg:mb-24 xl:mb-40"
  >
    <div class="lg:grid grid-cols-10 gap-10">
      <!-- LEFT -->
      <div class="col-span-6">
        <h1 class="page-title mb-10">
          {{ article.title }}
        </h1>

        <nuxt-content class="sm-markdown" :document="article" />
      </div>
      <!-- RIGHT -->
      <div class="mt-14 lg:mt-0 col-span-4">
        <tidbit-side breakpoint="lg" />
        <blog-side-list class="mt-12" size="md" :border="true" />
        <course-side-list class="mt-10" breakpoint="md" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
