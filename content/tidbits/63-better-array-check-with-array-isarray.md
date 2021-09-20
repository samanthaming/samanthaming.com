---
title: Better Array check with Array.isArray
description: Because arrays are not true array in JavaScript, there is no simple typeof check. No problem! Use the method Array.isArray to check.
tags: [javascript, array]
order: 63
createdAt: 2019-06-03
updatedAt: 2020-07-17
---

In JavaScript, arrays are not true arrays. They are actually objects. So you can't simply do a `typeof` check. Because it will return `object` 😱

But not a problem! Use `Array.isArray()` -- finally, there is an easier way to check if a value is an actual array 🎉

```javascript
const books = ['📕', '📙', '📗'];

// Old way
Object.prototype.toString.call(books) === '[object Array]';

// ✅ Better
Array.isArray(books);
```

## Array is not a true array

Let's see what I mean by this, `array` is not a true array.

```javascript
const array = [];

typeof array; // 'object'
```

☝️That's why you can't use your typical `typeof`. Because array is an `object` type 😕

## Array.isArray Demo

Alright, let's try this method on other values and see what we get 👩‍🔬

### These are all arrays, and will return `true`

```javascript
// Empty Array
Array.isArray([]); // true

// Array
Array.isArray(['📓']); // true

// Array Constructor
Array.isArray(new Array('📓')); // true
```

### These are NOT arrays and will return `false`

```javascript
// Object
Array.isArray({}); // false

// Object
Array.isArray({ book: '📓' }); // false

// Number
Array.isArray(123); // false

// Boolean
Array.isArray(true); // false

// Boolean
Array.isArray(false); // false

// String
Array.isArray('hello'); // false

// Null
Array.isArray(null); // false

// Undefined
Array.isArray(undefined); // false

// NaN
Array.isArray(NaN); // false
```

## instanceof vs Array.isArray

Another popular choice you might is using `instanceof`

```javascript
const books = ['📕', '📙', '📗'];

books instanceof Array; // true
```

### But...

The problem is it doesn't work with multiple context (e.g. frames or windows). Because each frame has different scopes with its own execution environment. Thus, it has a different global object and different constructors. So if you try to test an array against that frame's context, it will NOT return `true`, it will return incorrectly as `false`.

🤯 What are you talking about??? 👈 If this is floating in your mind. Don't worry, I was too. To understand this, you need to understand JavaScript's execution context. Here's a great video explaining it, [An Introduction to Functions, Execution Context and the Call Stack](https://youtu.be/exrc_rLj5iw). This is a bit more of an advanced topic, so if you're just a beginner, feel free to skip through it. And when you get a bit more comfortable with JavaScript, then definitely return to this topic. In the meantime, let me try to explain this "multiple context" in non-dev terms.

### Explanation in **non-dev** terms

You can think of frames like different planets. Every planet has its own system, with different gravity pull and composition. So `instanceof` only works on our planet, Earth. If you bring it to Mars, it won't work. However, with `Array.isArray()` it will work on any planet. It's universal. That's why you should use `Array.isArray()`.

```javascript
// Creating our new "planet" called mars
const mars = document.createElement('iframe');
document.body.appendChild(mars);
xArray = window.frames[window.frames.length - 1].Array;

// Let's make an array in our new "planet", mars
var marsArray = new xArray('👩', '👨');

// Using the instanceof tool to test the marsArray
marsArray instanceof Array;
//  false --> ❌ doesn't work

// Now, let's try using our universal tool
Array.isArray(marsArray);
// true --> ✅ great, it works!
```

## Community Input

- _[@\_botol](https://www.instagram.com/_botol/):_ [JSFiddle Code Sample](https://jsfiddle.net/botol/ryu324gw)

- _[@caleshapera](https://medium.com/@caleshapera/useful-131bc462ae9f):_ I like to use isArray along with array.length to error check whether I should process a variable.

```javascript
if (!Array.isArray(array) || !array.length) {
  // array does not exist, is not an array, or is empty
  // ⇒ do not attempt to process array
} else {
  // ⇒ process array
}
```

- Russel P: It's worth noting that `Array.isArray(books)` is the ES5 equivalent to `books && typeof books === 'object' && books.constructor === Array`

## Resources

- [MDN Web Docs: Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [w3schools: Array.isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp)
- [MDN Web Docs: instanceof and multiple context](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_(e.g._frames_or_windows)>)
- [MDN Web Docs: instanceof vs isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#instanceof_vs_isArray)
- [2ality: instanceof](http://2ality.com/2013/01/categorizing-values.html)
- [StackOverflow: How do you check if a variable is an array in JavaScript?](https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript)
- [StackOverflow: How to check if an object is an array?](https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array)
- [StackOverflow: Difference between using Array.isArray and instanceof Array](https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array)
- [StackOverflow: Is instanceof Array better than isArray in JavaScript?](https://stackoverflow.com/questions/28779255/is-instanceof-array-better-than-isarray-in-javascript)
- [GitHub Issue Discussion: instanceof with multiple windows/iframes](https://github.com/mrdoob/three.js/issues/5886)
- [instanceof considered harmful](http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/)
- [How to better check data types in JavaScript](https://webbjocke.com/javascript-check-data-types/)
