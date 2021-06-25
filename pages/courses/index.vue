<template>
  <div class="lg:mt-10">
    <!-- TOP -->
    <div class="lg:max-w-4xl mx-auto">
      <feature-card
        :title="$options.FLEXBOX30_DATA.title"
        :description="$options.FLEXBOX30_DATA.description"
        :path="$options.FLEXBOX30_DATA.slug"
        badge="new"
        color="blue"
        size="landscape"
      >
        <app-image
          dir="courses"
          :img="$options.FLEXBOX30_DATA.slug"
          class="shadow-dark"
          width="448"
          height="224"
        />
      </feature-card>
    </div>
    <div class="page-container mt-12">
      <course-card-list />
    </div>
    <div class="my-12 h-14 bg-blue-lightest border-b border-blue-light"></div>
    <!-- CONTENT -->
    <div class="page-container">
      <course-preview-flexbox30 />
      <hr class="border-gray-lighter my-8" />
      <course-preview-codetidbits30 />
      <hr class="border-gray-lighter my-8" />
      <course-preview-basics />
      <hr class="border-gray-lighter my-8" />
      <course-preview-pictorials />
    </div>
    <tidbit-scroll
      class="mt-20 md:mt-24 lg:mt-28"
      direction="left"
      background="orange"
      size="md"
    />
  </div>
</template>

<script>
import { COURSES_DATA } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
};
</script>
