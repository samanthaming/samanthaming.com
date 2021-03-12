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
  'blogs/how-i-got-my-first-developer-job-without-a-cs-degree': {
    order: 1,
    slug: 'how-i-got-my-first-developer-job-without-a-cs-degree',
    name: 'How I Got My First Developer Job Without a CS Degree',
    year: '2018',
    month: '07',
    day: '18',
    tags: [TAG_CAREER], // talk
    description:
      "So you're ready to get you first developer job. Here are some insights into the job interview process and help you better prepare for it...",
  },
  'blogs/my-top-3-favorite-es6-courses': {
    order: 2,
    slug: 'my-top-3-favorite-es6-courses',
    name: 'My Top 3 Favorite ES6 Courses',
    year: '2018',
    month: '07',
    day: '31',
    tags: [TAG_PROGRAMMING, TAG_JS, TAG_ES6, TAG_RECOMMENDATIONS],
    description:
      "Learn JavaScript ES6 with my favorite 3 courses. From junior to senior, there's a course for you to get started or dive deeper. Read my review...",
  },
  'blogs/my-top-3-favorite-free-javascript-courses': {
    order: 3,
    slug: 'my-top-3-favorite-free-javascript-courses',
    name: 'My Top 3 Favorite FREE JavaScript Courses',
    year: '2018',
    month: '08',
    day: '14',
    tags: [TAG_PROGRAMMING, TAG_JS, TAG_RECOMMENDATIONS],
    description:
      "Learn JavaScript with these 3 free courses. From junior to senior, there's a course for you to get started and level up. Read my review...",
  },
  'blogs/notfancyappchallenge': {
    order: 4,
    slug: 'notfancyappchallenge',
    name: 'Introducing the #NotFancyAppChallenge',
    year: '2018',
    month: '08',
    day: '28',
    tags: [TAG_CHALLENGE, TAG_PROGRAMMING, TAG_JS],
  },
  'blogs/tips-to-optimize-your-linkedin-profile-for-developers': {
    order: 5,
    slug: 'tips-to-optimize-your-linkedin-profile-for-developers',
    name: 'Tips to Optimize your LinkedIn Profile for Developers',
    year: '2018',
    month: '09',
    day: '12',
    tags: [TAG_CAREER], // 'talk,job searching',
    description:
      'Improve your LinkedIn Profile with these tips that will boost your profile, create a positive impression and attract recruiter attention',
  },
  'blogs/3-tips-to-improve-your-programming-skills': {
    order: 6,
    slug: '3-tips-to-improve-your-programming-skills',
    name: '3 Tips to Improve Your Programming Skills',
    year: '2018',
    month: '10',
    day: '22',
    tags: [TAG_PROGRAMMING], // 'programming,tips,advice',
    description:
      'Applying your knowledge is the best way to improve your programming skills. Read these 3 tips that will solidify your learning...',
  },
  'blogs/3-tips-to-find-the-right-bootcamp-for-you': {
    order: 7,
    slug: '3-tips-to-find-the-right-bootcamp-for-you',
    name: '3 Tips To Find The Right Bootcamp For You',
    year: '2018',
    month: '11',
    day: '20',
    tags: [TAG_EDUCATION, TAG_CAREER], // 'bootcamp,tips,advice',
    description:
      'It’s not about picking the Best School, it’s about picking the Best School FOR YOU. Learn how I found the right bootcamp.',
  },
  'blogs/how-to-ace-the-developer-interview': {
    order: 8,
    slug: 'how-to-ace-the-developer-interview',
    name: 'How to Ace the Developer Interview',
    year: '2019',
    month: '01',
    day: '23',
    type: 'png',
    tags: [TAG_CAREER],
    description:
      'So you’re ready to get you first developer job. That’s awesome! After going to a few interviews myself. I want to share with you some of my ...',
  },
  'blogs/building-my-new-site-with-vuepress': {
    order: 9,
    slug: 'building-my-new-site-with-vuepress',
    name: 'Building my New Site with VuePress',
    year: '2020',
    month: '01',
    day: '26',
    tags: [TAG_PROGRAMMING, TAG_VUE, TAG_JS, TAG_SITE],
    description:
      'Building my new site with VuePress. Why I made the switch from Nuxt.js. My thoughts on using VuePress, the pros and challenges. Read my review...',
  },
  'blogs/new-features-in-2-0': {
    order: 10,
    slug: 'new-features-in-2-0',
    name: 'New features in 2.0',
    year: '2020',
    month: '02',
    day: '02',
    tags: [TAG_SITE],
    description:
      'SamanthaMing.com 2.0 is bringing your more programming goodness with a brand new website. More content and way better user experience. Check out these awesome new features...',
  },
  'blogs/building-my-new-site-with-tailwind': {
    order: 11,
    slug: 'building-my-new-site-with-tailwind',
    name: 'Building my New Site with Tailwind CSS',
    year: '2020',
    month: '02',
    day: '23',
    tags: [TAG_PROGRAMMING, TAG_CSS, TAG_SITE],
    description:
      'Building my new site with Tailwind. Why I made the switch from Bulma. My thoughts on using Tailwind, the pros and challenges. Read my review...',
  },
  'blogs/blacklivesmatter': {
    order: 12,
    slug: 'blacklivesmatter',
    name: '#BlackLivesMatter',
    year: '2020',
    month: '06',
    day: '19',
    tags: [TAG_LIFE_LESSONS],
    // Education and empathy are the first steps towards racial equality.
    description:
      'Education and empathy are the first step towards change. If I want the world to be better, then I need to be better. It starts with me.',
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
