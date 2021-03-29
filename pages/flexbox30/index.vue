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
import _groupBy from 'lodash/groupBy';

export default {
  data: () => ({
    chunks: [],
  }),
  async fetch() {
    const results = await this.$content('flexbox30')
      .sortBy('order')
      .only(['slug', 'path', 'title', 'order', 'section'])
      .fetch();

    const sections = [
      'Flexbox Core Concepts',
      'Parent Properties',
      'Child Properties',
      'Summary',
    ];

    const group = _groupBy(results, 'section');
    this.chunks = sections.map((section) => [section, group[section]]);
  },
};
</script>
