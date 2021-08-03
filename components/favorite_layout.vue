<template>
  <div
    class="mt-16 lg:mt-20 mb-16 md:mb-20 lg:mb-24 xl:mb-40"
    :class="[
      $options.TW.SECTION_CONTAINER,
      $options.TW.SECTION_P,
      $options.TW.SECTION_P_DESKTOP,
    ]"
  >
    <div class="lg:grid grid-cols-10 gap-10">
      <!-- LEFT -->
      <div class="col-span-6">
        <h1 class="page-title mb-10">
          {{ article.title }}
        </h1>

        <nuxt-content
          class="sm-markdown sm-markdown-text-2"
          :document="article"
        />
      </div>
      <!-- RIGHT -->
      <div class="mt-14 lg:mt-0 col-span-4">
        <tidbit-side list-class="grid-cols-3 lg:grid-cols-2 xl:grid-cols-3" />
        <blog-side-list
          class="mt-12"
          text-class="text-sm xs:text-base lg:text-sm xl:text-base"
          :border="true"
        />
        <course-side-list class="mt-10" breakpoint="md" />
      </div>
    </div>
  </div>
</template>

<script>
import { TW } from '~/lib';

export default {
  TW,
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
