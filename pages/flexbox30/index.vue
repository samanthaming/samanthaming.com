<template>
  <div>
    <course-layout
      button-text="Start Course"
      :fetch-state="$fetchState"
      :chunks="chunks"
      :order="true"
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
    const sections = [
      'Flexbox Core Concepts',
      'Parent Properties',
      'Child Properties',
      'Summary',
    ];

    this.chunks = await Lesson.fetchChunkLessons({
      content: this.$content,
      contentPath: 'flexbox30',
      sections,
    });
  },
};
</script>
