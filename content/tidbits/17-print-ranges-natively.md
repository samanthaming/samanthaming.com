---
title: Print Ranges Natively in JavaScript
description: One of my favorite feature of Ruby is ranges. But it’s not natively available in JS.
tags: [javascript]
order: 17
createdAt: 2018-05-26
updatedAt: 2020-07-17
---

One of my favorite feature of Ruby is ranges. But it’s not natively available in JS. That’s about to change! Learning ES6 from [@getify](https://twitter.com/getify) 🤩

Add this snippet to print ranges in your number prototype!

```javascript
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

[...3]; // [ 0, 1, 2, 3 ]
[...6]; // [ 0, 1, 2, 3, 4, 5, 6 ]
```

<markdown-toc></markdown-toc>

## Examples

You can even apply your standard loop methods on it!

### Using it with Map

Use it with the map method to triple each of the number.

```javascript
// Number.prototype[Symbol.iterator] = function*() {...}

const triple = [...3].map((x) => x * 2);

triple; // [ 0, 3, 6, 9 ]
```

### Using it with Filter

Combine it with the filter method to get rid of the odd numbers. (by the way, nothing wrong with odd one 😉)

```javascript
// Number.prototype[Symbol.iterator] = function*() {...}

const even = [...10].filter((x) => x % 2 === 0);

even; // [ 0, 2, 4, 6, 8, 10 ]
```

## Community Suggestions

### Use with caution

This code recipe does alter the built-in prototype. And this can lead to potential problem.

A popular library call MooTools had an unfortunately incident known as #smooshgate. You can read this [article](https://developers.google.com/web/updates/2018/03/smooshgate) that explained what happened.

If you need custom behaviour, it's better to define your own method instead of changing a native one. That way you don't risk breaking anything at all.

_Thanks: Robin V and [@\_gsathya](https://twitter.com/_baxuz/status/1000481049137373187)_

## Community Examples

### Create Range with Start Value

Improvement to build a specific range.

```javascript
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) yield i;
};

Array.prototype.to = function (arr) {
  return arr.filter((val) => !Array.from(this).includes(val));
};

console.log([...2]); // [0, 1, 2]
console.log([...5]); // [0, 1, 2, 3, 4, 5]
console.log([...2].to([...5])); // [3, 4, 5]
```

_Thanks: [@omiraclx](https://www.instagram.com/omiraclx/)_

### Method to Print Ranges

**Brian R**: In Ruby, you can just say `(0..10)` and it generates an array of numbers from 0 to 10. If you do `(0...10)`, it will give you from 1 to 9. In the current ECMA spec, you can't do this without writting your own function. The closest thing in the current spec that I've seen is this:

```javascript
[...Array(5).keys()];

// [ 0, 1, 2, 3, 4 ]
```

Very similar using `Array.from`

```javascript
Array.from({ length: 5 }, (v, i) => i);

// [0, 1, 2, 3, 4]
```

Or create a function:

```javascript
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

range(5, 10); // [ 5, 6, 7, 8, 9, 10 ]
```

_Thanks: Brian R._

### Another Method to Print Ranges

```javascript
const range = (length) => {
  return new Array(length).map((_, index) => {
    return index;
  });
};

range(5); // [<5 empty items>]
```

_Thanks [@mieszkogulinski](https://www.instagram.com/mieszkogulinski)_

## Resources

I learned this from a course on [Pluralsight](www.pluralsight.com). It's called ES6: The Right Parts from Kyle Simpson.It is a paid course, but I found a free transcript [here](https://frontendmasters.com/courses/es6-right-parts/ranges/).

- [MDN: Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [MDN: Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
