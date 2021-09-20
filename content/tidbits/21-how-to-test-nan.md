---
title: How to Check if NaN is equal to NaN in JavaScript
description: JS has a quirk where NaN is a value that NEVER equals to itself. So how do we test for it? Using ES6's Object.is.
tags: [javascript]
order: 21
createdAt: 2018-06-23
updatedAt: 2020-07-17
---

JS has a quirk where NaN is the only value that is NEVER equal to itself 🤨. So how do we test for it? Finally, ES6 introduced a new method that solves this issue with `Object.is` 🎉

```javascript
const item = NaN;

// Huh?? this doesn't work
item === NaN; // false

// Yay, this works!
Object.is(item, NaN); // true
```

<markdown-toc></markdown-toc>

## When would you want to check for NaN?

### Ex 1: When trying to do a mathematical calculation

A common example is to check if a value is divisible. In this example, you can't compare it to `NaN` since that comparison would always fail.

```javascript
const isDivisible = 5 / "Some String";
isDivisible // returns NaN

isDivisible === NaN // returns false

if (isDivisible === NaN) // ❌ so this statement would never work since this will always return false because NaN is never equal to NaN.
```

### Ex 2: When trying to extract a number from a string

Again, if you try to test `NaN` in your `if` statement, it won't work because the condition will always return false.

```javascript
const hasNumber = parseInt("Hello");
hasNumber // returns NaN

hasNumber === NaN // returns false

if(hasNumber === NaN) // ❌ again, you won’t be able to use this logic because this will always return false.
```

## How about `isNaN` you ask?

`isNaN` is actually not the best way to check `NaN`.

Kyle Simpson from "You Don't know JS" provided a really [good explanation](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#the-not-number-number).

Here is an excerpt from his book:

> The isNaN(..) utility has a fatal flaw. It appears it tried to take the meaning of NaN ("Not a Number") too literally -- that its job is basically: "test if the thing passed in is either not a number or is a number." But that's not quite accurate.

```javascript
var a = 2 / 'foo';
var b = 'foo';

a; // NaN
b; // "foo"

window.isNaN(a); // true
window.isNaN(b); // true -- ouch!
```

> Clearly, "foo" is literally not a number, but it's definitely not the NaN value either! This bug has been in JS since the very beginning (over 19 years of ouch).

## Community Inputs

### Number.isNaN

Alternatively you can also use `Number.isNaN` to check.

```javascript
const item = NaN;

Object.is(item, NaN); // true

Number.isNaN(item); // true
```

_Thanks: [@mustafauzun0](https://instagram.com/_eyalPerry)_

### Use Number.isNaN to check NaN instead of `Object.is`

_@\_eyalPerry_: I think that `Number.isNaN` is better suited for this use, as it does not incur the overhead of checking the parameters against various types and their edge cases.

_@\_eyalPerry_: `Object.is` also works for comparing object and function instances, comparing strings by value, boolean values and more (all of this is on MDN). This means that under the hood, it has to do some type checking in order to properly work. This makes it a sort of a multitool. Sometimes- multitools are good. But if you are only looking to check whether a value is Nan or not- there's no point in paying the price for Object.is. Also, personally- I like using the most accurate and exact way in any scenario. In this case- `Number.isNaN` is exactly that. Note: beware of the global `isNaN` function, do not use it

_Thanks: [@\_eyalPerry](https://twitter.com/_eyalPerry)_

### More information on `NaN`

_@RanqueBenoit_ pointed out some funky traits of `NaN`

```javascript
const notNumber = 3 * 'str';

notNumber; // NaN

typeof notNumber; // number 🤨
isNaN(notNumber); // true 🤨
```

_Thanks: [@RanqueBenoit](https://twitter.com/RanqueBenoit/status/1010604948197912578)_

### The "Why" `NaN` is not equal to `NaN`

For those curious about the "why" of this. Here's a medium post explaining why `NaN` is not equal to `NaN`.

[NaN is not equal to NaN!](https://medium.com/engineering-housing/nan-is-not-equal-to-nan-771321379694)

> Short Story: According to IEEE 754 specifications any operation performed on NaN values should yield a false value or should raise an error.

Thanks _[CJ J](https://www.linkedin.com/in/~cj-johnson)_ for sharing this. TLDR; is "Because the IEEE standard says so".

## Resources

- [You Don't Know JS - Special Equality](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#special-equality)
- [MDN Web Docs - Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [The Problem with Testing for NaN in JavaScript](http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html)
