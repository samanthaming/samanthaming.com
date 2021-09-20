---
title: 5 Ways to Convert a Value to String in JavaScript
description: Let's check out the different ways of converting a value to a string in JavaScript. The preferred way from Airbnb's style guide is String().
tags: [javascript]
order: 62
createdAt: 2019-05-26
updatedAt: 2020-01-12
---

If you're following the Airbnb's Style Guide, the preferred way is using "String()" 👍

It's also the one I use because it's the most explicit - making it easy for other people to follow the intention of your code 🤓

Remember the best code is not necessarily the most clever way, it's the one that best communicates the understanding of your code to others 💯

```javascript
const value = 12345;

// Concat Empty String
value + '';

// Template Strings
`${value}`;

// JSON.stringify
JSON.stringify(value);

// toString()
value.toString();

// String()
String(value);

// RESULT
// '12345'
```

## Comparing the 5 ways

Alright, let's test the 5 ways with different values. Here are the variables we're going to test these against:

```javascript
const string = 'hello';
const number = 123;
const boolean = true;
const array = [1, '2', 3];
const object = { one: 1 };
const symbolValue = Symbol('123');
const undefinedValue = undefined;
const nullValue = null;
```

### Concat Empty String

```javascript
string + ''; // 'hello'
number + ''; // '123'
boolean + ''; // 'true'
array + ''; // '1,2,3'
object + ''; // '[object Object]'
undefinedValue + ''; // 'undefined'
nullValue + ''; // 'null'

// ⚠️
symbolValue + ''; // ❌ TypeError
```

From here, you can see that this method will throw an `TypeError` if the value is a `Symbol`. Otherwise, everything looks pretty good.

### Template String

```javascript
`${string}`; // 'hello'
`${number}`; // '123'
`${boolean}`; // 'true'
`${array}`; // '1,2,3'
`${object}`; // '[object Object]'
`${undefinedValue}`; // 'undefined'
`${nullValue}`; // 'null'

// ⚠️
`${symbolValue}`; // ❌ TypeError
```

The result of using **Template String** is essentially the same as **Concat Empty String**. Again, this might not be the ideal way when dealing with `Symbol` as it will throw a `TypeError`.

This is the TypeError if you're curious: `TypeError: Cannot convert a Symbol value to a string`

### JSON.stringify()

```javascript
// ⚠️
JSON.stringify(string); // '"hello"'
JSON.stringify(number); // '123'
JSON.stringify(boolean); // 'true'
JSON.stringify(array); // '[1,"2",3]'
JSON.stringify(object); // '{"one":1}'
JSON.stringify(nullValue); // 'null'
JSON.stringify(symbolValue); // undefined
JSON.stringify(undefinedValue); // undefined
```

So you typically would NOT use JSON.stringify to convert a value to a string. And there's really no coercion happening here. I mainly included this way to be complete. So you are aware of all the tools available to you. And then you can decide what tool to use and not to use depending on the situation 👍

One thing I want to point out because you might not catch it. When you use it on an actual `string` value, it will change it to a string with **quotes**.

You can read more about this in Kyle Simpson, "You Don't Know JS series":
[JSON Stringification](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#json-stringification)

**Side note on the importance of knowing your fundamentals!**

Yes, you may have noticed in my code notes, I frequently quote Kyle's books. I honestly have learned a lot of it. Not coming from a computer science background, there is a lot of fundamentals concept I'm lacking. And his book has made me realize the importance of understanding the fundamentals. For those, who want to be a serious programmer, the way to level up is really TRULY understand the fundamentals. Without it, it's very hard to level up. You end up guessing the problem. But if you know the fundamentals, you will understand the "why" of something. And knowing the "why" will help you better execute the "how". Anyhoo, highly recommend this series for those trying to becoming a senior programmer!

### toString()

```javascript
string.toString(); // 'hello'
number.toString(); // '123'
boolean.toString(); // 'true'
array.toString(); // '1,2,3'
object.toString(); // '[object Object]'
symbolValue.toString(); // 'Symbol(123)'

// ⚠️
undefinedValue.toString(); // ❌ TypeError
nullValue.toString(); // ❌ TypeError
```

So the battle really comes down to `toString()` and `String()` when you want to convert a value to a **string**. This one does a pretty good job. Except it will throw an error for `undefined` and `null`. So definitely be mindful of this

### String()

```javascript
String(string); // 'hello'
String(number); // '123'
String(boolean); // 'true'
String(array); // '1,2,3'
String(object); // '[object Object]'
String(symbolValue); // 'Symbol(123)'
String(undefinedValue); // 'undefined'
String(nullValue); // 'null'
```

Alright, I think we found the winner 🏆

As you can see, the `String()` method handles the `null` and `undefined` quite well. No errors are thrown - unless that's what you want. Remember my suggestion is generally speaking. You will know your app the best, so you should pick the most suitable way for your situation.

## Conclusion: String() 🏆

After showing you how all the different methods handle different type of value. Hopefully, you are aware of the differences and you will know what tool to pick up the next time you tackle your code. If you're not sure, `String()` is always a good default 👍

## Why you shouldn't use `new String()`

You might notice in Airbnb's styleguide, it mentioned to not use `new String()`. Let's see why:

```javascript
const number = 123;

typeof new String(number); // 'object'
```

So when you create a value using a constructor with the `new` keyword, you're actually creating an object wrapper. And this is what it outputs:

```javascript
console.log(new String(number));
// String {"123"}
```

> The point is, new String("123") creates a string wrapper object around "123", not just the primitive "123" value itself. [edited]

_[Kyle Simpson's You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#chapter-3-natives)_

One reason why you'd do this is:

> There's very little practical use for String objects as created by new String("foo"). The only advantage a String object has over a primitive string value is that as an object it can store properties:

```javascript
var str = 'foo';
str.prop = 'bar';
alert(str.prop); // undefined

var str = new String('foo');
str.prop = 'bar';
alert(str.prop); // "bar"
```

_[StackOverflow: What's the point of new String(“x”) in JavaScript?](https://stackoverflow.com/questions/5750656/whats-the-point-of-new-stringx-in-javascript)_

## Community Input

_[@MaxStalker](https://twitter.com/MaxStalker/status/1132375146340278273):_ I would use a different method depending on the application:

- "" + val: simply cast number to string - let's say inside of the .map()
- JSON.stringify(val): need to convert small non-nested object
- .toString(radix): convert number to hexidecimal or binary

_[@frontendr](https://twitter.com/frontendr/status/1132393041350856704):_ Carefully when using JSON.stringify, that will change a string into a string with quotes 😉

_[@super.pro.dev](https://www.instagram.com/super.pro.dev/):_ I also know: new String (foo) but I don't like this method (it will create an object of String, in contrast to String (without "new") which create string primitive)

_[@BrunoGiubilei](https://twitter.com/BrunoGiubilei/status/1132959435599618053):_ when concat empty string, it's mostly correct to declare the empty strings first, because when you concat more one values, the sum has been processed first.

```javascript
1 + 2 + 3 + ''; // 6
'' + 1 + 2 + 3; // 123
```

## Resources

- [MDN Web Docs: toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#coercion--strings)
- [2ality: Converting a value to string in JavaScript](http://2ality.com/2012/03/converting-to-string.html)
- [Convert Number to String](https://stackabuse.com/javascript-convert-number-to-string/)
- [Stack Overflow: Casting to string](https://stackoverflow.com/questions/11083254/casting-to-string-in-javascript)
- [Addition operator in details](https://dmitripavlutin.com/javascriptss-addition-operator-demystified/)
- [YDKJS: Coercion](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#tostring)
