<template>
  <div class="mx-10">
    <pre v-for="(text, index) in texts" :key="index">{{ text }}</pre>
  </div>
</template>

<script>
/*eslint-disable */

const TAG_JS = 'javascript';
const TAG_CSS = 'css';

const COURSE_BASICS_SECTIONS = ['String', 'Array', 'Math', 'CSS'];
const [string, array, math, css] = COURSE_BASICS_SECTIONS;

const data = {
  'basics/string-split': {
    order: 1,
    name: 'String.split',
    slug: 'string-split',
    section: string,
    tags: [],
    description: '',
  },
  'basics/array-reverse': {
    order: 2,
    name: 'Array.reverse',
    slug: 'array-reverse',
    section: array,
    tags: [],
    description: '',
  },
  'basics/array-join': {
    order: 3,
    name: 'Array.join',
    slug: 'array-join',
    section: array,
    tags: [],
    description: '',
  },
  'basics/string-touppercase': {
    order: 4,
    name: 'String.toUpperCase',
    slug: 'string-touppercase',
    section: string,
    tags: [],
    description: '',
  },
  'basics/string-charat': {
    order: 5,
    name: 'String.charAt',
    slug: 'string-charat',
    section: string,
    tags: [],
    description: '',
  },
  'basics/string-slice': {
    order: 6,
    name: 'String.slice',
    slug: 'string-slice',
    section: string,
    tags: [],
    description: '',
  },
  'basics/math-max': {
    order: 7,
    name: 'Math.max',
    slug: 'math-max',
    section: math,
    tags: [],
    description: '',
  },
  'basics/css-inline': {
    order: 8,
    name: 'CSS Inline',
    slug: 'css-inline',
    section: css,
    tags: [],
    description: '',
  },
  'basics/css-inlineblock': {
    order: 9,
    name: 'CSS Inline Block',
    slug: 'css-inlineblock',
    section: css,
    tags: [],
    description: '',
  },
  'basics/css-block': {
    order: 10,
    name: 'CSS block',
    slug: 'css-block',
    section: css,
    tags: [],
    description: '',
  },
  'basics/string-tolowercase': {
    order: 11,
    name: 'String.toLowerCase',
    slug: 'string-tolowercase',
    section: string,
    tags: [],
    description: '',
  },
  // 'basics/array-map': {
  //   order: 7,
  //   name: 'Array.map',
  //   slug: 'array-map',
  //   section: array,
  //   tags: [],
  //   description: '',
  // },
};

export default {
  computed: {
    texts() {
      return Object.values(data).map((d) => {
        return `${d.name}
---
title: ''
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
