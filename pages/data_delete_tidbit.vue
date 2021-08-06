<template>
  <div>
    <pre v-for="(text, index) in texts" :key="index">{{ text }}</pre>
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
  'tidbits/31-css-caret-color': {
    order: 31,
    slug: '31-css-caret-color',
    name: 'CSS caret-color',
    instagram: 'BnMbPhyBH12',
    twitter: '1035961748317073408',
    year: '2018',
    month: '9',
    day: '1',
    description:
      'Use the caret-color to change the color of the cursor. Now you can change the color to match the theme of your website...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/32-html-contenteditable': {
    order: 32,
    slug: '32-html-contenteditable',
    name: 'HTML contenteditable',
    instagram: 'BnedZLMh1Tw',
    twitter: '1038500389534879744',
    year: '2018',
    month: '9',
    day: '8',
    video: true,
    description:
      'Apply the contenteditable attribute and you can edit it similar to <input> or <textarea>. Users can click on the text and make an update creating a smooth editing experience...',
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/33-how-to-compare-2-objects': {
    order: 33,
    slug: '33-how-to-compare-2-objects',
    name: 'How to Compare 2 Objects in JavaScript',
    instagram: 'BnwioaNhfr2',
    twitter: '1041044449835376640',
    year: '2018',
    month: '9',
    day: '15',
    description:
      "Objects are reference types so you can't use === or == to compare them. To check if 2 objects have the same key value, use JSON.stringify OR Lodash isEqual function...",
    language: JS,
    tags: [TAG_JS, TAG_OBJECT],
  },
  'tidbits/34-better-boolean-variable-names': {
    order: 34,
    slug: '34-better-boolean-variable-names',
    name: 'Better Boolean Variable Names',
    instagram: 'BoCg8iuBuWI',
    twitter: '1043578525339418624',
    year: '2018',
    month: '9',
    day: '22',
    description: '',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/35-es6-way-to-clone-an-array': {
    order: 35,
    slug: '35-es6-way-to-clone-an-array',
    name: 'ES6 Way To Clone An Array',
    instagram: 'BoUoieJhwNN',
    twitter: '1046125731309191169',
    year: '2018',
    month: '9',
    day: '29',
    description:
      'When we need to copy an array, we often time used `slice`. But with ES6, you can also use the spread operator to duplicate an array...',
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_ARRAY],
  },
  'tidbits/36-bad-variable-names-to-avoid': {
    order: 36,
    slug: '36-bad-variable-names-to-avoid',
    name: 'Bad Variable Names To Avoid',
    instagram: 'BomlClYhvyS',
    twitter: '1048651137572790272',
    year: '2018',
    month: '10',
    day: '16',
    description:
      'Reading code is tough, so don’t make it more complicated with names that others have to guess. Often, it’s better to spell out the entirety...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/37-dynamic-property-name-with-es6': {
    order: 37,
    slug: '37-dynamic-property-name-with-es6',
    name: 'Dynamic Property Name With ES6',
    instagram: 'Bo4oSW7h1zJ',
    twitter: '1051190454782386177',
    year: '2018',
    month: '10',
    day: '13',
    description:
      'Previously, we always had to use the bracket notation to use a dynamic key. With ES6, we can finally create dynamic variable key in the object declaration...',
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/38-html-download-attribute': {
    order: 38,
    slug: '38-html-download-attribute',
    name: 'Downloadable Link withm HTML5 Download Attribute',
    instagram: 'BpKlCPzB0my',
    twitter: '1053720386045599749',
    year: '2018',
    month: '10',
    day: '20',
    description:
      'Turn your <a href> into a download link instead. The downloaded file will be the same as the original filename OR  you can pass in a value to set a custom name...',
    language: HTML,
    video: true,
    tags: [TAG_HTML],
  },
  'tidbits/39-es6-classes': {
    order: 39,
    slug: '39-es6-classes',
    name: 'Classes in JavaScript',
    instagram: 'Bpco34Jl8rW',
    twitter: '1056257910081081344',
    year: '2018',
    month: '10',
    day: '27',
    language: JS,
    description:
      "ES6 Classes are syntactical sugar that sweetens the existing prototype-based inheritance. Now it's even easier for OOP devs to pick up JS...",
    tags: [TAG_JS],
  },
  'tidbits/40-colorful-console-message': {
    order: 40,
    slug: '40-colorful-console-message',
    name: 'Colorful Console Message',
    instagram: 'BpuuTU1hOD_',
    twitter: '1058804780078780416',
    year: '2018',
    month: '11',
    day: '3',
    description:
      'Add some style to your console statement with the `%c` specifier. This is super handy to help you easily identify debug information from the console...',
    language: CONSOLE,
    tags: [TAG_CONSOLE, TAG_BROWSER],
  },
  'tidbits/41-no-useless-escape': {
    order: 41,
    slug: '41-no-useless-escape',
    name: 'No Useless Escape',
    instagram: 'BqAtP0rBrBj',
    twitter: '1061334247842037760',
    year: '2018',
    month: '11',
    day: '10',
    description: '',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/42-html5-autofocus': {
    order: 42,
    slug: '42-html5-autofocus',
    name: 'HTML5 autofocus',
    instagram: 'BqSzqcehLoI',
    twitter: '1063882548248436736',
    year: '2018',
    month: '11',
    day: '17',
    video: true,
    description: '',
    language: 'HTML',
    tags: [TAG_HTML],
  },
  'tidbits/43-3-ways-to-remove-array-duplicates': {
    order: 43,
    slug: '43-3-ways-to-remove-array-duplicates',
    name: 'How to Remove Array Duplicates in ES6',
    instagram: 'BsjA-eiBAeT',
    twitter: '1084176864858390528',
    year: '2019',
    month: '1',
    day: '12',
    description:
      'Here are 3 ways to filter out duplicates from an array and return only the unique values...',
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_ARRAY],
  },
  'tidbits/44-refactoring-conditional-adding-property-to-object': {
    order: 44,
    slug: '44-refactoring-conditional-adding-property-to-object',
    name: 'Refactoring Conditional Adding Property to Object',
    instagram: 'Bs1I6C2hCLo',
    twitter: '1086728062069133313',
    year: '2019',
    month: '1',
    day: '20',
    description:
      'Instead of conditionally adding a property using a Ternary. Use the "||" operator...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/45-pretty-json-output': {
    order: 45,
    slug: '45-pretty-json-output',
    name: 'Pretty JSON output',
    instagram: 'BtHEE_6hN3L',
    twitter: '1089250835383480320',
    year: '2019',
    month: '1',
    day: '26',
    description:
      'Tired of the one-liner JSON output, well no more! Utilize JSON.stringify built-in pretty printing.',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/46-css-not-selector': {
    order: 46,
    slug: '46-css-not-selector',
    name: 'CSS :not Selector',
    instagram: 'BtZFkLnhKNj',
    twitter: '1091785006777655296',
    year: '2019',
    month: '2',
    day: '2',
    description:
      'Instead of using 2 different selectors to assign styling and then another to negate it. Use the :not selector for more precise selection...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/47-arrow-functions-cheatsheet': {
    order: 47,
    slug: '47-arrow-functions-cheatsheet',
    name: 'ES6 Arrow Functions Cheatsheet',
    instagram: 'BtrGG__BbWA',
    twitter: '1094321418328666112',
    year: '2019',
    month: '2',
    day: '9',
    description:
      "Here's a cheatsheet to show you the many ways to write your arrow functions.",
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/48-passing-arrays-as-function-arguments': {
    order: 48,
    slug: '48-passing-arrays-as-function-arguments',
    name: 'Passing Arrays as Function Arguments in JavaScript',
    instagram: 'Bt9GZ0yB6FM',
    twitter: '1096855396902330369',
    year: '2019',
    month: '2',
    day: '16',
    description:
      'If you want to pass an array into a variadic function. You can use ES6 spread to turn that array into a list of arguments.',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/49-2-ways-to-merge-arrays': {
    order: 49,
    slug: '49-2-ways-to-merge-arrays',
    name: '2 Ways to Merge Arrays in JavaScript',
    instagram: 'BuPKYfoB6Cr',
    twitter: '1099397729279569920',
    year: '2019',
    month: '2',
    day: '23',
    description:
      "Here are 2 ways to combine your arrays and return a NEW array. Here are 2 ways to combine your arrays and return a NEW array. Let's look at how we do that using spread and concat.",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_ARRAY],
  },

  'tidbits/50-how-to-deep-clone-an-array': {
    order: 50,
    slug: '50-how-to-deep-clone-an-array',
    name: 'How to Deep Clone an Array in JavaScript',
    instagram: 'BuhK2QKhtGW',
    twitter: '1101931593965301760',
    year: '2019',
    month: '3',
    day: '2',
    description:
      'Here are 2 ways to deep clone an array. For a quick & dirty way use the JSON methods. For a more robust way, go with Lodash...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/51-prevent-object-retrieval-type-error-with-guard-operator': {
    order: 51,
    slug: '51-prevent-object-retrieval-type-error-with-guard-operator',
    name: 'Prevent Object Retrieval TypeError with &&',
    instagram: 'BuzLEG6hGte',
    twitter: '1104465547448672257',
    year: '2019',
    month: '3',
    day: '9',
    description:
      'In JavaScript && is not just a logical operator, it can be used as a Guard Operator to prevent Object Retrieval TypeError...',
    language: JS,
    tags: [TAG_JS, TAG_OBJECT],
  },
  'tidbits/52-3-ways-to-set-default-value': {
    order: 52,
    slug: '52-3-ways-to-set-default-value',
    name: '3 Ways to Set Default Value in JavaScript',
    instagram: 'BvFHTCXhn-N',
    twitter: '1106990902273179648',
    year: '2019',
    month: '3',
    day: '16',
    description:
      "Let's break down the 3 different ways to set Default Values using  logical operator, ternary, and if/else...",
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/53-css-counter': {
    order: 53,
    slug: '53-css-counter',
    name: 'CSS Counter',
    instagram: 'BvXHR0phDFW',
    twitter: '1109523673470259200',
    year: '2019',
    month: '3',
    day: '23',
    description:
      'A complete guide to CSS counter. How it works and how you can apply automatic incrementation to any HTML element just like ordered lists...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/54-quick-debug-with-console-log-using-or-operator': {
    order: 54,
    slug: '54-quick-debug-with-console-log-using-or-operator',
    name: 'Quick Debug Wth Console Log Using Or Operator',
    instagram: 'BvpLhWnhdNO',
    twitter: '1112066263365242880',
    year: '2019',
    month: '3',
    day: '31',
    description:
      'Quickly debug 1-line functions with || to output both your console.log and expression...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/55-how-to-truncate-number': {
    order: 55,
    slug: '55-how-to-truncate-number',
    name: 'How To Truncate Number in JavaScript',
    instagram: 'Bv7KAHThpA9',
    twitter: '1114596850139451393',
    year: '2019',
    month: '4',
    day: '6',
    description:
      "Use Math.trunc() to truncate a floating point number and return its integer part. Let's also see other number truncation ways in JavaScript...",
    language: JS,
    tags: [TAG_JS, TAG_NUMBER],
  },
  'tidbits/56-how-to-get-an-object-length': {
    order: 56,
    slug: '56-how-to-get-an-object-length',
    name: 'How to Get an Object Length in JavaScript',
    instagram: 'BwNOOQlhMdG',
    twitter: '1117138656785866752',
    year: '2019',
    month: '04',
    day: '19',
    description:
      "Unlike arrays, it's always been tricky to get the object length. Let's learn how ES6 solves this with Object.keys and how enumerable works...",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_OBJECT],
  },
  'tidbits/57-styling-css-placeholder': {
    order: 57,
    slug: '57-styling-css-placeholder',
    name: 'Styling Placeholder Text with CSS',
    instagram: 'BwfPt6ph1jv',
    twitter: '1119673999405961217',
    year: '2019',
    month: '4',
    day: '21',
    description:
      'Learn how to use the ::placeholder pseudo-element to style your placeholder text in an <input>or <textarea> form element...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/58-multi-line-strings-with-template-literals': {
    order: 58,
    slug: '58-multi-line-strings-with-template-literals',
    name: 'Multi-Line String with ES6 Template Literals',
    instagram: 'BwxQr2-hlVP',
    twitter: '1122210337896288256',
    year: '2019',
    month: '4',
    day: '27',
    description:
      "It's super easy now to create multi-line strings with Template Literals in JavaScript. No more messy string line breaks. Yay, ES6!",
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/59-exponentiation-operator': {
    order: 59,
    slug: '59-exponentiation-operator',
    name: 'JavaScript Exponentiation Operator',
    instagram: 'BxDQIrXB6hw',
    twitter: '1124743092114821121',
    year: '2019',
    month: '5',
    day: '4',
    description:
      'Finally, there is a more a succinct way to write an Exponentiation Expression using the new ES7 ** notation in JavaScript...',
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/60-highlight-text-with-html-mark-tag': {
    order: 60,
    slug: '60-highlight-text-with-html-mark-tag',
    name: 'Highlight Text With HTML Mark Tag',
    instagram: 'BxVNvOTgX6P',
    twitter: '1127271460999794688',
    year: '2019',
    month: '5',
    day: '10',
    description:
      'Need to highlight a text, use the HTML5 mark tag. This is a more semantic option that will easily style your highlighted text without CSS...',
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/61-better-nan-check-with-es6-number-isnan': {
    order: 61,
    slug: '61-better-nan-check-with-es6-number-isnan',
    name: 'Better NaN check with ES6 Number.isNaN',
    instagram: 'BxnUdY3DXbm',
    twitter: '1129819300167016448',
    year: '2019',
    month: '5',
    day: '19',
    description:
      "The isNaN check always had its issue due to its coercion nature. Number.isNaN to the rescue. Let's learn about NaN and why NaN check exists...",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_NUMBER],
  },
  'tidbits/62-5-ways-to-convert-value-to-string': {
    order: 62,
    slug: '62-5-ways-to-convert-value-to-string',
    name: '5 Ways to Convert a Value to String in JavaScript',
    instagram: 'Bx5Wf4IAhdt',
    twitter: '1132360620727136256',
    year: '2019',
    month: '5',
    day: '26',
    description:
      "Let's check out the different ways of converting a value to a string in JavaScript. The preferred way from Airbnb's style guide is String()...",
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/63-better-array-check-with-array-isarray': {
    order: 63,
    slug: '63-better-array-check-with-array-isarray',
    name: 'Better Array Check with JavaScript Array.isArray',
    instagram: 'ByLV8QnAFPm',
    twitter: '1134889094742327297',
    year: '2019',
    month: '6',
    day: '3',
    description:
      'Because arrays are not true array in JavaScript, there is no simple typeof check. No problem! Use the method Array.isArray to check...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/64-css-only-child': {
    order: 64,
    slug: '64-css-only-child',
    name: 'CSS only-child',
    instagram: 'BydT5bMg05n',
    twitter: '1137419961939386368',
    year: '2019',
    month: '6',
    day: '8',
    description:
      "We have first-child, last-child, and nth-child. What if you're the only child? No problem, CSS got you! Let's learn how only-child works...",
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/65-dot-vs-bracket-notation': {
    order: 65,
    slug: '65-dot-vs-bracket-notation',
    name: 'JavaScript: Dot Notation vs Bracket Notation',
    instagram: 'ByvVum-Ah2x/',
    twitter: '1139954961624850432',
    year: '2019',
    month: '6',
    day: '15',
    description:
      "Which one should I use - Dot or Bracket? Both notations can access object property. Let's break it down and see which to use when...",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_OBJECT],
  },
  'tidbits/66-no-and-in-function-name': {
    order: 66,
    slug: '66-no-and-in-function-name',
    name: 'JavaScript: No AND in Function Name',
    instagram: 'BzBa_0FgavZ',
    twitter: '1142499998765944832',
    year: '2019',
    month: '6',
    day: '22',
    description:
      "Function should do one thing and one thing only. If your function name includes AND, it means you're doing too much! Let's fix this...",
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/67-es6-startswith-method': {
    order: 67,
    slug: '67-es6-startswith-method',
    name: 'String startsWith Method',
    subtitle:
      'How to Check if a Strings Begins with another string in JavaScript',
    instagram: 'BzTiSyPA0zZ',
    twitter: '1145048841357426688',
    year: '2019',
    month: '6',
    day: '29',
    description:
      "If you ever need to check if a string begins with another string in JavaScript, use ES6's startsWith method...",
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/68-strike-through-using-html': {
    order: 68,
    slug: '68-strike-through-using-html',
    name: 'Strike Through Using HTML',
    instagram: 'BzlfPiNAZLq',
    twitter: '1147575718781394944',
    year: '2019',
    month: '6',
    day: '7',
    description:
      "HTML semantic provide meaning to your content. If you're striking through content, indicate the meaning with proper tag using <del> or <s>",
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/69-display-string-in-tabular-format-with-padend': {
    order: 69,
    slug: '69-display-string-in-tabular-format-with-padend',
    name: 'padEnd String Method in JavaScript',
    instagram: 'Bz3hSh2gZFq',
    twitter: '1150113574955581441',
    year: '2019',
    month: '7',
    day: '13',
    description:
      "padEnd is great for us to add some padding to display our strings in a tabular format. Use this method to pad characters to a string's end..",
    language: JS,
    tags: [TAG_JS],
  },

  'tidbits/70-3-ways-to-clone-objects': {
    order: 70,
    slug: '70-3-ways-to-clone-objects',
    name: '3 Ways to Clone Objects',
    instagram: 'B0JhaWhgdah',
    twitter: '1152647317050159104',
    year: '2019',
    month: '6',
    day: '20',
    description:
      "Because objects in JavaScript are references values, you can't simply just copy using the =. Here are 3 ways for you to clone an object...",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_OBJECT],
  },
  'tidbits/71-how-to-flatten-array-using-array-flat': {
    order: 71,
    slug: '71-how-to-flatten-array-using-array-flat',
    name: 'Flatten Array using Array.flat in JavaScript',
    instagram: 'B0bmJlKAQ77',
    twitter: '1155190767876395008',
    year: '2019',
    month: '7',
    day: '27',
    description:
      'It was always complicated to flatten an array in JS. Not anymore! ES2019 introduced a new method that flattens arrays with Array.flat()...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/72-css-empty-selector': {
    order: 72,
    slug: '72-css-empty-selector',
    name: 'CSS empty Selector',
    instagram: 'B0tm0prAUGc',
    twitter: '1157725595926581248?s=20',
    year: '2019',
    month: '8',
    day: '3',
    description:
      'Ever wonder how to style element that has no children and contain nothing? No problem, you got CSS :empty selector...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/73-es6-endswith-method': {
    order: 73,
    slug: '73-es6-endswith-method',
    name: 'JavaScript String endsWith Method',
    instagram: 'B0_j2DdgZuQ',
    twitter: '1160251990493917184',
    year: '2019',
    month: '8',
    day: '11',
    description:
      'How to check if a string ends with another string in JavaScript',
    language: JS,
    tags: [TAG_JS, TAG_ES6],
  },
  'tidbits/74-how-to-reverse-an-array': {
    order: 74,
    slug: '74-how-to-reverse-an-array',
    name: 'How to reverse an array in JavaScript',
    instagram: 'B1RrEKbAt6O',
    twitter: '1162801341153959937',
    year: '2019',
    month: '8',
    day: '17',
    description:
      "Here's a Code Recipe to keep around if you need to reverse the order of the elements of an array...",
    language: JS,
    tags: [TAG_JS, TAG_CODE_RECIPE],
  },
  'tidbits/75-centering-elements-with-flexbox': {
    order: 75,
    slug: '75-centering-elements-with-flexbox',
    name: 'Centering Element With Flexbox',
    instagram: 'B1jywdDgpzZ',
    twitter: '1165352030602330112',
    year: '2019',
    month: '8',
    day: '24',
    description:
      'Learn more about flexbox with my free series Flexbox30. Follow my Twitter (@samantha_ming) or Instagram (@samanthaming) to catch it...',
    language: CSS,
    tags: [TAG_CSS, TAG_FLEXBOX],
  },
  'tidbits/76-converting-object-to-array': {
    order: 76,
    slug: '76-converting-object-to-array',
    name: 'Converting Object to Array in JavaScript',
    instagram: 'B4F-9yxAwVK',
    twitter: '1188178109532499968',
    year: '2019',
    month: '8',
    day: '26',
    description:
      "Finally with ES2017, it's official now! We have 3 variations to convert an Object to an Array in JavaScript",
    language: JS,
    tags: [TAG_JS, TAG_ES6, TAG_OBJECT, TAG_ARRAY],
  },
  'tidbits/77-html-kbd-tag': {
    order: 77,
    slug: '77-html-kbd-tag',
    name: 'HTML <kbd> Tag',
    instagram: 'B4X72j1AgxS',
    twitter: '1190704279264194560',
    year: '2019',
    month: '11',
    day: '2',
    description:
      'Use the HTML kbd tag to semantically denote your text as a keyboard command. Great for documentations...',
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/78-iterables-to-array-using-spread': {
    order: 78,
    slug: '78-iterables-to-array-using-spread',
    name: 'Convert Iterable to Array using Spread in JavaScript',
    instagram: 'B4qGEeDg24e',
    twitter: '1193260290437083136',
    year: '2019',
    month: '11',
    day: '9',
    description:
      'Using spread, you can convert Iterables to an Array. Why? Because then you can access all of the cool array methods such as filter & map...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/79-module-cheatsheet': {
    order: 79,
    slug: '79-module-cheatsheet',
    name: 'JavaScript Module Cheatsheet',
    instagram: 'B48C5SVADe0',
    twitter: '1195786317243637765',
    year: '2019',
    month: '11',
    day: '16',
    description:
      "Here's a cheatsheet to show you the different ways of exporting and the corresponding way to import it...",
    language: JS,
    tags: [TAG_JS],
  },
  'tidbits/80-flatmap': {
    order: 80,
    slug: '80-flatmap',
    name: 'JavaScript Array.flatMap',
    instagram: 'B5OFq5LALzz',
    twitter: '1198325593483272193',
    year: '2019',
    month: '11',
    day: '23',
    description:
      'Use flatMap to map over an array and flatten the result array in one go!',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY],
  },
  'tidbits/81-how-to-check-if-array-includes-a-value': {
    order: 81,
    slug: '81-how-to-check-if-array-includes-a-value',
    name: 'How to Check if Array Includes a Value in JavaScript',
    year: '2020',
    month: '03',
    day: '1',
    description:
      'Code Recipe to check if an array includes a value in JavaScript using ES6 "includes"',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_CODE_RECIPE],
  },
  'tidbits/82-html-audio-tag': {
    order: 82,
    slug: '82-html-audio-tag',
    name: 'HTML audio tag',
    year: '2020',
    month: '03',
    day: '7',
    description:
      'Super simple to add audio files to your site with the HTML audio tag.',
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/83-4-ways-to-convert-string-to-character-array': {
    order: 83,
    slug: '83-4-ways-to-convert-string-to-character-array',
    name: '4 ways to convert String to Character Array in JavaScript',
    year: '2020',
    month: '03',
    day: '14',
    description:
      'How to convert a string into an array of characters in JavaScript? Here are 4 ways using the built-in split and 3 new ES6 methods. Read which is best for different scenarios...',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_STRING],
  },
  'tidbits/84-2-ways-to-center-elements-with-flexbox': {
    order: 84,
    slug: '84-2-ways-to-center-elements-with-flexbox',
    name: '2 ways to Center Elements with Flexbox',
    year: '2020',
    month: '03',
    day: '28',
    description:
      'Being able to horizontal & vertical center something is super simple with CSS Flexbox. You can use flex properties OR you can use auto margin...',
    language: CSS,
    tags: [TAG_CSS, TAG_FLEXBOX],
  },
  'tidbits/85-string-trim': {
    order: 85,
    slug: '85-string-trim',
    name: 'String Trim in JavaScript',
    year: '2020',
    month: '04',
    day: '12',
    description:
      "It's super simple to remove whitespace from a string. trimStart is to remove leading whitespace, trimEnd will remove trailing, and trim will remove it all...",
    language: JS,
    tags: [TAG_JS, TAG_STRING],
  },
  'tidbits/86-window-location-cheatsheet': {
    order: 86,
    slug: '86-window-location-cheatsheet',
    name: 'window.location Cheatsheet',
    year: '2020',
    month: '04',
    day: '19',
    description:
      'The window.location object can be used to get information on the current page address (URL). You can also use its method to do a page redirect or refresh...',
    language: JS,
    tags: [TAG_BROWSER],
  },
  'tidbits/87-5-ways-to-append-item-to-array': {
    order: 87,
    slug: '87-5-ways-to-append-item-to-array',
    name: ' 5 Way to Append Item to Array in JavaScript',
    year: '2020',
    month: '04',
    day: '26',
    description:
      "5 ways to add an item to the end of an array. Push, Splice, and Length will mutate the original array. Concat and Spread won't and will return a new array...",
    // 5 ways to append item to array. Push, Splice, Length will mutate the original array. Concat and Spread won't and will return a new array…
    language: JS,
    tags: [TAG_ARRAY, TAG_JS],
  },
  'tidbits/88-css-placeholder-shown': {
    order: 88,
    slug: '88-css-placeholder-shown',
    name: 'CSS :placeholder-shown',
    year: '2020',
    month: '05',
    day: '02',
    description:
      'Use this pseudo-class to style an input that is currently displaying the placeholder text -- in other words, the user has not typed anything in the textbox...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/89-how-to-check-if-variable-is-array': {
    order: 89,
    slug: '89-how-to-check-if-variable-is-array',
    name: 'How to check if Variable is an Array in JavaScript',
    year: '2020',
    month: '05',
    day: '09',
    description:
      'Code Recipe to check if a variable or object is an Array in JavaScript using Array.isArray()',
    language: JS,
    tags: [TAG_JS, TAG_CODE_RECIPE],
  },
  'tidbits/90-object-from-entries': {
    order: 90,
    slug: '90-object-from-entries',
    name: 'JavaScript Object.fromEntries()',
    year: '2020',
    month: '05',
    day: '24',
    description:
      'Object.fromEntries is the inverse of Object.entries. It will take key-value pairs and return a new object. You can use it on Arrays and Maps.',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_OBJECT],
  },
  'tidbits/91-html-video': {
    order: 91,
    slug: '91-html-video',
    name: 'HTML Video',
    year: '2020',
    month: '05',
    day: '30',
    description:
      'Object.fromEntries is the inverse of Object.entries. It will take key-value pairs and return a new object. You can use it on Arrays and Maps.',
    language: HTML,
    tags: [TAG_HTML],
  },
  'tidbits/92-6-use-cases-of-spread-with-array': {
    order: 92,
    slug: '92-6-use-cases-of-spread-with-array',
    name: '6 Use Case of Spread with Array in JavaScript',
    year: '2020',
    month: '06',
    day: '28',
    description:
      '6 ways to use the Spread operator with Array in JavaScript. Use it to merge or clone an array. Or use it to convert iterables to an array.',
    language: JS,
    tags: [TAG_JS, TAG_ARRAY, TAG_ES6],
  },
  'tidbits/93-vue-2.6-named-slot-shorthand': {
    order: 93,
    slug: '93-vue-2.6-named-slot-shorthand',
    name: 'Vue Named Slot Shorthand',
    year: '2020',
    month: '07',
    day: '05',
    description: 'How I use Vue Slots to build my site SamanthaMing.com',
    language: JS,
    tags: [TAG_VUE, TAG_JS], // SAM: remove TAG_JS when more Vue tidbits otherwise too few in related tidbits
  },
  'tidbits/94-how-to-check-if-object-is-empty': {
    order: 94,
    slug: '94-how-to-check-if-object-is-empty',
    name: 'How to Check if Object is Empty in JavaScript',
    year: '2020',
    month: '07',
    day: '11',
    description: "Here's a Code Recipe to check if an object is empty or not.",
    language: JS,
    tags: [TAG_JS, TAG_OBJECT, TAG_CODE_RECIPE],
  },
  'tidbits/95-fix-text-overlap-with-css-white-space': {
    order: 95,
    slug: '95-fix-text-overlap-with-css-white-space',
    name: 'Fix Text Overlap with CSS white-space',
    year: '2020',
    month: '07',
    day: '18',
    description:
      'Fix overlapping text by setting CSS white-space from "nowrap" to "normal"...',
    language: CSS,
    tags: [TAG_CSS],
  },
  'tidbits/96-vue-use-null-for-empty-class': {
    order: 96,
    slug: '96-vue-use-null-for-empty-class',
    name: 'Avoid Empty Class in Vue with Null',
    year: '2020',
    month: '08',
    day: '01',
    description:
      'Avoid adding an empty class into the DOM by using "null" in Vue',
    language: JS,
    tags: [TAG_VUE],
  },
  'tidbits/97-string-padstart-padend': {
    order: 97,
    slug: '97-string-padstart-padend',
    name: 'How to Pad a String with padStart and padEnd in JavaScript',
    year: '2020',
    month: '08',
    day: '10',
    description:
      "It's super easy to pad a string! Just pass in your desired string and length. The string will be padded until the length has been met...",
    language: JS,
    tags: [TAG_STRING],
  },
  'tidbits/98-html-abbr': {
    order: 98,
    slug: '98-html-abbr',
    name: 'HTML abbr Tag',
    year: '2020',
    month: '8',
    day: '15',
    description:
      'Learn how to mark up abbreviated content with the <abbr> tag. Using semantic HTML is an excellent way to convey meaning of your page...',
    language: HTML,
    tags: [TAG_HTML],
  },
};

// title: ${d.name}

export default {
  computed: {
    texts() {
      return Object.values(data).map((d) => {
        return `
description: ${d.description}
tags: [${d.tags}]
order: ${d.order}
createdAt: ${d.year}-${d.month}-${d.day}
---
        `;
      });
    },
  },
};
</script>
