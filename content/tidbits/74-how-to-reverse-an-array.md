---
title: How to reverse an array in JavaScript?
description: Here's a Code Recipe to keep around if you need to reverse the order of the elements of an array.
tags: [javascript, code recipes]
order: 74
createdAt: 2019-08-17
updatedAt: 2020-07-17
---

Here's a Code Recipe to keep around if you need to reverse the order of the elements of an array. You can use the array method, "reverse()" ⏪

Trying a new segment called #CodeRecipes. I want to cover questions that I often Google. These are recipes that you should definitely keep handy because it's not a matter "if" you use it, but "when" 😉

```javascript
const benjamin = ['👶', '👦', '👨', '👴'];

const benjaminButton = benjamin.reverse();

console.log(benjaminButton);
// ['👴', '👨', '👦', '👶']
```

<markdown-toc></markdown-toc>

## Modifies Original Array

One thing to note is that it mutates the original array.

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = originalArray.reverse();

console.log(originalArray); // [ 'c', 'b', 'a' ]
console.log(newArray); // [ 'c', 'b', 'a' ]
```

## How to Reverse Array Without Mutating Original Array

Here are some recipes that won't mutate the original array. Let's take a look 👀

### Using `slice` and `reverse`

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = originalArray.slice().reverse();

console.log(originalArray); // ['a', 'b', 'c']
console.log(newArray); // [ 'c', 'b', 'a' ]
```

### Using `spread` and `reverse`

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = [...originalArray].reverse();

console.log(originalArray); // ['a', 'b', 'c']
console.log(newArray); // [ 'c', 'b', 'a' ]
```

### Using `reduce` and `spread`

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = originalArray.reduce((accumulator, value) => {
  return [value, ...accumulator];
}, []);

console.log(originalArray); // ['a', 'b', 'c']
console.log(newArray); // [ 'c', 'b', 'a' ]
```

### Using `reduceRight` and `spread`

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = originalArray.reduceRight((accumulator, value) => {
  console.log(value);
  return [...accumulator, value];
}, []);

console.log(originalArray); // ['a', 'b', 'c']
console.log(newArray); // [ 'c', 'b', 'a' ]
```

Or using `push`

```javascript
const originalArray = ['a', 'b', 'c'];
const newArray = originalArray.reduceRight((accumulator, value) => {
  accumulator.push(value);
  return accumulator;
}, []);

console.log(originalArray); // ['a', 'b', 'c']
console.log(newArray); // [ 'c', 'b', 'a' ]
```

## Community Input

_[@aminnair](https://dev.to/aminnairi/comment/e9o4):_ I decided to test another way of thinking this. Here are the results:

```bash
with slice and reverse: 83.085ms
With one loop: 309.763ms
```

Source code and tests are available [here](https://repl.it/repls/AromaticAgitatedProfessionals)

## Resources

- [MDN Web Docs: reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [w3schools: reverse](https://www.w3schools.com/jsref/jsref_reverse.asp)
- [Stack Overflow: Reverse array in JavaScript without mutating original array](https://stackoverflow.com/questions/30610523/reverse-array-in-javascript-without-mutating-original-array)
