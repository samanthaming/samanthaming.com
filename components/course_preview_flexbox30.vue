<template>
  <div>
    <course-preview
      :course="$options.FLEXBOX30_DATA"
      :fetch-state="$fetchState"
      :lessons="lessons"
    />
  </div>
</template>

<script>
import { COURSES_DATA, getRandomOrder } from '~/lib';

const { flexbox30: FLEXBOX30_DATA } = COURSES_DATA;

export default {
  FLEXBOX30_DATA,
  data() {
    return {
      lessons: [],
    };
  },
  async fetch() {
    const randomOrders = getRandomOrder(FLEXBOX30_DATA.size);

    const randomLessons = await this.$content('flexbox30')
      .only(['slug', 'path', 'title', 'order'])
      .where({ order: { $in: randomOrders } })
      .fetch();

    this.lessons = randomLessons;
  },
};
</script>
