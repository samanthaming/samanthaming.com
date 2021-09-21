---
title: String endsWith() Method in JavaScript
description: How to check if a string ends with another string in JavaScript
tags: [javascript, es6]
order: 73
createdAt: 2019-08-11
updatedAt: 2019-08-11
---

Need to know if a string ends with something? Simple, use #ES6 "endsWith" method. You don't even need to be a developer and you can guess what's going on. Making a language more human-readable is definitely the way to go 💪

```javascript
const workout = '🏃 🏋️ 💪';

// Old Way
workout.indexOf('💪', workout.length - '💪'.length) !== -1;
// true

// ✅ES6 Way
workout.endsWith('💪');
// true
```

## Parameters

The `endsWith` method accepts 2 parameters:

1. Search Value
2. Length

### 1. Search Value

This is a required field. Here is where you pass your search value. This can be a single character or longer. Let's see some examples

**Single Character**

```javascript
const name = 'Samantha Ming';

name.endsWith('g'); // true
name.endsWith('n'); // false
```

**Multiple Characters**

```javascript
const name = 'Samantha Ming';

name.endsWith('ing'); // true
name.endsWith('in'); // false
```

**Multiple Words**

```javascript
const name = 'Samantha Ming';

name.endsWith('tha Ming'); // true
name.endsWith('tha M'); // false
```

### 2. Length

Here you can specify the length of the string you want it to search. When I first read this, I was quite confused. So let's try to understand what length is doing here.

First, I want to let you know the length of my first name.

```javascript
console.log('Samantha'.length); // 8
// The last character is 'a'
```

Now let's utilize the length parameter.

```javascript
const name = 'Samantha Ming';

name.endsWith('a', 8); // true
```

☝️So when I say `8`, I'm telling `endsWith` to grab the first "8" characters of the `name` string (from left to right). In this case, the first 8 characters of the string. And that will be the string we're searching with `endsWith`.

The above example is similar to doing this:

```javascript
const name = 'Samantha';

name.endsWith('a'); // true
```

The reason I said I was confused at first is because I pulled over my knowledge of `startsWith`, where the second parameter is the starting index. So I assumed the second parameter with `endsWith` would follow the same pattern and it would be the reverse ending index 😅 That's why people always say, never "assume". Just when you think you know, you actually don't. So be humble and always keep a student mindset 🤓

If you're interested, here's my code notes to `startsWith`:

[Code Notes: startsWith](https://www.samanthaming.com/tidbits/67-es6-startswith-method)

## Case Sensitive

Here's a knowledge that is similar to `startsWith`. The `endsWith` method is also case sensitive.

```javascript
const name = 'Samantha Ming';

name.endsWith('G'); // false
name.endsWith('g'); // true
```

## Browser Support

Browser support is wonderful! IF you don't count Internet Explorer 😅 (Sorry folks, but I'm sure there is no major shock there 😂)

[Browser Support: endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Browser_compatibility)

But no problem here's the polyfill so you can safely use `endsWith` and still, have it be supported in IE.

[MDN Polyfill: endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill)

By the way, if you're a bit confused about what Polyfill is. Here's a really good video by Tyler McGinnis.

[Compiling vs Polyfills with Babel (JavaScript)](https://youtu.be/BXoiuN1a0-E)

## Community Input

💬 What other old ways do you know?

**Using Regex**

_[@maxstalker](https://twitter.com/MaxStalker/status/1160299155379707914?s=20):_ I could advocate for old way with some curried helper functions with some sprinkle of regexp

```javascript
const startsWith = (pattern) => (string) =>
  new RegExp(`^${pattern}.*`).test(string);

const endsWith = (pattern) => (string) =>
  new RegExp(`.*${pattern}$`).test(string);

const sports = '🏈🎳⛳⛸';
console.log(startsWith('🏈')(sports)); // true
console.log(startsWith('⛸')(sports)); // false

console.log(endsWith('🏈')(sports)); // false
console.log(endsWith('⛸')(sports)); // true
```

_[@maxstalker](https://twitter.com/MaxStalker/status/1160299155379707914?s=20):_ Or slightly shorter version, which you can inline whenever needed:

```javascript
const sports = '🏈🎳⛳⛸';

// startsWith
console.log(/^🎳.*/.test(sports)); // false
console.log(/^🏈.*/.test(sports)); // true

// endsWith
console.log(/.*🎳$/.test(sports)); // false
console.log(/.*⛸$/.test(sports)); // true
```

**Using `slice`**

_[@maxstalker](https://twitter.com/MaxStalker/status/1160653700454637568?s=20):_ Another - a bit convoluted and maybe more theoretical - way to do it would be to compare parts of the strings:

```javascript
const sports = '⛳🎳🏈⚽🎾';
const startPattern = '⛳';
const endPattern = '⚽🎾';

//startsWith
console.log(sports.slice(0, startPattern.length) === 'wrong!'); // false
console.log(sports.slice(0, startPattern.length) === startPattern); // true

// endsWith
console.log(sports.slice(-endPattern.length) === 'wrong!'); // false
console.log(sports.slice(-endPattern.length) === endPattern); // true
```

**Using `lastIndexOf`**

```javascript
const workout = '🏃 🏋️ 💪';

workout.lastIndexOf('💪') === workout.length - '💪'.length;
// true
```

## Resources

- [MDN Web Docs: endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [Stack Overflow: endsWith in JavaScript](https://stackoverflow.com/questions/280634/endswith-in-javascript)
- [Check if string starts with or ends with a given string with JavaScript](https://clubmate.fi/check-if-string-starts-with-or-ends-with-a-given-string-with-javascript/)
- [String startswith, endswith and contains Implementation](https://siongui.github.io/2012/09/27/javascript-string-startswith-endswith-contains/)
- [Two ways to confirm the ending of a String in JavaScript](https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/)
