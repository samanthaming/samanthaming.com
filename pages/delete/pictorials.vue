<template>
  <div class="mx-10">
    <pre v-for="(text, index) in texts" :key="index">{{ text }}</pre>
  </div>
</template>

<script>
/*eslint-disable */
export const TAG_JS = 'javascript';
export const TAG_CSS = 'css';

const COURSE_PICTORIALS_SECTIONS = ['JavaScript', 'CSS'];
const [JS, CSS] = COURSE_PICTORIALS_SECTIONS;

const data = {
  'pictorials/how-to-reverse-a-string': {
    order: 1,
    name: 'How to Reverse a String in JavaScipt',
    slug: 'how-to-reverse-a-string',
    section: JS,
    tags: [],
    description: 'A step-by-step pictorial on how you can reverse a string.',
  },
  'pictorials/how-to-truncate-a-string': {
    order: 2,
    name: 'How to Truncate a String in JavaScipt',
    slug: 'how-to-truncate-a-string',
    section: JS,
    tags: [],
    description: '',
  },
  'pictorials/how-to-remove-all-falsy-values-from-an-array': {
    order: 3,
    name: 'How to Remove All Falsy Values from an Array in JavaScipt',
    slug: 'how-to-remove-all-falsy-values-from-an-array',
    section: JS,
    tags: [],
    description: '',
  },
  'pictorials/how-to-find-the-longest-word-in-a-string': {
    order: 4,
    name: 'How to Find the Longest Word in a String in JavaScipt',
    slug: 'how-to-find-the-longest-word-in-a-string',
    section: JS,
    tags: [],
    description: '',
  },
  'pictorials/css-inline-vs-inlineblock-vs-block': {
    order: 5,
    name: 'CSS inline vs inline-block vs block',
    slug: 'css-inline-vs-inlineblock-vs-block',
    section: CSS,
    tags: [],
    description: '',
  },
  'pictorials/how-to-capitalize-a-string': {
    order: 6,
    name: 'How to Capitalize a String in JavaScipt',
    slug: 'how-to-capitalize-a-string',
    section: JS,
    tags: [],
    description: '',
  },
};

export default {
  computed: {
    texts() {
      return Object.values(data).map((d) => {
        return `${d.name}
---
title: ${d.name}
tags: [${TAG_JS}]
order: ${d.order}
section: ${d.section}
createdAt: 2020-01-12
---
        `;
      });
    },
  },
};
</script>
