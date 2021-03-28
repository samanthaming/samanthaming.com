<template>
  <div class="mx-10">
    <pre v-for="(text, index) in texts" :key="index">{{ text }}</pre>
  </div>
</template>

<script>
/*eslint-disable */

const COURSE_FLEXBOX30_SECTIONS = [
  'Flexbox Core Concepts',
  'Parent Properties',
  'Child Properties',
  'Summary',
];

const [intro, parent, child, end] = COURSE_FLEXBOX30_SECTIONS;
const TAG_CSS = 'css';
const TAG_FLEXBOX = 'flexbox';

const data = {
  'flexbox30/1-flexbox-intro': {
    order: 1,
    name: 'Introduction',
    slug: '1-flexbox-intro',
    section: intro,
    tags: [],
    description: '',
  },
  'flexbox30/2-flex-container-and-flex-items': {
    order: 2,
    name: 'Flex Container & Flex Items',
    slug: '2-flex-container-flex-items',
    section: intro,
    tags: [],
    description: '',
  },
  'flexbox30/3-immediate-child-only': {
    order: 3,
    name: 'Immediate Child Only',
    slug: '3-immediate-child-only',
    section: intro,
    tags: [],
    description: '',
  },
  'flexbox30/4-flexbox-axes': {
    order: 4,
    name: 'Flexbox Axes',
    slug: '4-flexbox-axes',
    section: intro,
    tags: [],
    description: '',
  },
  'flexbox30/5-flexbox-module': {
    order: 5,
    name: 'Flexbox Module',
    slug: '5-flexbox-module',
    section: intro,
    tags: [],
    description: '',
  },
  'flexbox30/6-parent-properties': {
    order: 6,
    name: 'Parent Properties',
    slug: '6-parent-properties',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/7-display': {
    order: 7,
    name: 'display',
    slug: '7-display',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/8-block-vs-inline': {
    order: 8,
    name: 'block vs inline',
    slug: '8-block-vs-inline',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/9-flex-direction': {
    order: 9,
    name: 'flex-direction',
    slug: '9-flex-direction',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/10-flex-wrap': {
    order: 10,
    name: 'flex-wrap',
    slug: '10-flex-wrap',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/11-flex-flow': {
    order: 11,
    name: 'flex-flow',
    slug: '11-flex-flow',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/12-justify-content-row': {
    order: 12,
    name: 'justify-content [row]',
    slug: '12-justify-content-row',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/13-justify-content-column': {
    order: 13,
    name: 'justify-content [column]',
    slug: '13-justify-content-column',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/14-space-around-vs-space-evenly': {
    order: 14,
    name: 'space-around vs space-evenly',
    slug: '14-space-around-vs-space-evenly',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/15-align-items-row': {
    order: 15,
    name: 'align-items [row]',
    slug: '15-align-items-row',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/16-baseline': {
    order: 16,
    name: 'baseline',
    slug: '16-baseline',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/17-align-items-column': {
    order: 17,
    name: 'align-items [column]',
    slug: '17-align-items-column',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/18-align-content': {
    order: 18,
    name: 'align-content',
    slug: '18-align-content',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/19-child-properties': {
    order: 19,
    name: 'Child Properties',
    slug: '19-child-properties',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/20-order': {
    order: 20,
    name: 'order',
    slug: '20-order',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/21-flex-grow': {
    order: 21,
    name: 'flex-grow',
    slug: '21-flex-grow',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/22-flex-grow-calculation': {
    order: 22,
    name: 'flex-grow calculation',
    slug: '22-flex-grow-calculation',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/23-flex-shrink': {
    order: 23,
    name: 'flex-shrink',
    slug: '23-flex-shrink',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/24-flex-shrink-calculation': {
    order: 24,
    name: 'flex-shrink calculation',
    slug: '24-flex-shrink-calculation',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/25-flex-basis': {
    order: 25,
    name: 'flex-basis',
    slug: '25-flex-basis',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/26-flex-basis-vs-widths': {
    order: 26,
    name: 'flex-basis vs widths',
    slug: '26-flex-basis-vs-widths',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/27-flex': {
    order: 27,
    name: 'flex',
    slug: '27-flex',
    section: parent,
    tags: [],
    description: '',
  },
  'flexbox30/28-align-self': {
    order: 28,
    name: 'align-self',
    slug: '28-align-self',
    section: child,
    tags: [],
    description: '',
  },
  'flexbox30/29-flexbox-properties': {
    order: 29,
    name: 'Flexbox Properties',
    slug: '29-flexbox-properties',
    section: end,
    tags: [],
    description: '',
  },
  'flexbox30/30-flexbox-cheatsheet': {
    order: 30,
    name: 'Flexbox Cheatsheet',
    slug: '30-flexbox-cheatsheet',
    section: end,
    tags: [],
    description: '',
  },
  'flexbox30/31-flexbox-with-auto-margins': {
    order: 31,
    name: 'Bonus: Flexbox with Auto Margins',
    slug: '31-flexbox-with-auto-margins',
    section: end,
    tags: [],
    description: '',
  },
};

export default {
  computed: {
    texts() {
      return Object.values(data).map((d) => {
        return `
---
title: '${d.order}: ${d.name}'
tags: [${TAG_CSS}, ${TAG_FLEXBOX}]
order: ${d.order}
section: ${d.section}
createdAt: 2020-02-20
---
        `;
      });
    },
  },
};
</script>
