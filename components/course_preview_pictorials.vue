<template>
  <div>
    <course-preview
      :course="$options.PICTORIALS_DATA"
      :fetch-state="$fetchState"
      :lessons="lessons"
    />
  </div>
</template>

<script>
import { COURSES_DATA, getRandomOrder } from '~/lib';

const { pictorials: PICTORIALS_DATA } = COURSES_DATA;

export default {
  PICTORIALS_DATA,
  data() {
    return {
      lessons: [],
    };
  },
  async fetch() {
    const randomOrders = getRandomOrder(PICTORIALS_DATA.size);

    const randomLessons = await this.$content('pictorials')
      .only(['slug', 'path', 'title', 'order'])
      .where({ order: { $in: randomOrders } })
      .fetch();

    this.lessons = randomLessons;
  },
};
</script>
