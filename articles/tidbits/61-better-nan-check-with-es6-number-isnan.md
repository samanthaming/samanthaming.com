# Better `NaN` check with ES6 `Number.isNaN`

The `isNaN` check in JS always had its issue - it returns true for a value that isn’t actually a number 😱. Why? because it coerces the value to a number first, which can falsely result to a `NaN`. ES6 to the rescue! `Number.isNaN` won't forcefully do the conversion. Which means only values of the type number will return true. Yay 👏

```javascript
// What?? 😱
isNaN('string'); // true

// Better ✅
Number.isNaN('string'); // false
```

## I'm confused...

> Wait, shouldn't the NaN check return true for a string and false for a number? NaN means "not a number", so shouldn't it be checking for something being "not a number". I'm so confused

☝️ If you're one of these people. Don't worry, I was too! Let me try to demystify this for you.

## Number.isNaN vs isNaN

Let's try to understand what these two methods are doing.

### isNaN

> Returns true if the argument coerces to NaN, otherwise returns false.

_[Standard ECMA-262: 5.1 edition](https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4)_

So this method will first coerce the argument using, for instance,`Number(argument)`, and if it evaluates to `NaN`, it will return true.

### Number.isNaN

> Determines whether the argument is NaN and its type is Number.

_[Standard ECMA-262: 6th edition](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan)_

There is no coercion here. It does 2 things:

- First, it checks the type using, for instance, `typeof (argument)`, and if it doesn't evaluate to `number`, it will return false.
- Second, it will check if the argument has the value `NaN`, if so, it will return true.

### Summary

Just to be super clear, the difference between these 2 methods is that `Number.isNaN` doesn't coerce or forcefully convert the argument to a Number before determining whether it has the value `NaN`.

## Understanding `NaN`

Alright, let's move on to understanding what `NaN` is. It stands for "not a number". But I think this is the source of the problem. If you think of it in its literal term, you might interpret it as whatever is "not a number", then it must be `NaN`. This is incorrect. It's not the opposite of a number. Take, for instance, a "string". Sure, it's "not a number" but it doesn't evaluate to `NaN`. So "string" is not `NaN` 🙅‍♀️

> It would be much more accurate to think of NaN as being "invalid number", "failed number," or even "bad number," than to think of it as "not a number."

_[Kyle Simpson, You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#the-not-number-number)_

So `NaN` is an invalid number. You get `NaN` when you try to do some mathematical operations on values that are not Numbers.

```javascript
const invalid = 100; // "string";

console.log(invalid); // NaN
```

### Tips to understanding NaN

Another way that helped me understand this, is thinking `NaN` as its own value. Just like how `200` is a value, `NaN` is also its own value. Refrain from referring it in its literal term of, "not a number", just pronounce it as one word, **nan**. That way your brain won't think of it as "not a number".

Alright moving forward, we will stop referring `NaN` as "not a number", it's just another value and this value is called `NaN`. Trust me, when you do this, it will help ease a lot of confusion 🙆‍♀️.

## Problem Checking `NaN`

So why do we need a method to check for `NaN`. Why does this method `isNaN` even exist? Well, it exists because there is no easy for us to check if a value is `NaN`. That's because `NaN` doesn't equal itself. So we can't simply compare an argument to `NaN` in order to check if it's equal or the same. Confused? Let's walk through it.

Say, we need to check if a value is equal to `100`. That's easy, we can just compare it to itself like this:

```javascript
const value = 100;

value === 100; // true
```

Okay, let's try this logic with `NaN`.

```javascript
const value = NaN;

value === NaN; // false
value == NaN; // false
```

☝️It doesn't work 😫. `NaN` is a very special value that never equals to itself. And because of this problem. JavaScript created the global utility `isNaN` to help us check if a value is equal to `NaN`.

## Problem with `isNaN`

As there is no easy way to check if a value is `NaN` because it doesn't equal to itself. The global utility `isNaN` was created to solve this dilemma.

```javascript
const value = NaN;

isNaN(value); // true ✅
```

This is great. But this utility has a problem 😑

```javascript
const value = 'string';

isNaN(value); // true 😱
```

Do you see the problem? Let's explain this in words. Does `string` equal to `NaN`? Remember, don't think of NaN as "not a number", it's just a value called NaN. The answer is NO! `string` does not equal to `NaN`. Let me drill it down:

```javascript
'string' === NaN; // false
'string' == NaN; // false
```

### The Source of the `isNaN` Problem

Let's go back to our definition of `isNaN`

> Returns true if the argument coerces to NaN, and otherwise returns false.

See the word "coerce". That's the problem! It first coerces the value. In order words, it tries to convert the value into a Number type. Let's see what happens when we do that.

```javascript
const value = 'string';

Number(value); // NaN
```

☝️ Do you see it! When you try to convert the String type to a Number type, it returns `NaN`. And does the value `NaN` have the value of `NaN`? The answer is yes. That's why it's returning `true`. BUT! That's not what we want. This is a false positive. In order to correct this, we don't want any coercion to occur!

## Problem Solved with `Number.isNaN`

That's why the `Number.isNaN` method was introduced! It solves the `isNaN` false positive problem. `Number.isNaN` doesn't do any coercion. In other words, it doesn't try to convert the argument's type to a Number type.

```javascript
const value = 'string';

isNaN(value); // true ❌
Number.isNaN(value); // false ✅
```

Remember the question of the intention of these methods: "Does the value equal to `NaN`". It is not asking if the value is "not a number". Sorry if I'm being repetitive. But this is the source of a lot of confusion from folks, so I really want to drill this concept down. Hopefully, everything is clear as mud now 😆

## Demo-ing `Number.isNaN` vs `isNaN`

This is pretty much the end of this post. But I just want to throw in some more examples to really bring the concept home 🥅.

### Example: Number

Does the value equal to `NaN`? The answer is NO. So the result should be `false`. Remember it's not asking if the value is equal to "not a number".

```javascript
const number = 100;

isNaN(number); // false ✅
Number.isNaN(number); // false ✅
```

### Example: NaN

Does the value equal to `NaN`? The answer is YES. So the result should be `true`.

```javascript
const nan = NaN;

isNaN(number); // true ✅
Number.isNaN(number); // true ✅
```

### Example: String

Always use `Number.isNaN` because the result from `isNaN` is incorrect. Remember the intention of the NaN-check, the method is asking: "Does the value equal to `NaN`? It is NOT asking if the value is equal to "not a number".

So, in this example, does the String value equal to `NaN`? The answer is NO. The result should be `false`.

```javascript
const value = 'string';

isNaN(value); // true ❌
Number.isNaN(value); // false ✅
```

## Conclusion

When checking if a value is equal to `NaN`. Use the `Number.isNaN` method. Do not use `isNaN` 🤓

## Resources

- [ECMAScript: isNaN](https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4)
- [ECMAScript: Number.isNaN](https://www.ecma-international.org/ecma-262/6.0/)
- [YDKJS: NaN](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#the-not-number-number)
- [Stack Overflow: Confusion between isNaN and Number.isNaN in JavaScript](https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript)
- [Problem with Testing for NaN in JavaScript](http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html)
- [Stack Overflow: Is Number.IsNaN() more broken than isNaN()](https://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan)
- [JDKJS: Number.isNaN](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/es6%20%26%20beyond/ch6.md#numberisnan-static-function)
- [MDN Web Docs: Number​.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [MDN Web Docs: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [MDN Web Docs: isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [Airbnb Style guide: NaN](https://github.com/airbnb/javascript#standard-library--isnan)
