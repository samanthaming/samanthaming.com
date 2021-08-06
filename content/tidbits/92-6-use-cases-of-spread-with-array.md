---
title: 6 Use Case of Spread with Array in JavaScript
description: 6 ways to use the Spread operator with Array in JavaScript. Use it to merge or clone an array. Or use it to convert iterables to an array.
tags: [javascript, array, es6]
order: 92
createdAt: 2020-06-28
---

Here are 6 ways to use the Spread operator with Array in JavaScript. You can use it to merge or clone an array. Or use it to convert iterables to an array.

```javascript
// Merge Array
[...array1, ...array2]

// Clone Array
[...array]

// String → Array
[...'string']

// Set  → Array
[...new Set([1,2,3])]

// Node List → Array
[...nodeList]

// Arguments → Array
[...arguments]
```

[[toc]]

## Understanding Spread

> MDN: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Clear as mud right 😂 Spread took me a long time to understand. So let me try to explain with 2 analogies that helped me. Hopefully, it can also help you 🤞

### Spread is like Russian Dolls

The spread syntax takes your array and expands it into elements. Imagine your array is like those Russian Dolls. When you call the spread syntax on it, it will take the nested individual doll out and lay it out in its own individual pieces.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Russian-Matroshka.jpg/1280px-Russian-Matroshka.jpg" style="height:300px">

_Credit: Wikipedia_

### Spread is like an Eraser

If the Russian Dolls analogy didn't help and Spread is still muddy for you 😵 In that case, just think of the `...` syntax as an eraser that removes the brackets of the array 😂

<!-- prettier-ignore -->
```javascript
[
  ...[1, 2, 3] // 👈 The dots erases the brackets
]

/*  Becoming this: */
[
  1, 2, 3 // 👈 "Erased"
]
```

## Array Manipulation

The best thing about the Spread syntax is to use it for array manipulation 👏

### 1. Use Spread for Merging Array

Let's say we have 2 arrays.

```javascript
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];
```

Let's see what happens when we try to merge the array without the spread syntax.

```javascript
const attemptToMerge = [array1, array];

attemptToMerge;
// [ [1, 2, 3],  [4, 5, 6] ] 👈 😱
```

👆 When you try to merge an array without the spread syntax, you wind up with a nested or multi-dimensional array.

So let's use the Spread syntax to "erase" the brackets.

<!-- prettier-ignore -->
```javascript
const mergedArray = [
  ...array1,
  ...array2
];

mergedArray;
// [ 1, 2, 3, 4, 5, 6 ] 👈 ✅ Nice flattened array
```

### 2. Clone Array

Cloning array in JavaScript isn't as straight forward. So let's see it done in 2 paths - the wrong way and the right way 🛣

#### Cloning Array the Wrong Way

In JavaScript, arrays are reference types, so you can't just create a new copy of an array using `=`. Let's see what problem happens if we try to do it that way.

```javascript
const original = ['zero', 'one'];
const newArray = original;

original; // ['zero', 'one']
newArray; // ['zero', 'one']
```

👆So everything looks okay so far, but let's see what happens if we change the element.

```javascript
newArray[1] = '💩';

newArray;
// ['zero', '💩']

original;
// ['zero', '💩']  👈 😱 Our original array is affected
```

OH yikes 😱 Changing the `newArray` will mutate the original array 👎

Think of references as addresses. When we create a copy of an array using `=`, we've only copied the address. We have NOT copied the underlying array, which is what we want. To do that, we need to copy the array at a new address. That way, when we make changes to our new array, it won't affect the original array -- because they're at different addresses.

#### Cloning Array the Right Way

```javascript
const original = ['zero', 'one'];
const newArray = [...original];

original; // ['zero', 'one']
newArray; // ['zero', 'one']
```

So if we did this correctly, our `original` array shouldn't be affected if we changed the `newArray`. Alright, let's give this a try 💪

```javascript
newArray[1] = '💩';

newArray;
// ['zero', '💩']

original;
// ['zero', 'one']  ✅ original array is NOT affected
```

## Iterables to Array

With Spread, converting different data types to an Array has never been easier 👏

### 3. String to Array

When we spread a `string`, it will return an array of individual substrings.

```javascript
const string = 'hi';

const array = [...string];

array;
// [ 'h' , 'i' ]
```

### 4. Set to Array

Let's create a new `set` object:

```javascript
const set = new Set([1, 2, 3]);

set;
// Set(3) {1, 2, 3}
```

Using Spread, we can convert the `set` into an array:

```javascript
const array = [...set];

array;
// [1, 2, 3]
```

### 5. Node List to Array

Let's create a node list:

```javascript
const nodeList = document.querySelectorAll('p');

nodeList;
// [p, p, p]
```

Now we can use Spread to convert our node list into an array:

```javascript
const array = [...nodeList];

array;
```

### 6. Arguments to Array

Before we begin, let's take some time to understand what the `arguments` objects is.

> MDN: arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

👆 Notice the key there, `array-like` -- So it looks like an array, but it isn't (oh JS, always making things so fun for us to understand you 😅). The benefit of converting the arguments object to an array means we have access to all the awesome array methods (ie. `map`, `filter`, `find`) 👍

```javascript
function names() {
  arguments;
  // Arguments(4)['samantha', 'sam']

  arguments.map((name) => `hi ${name}`);
  // ❌ TypeError: arguments.map is not a function
}

names('samantha', 'sam');
```

Alright, let's convert our arguments into an array so we can apply array methods on it 🙌

```javascript
function names() {
  const argumentsArray = [...arguments];

  argumentsArray.map((name) => `hi ${name}`);
  // ✅ ['hi samantha', 'hi sam']
}

names('samantha', 'sam');
```

## Community Input

- _[@harmleprinze](https://twitter.com/harmlezprinze/status/1277289462482042883?s=21):_ Split will give more options, considering it takes in separator and limit

- _[@mohammed_mamoun_98](https://www.instagram.com/p/CB8vhung7Ox/):_ If you merged two arrays without spread it's gonna be two-dimensional array but flat make it one dimension so it's more effective I guess. You can try it

- _[@bukazoltan](https://dev.to/bukazoltan/comment/119bk):_ The `min()` and `max()` method cannot take an array as an input, so spreading it can solve that problem too.

```javascript
array = [1, 2, 3, 4, 5];
var minimum = Math.min(...array);
var maximum = Math.max(...array);
```

## Resources

- [Code Tidbit: Split String Using ES6 Spread](https://www.samanthaming.com/tidbits/12-split-string-using-spread/)
- [MDN Web Docs: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Web Docs: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN Web Docs: The arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
