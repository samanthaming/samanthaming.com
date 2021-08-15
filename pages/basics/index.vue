<template>
  <div>
    <course-layout button-text="Start Course">
      <loading-catalog
        v-if="$fetchState.pending"
        unique-key="basics-index-page-loading-list"
      />
      <course-content-sections v-else :chunks="chunks" />
    </course-layout>
  </div>
</template>

<script>
import { Lesson, routeMeta } from '~/lib';

export default {
  data: () => ({
    chunks: [],
  }),
  async fetch() {
    const sections = ['String', 'Array', 'Math', 'CSS'];

    this.chunks = await Lesson.fetchChunks({
      content: this.$content,
      contentPath: 'basics',
      sections,
    });
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
};
</script>
