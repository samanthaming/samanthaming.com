---
title: How to Get an Object Length
description: Unlike arrays, it's always been tricky to get the object length. Let's learn how ES6 solves this with Object.keys and how enumerable works...
tags: [javascript, es6, object]
order: 56
createdAt: 2019-04-19
---

Unlike arrays, it's always been tricky to get the object length. Well no more!
Object.keys return an array of all the object's enumerable property keys. And after that, you can simply call `length`, and voila! You have the length of the object 🎉

```javascript
const object = { one: '1️⃣', two: '2️⃣' };

// Using Lodash
_.size(object); // 2

// Using JavaScript
Object.keys(object).length; // 2
```

[[toc]]

## Why can't we call `length` on an Object

You might be wondering why can't we just simply call `length` directly on our object. Let's see what happens when we do:

```javascript
const object = { one: '1️⃣', two: '2️⃣' };

object.length; // undefined

object.hasOwnProperty('length'); // false
```

You can't do it because `object` doesn't have a `length` property. Only `string` and `arrays` have a `length` property.

```javascript
const string = 'hello';
const array = [1, 2, 3];

string.hasOwnProperty('length'); // true
array.hasOwnProperty('length'); // true
```

## What are Enumerables

Alright, let's cover another topic. I mentioned at the beginning that `Object.keys` returns an array of **enumerable** property keys. So let's figure out where this `enumerable` attribute comes from.

### Assigning a Property

Typically, when we want to add a property to an object, we might just use the dot notation:

```javascript
const object = {};

object.one = '1️⃣';

console.log(object); // { one: '1️⃣' }
```

### Defining a Property

Alternatively, we can also use `Object.defineProperty`. It accepts 3 parameters. And it's in the _property descriptor_ where we can set our enumerable attribute.

```javascript
Object.defineProperty(object name, property name, property descriptor)
```

Alright, let's define a property with this method:

```javascript
const object = {};

Object.defineProperty(object, 'one', {
  value: '1️⃣',
});

console.log(object); // {}
// ☝️ Why is it empty? 🤔
```

Hmmm...that's odd. Why didn't our property show up 🤔 Well, that's because when we define a property this way, the `enumerable` attribute is by default `false`. So if we want it to show up, we need to set `true` to it.

```javascript
const object = {};

Object.defineProperty(object, 'one', {
  value: '1️⃣',
  enumerable: true, // 👈
});

console.log(object); // { one: '1️⃣' }
// ☝️ Great, it shows up now!
```

### Enumerable defaults to true

Let's go back to our object property example that we set with the dot notation. Why did it show up automatically? Well, that's because when we assign a property that way, the `enumerable` attribute is automatically set to `true`.

```javascript
const object = {};

object.one = '1️⃣';

object.propertyIsEnumerable('one'); // true
```

### Enumerable Summary

For most of us, we would rarely touch the enumerable attribute when defining our property. It's simply a way for us to control if the particular property we created will show up or stay hidden when we iterate over the object using `Object.keys`.

If you want to learn more about enumerability, I recommend reading this article, [Enumerability in ECMAScript 6](http://2ality.com/2015/10/enumerability-es6.html).

> Therefore, the attribute enumerable is used to hide properties that should not be iterated over. That was the reason for introducing enumerability in ECMAScript 1.

_Dr. Axel Rauschmayer, 2Ality_

## Object.keys vs Object.getOwnPropertyNames

Now that you understand `enumerable`, let's cover another method that you might see as an option to get the length, `Object.getOwnPropertyNames`.

```javascript
const object = { one: '1️⃣' };

Object.defineProperty(object, 'two', {
  value: '2️⃣',
  enumerable: false,
});

Object.keys(object); // [ 'one' ]

Object.getOwnPropertyNames(object); // [ 'one', 'two' ]
```

As you can see `Object.getOwnPropertyNames` will return ALL property keys, whereas `Object.keys` will just return the enumerable property keys. As I mentioned before, enumerable attributes are maybe hidden for a reason, so you might not want to access that. Therefore, `Object.getOwnPropertyName` might not be the method you want to use to get the length of an object.

## Object Length with Symbols

Before you default to `Object.keys` to get the object length. I want to point out one more consideration. In ECMAScript 6, ES6, a new primitive data type was introduced called `symbol`. And you can use `symbol` as a property name on an object.

```javascript
const animal = {
  [Symbol('ghost')]: '👻',
  turtle: '🐢',
};
```

But the gotcha is when you have a `symbol` as a property name. `Object.keys` nor `Object.getOwnPropertyNames` will work.

```javascript
Object.keys(animal);
// [ 'turtle' ] <-- no symbol

Object.getOwnPropertyNames(animal);
// [ 'turtle' ] <-- no symbol
```

So a solution is to use `Object.getOwnPropertySymbols`

```javascript
Object.getOwnPropertySymbols(animal);
// [ Symbol(ghost) ]
```

Now combining the two methods, you will get the proper length.

```javascript
const enumerableLength = Object.keys(animal).length;
const symbolLength = Object.getOwnPropertySymbols(animal).length;

const totalObjectLength = enumerableLength + symbolLength;
// 2 <-- 👍
```

## Resources

- [MDN Web Docs: Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Web Docs: Object.getOwnPropertyNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [MDN Web Docs: Object.getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [MDN Web Docs: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [2ality: Enumerability in ES6](http://2ality.com/2015/10/enumerability-es6.html)
- [2ality: Property Definition vs Assignment](http://2ality.com/2012/08/property-definition-assignment.html)
- [Stack Overflow: When to use Object.defineProperty](https://stackoverflow.com/questions/10105824/when-do-you-use-object-defineproperty)
- [Stack Overflow: How to use JavaScript Object.defineProperty](https://stackoverflow.com/questions/18524652/how-to-use-javascript-object-defineproperty)
- [Stack Overflow: Object.getOwnPropertyNames vs Object.keys](https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys)
- [Stack Overflow: Length of a JavaScript object](https://stackoverflow.com/questions/5223/length-of-a-javascript-object)
