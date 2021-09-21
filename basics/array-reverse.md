---
title: 'Array - `reverse`'
tags: [javascript]
order: 2
section: Array
createdAt: 2020-01-12
---

Welcome back to our Web Basics, a series on essential programming topics every web developer should absolutely know!

In today’s lesson, let’s learn about reverse() — This method is used to reverse the order of the elements in an array. And yup, it can be used for array of any types.

```javascript
const letters = ['a', 'b', 'c'];

letters.reverse();
// ['c', 'b', 'a'];
```

## Examples

### Array of Numbers

```javascript
const nums = [2, 10, 5];

nums.reverse;
// [5, 10, 2]
```

### Array of Emojis

Nope, "emojis" aren't a type. It's just a string. Notice the quotation around it. It's important to have fun in programming, I find emojis always help 😝

```javascript
const medals = ['🥇', '🥈', '🥉'];

medals.reverse();
// ['🥉' , '🥈', '🥇' ]
```

### Array of Mixed Types

```javascript
const mix = [true, 'hi', null, 100, undefined];

mix.reverse();
// [ undefined, 100, null, 'hi', true ]
```

## Resources

- [MDN Web Docs: reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
