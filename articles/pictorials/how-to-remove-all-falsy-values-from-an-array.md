# How to Remove All Falsy Values from an Array

This is one of my favorite algorithm challenge! Because it covers a fundamental topic of JavaScript. And how that knowledge is used to solve this problem. Let's go!

- falsy values
- boolean !!
- filter

<ArticleImage />

## The Challenge

Write a function that returns an array of only truthy values

<ArticleImage name="1" />

## 1. Falsy values

Falsy values is absolutely a must know for JavaScript developers. When I first started learning JS, I made the mistake of trying to memorizing what was "truthy". It always confused me. Did you know an empty array is a truthy value, that always threw me off 🤦‍♀️. Instead, just focus on learning the falsy values. And whatever is NOT on that falsy list, then it's considered truthy 👍

> Here's a list of all the falsy values

<ArticleImage name="2" />

## 2. `!!`

Once you know the falsy values, we can call `!!` to convert a value to a Boolean. But you can also use `Boolean(value)` to do the conversion too.

> Coerce value to a Boolean value

<ArticleImage name="3" />

## 3. `filter()`

Next, we want to remove all the falsy value from our array. In other words, we want to "filter" out the falsy values and just keep the truthy values.

> Create a new array with only truthy values

<ArticleImage name="4" />

## Final Solution

Woohoo! You conquered another algorithm challenge! You have successfully solved how to remove all falsy values from an array 👏

<ArticleImage name="5" />

## More Solutions

<br>

**Using !!**

```javascript
function removeFalsy(arr) {
  return arr.filter(a => !!a);
}
```

**Using Boolean**

```javascript
function removeFalsy2(arr) {
  return arr.filter(a => Boolean(a));
}
```

**Using Boolean directly**

```javascript
function removeFalsy3(arr) {
  return arr.filter(Boolean);
}
```

This works because `Boolean` itself is a function, and the arguments `filter` supplies are passed directly to it. This is the same as:

```javascript
function removeFalsy3(arr) {
  return arr.filter(a => Boolean(a));
}
```

> [Boolean()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) is also a function that returns truthy when true and falsy when false!

```javascript
var a = [1, 2, 'b', 0, {}, '', NaN, 3, undefined, null, 5];

var b = a.filter(Boolean); // [1, 2, "b", {}, 3, 5];
```

_https://stackoverflow.com/a/54623591_

**Using Filter's Auto Coercion**

```javascript
function removeFalsy3(arr) {
  return arr.filter(a => a);
}
```

<ArticleFootnote />
