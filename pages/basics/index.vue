<template>
  <div>
    <course-layout
      button-text="Start Course"
      :fetch-state="$fetchState"
      :chunks="chunks"
    >
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

    this.chunks = await Lesson.fetchChunkLessons({
      content: this.$content,
      contentPath: 'basics',
      sections,
    });
  },
};
</script>
