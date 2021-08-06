---
title: Quick Debug using || with console.log
description: Quickly debug 1-line functions with || to output both your console.log and expression...
tags: [javascript]
order: 54
createdAt: 2019-3-31
---

It's always a pain to debug 1-line arrow function with a console.log. Why? b/c we need to convert it to a multi-line first. No more! Just use `||` before your expression. It outputs both your `console.log` and expression 👍

And clean up is a breeze! No more messy re-conversion back to a 1-line. Just remove your `console.log`. And you're done 😆

```javascript
// ✅
() => console.log('🤖') || expression

// ❌
() => {
  console.log('🤖')
  return expression
}
```

[[toc]]

## Example

Let's take a look at a simple example of how this would work:

```javascript
const numbers = [1, 2, 3];

numbers.map((number) => number * 2);

// ✅ Debug quickly by prepending with `||`
numbers.map((number) => console.log(number) || number * 2);

// ❌ No need to expand it to multi line
numbers.map((number) => {
  console.log(number);
  return number * 2;
});
```

## How does the `||` work?

Often times we think the `||` operator is only used in conditional statements. However, you can also think of it as a **selector operator**. It will always evaluate one of the 2 expressions.

Because `console.log` always return `undefined`, which is a falsy value. The second expression will always be evaluated 👍

To learn more about the `||` operator, check out my previous post [here](https://www.samanthaming.com/tidbits/52-3-ways-to-set-default-value)

## Community Input

### Using the Comma operator

_[@phenax5](https://twitter.com/phenax5/status/1112212663793303552):_ You can also use the comma operator. Separate two expressions with a comma and it will execute the first one and then the second and return with the second one.

```javascript
(a) => (console.log(a), a + 5);
```

And let me break up the example so it's very clear where the 2 expressions are:

```javascript
(a) => (console.log(a), a + 5);
```

- _[@JefferyHus](https://twitter.com/JefferyHus/status/1209139970545528834):_ The comma operator executes the left side and returns the right side. More info on the [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)

**⚠️ Watch your comma placement**

But make sure you don't do this. I made that mistake when I first saw his example. You don't want to stick the expression inside the `console.log`. If you do that, your function would not return anything and nothing would be evaluated. Hence, breaking your function. So be careful with your **comma** placement 😅

```javascript
a => (
  console.log(a, a + 5),
)
```

### Using `||` with TypeScript

If you're working with TypeScript and depends on how you set it up. Using this debugging technique might give you an error and prevent your code from compiling. In that case, you can suppress the error using `ts-ignore`.

Using `ts-ignore` should not be a huge deal in this case because the `console.log` is only there temporarily while you debug. Once you're done, you should definitely remove it.

```javascript
// @ts-ignore: Unreachable code error
() => console.log('🤖') || expression;
```

_Thanks: [@stramel89](https://twitter.com/stramel89/status/1112113174042546179)_

## Resources

- [MDN Web Docs: Console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
- [MDN Web Docs: Logical OR ||](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_()>)
- [3 Ways to Set Default Value in JavaScript](https://www.samanthaming.com/tidbits/52-3-ways-to-set-default-value)
