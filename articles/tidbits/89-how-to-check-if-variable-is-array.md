# How to check if Variable is an Array in JavaScript

Here's a Code Recipe to check whether a variable or value is either an array or not. You can use the Array.isArray() method. For older browser, you can use the polyfill 👍

```javascript
const variable = ['🍝', '🍜', '🍲'];

// ✅ NEWER BROWSER
Array.isArray(variable);

// 🕰 OLDER BROWSER
Object.prototype.toString.call(variable) === '[object Array]';
```

[[toc]]

## Modern way to check Array

The best way to check Array is by using the built-in `Array.isArray()` 👏

```javascript
Array.isArray([]); // true
Array.isArray(['🍝']); // true
Array.isArray(new Array('🍝')); // true
```

### Browser Support

The support for `Array.isArray()` is actually pretty good 👍

| Browser             |     |
| ------------------- | --- |
| Chrome              | ✅  |
| Firefox             | ✅  |
| Safari              | ✅  |
| Edge                | ✅  |
| Internet Explorer 9 | ✅  |

- [Browser Support: placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility)

## Polyfill for Older Browsers

If you need older browser support, then you can use this [MDN polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill).

```javascript
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## Other Ways using Lodash or Underscore

If you're using an external library, they also have some built-in methods too 👏

**Lodash**

> Checks if value is classified as an Array object.

```javascript
const array = ['🍝', '🍜', '🍲'];
const notArray = 'not array';

_.isArray(array); // true
_.isArray(notArray); // false
```

**Underscore**

> Returns true if object is an Array.

```javascript
const array = ['🍝', '🍜', '🍲'];
const notArray = 'not array';

_.isArray(array); // true
_.isArray(notArray); // false
```

Yes, the syntax is the same as Lodash 🤓

## Why can't we use `typeof`?

Often, we want to check the type of a value, we simply use `typeof`

```javascript
typeof 'string'; // 'string'
typeof 100; // 'number'
typeof true; // 'boolean'
typeof false; // 'boolean'
typeof function() {}; // 'function'
typeof {}; // 'object'

typeof []; // 'object' <-- 😱
```

The problem is that Array is actually under the umbrella of **Objects** data type. So `typeof` is indeed returning truthfully. Unfortunately, that isn't really helpful for us who just want to check if the value is an array or not 🙊

### `typeof` Table

| Type          | Example                         | Return      |
| ------------- | ------------------------------- | ----------- |
| String        | `typeof "hello"`                | "string"    |
| Boolean       | `typeof true`<br>`typeof false` | "boolean"   |
| Number        | `typeof 100`                    | "number"    |
| Undefined     |                                 | "undefined" |
| Function      | `typeof function() {}`          | "function"  |
| Null          | `typeof null`                   | "object"    |
| Non-Primitive | `typeof {}`<br>`typeof []`      | "object"    |

### Primitives

> _[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)_: Primitive is data type that is not an object and has no methods. All primitives are immutable (ie. they can't be altered). They are stored by value

In JavaScript, there are 6 data types that are primitives.

1. string
1. number
1. bigint
1. boolean
1. undefined
1. symbol

### Non-Primitives (Objects)

> _[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Object)_: Object refers to a data structure containing data and instructions for working with the data. They are stored by reference

Although I call it "non-primitivies", these are called **Objects**. (I personally prefer it as the former, because my brain when speaking of objects, typically rings up `{}` 😳)

1. object
1. array
1. function

Although when we use `typeof` on **function**, it returns `"function"`, it is actually an **object**.

> MDN: It is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.

So why didn't the shorthand extends to **array**, I don't know 🤷‍♀️ But at least they're trying to redeem themselves with the built-in method `Array.isArray()` 😅

## Code Buster 👩‍🔬

I've received a lot of different solutions that people have suggested we can use to check Array. At first glance, they seem like great solutions. But unfortunately, there are some problems or edge cases that make them not ideal. So let's do some code busting 💉

### Problem with `Array.length`

```javascript
const array = ['🍝', '🍜', '🍲'];

array.length; // 3
```

😷 So if an array has a length, we can assume that it's an array?

👩‍⚕️ Unfortunately, the problem with this solution is that there are other data types that have lengths ie. strings. So this can lead to false positive.

```javascript
const string = 'not array';

string.length; // 9
```

Even an object can have `length` property if we set it 😱

```javascript
const object = { length: 2 };
const array = ['🍝', '🍜', '🍲'];

typeof array === 'object' && Boolean(array.length); // true
typeof object === 'object' && Boolean(object.length); // true <-- 😱
```

⚠ Of course, there are a lot more problems with this -- this wouldn't work on checking an empty array because `0` is considered false. Anyways, TLDR; just use `Array.isArray()` 👍 Doctor's order 👩‍⚕️

### Problem with `instanceof`

```javascript
const array = ['🍝', '🍜', '🍲'];

array instanceof Array; // true
```

👩‍⚕️This is a common solution that I see people reference too. Honestly, it's a good one. In many cases, this will work as expected. BUT, there is a gotcha on this! It doesn't work with multiple contexts (e.g. frames or windows). Because each frame has different scopes with its own execution environment. Thus, it has a different global object and different constructors. So if you try to test an array against that frame's context, it will NOT return `true`, it will return incorrectly as `false`.

```javascript
const frameNode = document.createElement('iframe'); // Create an iframe Element Node
document.body.appendChild(frameNode); // Append our frame element
const frameBrowser = window.frames[window.frames.length - 1]; // Access the frame from our current window
frameArray = frameBrowser.Array; // Access the "Array" object of the frame we created

// Create a new Array in our frame environment
const newFrameArray = new frameArray('🍝', '🍜', '🍲');

newFrameArray instanceof Array; // ❌ false

Array.isArray(newFrameArray); // ✅ true
```

### Problem with `constructor`

```javascript
const array = ['🍝', '🍜', '🍲'];

array.constructor.name === 'Array'; // true
```

👩‍⚕️ This is another really good solution. Unfortunately, this suffers the same issue as `instanceof`. It also doesn't work with multiple contexts.

```javascript
// ...

newFrameArray.constructor.name === 'Array'; // ✅ true
```

Array.isArray(newFrameArray); // ✅ true
```

## Community Input

<!-- prettier-ignore -->
- _[@fabiokounang](https://www.instagram.com/p/B_-pfVTALEf/):_ One of the example may be if you are making a dynamic table, so if it is an array you want to loop the array and output it in the table, but if it is just an object, you can loop by its keys using Object.keys first and then loop all the key and value.

- This is great to use with conditional. If it's an array, you want to perform some action and if it isn't you want to do something else.

## References

- [MDN Web Docs: Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [w3schools: Array.isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp)
- [MDN Web Docs: instanceof and multiple context](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_(e.g._frames_or_windows)>)
- [MDN Web Docs: instanceof vs isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#instanceof_vs_isArray)
- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [2ality: Array.isArray](http://2ality.com/2013/01/categorizing-values.html)
- [StackOverflow: How do you check if a variable is an array in JavaScript?](https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript)
- [StackOverflow: How to check if an object is an array?](https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array)
- [JavaScript: Reviewing Primitive and Non-Primitive Data Types](https://medium.com/javascript-in-plain-english/javascript-reviewing-primitive-and-non-primitive-data-types-5bc4ca68c3de)
- [MIT: Determining with absolute accuracy whether or not a JavaScript object is an array](http://web.mit.edu/jwalden/www/isArray.html)
