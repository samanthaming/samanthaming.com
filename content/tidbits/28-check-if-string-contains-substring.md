---
title: Checking if a string contains substring in JavaScript
short: Checking if String contains Substring
description: You can use the ES6 includes() method to see if a substring exists in another string.
tags: [javascript]
order: 28
createdAt: 2018-8-11
---

You can now use the ES6 `includes()` method to check if a strings contains a substring. It will determine whether that string exists in another string, returning either true or false 🤓

```javascript
const word = 'sunny';

// Old way
word.indexOf('sun') !== -1; // true

// ✅ ES6 way
word.includes('sun'); // true
```

## Case-Sensitive

Note the comparison is case-sensitive.

```javascript
'sunny'.includes('SUN'); // false

'sunny'.includes('Sun'); // false
```

## Array `includes()`

The `includes()` can also be applied on arrays. You can use it to check if a certain element is in an array. It will either `true` or `false`.

```javascript
const weather = ['sun', 'rain', 'cloudy'];

weather.includes('sun'); // true
```

## Community Input

### Check if node is a descendant of a specified node

If you're checking if a node is a descendant of a specified node, you can use the `contains()` method. The descendant can be a child, grandchild, great-grandchild, etc.

_[@\_\_offblack](https://www.instagram.com/__offblack/):_ When we want to check if a document element contains a particular CSS class; we would use el.classList.contains('class-name') the contains function behaves like the includes function on a DOM elements classList. Helps a long way when making decisions on toggling classes, etc through vanilla JS

```javascript
const span = document.querySelector('span');
document.querySelector('div').contains(span);
```

### Performance Test: `indexOf` vs `includes`

Thanks Filip for creating these test cases. If you're interested in knowing the speed test for how these methods fair in different browser, check out the link.

[https://jsperf.com/unggzpaz](https://jsperf.com/unggzpaz)

## Resources

- [Alligator.io - String Method in JS](https://alligator.io/js/includes-string-method/)
- [MDN Web Docs - String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
