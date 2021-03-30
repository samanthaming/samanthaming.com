<template>
  <div class="lg:mt-10">
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
        />
      </feature-card>
    </div>
    <div class="page-container mt-12">
      <course-card-list />
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

Course_banner_list
