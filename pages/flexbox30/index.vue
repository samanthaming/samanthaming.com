<template>
  <!-- Need to wrap in "div" otherwise will get error on initial load/refresh:
    The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.

    Seems like an issue when using another component. -->
  <div>
    <course-layout button-text="Start Course">
      <loading-catalog
        v-if="$fetchState.pending"
        unique-key="flexbox-index-page-loading-list"
      />
      <course-content-sections v-else :chunks="chunks" :order="true" />
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
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
};
</script>
