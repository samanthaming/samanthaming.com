---
title: How to Deep Clone an Array
description: Here are 2 ways to deep clone an array. For a quick & dirty way use the JSON methods. For a more robust way, go with Lodash.
tags: [javascript, array]
order: 50
createdAt: 2019-03-02
updatedAt: 2019-03-02
---

There are 2 types of array cloning: shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone. For deep clones, go with the JSON way OR better yet use Lodash 👍

```javascript
const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
JSON.parse(JSON.stringify(numbers));

// Using Lodash
_.cloneDeep(numbers);
```

<markdown-toc></markdown-toc>

## Arrays are Reference Types

In order to understand why there are two types of cloning. Let's dig into the fundamentals and explains what are reference types.

Unlike your primitive types (ie. number or string), arrays are reference types. Which means when you assign an array to a variable, you're assigning a memory address and not the actual array itself. WTH 😱. I know this is a bit confusing. So let's explain with an example.

### Copying a Value type

So no biggie here. We're creating a copy of `value`. And if we change the `valueCopy`, it doesn't affect the original `value`. Makes sense - when we change the copy it shouldn't affect the original at all. All good here 👍

```javascript
let value = 3;
let valueCopy = value; // create copy

console.log(valueCopy); // 3

// Change valueCopy
valueCopy = 100;
console.log(valueCopy); // 100

// ✅ Original NOT affected
console.log(value); // 3
```

### Copying a Reference type

Okay, things are about to get weird now. Let's copy our array using the same method as we did to copy a value type.

```javascript
let array = [1, 2, 3];
let arrayCopy = array; // create copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ❌Original got affected
console.log(array); // [ '👻', 2, 3 ]
```

Why did the original array also got affected? That's because what you copied over is not the array itself but the pointer to the memory space the array occupies. Reference types don't hold values, they are a pointer to the value in memory.

**Solution to Copying Reference Types**

So the solution is to copy over the value NOT the pointer. Like this:

```javascript
let array = [1, 2, 3];
let arrayCopy = [...array]; // create TRUE copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ✅ Original NOT affected
console.log(array); // [ 1, 2, 3 ]
```

### Shallow vs Deep Clone

When I used spread `...` to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work. Let's take a look:

```javascript
let nestedArray = [1, [2], 3];
let arrayCopy = [...nestedArray];

// Make some changes
arrayCopy[0] = '👻'; // change shallow element
arrayCopy[1][0] = '💩'; // change nested element
console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]

// ❌ Nested array got affected
console.log(nestedArray); // [ 1, [ '💩' ], 3 ]
```

As you can see, the shallow or first layer is fine. However, once we change the nested element, the original array also got affected. So the solution is to do a deep clone:

```javascript
let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

// Make some changes
arrayCopy[0] = '👻'; // change shallow element
arrayCopy[1][0] = '💩'; // change nested element
console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]

// ✅ Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]
```

## Community Input

### Values Not Compatible with JSON

_[Anton Istomin](https://dev.to/tailcall/comment/96nc):_ One has to be really careful with JSON solution! It doesn't work with values not compatible with JSON. Consider using a library function if you have to work with such data.

```javascript
function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

// undefineds are converted to nulls
nestedCopy([1, undefined, 2]); // -> [1, null, 2]

// DOM nodes are converted to empty objects
nestedCopy([document.body, document.querySelector('p')]); // -> [{}, {}]

// JS dates are converted to strings
nestedCopy([new Date()]); // -> ["2019-03-04T10:09:00.419Z"]
```

### deepClone vs JSON

_[Alfredo Salzillo](https://dev.to/alfredosalzillo/comment/96ne):_ I'd like you to note that there are some differences between deepClone and JSON.stringify/parse.

- **JSON.stringify/parse** only work with Number and String and Object literal without function or Symbol properties.
- **deepClone** work with all types, function and Symbol are copied by reference.

Here's an example:

```javascript
const lodashClonedeep = require('lodash.clonedeep');

const arrOfFunction = [
  () => 2,
  {
    test: () => 3,
  },
  Symbol('4'),
];

// deepClone copy by refence function and Symbol
console.log(lodashClonedeep(arrOfFunction));
// JSON replace function with null and function in object with undefined
console.log(JSON.parse(JSON.stringify(arrOfFunction)));

// function and symbol are copied by reference in deepClone
console.log(
  lodashClonedeep(arrOfFunction)[0] === lodashClonedeep(arrOfFunction)[0],
);
console.log(
  lodashClonedeep(arrOfFunction)[2] === lodashClonedeep(arrOfFunction)[2],
);
```

### Using Recursion

_[Tareq Al-Zubaidi](https://medium.com/@zubaidi/there-is-other-simple-and-more-performant-solution-for-this-problem-8c8bda77d042):_ There is another simple and more performant solution to this problem. I would use recursion to solve this.

```javascript
const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));
```

See comparison test [here](http://jsben.ch/q2ez1)

## Resources

- [MDN Web Docs - JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN Web Docs - JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Lodash: cloneDeep](https://lodash.com/docs/4.17.11#cloneDeep)
- [Stack Overflow: How do you clone an Array of Objects in JavaScript?](https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript)
- [How to differentiate between deep and shallow copies in JavaScript](https://medium.freecodecamp.org/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd)
- [JS: Clone, Deep Copy Object/Array](http://xahlee.info/js/js_clone_object.html)
- [JavaScript Deep copy for array and object](https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a)
- [Gist: Primitive Types & Reference Types in JavaScript](https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c)
- [Explaining Value vs. Reference in JavaScript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- [Understanding Deep and Shallow Copy in JavaScript](https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c)
