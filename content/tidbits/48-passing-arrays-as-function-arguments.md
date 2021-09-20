---
title: Passing Arrays as Function Arguments
description: If you want to pass an array into a variadic function. You can use ES6 spread to turn that array into a list of arguments.
tags: [javascript, array]
order: 48
createdAt: 2019-02-16
updatedAt: 2020-07-17
---

If you want to pass an array into a variadic function. You can use ES6 spread to turn that array into a list of arguments. Yay, so much cleaner and no useless null from the old apply way 👏

```javascript
function sandwich(a, b, c) {
  console.log(a); // '🍞'
  console.log(b); // '🥬'
  console.log(c); // '🥓'
}

const food = ['🍞', '🥬', '🥓'];

// Old way
sandwich.apply(null, food);

// ✅ ES6 way
sandwich(...food);
```

<markdown-toc></markdown-toc>

## Using it with `Math` functions

The ability to turn an array into a list of arguments is super handy with the `Math` functions.

### Example: Find the Largest Number

Let's say you want to find the largest number using the `Math.max()` function.

```javascript
const largest = Math.max(5, 7, 3, 4);

console.log(largest); // 7
```

But rarely, would you pass in individual values. More likely, you would want to find the maximum element in an array. So the question now is, how do you pass an array of values into a function that accepts individual arguments and NOT an array?

This would be terrible:

```javascript
const numbers = [5, 7, 3];

// 🤮 Yuck!
Math.max(numbers[0], numbers[1], numbers[2]);

// ❌ And this won't work
Math.max(numbers); // NaN
```

Lucky for us, we can use ES6's Spread operator!

```javascript
const numbers = [5, 7, 3];

// 😍 Much Better!
Math.max(...numbers); // 7
```

What `spread` is doing here is taking the array element and expanding or unpacking it into a list of arguments for our variadic function.

```javascript
const numbers = [5, 7, 3];

console.log(...numbers); // 5 7 3
```

### Explaining `spread` in non-dev terms

If you find this spread-ing thing still confusing. Maybe let me try to explain it with [Russian nesting dolls](https://en.wikipedia.org/wiki/Matryoshka_doll). So I like to think of the array as Russian nesting dolls. And what spread does is:

1. It unpacks (spread) the nested dolls into individual dolls.
2. And now you have all these individual dolls (arguments) to place nicely in your display case (function).

Not sure if this explanation helps? Leave a comment if it does, and I'll start explaining programming concepts in fun ways like this 😆

## Passing Multiple Arrays as Function Arguments

Another superpower spread has is combining arrays.

```javascript
const one = [1, 2, 3];
const two = [4, 5, 6];

const merged = [...one, ...two];
// [ 1, 2, 3, 4, 5, 6 ]
```

So we can use this superpower to pass multiple arrays as function arguments 💪

```javascript
const one = [1, 2, 3];
const two = [4, 5, 6];

Math.max(...one, ...two); // 6
```

For those keeners, wondering if you can pass in 3 arrays. Well, you betcha! It's like the energizer bunny, it keeps going and going and going .... (This post is not sponsored by Energizer lol. But that can change, hit me up Energizer. Me want some sponsor money 😂)

```javascript
const one = [1, 2, 3];
const two = [4, 5, 6];
const three = [2, 100, 2];

Math.max(...one, ...two, ...three); // 100
```

## What is a variadic function?

So you may notice I use the term _variadic_ functions. The computer science folks will have probably heard this term. But for the rest of the cool bees like myself 😝, it may not be so familiar. A variadic function is a function that accepts an infinite or variable number of arguments. And the `Math.max()` function is one of those variadic function.

## Resources

- [MDN Web Docs - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [DWB - 6 Great Uses of the Spread Operator](https://davidwalsh.name/spread-operator)
- [Spreading arrays into arguments in JavaScript](http://2ality.com/2011/08/spreading.html)
- [JavaScript.info - Spread](https://javascript.info/rest-parameters-spread-operator)
- [Stack Overflow - Passing an array as a function parameter in JavaScript](https://stackoverflow.com/questions/2856059/passing-an-array-as-a-function-parameter-in-javascript)
- [Smashing Magazine - How To Use ES6 Arguments And Parameters](https://www.smashingmagazine.com/2016/07/how-to-use-arguments-and-parameters-in-ecmascript-6/)
