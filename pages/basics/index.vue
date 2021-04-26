<template>
  <div>
    <course-layout button-text="Start Course">
      <loading-component v-if="$fetchState.pending" />
      <course-content-sections :chunks="chunks" />
    </course-layout>
  </div>
</template>

<script>
import { Lesson } from '~/lib';

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
};
</script>
