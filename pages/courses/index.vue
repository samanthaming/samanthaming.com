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
        <page-image
          dir="courses"
          :img="$options.FLEXBOX30_DATA.slug"
          class="shadow-dark"
        />
      </feature-card>
    </div>
    <div class="page-container mt-12">
      <course-card-list />
    </div>
    <div class="my-12 h-14 bg-blue-lightest border-b border-blue-light"></div>
    <!-- CONTENT -->
    <div class="page-container">
      <!-- LEFT -->
      <div class="lg:grid grid-cols-12 gap-10 xl:gap-5">
        <div class="col-span-8 xl:col-span-9">
          <div class="">
            <course-preview-flexbox30 />
            <hr class="border-gray-lighter my-8" />
            <course-preview-codetidbits30 />
            <hr class="border-gray-lighter my-8" />
            <course-preview-basics />
            <hr class="border-gray-lighter my-8" />
            <course-preview-pictorials />
          </div>
        </div>
        <!-- RIGHT -->
        <div class="mt-12 lg:mt-0 col-span-4 xl:col-span-3">
          <blog-side-list size="md" :border="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { COURSES_DATA } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
};
</script>
