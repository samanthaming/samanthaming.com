<template>
  <div>
    <pre v-for="(hi, index) in hello" :key="index">{{ hi }}</pre>
  </div>
</template>

<script>
/*eslint-disable */

const JAVASCRIPT = 'JAVASCRIPT';
const JS = 'JS';
const HTML = 'HTML';
const CSS = 'CSS';
const VUE = 'VUE';
const CONSOLE = 'Console';
const TAG_JS = 'javascript';
const TAG_ES6 = 'es6';
const TAG_CSS = 'css';
const TAG_HTML = 'html';
const TAG_VUE = 'vue';
const TAG_CONSOLE = 'console';
const TAG_PROGRAMMING = 'programming';
const TAG_CODE_QUALITY = 'code quality';
const TAG_A11Y = 'a11y';
const TAG_DESIGN = 'design';
const TAG_CHROME = 'chrome';
const TAG_BROWSER = 'browser';
const TAG_FLEXBOX = 'flexbox';
const TAG_ARRAY = 'array';
const TAG_STRING = 'string';
const TAG_SPREAD = 'spread';
const TAG_NUMBER = 'number';
const TAG_OBJECT = 'object';
const TAG_CAREER = 'career';
const TAG_STARTUP = 'startup';
const TAG_JOURNAL = 'journal';
const TAG_BUSINESS = 'business';
const TAG_SOCIAL_MEDIA = 'social media';
const TAG_LIFE_LESSONS = 'life lessons';
const TAG_MOTIVATION = 'motivation';
const TAG_SELF_CARE = 'self care';
const TAG_RECOMMENDATIONS = 'recommendations';
const TAG_PRODUCTIVITY = 'productivity';
const TAG_CHALLENGE = 'challenge';
const TAG_EDUCATION = 'education';
const TAG_TUTORIAL = 'tutorial';
const TAG_SITE = 'site news';
const TAG_CODE_RECIPE = 'code recipes';

const data = {
  'journal/1-hello-journal': {
    order: 1,
    slug: '1-hello-journal',
    name: 'Journal Entry #1: Take Action!',
    year: '2020',
    month: '09',
    day: '27',
    tags: [TAG_JOURNAL, TAG_MOTIVATION],
    description:
      'Documenting my journey as I navigate my career in tech and building a startup.',
  },
  'journal/2-testing-non-exported-functions': {
    order: 2,
    slug: '2-testing-non-exported-functions',
    name: 'Testing Non-Exported Functions in JavaScript with Rewire',
    year: '2020',
    month: '10',
    day: '04',
    tags: [TAG_JOURNAL, TAG_JS],
    description:
      "To test exported function, you can simply import it. But what about non-exported functions? Well that's easy too, thanks to Rewire!",
  },
  'journal/3-how-to-use-lodash-with-vue': {
    order: 3,
    slug: '3-how-to-use-lodash-with-vue',
    name: 'How to use Lodash with Vue',
    year: '2020',
    month: '10',
    day: '15',
    tags: [TAG_JOURNAL, TAG_JS],
    description: 'Learn how to install Lodash and use it with Vue.',
  },
};

export default {
  computed: {
    hello() {
      return Object.values(data).map((d) => {
        return `
---
title: ${d.name}
description: ${d.description}
tags: [${d.tags}]
order: ${d.order}
updatedAt: ${d.year}-${d.month}-${d.day}
---
        `;
      });
    },
  },
};
</script>
