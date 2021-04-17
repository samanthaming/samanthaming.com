<template>
  <div>
    <course-preview
      :course="$options.BASICS_DATA"
      :fetch-state="$fetchState"
      :lessons="lessons"
    />
  </div>
</template>

<script>
import { COURSES_DATA, getRandomOrder } from '~/lib';

const { basics: BASICS_DATA } = COURSES_DATA;

export default {
  BASICS_DATA,
  data() {
    return {
      lessons: [],
    };
  },
  async fetch() {
    const randomOrders = getRandomOrder(BASICS_DATA.size);

    const randomLessons = await this.$content('basics')
      .only(['slug', 'path', 'title', 'order'])
      .where({ order: { $in: randomOrders } })
      .fetch();

    this.lessons = randomLessons;
  },
};
</script>
