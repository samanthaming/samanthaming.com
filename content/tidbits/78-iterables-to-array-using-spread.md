---
title: Convert Iterables to Array using Spread
description: Using spread, you can convert Iterables to an Array. Why? Because then you can access all of the cool array methods such as filter & map.
tags: [javascript, array]
order: 78
createdAt: 2019-11-09
updatedAt: 2020-01-12
---

Use ES6 spread (...) to easily convert Iterables into an Array! Often, iterables are limited in terms of their built-in methods. By converting it into an array, you'll have access to ALL of the amazing array methods such as filter, map, reduce! Awesome 🎉

```javascript
[...'hi']; // // ['h', 'i']

[...new Set([1, 2, 3])]; // [1,2,3]

[...new Map([[1, 'one']])]; // [[1, 'one']]

[...document.querySelectorAll('div')]; // [ div, div, div]
```

## Built-in Iterables

In JavaScript, we have some built-in iterables that we use **spread** to convert them to an array:

- String
- Array
- Map
- Set

There's one more, but we won't focus on that for this post, `TypedArray`.

### What are Iterables?

> Iterables are data structures which provide a mechanism to allow other data consumers to publicly access its elements in a sequential manner.

If you're interested in learning more about iterables, check out these awesome posts:

- [Exploring JS - Iterables and iterators](https://exploringjs.com/es6/ch_iteration.html)
- [Alligator.io - Introduction to Iterables and Iterators in JavaScript](https://alligator.io/js/iterables/)
- [MDN: Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## String → Array

```javascript
const myString = 'hello';

const array = [...myString]; // [ 'h', 'e', 'l', 'l', 'o' ]
```

We can convert the array back to a string by using `join()`

```javascript
array.join(''); // 'hello'
```

## Set → Array

```javascript
const mySet = new Set([1, 2, 3]);

const array = [...mySet]; // [1, 2, 3]
```

We can convert the array back to a string by passing it into `new Set`

```javascript
new Set(array); // Set { 1, 2, 3 }
```

## Map → Array

```javascript
const myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]);

const array = [...myMap]; // [ [ 1, 'one' ], [ 2, 'two' ] ]
```

Similar to **Set**, we can convert the array back to a string by passing it into `new Map`

```javascript
new Map(array); // Map { 1 => 'one', 2 => 'two' }
```

## NodeList → Array

```javascript
const nodeList = document.querySelectorAll('div');

const array = [...document.querySelectorAll('div')];
// [ div, div, div] *
```

_\*I suggest you paste the code into your browser to see the actual output_

## Array.from vs Spread

Another very similar method to the Spread syntax is `Array.from`. In fact, we can replace our examples with this:

```javascript
Array.from('hi'); // // ['h', 'i']

Array.from(new Set([1, 2, 3])); // [1,2,3]

Array.from(new Map([[1, 'one']])); // [[1, 'one']]

Array.from(document.querySelectorAll('div')); // [ div, div, div]
```

### What's the difference?

The difference is in the definition

**`Array.from`** works for:

- array-like objects (objects with a length property and indexed elements)
- iterable objects

**Spread** only works for:

- iterable objects

So let's take a look at this **array-like** object:

```javascript
const arrayLikeObject = {
  0: 'a', // indexed element
  1: 'b', // indexed element
  length: 1, // length property
};

// ✅ Using Array.from
Array.from(arrayLikeObject); // [ 'a', 'b' ]

// ❌ Using Spread
[...arrayLikeObject]; // TypeError: arrayLikeObject is not iterable
```

### Which should I use?

Of course, it depends. If you are working with **array-like** objects, you have no choice but to use `Array.from`. But when it comes to iterables, I've always used `spreads`. Why? Because I'm a huge fan of the [Airbnb Style guide](https://github.com/airbnb/javascript#arrays--from-iterable). I wish I have a better reason, but that's all I have lol 😝 I'm guessing because it's less typing 🤔 If you know the reason, please drop it in the comment 😆

## Community Input

_[@nickytonline](https://dev.to/nickytonline/comment/hida):_ I like using spread as well, but if you want to e.g. convert a NodeList to an array and then map over it, consider using `Array.from`. I discovered this summer that `Array.from` has a second argument which is a map callback function that is called as each item is created.

## Resources

- [MDN Web Docs: Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Web Docs: Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Array.from vs spread syntax](https://stackoverflow.com/questions/40548213/array-from-vs-spread-syntax)
- [DWB: Convert NodeList to Array](https://davidwalsh.name/nodelist-array)
- [A Simple Guide to ES6 Iterators in JavaScript with Examples](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e)
