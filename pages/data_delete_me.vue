<template>
  <div>
    <pre v-for="(hi, index) in hello" :key="index">{{ hi }}</pre>
  </div>
</template>

<script>
/*eslint-disable */

// const JAVASCRIPT = 'JAVASCRIPT';
const JS = 'JS';
// const HTML = 'HTML';
const CSS = 'CSS';
// const VUE = 'VUE';
const CONSOLE = 'Console';
const TAG_JS = 'javascript';
const TAG_ES6 = 'es6';
const TAG_CSS = 'css';
// const TAG_HTML = 'html';
// const TAG_VUE = 'vue';
const TAG_CONSOLE = 'console';
// const TAG_PROGRAMMING = 'programming';
// const TAG_CODE_QUALITY = 'code quality';
// const TAG_A11Y = 'a11y';
// const TAG_DESIGN = 'design';
// const TAG_CHROME = 'chrome';
const TAG_BROWSER = 'browser';
// const TAG_FLEXBOX = 'flexbox';
const TAG_ARRAY = 'array';
const TAG_STRING = 'string';
// const TAG_SPREAD = 'spread';
const TAG_NUMBER = 'number';
const TAG_OBJECT = 'object';
// const TAG_CAREER = 'career';
// const TAG_STARTUP = 'startup';
// const TAG_JOURNAL = 'journal';
// const TAG_BUSINESS = 'business';
// const TAG_SOCIAL_MEDIA = 'social media';
// const TAG_LIFE_LESSONS = 'life lessons';
// const TAG_MOTIVATION = 'motivation';
// const TAG_SELF_CARE = 'self care';
// const TAG_RECOMMENDATIONS = 'recommendations';
// const TAG_PRODUCTIVITY = 'productivity';
// const TAG_CHALLENGE = 'challenge';
// const TAG_EDUCATION = 'education';
// const TAG_TUTORIAL = 'tutorial';
// const TAG_SITE = 'site news';
// const TAG_CODE_RECIPE = 'code recipes';

const data = {
  'tidbits/1-convert-array-like-to-true-array': {
    order: 1,
    slug: '1-convert-array-like-to-true-array',
    name: 'Convert Array-like to True Array in JavaScript',
    instagram: 'BfB23phgsOI',
    twitter: '962414853607444480',
    year: '2018',
    month: '2',
    day: '10',
    description: '',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_ES6],
  },
  'tidbits/2-console-table': {
    order: 2,
    slug: '2-console-table',
    name: 'console.table to Display Data',
    instagram: 'BfOVuAggSI1',
    twitter: '964174008219418625',
    year: '2018',
    month: '2',
    day: '15',
    description:
      'This is a cool way to display your data in your browser dev tools. Works great with Array and Objects. Instead of console.log, try console.table next time...',
    language: CONSOLE,
    tags: [TAG_CONSOLE, TAG_BROWSER], // 'chrome', 'browser'
  },
  'tidbits/3-when-not-to-use-arrow-functions': {
    order: 3,
    slug: '3-when-not-to-use-arrow-functions',
    name: 'When NOT to use ES6 Arrow functions',
    instagram: 'BfUHooqA1Wc',
    twitter: '964977650375696384',
    year: '2018',
    month: '2',
    day: '17',
    description:
      "Arrow functions are terrific, but not suitable for all situations. Avoid them in objects because 'this' is always scoped to the parent...",
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  // TODO: Rename it to "4-css-variables" & remove "4-declaring-css-variables"
  'tidbits/4-declaring-css-variables': {
    order: 4,
    slug: '4-declaring-css-variables',
    name: 'CSS Variables',
    instagram: 'Bflz5FeAHUu',
    twitter: '967484515835822081',
    year: '2018',
    month: '2',
    day: '24',
    description:
      'Move over Sass, we have CSS variables now! Native CSS without any preprocessors and compiling...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/5-concise-method-syntax': {
    order: 5,
    slug: '5-concise-method-syntax',
    name: 'Shorthand for Defining Object Methods in JavaScript',
    instagram: 'Bf327_7AIB0',
    twitter: '970015226593624067',
    imgur: 'OV3fV3u',
    year: '2018',
    month: '3',
    day: '3',
    description:
      "Awesome JS tip that helps you type less! Use ES6's concise method syntax to define methods in your objects...",
    language: JS,
    tags: [TAG_JS, TAG_OBJECT],
  },
  'tidbits/6-custom-css-selection-styling': {
    order: 6,
    slug: '6-custom-css-selection-styling',
    name: 'Custom CSS Selection Styling',
    instagram: 'BgJ8DMNH9QW',
    twitter: '972566700418727936',
    imgur: 'pilOGiD',
    year: '2018',
    month: '3',
    day: '10',
    description:
      'The ::selection CSS pseudo-element allows you to apply styles to your text when it’s highlighted. Great way to add some pizzaz to your site...',
    video: true,
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/7-create-object-with-dynamic-keys': {
    order: 7,
    slug: '7-create-object-with-dynamic-keys',
    name: 'Creating Objects with ES6 Dynamic Keys',
    instagram: 'Bgb5D0ZHd-o',
    twitter: '975086499849953280',
    imgur: '3Clk5G2',
    year: '2018',
    month: '3',
    day: '17',
    description: '',
    language: JS,
    tags: [TAG_JS, TAG_OBJECT],
  },
  'tidbits/8-swap-variables-with-destructuring': {
    order: 8,
    slug: '8-swap-variables-with-destructuring',
    name: 'Swapping Variables with ES6 Destructuring',
    instagram: 'Bgt5uzwAg8_',
    twitter: '977621585359089664',
    imgur: 'J2RIQ5f',
    year: '2018',
    month: '3',
    day: '24',
    description:
      "ES6 Destructuring to the rescue! Easily swap two variables using ES6 destructing. It's a great way to fix #Oscars Best Picture mix-up...",
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_ES6],
  },
  'tidbits/9-trick-to-add-string-and-number': {
    order: 9,
    slug: '9-trick-to-add-string-and-number',
    name: 'Trick to Adding String and Number in JavaScript',
    instagram: 'Bg_54HGAT-f',
    twitter: '980157046698909696',
    imgur: 'zhqORdD',
    year: '2018',
    month: '3',
    day: '31',
    description:
      'The unary + operator is a shortcut to convert a string into a number...',
    language: JS,
    tags: [TAG_JS, TAG_STRING, TAG_NUMBER],
  },
  'tidbits/10-remove-array-duplicates-using-set': {
    order: 10,
    slug: '10-remove-array-duplicates-using-set',
    name: 'Remove Array Duplicates using ES6 Set',
    instagram: 'BhR-XLWA8eF',
    twitter: '982699751022800897',
    year: '2018',
    month: '4',
    day: '7',
    description:
      'Remove Array Duplicates using ES6 Set and convert back to an array using Array.from or spread...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/11-setting-default-parameters': {
    order: 11,
    slug: '11-setting-default-parameters',
    name: 'Setting Default Parameters in JavaScript',
    instagram: 'Bhj9ITfhlNT',
    twitter: '985230884969185281',
    year: '2018',
    month: '4',
    day: '14',
    description:
      'The old way was to use a ternary operator to assign the default value if it was undefined. With ES6, you can set the default value right inside the function parameters...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/12-split-string-using-spread': {
    order: 12,
    slug: '12-split-string-using-spread',
    name: 'Split String using ES6 Spread',
    instagram: 'Bh1601FB4KJ',
    twitter: '987758991026544640',
    year: '2018',
    month: '4',
    day: '21',
    description:
      'Convert a string to an array of characters using the spread syntax...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_STRING],
  },
  'tidbits/13-skip-values-in-destructuring': {
    order: 13,
    slug: '13-skip-values-in-destructuring',
    name: 'Skipping Values in ES6 Destructuring',
    instagram: 'BiH_WV8hmHI',
    twitter: '990301402311348232',
    year: '2018',
    month: '4',
    day: '28',
    description:
      'You can use blanks to skip over unwanted values in JavaScript. Perfect to avoid creating useless variable assignments for values you don’t want during destructuring...',
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/14-combine-multiple-arrays-using-spread': {
    order: 14,
    slug: '14-combine-multiple-arrays-using-spread',
    name: 'Combine Multiple Arrays using ES6 Spread',
    instagram: 'BiaB6mAhc8R',
    twitter: '992839527969439744',
    year: '2018',
    month: '5',
    day: '5',
    description:
      'Instead of using concat() to concatenate arrays, try using the spread syntax to combine multiple arrays into one flattened array...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_ES6],
  },
  'tidbits/15-4-ways-to-combine-strings': {
    order: 15,
    slug: '15-4-ways-to-combine-strings',
    name: '4 Ways to Combine Strings in JavaScript',
    instagram: 'BisCR23B8nT',
    twitter: '995373862148755456',
    year: '2018',
    month: '5',
    day: '12',
    description:
      '4 ways to combine strings in JavaScript. My favourite way is using ES6’s Template Strings...',
    language: JS,
    tags: [TAG_JS, TAG_STRING],
  },
  'tidbits/16-default-parameters': {
    order: 16,
    slug: '16-default-parameters',
    name: 'Royal Wedding with Default Parameter',
    instagram: 'Bi-D5nVh91K',
    twitter: '997913372589871104',
    year: '2018',
    month: '5',
    day: '19',
    description: '',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/17-print-ranges-natively': {
    order: 17,
    slug: '17-print-ranges-natively',
    name: 'Print Ranges Natively in JavaScript',
    instagram: 'BjQGq5DhfNY',
    twitter: '1000450662994399232',
    year: '2018',
    month: '5',
    day: '26',
    description:
      'One of my favorite feature of Ruby is ranges. But it’s not natively available in JS...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/18-named-param-using-destructured-objects': {
    order: 18,
    slug: '18-named-param-using-destructured-objects',
    name: 'Named Parameters using JavaScript Destructured Objects',
    instagram: 'BjiI-0_BLQE',
    twitter: '1002987854815846400',
    year: '2018',
    month: '6',
    day: '2',
    description:
      "Since JavaScript doesn’t natively support named parameters. Here's a solution using object. No more worrying about the specific order of inserting your arguments",
    language: JS,
    tags: [TAG_JS, TAG_OBJECT],
  },
  'tidbits/19-2-ways-to-convert-to-boolean': {
    order: 19,
    slug: '19-2-ways-to-convert-to-boolean',
    name: '2 Ways to Convert to Boolean in JavaScript',
    instagram: 'Bj0MAb1BdOL',
    twitter: '1005527558060892160',
    year: '2018',
    month: '6',
    day: '9',
    description:
      '2 ways to convert a value to a Boolean. My favourite is using "!!". It’s also the recommended method by Airbnb’s style guide...',
    language: JS,
    tags: [TAG_JS],
  },

  'tidbits/20-destructuring-function-arguments': {
    order: 20,
    slug: '20-destructuring-function-arguments',
    name: 'Extract Functions Arguments using Destructure in JavaScript',
    instagram: 'BkGKU7AhrQl',
    twitter: '1008060657273483265',
    year: '2018',
    month: '6',
    day: '16',
    description:
      'Destructuring is terrific at extracting value from your arguments. So swap out those bracket notation & use the destructuring syntax instead...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_ES6],
  },
  'tidbits/21-how-to-test-nan': {
    order: 21,
    slug: '21-how-to-test-nan',
    name: 'How to Check if NaN is equal to NaN in JavaScript',
    instagram: 'BkYN2kJhmoZ',
    twitter: '1010598329799962625',
    year: '2018',
    month: '6',
    day: '23',
    description:
      "JS has a quirk where NaN is a value that NEVER equals to itself. So how do we test for it? Using ES6's Object.is...",
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/22-2-ways-to-repeat-strings': {
    order: 22,
    slug: '22-2-ways-to-repeat-strings',
    name: '2 Ways to Repeat Strings in JavaScript',
    instagram: 'BkqPBjZBsyW',
    twitter: '1013138036161273856',
    year: '2018',
    month: '7',
    day: '2',
    description:
      '2 ways to repeat strings in JavaScript. I’ve always used "Array.fill" to do any repetitions. "repeat" is a recent discovery...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/23-no-else-return': {
    order: 23,
    slug: '23-no-else-return',
    name: 'No Else Return',
    instagram: 'Bk8Sx_ChKwt',
    twitter: '1015671969197408256',
    year: '2018',
    month: '7',
    day: '7',
    description:
      'You can skip the else block if your `if` block always executes a `return` statement. I find this way makes my code a lot easier to read...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/24-prevent-error-with-default-object-when-destructuring': {
    order: 24,
    slug: '24-prevent-error-with-default-object-when-destructuring',
    name: 'Prevent Error with Default {} when Destructuring in JavaScript',
    instagram: 'BlOT0jRByc9',
    twitter: '1018211583749603328',
    year: '2018',
    month: '7',
    day: '14',
    description:
      'When you use destructuring, make sure to set a default value of empty `{}` to prevent it from throwing an error...',
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_OBJECT],
  },
  'tidbits/25-js-essentials-falsy-values': {
    order: 25,
    slug: '25-js-essentials-falsy-values',
    name: 'JS Essentials: Falsy Values',
    instagram: 'BlgVJrgBKVC',
    twitter: '1020748078628855808',
    year: '2018',
    month: '7',
    day: '21',
    description:
      'JS values have an inherent associated boolean value to it. Knowing which values evaluate to true or false, is important for comparisons & conditionals...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/26-refactoring-if-condition': {
    order: 26,
    slug: '26-refactoring-if-condition',
    name: 'Refactoring IF condition in JavaScript',
    instagram: 'BlyUjidhvAU',
    twitter: '1023283590182854656',
    year: '2018',
    month: '7',
    day: '28',
    description:
      'Since values in JS evaluate to true or false. You can shorten your condition in the `if` statement. Remember my Falsy Values post last week. This is where it comes in handy',
    language: JS,
    tags: [TAG_JS],
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
