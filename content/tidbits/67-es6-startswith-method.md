---
title: String startsWith() Method in JavaScript
description: If you ever need to check if a string begins with another string in JavaScript, use ES6's startsWith method...
tags: [javascript, es6]
order: 67
createdAt: 2019-6-29
---

If you ever need to check if a string begins with another string, use ES6's `startsWith` method. I really like this method because intuitively it's so comprehensive. Even if you don't know have any tech background, just by reading the code, you can more easily deduce what's happening in comparison to `indexOf` 🤓

I really like the direction JavaScript is going. Not just introducing all these helpful methods, but evolving the language to be more human readable. This is how we make tech more accessible. Make it easier to learn. Love it! 😍

```javascript
const lunch = '🥗 🥪 🍮';

// Old Way
lunch.indexOf('🥗') === 0; // true

// ✅ ES6 Way
lunch.startsWith('🥗'); // true
```

[[toc]]

## `startsWith`() Parameters

The `startsWith` method accepts 2 parameters:

1. Search Value
2. Starting Index

### 1. Search Value

This is a required field. Here is where you pass your search value. This can be a single character or longer. Let's see some examples

#### Single Character

```javascript
const name = 'Samantha Ming';

name.startsWith('S'); // true
name.startsWith('M'); // false
```

#### Multiple Characters

```javascript
const name = 'Samantha Ming';

name.startsWith('Sam'); // true
name.startsWith('Min'); // false
```

#### Multiple Words

```javascript
const name = 'Samantha Ming';

name.startsWith('Samantha M'); // true
name.startsWith('antha Min'); // false
```

#### Entire String

```javascript
const name = 'Samantha Ming';

name.startsWith('Samantha Ming'); // true
```

#### Exceeding String's Length

```javascript
const name = 'Samantha Ming';

name.startsWith('Samantha Ming is the best'); // false ← 😅
```

### 2. Starting Index

So by default, your starting index is going to be `0`. But with this parameter, you can make it start at a different starting position. Let's take a look at a few examples.

#### Default Index (0)

```javascript
const name = 'Samantha Ming';

name.startsWith('S'); // true
name.startsWith('S', 0); // true
```

#### Start at the 1st index

For those new to programming. Please note that JavaScript is zero-based. Meaning the count begins at `0`. So the first character is at `0` index, the second character is at `1` index 🤓

```javascript
const name = 'Samantha Ming';

name.startsWith('am', 1); // true
name.startsWith('am'); // false
```

#### Start at the 2nd index

Following our zero-based counting, the 2nd index is equal to the 3rd character.

```javascript
const name = 'Samantha Ming';

name.startsWith('ma', 2); // true
name.startsWith('ma'); // false
```

#### Negative Starting Index

So negative index won't work. I was trying to be clever to test if negative index would work similarly like `slice()` where if you pass a negative index, it would be the last character. Proof again, don't think you can outsmart JavaScript 😂

```javascript
const name = 'Samantha Ming';

name.startsWith('g', -1); // false
```

I guess that's what `endsWith` is for. I'll cover this in a future tidbit 😜

## Case Sensitive

One important thing to keep in mind is the `startWith` method is case sensitive.

```javascript
const name = 'Samantha Ming';

name.startsWith('sam'); // false
```

## Browser Support

This is supported by all modern browser. Except for .... I'm sure you guessed it -- no Internet Explorer 😑. You will need to use a Polyfill or a compiler like Babel.

[Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Browser_compatibility)

## Community Inputs

💬 What other way do you know of checking if a string begins with something?

This is the question I asked the community. Got some really good ones. Let's take a look 👀

### Using Search

```javascript
const lunch = '🥗🥪☕️';
const search = '🥗';
lunch.slice(0, search.length) === search;
```

_Thanks: [@abraham](https://twitter.com/abraham/status/1145064091674914816)_

### Using Regex

```javascript
'some string'.match(/^some/);

// OR
/^some/.test('some string');
```

_Thanks: [@cpt_silverfox](https://twitter.com/cpt_silverfox/status/1145056609824956416)_

### Using Bracket

If you're just checking for one singular character, you can try this. But note when you have more than character (ie. hel), this method won't work.

```javascript
const word = 'hello';

word[0] === 'h';
```

_Thanks: [@neutrino2211](https://twitter.com/neutrino2211/status/1145122176435142656)_

### Performance Check

_[@gwardwell](https://twitter.com/gwardwell/status/1145434844362620929):_ Here’s one such test (found on JSPerf, I didn’t author it) that would indicate `indexOf` blows `startsWith` away.

- [jsPerf: starsWith](https://jsperf.com/string-startswith/62)

## Resources

- [MDN Web Docs: startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [w3schools: startsWith](https://www.w3schools.com/jsref/jsref_startswith.asp)
- [Stack Overflow: How to check if a string “StartsWith” another string?](https://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string)
- [How to check if a string starts with another in JavaScript](https://flaviocopes.com/how-to-check-string-starts-with/)
