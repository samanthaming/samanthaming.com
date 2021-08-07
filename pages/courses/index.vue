<template>
  <div class="lg:mt-10">
    <!-- TOP -->
    <div class="lg:max-w-4xl mx-auto xl:min-h-[270px]">
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
          :alt="$options.FLEXBOX30_DATA.description"
        />
      </feature-card>
    </div>
    <div
      class="mt-12 xl:min-h-[178px]"
      :class="[
        $options.TW.SECTION_CONTAINER,
        $options.TW.SECTION_P,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <course-card-list />
    </div>
    <div class="my-12 h-14 bg-blue-lightest border-b border-blue-light"></div>
    <!-- CONTENT -->
    <div
      class=""
      :class="[
        $options.TW.SECTION_CONTAINER,
        $options.TW.SECTION_PL,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <course-preview-flexbox30 />
      <hr class="border-gray-lighter my-6 2xl:my-8" />
      <course-preview-codetidbits30 />
      <hr class="border-gray-lighter my-6 2xl:my-8" />
      <course-preview-basics />
      <hr class="border-gray-lighter my-6 2xl:my-8" />
      <course-preview-pictorials />
    </div>
    <tidbit-scroll
      class="mt-20 md:mt-24 lg:mt-28"
      direction="left"
      background="orange"
    />
  </div>
</template>

<script>
import { COURSES_DATA, TW } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
  TW,
};
</script>
