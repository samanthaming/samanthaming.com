<template>
  <div>
    <course-layout button-text="Start Course">
      <loading-catalog
        v-if="$fetchState.pending"
        unique-key="pictorials-index-page-loading-list"
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
    const sections = ['JavaScript', 'CSS'];

    this.chunks = await Lesson.fetchChunks({
      content: this.$content,
      contentPath: 'pictorials',
      sections,
    });
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
};
</script>
