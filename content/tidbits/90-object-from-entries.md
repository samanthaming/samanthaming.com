---
title: JavaScript Object.fromEntries()
description: Object.fromEntries is the inverse of Object.entries. It will take key-value pairs and return a new object. You can use it on Arrays and Maps.
tags: [javascript, array, object]
order: 90
createdAt: 2020-05-24
---

We got `Object.entries()` which converts an object → array. But what if you want to do the reverse? Wonder no more! Use `Object.fromEntries()` to array → object 👏

```javascript
const keyValuePair = [
  ['cow', '🐮'],
  ['pig', '🐷'],
];

Object.fromEntries(keyValuePair);
// { cow: '🐮', pig: '🐷' }
```

[[toc]]

## Object.fromEntries 101

Let's just point out the anatomy of an object. An object is something that has a key and a value.

```javascript
const object = {
  key: 'value',
};
```

Okay, working with this logic. If we want to convert something to an **object**, we need to pass something that has those 2 requirements: **key** and **value**.

There are two types of arguments that satisfy those requirements:

1. Array with nested Key-Value Pairs
1. Map objects

### Array → Object with Object.fromEntries

Here's a nested array with key-value pairs

```javascript
const nestedArray = [
  ['key 1', 'value 1'],
  ['key 2', 'value 2'],
];
```

And when we apply `Object.fromEntries` to it, we can obtain our object from it.

```javascript
Object.fromEntries(nestedArray);

// { key 1: "value 1", key 2: "value 2"}
```

### Map → Object with Object.fromEntries

JavaScript ES6 brought us a new object called **map**, which is very similar to objects.

> TC39: Map objects are collections of key/value pairs where both the keys and values may be arbitrary ECMAScript language values.

_To learn more about Map and the differences between it with Object, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_vs._Maps)_

Let's create our new Map object

```javascript
// Using the constructor
const map = new Map([
  ['key 1', 'value 1'],
  ['key 2', 'value 2'],
]);

// OR we can use the instance method, "set"
const map = new Map();
map.set('key 1', 'value 1');
map.set('key 2', 'value 2');

// RESULT
// Map(2) {"key 1" => "value 1", "key 2" => "value 2"}
```

And now let's convert our **map** into an **object** using `Object.fromEntries`

```javascript
Object.fromEntries(map);

// { key 1: "value 1", key 2: "value 2"}
```

### TypeError for Object.fromEntries with other types

Be careful when you try to pass other data types into `Object.fromEntries`. All of this will throw an error 🚨

**❌ Uncaught TypeError**

| Type               |                                      |
| ------------------ | ------------------------------------ |
| Undefined          | `Object.fromEntries(undefined)`      |
| Null               | `Object.fromEntries(null)`           |
| Boolean            | `Object.fromEntries(true)`           |
| Number             | `Object.fromEntries(100)`            |
| String             | `Object.fromEntries("hi")`           |
| Object             | `Object.fromEntries({key: "value"})` |
| Single Value Array | `Object.fromEntries([1,2,3])`        |

Make sure you only pass a key-value pair 👍

## Object.fromEntries vs Object.entries

`Object.fromEntries` reverses the effects of `Object.entries`. So `Object.entries` will convert our array and return us a new nested array of key-value pairs. And `Object.fromEntries` will turn that back to an object.

```javascript
const object = { key1: 'value1', key2: 'value2' };

const array = Object.entries(object);
// [ ["key1", "value1"], ["key2", "value2"] ]

Object.fromEntries(array);
// { key1: 'value1', key2: 'value2' }
```

### Object to Object Transformation

If you read the original [TC39 proposal](https://github.com/tc39/proposal-object-from-entries), this is the reason why this new method was introduced. With the introduction of `Object.entries`, there was not a simple way to convert the result back into an object.

Often when we choose to use `Object.entries`, it's because it gives us access to a bunch of nifty array methods, such as `filter`. But after that conversion, we're kind of stuck with that array.

```javascript
const food = { meat: '🥩', broccoli: '🥦', carrot: '🥕' };

// 😖 Stuck in Array land
const vegetarian = Object.entries(food).filter(
  ([key, value]) => key !== 'meat',
);
// [ ["broccoli", "🥦"], ["carrot", "🥕"] ]
```

Well no more! We can utilize all those useful array methods but still get our object back. Finally, an object to object transformation 👏

```javascript
const food = { meat: '🥩', broccoli: '🥦', carrot: '🥕' };

// 😄 Yay, still in Object land
const vegetarian = Object.fromEntries(
  Object.entries(food).filter(([key, value]) => key !== 'meat'),
);
// { broccoli: '🥦', carrot: '🥕' }
```

## Alternative Solutions to Convert Array → Object

`Object.fromEntries` was introduced in 2019, so it's still quite new. So let's look at other ways we can convert a key-value pair array into an object with better support.

### ES6 Reduce to Convert Array → Object

One popular way to convert an array to an object is using `reduce`.

```javascript
const array = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

function toObject(pairs) {
  return Array.from(pairs).reduce(
    (acc, [key, value]) => Object.assign(acc, { [key]: value }),
    {},
  );
}

toObject(array);
toObject(map);

// RESULT
// { key1: 'value1', key2: 'value2' }
```

### Libraries to Convert Array → Object

The ability to convert key-value pairs to an object is also available in both Underscore and Lodash.

#### Underscore

**\_.object**

> Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values.

```javascript
const array = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

_.object(array);
// { key1: 'value1', key2: 'value2' }
```

#### Lodash

**\_.fromPairs**

> The inverse of \_.toPairs; this method returns an object composed from key-value pairs.

```javascript
const array = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

_.fromPairs(array);
// { key1: 'value1', key2: 'value2' }
```

## Browser Support

Except for Internet Explorer, most major browsers have support for this method 👍

| Browser           |     |
| ----------------- | --- |
| Chrome            | ✅  |
| Firefox           | ✅  |
| Safari            | ✅  |
| Edge              | ✅  |
| Internet Explorer | ❌  |

- [Browser Support: object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#Browser_compatibility)

## Community Input

- _[@lifeiscontent](https://twitter.com/lifeiscontent/status/1265403426785001473?s=21):_ be careful with this method, if you have no control over what the data is you're using this method on, if the entries have duplicates you'll lose that data!!

## Resources

- [MDN Web Docs: Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
- [MDN Web Docs: Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Web Docs: Map vs Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_vs._Maps)
- [ECMAScript Spec](https://tc39.es/ecma262/#sec-object.fromentries)
- [TC39 Proposal: Object.fromEntries](https://github.com/tc39/proposal-object-from-entries)
- [Stack Overflow: How to create an object from an Array of key-value pairs?](https://stackoverflow.com/questions/20059995/how-to-create-an-object-from-an-array-of-key-value-pairs)
- [Stack Overflow: Convert Array to Object](https://stackoverflow.com/questions/4215737/convert-array-to-object)
- [Stack Overflow: How to reliably check an object is an EcmaScript 6 Map/Set?](https://stackoverflow.com/questions/29924932/how-to-reliably-check-an-object-is-an-ecmascript-6-map-set)
- [Stack Overflow: Maps vs Objects in ES6, When to use?](https://stackoverflow.com/questions/32600157/maps-vs-objects-in-es6-when-to-use)
- [Stack Overflow: Map vs Object in JavaScript](https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript/42040803)
