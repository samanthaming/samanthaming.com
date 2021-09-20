---
title: Number Truncation in JavaScript
description: Use Math.trunc() to truncate a floating point number and return its integer part. Let's also see other number truncation ways in JavaScript.
tags: [javascript, number]
order: 55
createdAt: 2019-04-06
updatedAt: 2020-07-17
---

Use `Math.trunc()` to truncate a floating point number and return its integer part. This function doesn't do any rounding, it simply removes all the digits following the decimal. Now you have a whole number, yay 🎊

```javascript
const number = 80.6;

// Old Way
number < 0 ? Math.ceil(number) : Math.floor(number);
// 80

// ✅ES6 Way
const es6 = Math.trunc(number);
// 80
```

<markdown-toc></markdown-toc>

## Example

`Math.trunc()` simply truncates (cuts off) the dots and the digits to the right of it. No matter whether the argument is a positive or negative number.

```javascript
Math.trunc(80.9); // 80
Math.trunc(80.8); // 80
Math.trunc(80.8); // 80
Math.trunc(80.6); // 80
Math.trunc(80.5); // 80
Math.trunc(80.4); // 80
Math.trunc(80.3); // 80
Math.trunc(80.2); // 80
Math.trunc(80.1); // 80

Math.trunc(-80.1); // -80
```

Now let's see some examples with non-number arguments:

```javascript
Math.trunc('80.1'); // 80
Math.trunc('hello'); // NaN
Math.trunc(NaN); // NaN
Math.trunc(undefined); // NaN
Math.trunc(); // NaN
```

## Number truncation using `parseInt`

You can get a similar result using `parseInt`

```javascript
parseInt(80.1); // 80
parseInt(-80.1); // -80

parseInt('80.1'); // 80
parseInt('hello'); // NaN
parseInt(undefined); // NaN
parseInt(); // NaN
```

### `Math.trunc()` vs `parseInt()`

`parseInt` is mainly used for a string argument. So if you're dealing with numbers, it's way better to use `Math.trunc()`.

If you're curious, I wrote up a performance test comparing these two functions.

[jsPerf: Math.trunc vs parseInt](https://jsperf.com/math-trunc-vs-parseint)

### The gotcha with `parseInt`

There's a potential gotcha when using `parseInt`. When you pass in an argument that's not a string, in our case a number, it will first convert the value to a string using the `toString()` abstract operation. Most of the time, `parseInt` is fine. But let's look at an example where it might not be.

```javascript
const number = 1000000000000000000000.5;

const result = parseInt(number);

console.log(result); // 1 <-- 😱
```

☝️So why did this happen?? That's because our argument is not a `string`, so the first thing `parseInt` does is it will convert the argument into a `string`.

```javascript
const number = 1000000000000000000000.5;

const result = number.toString();

console.log(result); // "1e+21"
```

So when it tried to grab the integer from `1e+21`, it just knows to grab the `1` value. So, using `parseInt` definitely has its gotcha. Because of this edge case, you might want to consider using the `Math` functions 👍

## Browser Support

Most modern browsers support `Math.trunc()`. EXCEPT, Internet Explorer. I know 😞 So if you need support for older browsers, use the old way 😕

[Browser Support: Math.trunc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Browser_compatibility)

## Community Input

### Bitwise Operator Solutions

**Double Bitwise NOT `~~`**

```javascript
console.log(~~80.6); // 80
```

_Thanks: [@Jorgert120](https://twitter.com/Jorgert1205/status/1114751512415285248)_

**Bitwise OR `|`**

```javascript
console.log(80.6 | 0); // 80
```

_Thanks: [@mac_experts](https://twitter.com/mac_experts/status/1114922942591315968)_

### toFixed Solution

_[@franinnocenti](https://medium.com/@franinnocenti/hi-samantha-you-also-can-use-method-tofixed-example-c03ecd34142b):_ Although a bit messy, this option allow you to control the decimals

```javascript
(80.645).toFixed(); // “80”

// This method returns a String but we can convert it again to number:
Number((80.645).toFixed()); // 80
```

_Thanks: [@franinnocenti](https://medium.com/@franinnocenti/hi-samantha-you-also-can-use-method-tofixed-example-c03ecd34142b)_

## Resources

- [MDN Web Docs: Math.trunc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
- [MDN Web Docs: parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN Web Docs: Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- [JS Tip: Use parseInt for strings, NOT for numbers](https://gideonpyzer.dev/blog/2017/06/06/js-tip-use-parseint-for-strings-not-for-numbers/)
- [2ality: parseInt doesn’t always correctly convert to integer](http://2ality.com/2013/01/parseint.html)
