---
title: How to Compare 2 Objects in JavaScript 🎉
description: Apply the contenteditable attribute and you can edit it similar to <input> or <textarea>. Users can click on the text and make an update creating a smooth editing experience.
tags: [html]
order: 33
createdAt: 2018-9-8
updatedAt: 2020-04-12
---

Objects are reference types so you can’t just use `===` or `==` to compare 2 objects. One quick way to compare if 2 objects have the same key value, is using `JSON.stringify`. Another way is using Lodash `isEqual` function 👏

```javascript
const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

// Using JavaScript
JSON.stringify(k1) === JSON.stringify(k2); // true

// Using Lodash
_.isEqual(k1, k2); // true
```

<markdown-toc></markdown-toc>

## Deep Nested Comparison

Yup, the 2 ways also work for deep nested objects.

```javascript
const one = {
  fruit: '🥝',
  nutrients: {
    energy: '255kJ',
    minerals: {
      name: 'calcium',
    },
  },
};

const two = {
  fruit: '🥝',
  nutrients: {
    energy: '255kJ',
    minerals: {
      name: 'calcium',
    },
  },
};

// Using JavaScript
JSON.stringify(one) === JSON.stringify(two); // true

// Using Lodash
_.isEqual(one, two); // true
```

## Which one should I use?

Well that depends. For `JSON.stringify()`, the order matters. So if the key-value pair are ordered differently in the two objects but are the same, it will return false. Whereas it doesn't matter in Lodash `isEqual`, it will return true as along as the key-value pair exists.

Here's my recommendation. For a quick and dirty solution, I'd use `JSON.stringify()`. But for a more robust solution that cover more of those odd edge cases, use the Lodash way.

```javascript
const one = {
  fruit: '🥝',
  energy: '255kJ',
};

const two = {
  energy: '255kJ',
  fruit: '🥝',
};

// Using JavaScript
JSON.stringify(one) === JSON.stringify(two); // false

// Using Lodash
_.isEqual(one, two); // true
```

## Community Suggestions

### ES6 Way for comparing 2 objects

This is a solution suggested by [@mustafauzun0](https://www.instagram.com/mustafauzun0/). Few things to note though, it won’t work with nested objects and the order of the keys are important. The idea behind this is similar to the stringify way. It coverts the object into a string and compare if the strings are a match. Essentially it's comparing the equality of two strings. That's why the order matters.

```javascript
const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

Object.entries(k1).toString() === Object.entries(k2).toString();
// true
```

_Thanks: [@mustafauzun0](https://www.instagram.com/mustafauzun0/)_

### JSON.stringify vs Lodash's isEqual Performance

_Cole Turner:_ Worth noting that objects don’t guarantee sort order, and stringify is going to cost more in performance because it has to serialize the whole object whereas lodash can exit early if it finds a mismatched key. This comes up in interviews 🙂

_Thanks: [@coleturner](https://twitter.com/coleturner/status/1041052858890706944)_

_blnkdotspace:_ Lodash is considerably faster. Because lodash will quit soon as it reaches the first difference, but stringify goes right till the end unnecessarily. If you have small arrays it's okay but for my personal use cases with more than 1000 events/products in a list I wouldn't ever use Stringify.

_Thanks: [@blnkdotspace](https://www.instagram.com/blnkdotspace/)_

## Resources

- [MDN Web Docs - JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Lodash: isEqual](https://lodash.com/docs/4.17.10#isEqual)
- [Understanding JavaScript Objects](https://blog.halolabs.io/understanding-javascript-objects-d31cd24ca60f)
- [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
- [JavaScript deep object comparison - JSON.stringify vs deepEqual](http://www.mattzeunert.com/2016/01/28/javascript-deep-equal.html)
- [Stack overflow: Is it fine to use JSON.stringify for deep comparisons and cloning?](https://stackoverflow.com/questions/15376185/is-it-fine-to-use-json-stringify-for-deep-comparisons-and-cloning)
- [How to determine equality for two JavaScript objects?](https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects)
