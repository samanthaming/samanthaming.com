<template>
  <div>
    <course-layout button-text="Start Course">
      <loading-component v-if="$fetchState.pending" />
      <course-content-sections :chunks="chunks" :order="true" />
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

    this.chunks = await Lesson.fetchChunks({
      content: this.$content,
      contentPath: 'flexbox30',
      sections,
    });
  },
};
</script>
