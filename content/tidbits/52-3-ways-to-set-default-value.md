---
title: 3 Ways to Set Default Value in JavaScript
description: Let's break down the 3 different ways to set Default Values using  logical operator, ternary, and if/else.
tags: [javascript, es6]
order: 52
createdAt: 2019-3-16
---

My go-to has always been the ternary operator for assigning a value to a variable conditionally. But ever since I discovered that “||” can be used as a selector operator, I’ve been using that more. I find my code so much easier to read 👍

Yes, it takes some time to wrap your head around it. But once you grasp the concept, it’s super handy. Now I don’t think less code makes your code better. But in this instance, I prefer the `||` operator 🤩

```javascript
let isHappyHour = '🍺';

// Logical Operator
isHappyHour = isHappyHour || '🍵'; // '🍺'

// Ternary
isHappyHour = isHappyHour ? isHappyHour : '🍵'; // '🍺'

// If/Else
if (isHappyHour) {
  isHappyHour = isHappyHour;
} else {
  isHappyHour = '🍵';
}

console.log(isHappyHour); // '🍺'
```

<markdown-toc></markdown-toc>

## Understanding the `||` Operator

I'm sure most of you thought the `||` is only used for boolean checks like this:

```javascript
if (a || b) {
  // do something
}
```

BUT! You can also use it to evaluate the selected expression and produce a value. And that's why it's helpful to think of the logical operator as also a **selector operator**. When it's used with non-boolean values, the `||` operator will return a non-boolean value of one of the specified expression or operands.

Head explosion yet?! No worries, let me explain it the way Kyle Simpson explains it. He is the author of "[You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch4.md#operators--and-)" - a free JavaScript e-book.

> The value produced by a && or || operator is not necessarily of type Boolean. The value produced will always be the value of one of the two operand expressions.

Alright, let's look at an example.

```javascript
const truthy = true;
const falsy = false;
const poop = '💩';

truthy || poop; // true
falsy || poop; // '💩';
```

As long as the 1st expression (left side) is truthy, it will always be the one selected. However, if the 1st expression (left side) is ever falsy, then the 2nd expression (right side) will be by default output. And that's why this `||` is known as the operator to set default values.

### Using Default Value as Function Parameter

Quite often you would see `||` being used like this:

```javascript
function(name) {
  name = name || 'no name';
}
```

Note: this is not the recommended way anymore. It's way better to ES6's default parameters. Because quite often, you might not want the default to kick in for ALL falsy values -- I'll explain falsy values in the next section. Most likely, we only want the default value to be set if no value or `undefined` is passed as the argument.

**The better solution with ES6 Default Parameters**

```javascript
function(name = 'no name') {
}
```

### Falsy Values

In the `||` operator, the 2nd expression (right side) is only evaluated IF the 1st expression (left side). So let's check what constitutes a falsy value.

```javascript
// JS Essentials: Falsy Values

false
undefined
null
NaN
0
"" or '' or `` (empty string)
```

_(I wrote another blog post on Falsy Values, which you can read it [here](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values))_

## Compared to the `&&` operator

In my previous post, I wrote about the `&&` operator. (Read it [here](https://medium.com/@samanthaming/prevent-object-retrieval-typeerror-with-74ea0a58437f)). The `&&` is also known as the **Guard Operator**. So here's a quick summary of the difference:

- `||`: 1st expression is always outputted. The 2nd expression only gets outputted if the 1st expression is falsy.

- `&&`: 1st expression is outputted if it's FALSY. The 2nd expression only get outputted if the 1st expression is truthy.

## What is the Elvis Operator

This is an interesting one. In JavaScript we have `||` to set default values. In other languages such as **C++**, this behavior is similar to the **Elvis Operator** which is denoted as `?:`.

```javascript
// JavaScript
someVariable || 'default value'

// Elvis Operator (not JavaScript)
someVariable ?: 'default value'
```

As to why it's called the Elvis Operator:

![Credit to GlobalNerdy.com](https://thepracticaldev.s3.amazonaws.com/i/7itmzmaoim6awjmqop4k.jpg)

_Image Credit to GlobalNerdy.com_

## When to use which?

Now that you understand **Falsy Values**, let's figure out which way of the 3 ways is better to use.

**🏆Logical Operator `||`**

This is great if you want to capture all falsy values. It's less code and it's way easier to read. Assuming that everyone understands all 3 behaviors, of course.

_NOTE: I'm not saying less code is always better, one can easily try to be too clever and shorten the code which renders it unreadable. We write code for others, it's a form of communication. It's always better to go with the option that conveys understanding over being clever._

```javascript
let a;

// ✅ Short and simple
a = a || b;

// ☹️ Meh, could be better
a = a ? a : b;

// 😱 Ouch
if (a) {
  a = a;
} else {
  a = b;
}
```

**🏆Ternary Operator**

Let's say we don't want to capture ALL falsy values. And we only want the default value to kick in when it's `undefined`

```javascript
// ❌ Logical doesn't work
a = a === undefined || b;
// (a === undefined) > will output a boolean 'true' not the actual value

// ✅ Ternary works
a = a === undefined ? a : b;

// ☹️ Of course if/else will also work...but Ouch
if (a === undefined) {
  a = a;
} else {
  a = b;
}
```

**🏆If/Else**

This is the option with the MOST control. And it's something I would absolutely go for if say, I need to perform an additional action.

```javascript
// ✅ If/Else is much better
if (a) {
  a = a;
  // do something else
} else {
  a = b;
}
```

## Resources

- [MDN Web Docs - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [YDKJS: Types & Grammer](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch4.md)
- [Wikipedia - Elvis Operator](https://en.wikipedia.org/wiki/Elvis_operator)
- [Stack Overflow - Comparison of Ternary operator, Elvis operator, safe Navigation Operator and logical OR operators](https://stackoverflow.com/questions/44046927/comparison-of-ternary-operator-elvis-operator-safe-navigation-operator-and-log)
- [Stack Overflow - Logical or vs. Ternary operator](https://stackoverflow.com/questions/42026158/precedence-logical-or-vs-ternary-operator)
- [Default Operator in JavaSctipt and Real Life Examples](https://zzz.buzz/2016/01/10/default-operator-in-javascript-and-real-life-examples/)
- [SamanthaMing.com - Guard Operator](https://www.samanthaming.com/tidbits/51-prevent-object-retrieval-type-error-with-guard-operator)
