---
title: 2 Ways to Convert to Boolean in JavaScript
description: 2 ways to convert a value to a Boolean. My favourite is using "!!". It’s also the recommended method by Airbnb’s style guide...
tags: [javascript]
order: 19
---

My favorite is using `!!`. It’s also the recommended method by Airbnb's JavaScript style guide 👍

```javascript
Boolean(value);

!!value;
```

## Convert Values to Boolean

### String

```javascript
const string = 'string';

!!string; // true
Boolean(string); // true
```

### Number

```javascript
const number = 100;

!!number; // true
Boolean(number); // true
```

### Falsy Values

In JavaScript, there are 6 falsy values. If you convert any of these to a `boolean`, it will return `false`.

```javascript
false
undefined
null
NaN
0
"" (empty string)
```

Anything not on the falsy list, will return `true` 👍

More information on this, you can read my [Code Notes on Falsy Values](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values/)

#### Examples

Applying `!!` on falsy values

```javascript
!!false; // false
!!undefined; // false
!!null; // false
!!NaN; // false
!!0; // false
!!''; // false
```

Applying `Boolean` on falsy values

```javascript
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(0); // false
Boolean(''); // false
```

## How the `!!` works

The first `!` coerce the value to a boolean and inverse it. In this case, `!value` will return `false`. So to reverse it back to `true`, we put another `!` on it. Hence the double use `!!`.

```javascript
const value = 'string';

!value; // false

!!value; // true
```

## Watch out for `'false'`

```javascript
const value = 'false';

!!value; // true
Boolean(value); // true
```

Notice the `"false"` is between quotes `'`. Although it says `false`, it's actually a string. I know most of you won't fall for this, but if you're like me, you might just want to be alert for these funny mind tricks people might be playing on you 😂

## Community Input

_[@tassoevan](https://twitter.com/tassoevan/status/1228769515586117634?s=20):_ I enjoy filtering falsy values from arrays like this: `myArray.filter(Boolean)`

_[@fleonus](https://twitter.com/fleonus/status/1228956738595876864?s=20):_ I like `!+!` just to be cool and throw people off :P

### Speed Test

Here's a test that I found:

[boolean vs !!](https://jsperf.com/bool-not-not)

Looks like the `!!` is a bit faster than `Boolean`

### Which one to use?

I've gotten a lot of comments on this post. Some people prefer the `Boolean` because it's more explicit.

But, Kyle Simpson from You Don't Know JS, mentioned that both are explicit.

```javascript
// better (works explicitly):
if (!!a) {
}

// also great (works explicitly):
if (Boolean(a)) {
}
```

_[Kyle Simpson: YDKJS - Coercion](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch04.html)_

I don't think I have a great answer for you. You will know your team way better I do. I will continue to use `!!` in my own personal projects, cause it's less typing and I understand this syntax. But if I was on a team, I might choose `Boolean` because I think most developers would understand that better. No matter which one you choose, the most important thing is to be **consistent**. Don't flip-flop between the two in your code base. Pick one and stick with it 💪

Aludding to an awesome comment I got:

> _@patrick_developer:_ I say one should understand both just in case one is presented with different code bases that use each one. Knowledge is power.

In other words, one is not better than the other. This one I'd argue is more of a preference. So you can't go wrong. But don't deprive yourself from understanding both. Like Patrick said, "Knowledge is power" 💪

### Avoid `new Boolean`

Use Primitives instead of Object Types

```javascript
var str = 'str';

// Avoid
typeof new Boolean(str); // object

// Preferred
typeof Boolean(str); // boolean
typeof !!str; // boolean
```

**CJ J.**: It's worth noting that `new Boolean` isn't a boolean but rather an instance of Boolean. Primitives are cheaper and should be preferred over the object type.

**CJ J.**: `new Boolean(str)` returns an object type. `Boolean(str)` just returns a primitive boolean. I would suspect `Boolean(str)` is faster then `!!str` because it's only one operation, but it's also entirely possible that browsers implement an optimization such that when they see `!!` they know to directly cast the argument to a boolean primitive (instead of actually doing `NOT()` twice in a row).

**CJ J.**: Primitives are cheap because they're immutable so you can share references and not have to hold any state on the instance. It's just `true` or `false`. But `new Boolean(str)` is an object. It has it's own unique memory address and it can hold internal state that is unique to it. This means it can't just hold a reference to an immutable singleton instance. Every call to `new Boolean(str)` instantiates an entire new `Boolean()` object.

_Thanks: [CJ J](https://www.linkedin.com/in/~cj-johnson)._

### Remove empty strings with Boolean Constructor

**CJ J.**: This is the classic example. If you get a list of string values separated by commas and you want to filter out the empty strings, you can pass the Boolean constructor function into Array.prototype.filter and it will automatically strip out the zero-length strings leaving an array of only valid strings.

```javascript
var str = 'some,list,,of,values';
var arr = str.split(',');

arr; // [ 'some', 'list', '', 'of', 'values' ]

arr.filter(Boolean); // [ 'some', 'list', 'of', 'values' ]
```

_Thanks: [CJ J](https://www.linkedin.com/in/~cj-johnson)._

## Resources

- [Scotch.io: Logical Not Operator](https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful#logical-not)
- [Stack Overflow: What is the not not operator](https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#type-casting--coercion)
- [What is the purpose of new Boolean() in JavaScript?](https://stackoverflow.com/questions/856324/what-is-the-purpose-of-new-boolean-in-javascript)
- [Double Negation !!x](https://riptutorial.com/javascript/example/3047/double-negation----x-)
- [You Don't Know JS: Coercion](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch04.html)
