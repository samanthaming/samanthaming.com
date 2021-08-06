---
title: 'Math.sign: How to Check if Number is Negative or Positive in JavaScript'
description: Determining the sign of a number is super easy now with ES6's Math.sign! It will indicate whether the number is positive, negative or zero.
tags: [javascript, number]
order: 29
createdAt: 2018-8-18
---

Determining the sign of a number is super easy now with ES6's Math.sign 👏 It will indicate whether the number is positive, negative or zero.

```javascript
const positive = 5;
const negative = -5;
const zero = 0;

Math.sign(positive); // 1
Math.sign(negative); // -1
Math.sign(zero); // 0
```

<markdown-toc></markdown-toc>

## Math.sign Return Value

`Math.sign()` has 5 possible return values:

<!-- prettier-ignore -->
```javascript
1 // positive number
-1 // negative number
0 // positive zero
-0 // negative zero
NaN // not a number
```

```javascript
Math.sign(8); // 1
Math.sign(-8); // -1

Math.sign(0); // 0
Math.sign(-0); // -0

Math.sign(NaN); // NaN
Math.sign('hello'); // NaN
Math.sign(); //NaN
```

Note, the argument passed to this function will be converted to `number` type implicitly.

## Math.sign Gotcha

A common gotcha is thinking that `Math.sign` return the converted argument value. `Math.sign` returns only the sign of a number. It doesn't return the value.

```javascript
Math.sign(-8);

// ✅ return -1
// ❌ It doesn't return -8
```

## Math.sign vs Comparative Operator

Got a real good question from the community:

> Why use `Math.sign` when I can use the comparative operator?

```javascript
if (number > 0) {
  // Positive
} else {
  // Negative
}
```

versus

```javascript
if (Math.sign(number) > 0) {
  // Positive
} else {
  // Negative
}
```

Indeed, if you're just checking the boolean status, then I'd just use the comparative operator instead of using `Math.sign`. But where `Math.sign` shines is it returns a number value. This means you can do calculations.

```javascript
const number = 5;

number > 0; // true
Math.sign(number); // 1
```

### Solving an Algorithm Challenge with `Math.sign`

So it allows me to solve this algorithm challenge: "Reverse an Integer"

```javascript
Input: 123;
Output: 321;

Input: -123;
Output: -321;
```

```javascript
function reverseInteger(num) {
  const numArray = Math.abs(num) // Get the absolute value of our number > 321
    .toString() // Convert our number to a string > '321'
    .split('') // Convert our string of numbers to an array > [3, 2, 1]
    .reverse() // Reverse our array of numbers > [1, 2, 3]
    .join(''); // Convert our array back to a string > 123

  const sign = Math.sign(num); // -1
  return numArray * sign;
  // Multiply our reverse string with the sign will produce the correct reverse number
}

reverseInteger(-321); // -123
```

This algorithm question is from Leetcode's "Reverse an Integer". I edited the requirement of the question to simplify our demonstration. To see the actual solution, here's one from _[@loia5tqd001](https://leetcode.com/problems/reverse-integer/discuss/373709/Clean-And-Simple-Javascript-Solution)_ .

This is actually when I first discovered this function. That's why I love looking at other people's solutions. It's always interesting to see how other people solve something. Even if the solution is bad, I read those too, cause it teaches me what to avoid 😉. No knowledge is wasted 💪. It's all expanding my toolkit. Just like those learning machines, the more data you feed, the better it gets. I think my brain is like that too. I need to see a lot of solutions in order for me to get better 😄

That's why in a lot of my tidbits, I cover the different ways of solving something. Because there is never a BEST function. The best way is always dependant on the situation. The larger your toolkit, the higher chance you will find the best way 👍

## Negative Zero

So you may notice that `Math.sign` returns a negative zero:

```javascript
Math.sign(0); // 0
Math.sign(-0); // -0
```

And your next question is, what the heck is this negative zero 🤨. Kyle Simpson of "You Don't Know JS" explains it the best:

> Now, why do we need a negative zero, besides academic trivia?

> There are certain applications where developers use the magnitude of a value to represent one piece of information (like speed of movement per animation frame) and the sign of that number to represent another piece of information (like the direction of that movement).

> In those applications, as one example, if a variable arrives at zero and it loses its sign, then you would lose the information of what direction it was moving in before it arrived at zero. Preserving the sign of the zero prevents potentially unwanted information loss.

_[YDKJS - Type & Grammer - Zeros](https://github.com/getify/You-Dont-Know-JS)_

## Math.sign Browser Support

Support is great for all modern browsers. Unfortunately, Internet Explorers is too hip to play with the rest of the class. So no support there.

| Browser           |     |
| ----------------- | --- |
| Chrome            | ✅  |
| Firefox           | ✅  |
| Safari            | ✅  |
| Edge              | ✅  |
| Internet Explorer | ❌  |

[MDN Browser Compatibility Chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Browser_compatibility)

### Code Tidbit for IE

But no worries, here is an alternative code snippet for you. This will work on Internet Explorer and older browsers 👍

```javascript
const positive = 5;
const negative = -5;
const zero = 0;

positive === 0 ? positive : positive > 0 ? 1 : -1; // 1
negative === 0 ? negative : negative > 0 ? 1 : -1; // -1
zero === 0 ? zero : zero > 0 ? 1 : -1; // 0
```

### Math.sign Polyfill

Or keep using `Math.sign` and just add this [Polyfill from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill)

```javascript
if (!Math.sign) {
  Math.sign = function (x) {
    return (x > 0) - (x < 0) || +x;
  };
}
```

## Community Input

> return (a < 0)? -1 : (a > 0)? 1 : 0;

_[@letsmakesomebug](https://twitter.com/letsmakesomebug/status/1252907751770140673?s=21):_ Math.sign() differentiates -0 and +0, this is outputting +0 for both, it is not the same. Anyway Math.sign() is way more readable to me than double ternary, less time to write, less time to read and understand.

## Resources

- [MDN Web Docs - Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
- [Stack Overflow: Number sign in JavaScript](https://stackoverflow.com/questions/7624920/number-sign-in-javascript)
- [Leetcode Solution: Reverse an integer](https://leetcode.com/problems/reverse-integer/discuss/373709/Clean-And-Simple-Javascript-Solution)
- [Math.sign MDN Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill)
- [Stack Overflow: How to check the value given is a positive or negative integer?](https://stackoverflow.com/questions/7037669/how-to-check-the-value-given-is-a-positive-or-negative-integer/7792637)
- [Stack Overflow: JS Negative Number](https://stackoverflow.com/questions/3571717/javascript-negative-number)
