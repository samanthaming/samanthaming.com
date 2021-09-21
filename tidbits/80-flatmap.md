---
title: JavaScript `Array.flatMap()`
description: Use flatMap to map over an array and flatten the result array in one go!
tags: [javascript, array]
order: 80
createdAt: 2019-11-23
updatedAt: 2019-11-23
---

You learned how [Array.flat()](https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat) flattens an array in my previous tidbit. Now lets up the game and introduce "flatMap". It combines the steps of first mapping over the array with `map()` & then calling `flat()`. Instead of calling 2 methods, just use `flatMap()` 👍

```javascript
const foods = ['🍫', '🍦'];

// ❌ map + flat
foods.map((food) => [food, '😋']).flat();

// ✅ flatMap
foods.flatMap((food) => [food, '😋']);

// Result
// ['🍫', '😋', '🍦', '😋']
```

## How `flatMap()` works?

Let's go through step-by-step what `flatMap()` is doing. I was a bit confused when I first learned this one. Cause I thought it flattens and then it does the mapping. But no 🙅. It first `map()` and then it `flat()`.

```javascript
const names = ['jane', 'john'];

// Step 1: map
const nestedArray = names.map((name, index) => [name, index]);
// [ ['jane', 1], ['john', 2 ] ]
```

So now we have a nested array. And we can use `flat()` to flatten the array.

```javascript
const nestedArray = [
  ['jane', 1],
  ['john', 2],
];

nestedArray.flat();
// [ 'jane', 1, 'john', 2 ]
```

Of course, we can shorten this and just call `flatMap()`. Let's take a look 👀

```javascript
const names = ['jane', 'john'];

const result = names.flatMap((name, index) => [name, index]);

// [ 'jane', 1, 'john', 2 ]
```

And Voila! We have the same result 👍

## `flatMap` only flattens 1-level deep

With `flat()`, it accepts a parameter where you set the depth. What this means is you can specify how deep a nested array should be flattened.

```javascript
const depth1 = [[1], [2]];
depth1.flat(); // same as depth.flat(1)
// [1, 2]

const depth2 = [[[1, 2]]];
depth2.flat(2);
// [1, 2]
```

Now for `flatMap()`, you can only go 1-level deep.

```javascript
const names = ['jane'];

names.flatMap((name, index) => [[name, index]]);
//  [ ['jane', 1] ]
```

Let's break this into 2 steps, so you can see what's going on.

```javascript
const names = ['jane'];

// Step 1: created a 2-level deep array
const twoLevelDeep = names.map((name, index) => [[name, index]]);
// [ [ ['jane', 1] ] ]

// Step 2: flat using depth 1
twoLevelDeep.flat();
//  [ ['jane', 1] ]
```

But if you do it separately, I can pass a `depth` parameter and flatten it completely:

```javascript
twoLevelDeep.flat(2);
// [ 'jane', 0, 'john', 1 ]
```

So, if you want it to flatten beyond depth of 1. Then it is better to NOT use `flatMap()` and just call the methods separately 👍

## `flatMap` to filter item

One really cool thing you can do with `flatMap` is to remove an element. In this example, I want to remove all negative numbers.

```javascript
const numbers = [1, 2, -3, -4, 5];

numbers.flatMap((number) => {
  return number < 0 ? [] : [number];
});

// [ 1, 2, 5]
```

That's really cool! It's like acting like a `filter`. But how is this actually working. The secret is the empty array. Let's see what I mean.

```javascript
const emptyNestedArray = [[], 1];

emptyNestedArray.flat();
// [ 1 ]
```

When you try to flatten an element that's an empty array, it simply removes that item. So we can use that knowledge to make `flatMap` act kind of like `filter` method. Neat right! 👍

## Community Input

- _[@mariolucki212](https://www.instagram.com/p/B5S1HK9AMgR/):_ I can give you example lets say you have array of users and you want to get all attributes that exist

```javascript
[
  { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
  { userId: 2, username: 'Mike', attributes: ['Lovely'] },
].flatMap((x) => x.attributes);

// Output => ["Nice", "Cute", "Lovely"]
```

## Resources

- [TC39: flatMap](https://tc39.es/proposal-flatMap/#sec-Array.prototype.flatMap)
- [MDN Web Docs: flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [SamanthaMing.com: Array.flat()](https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat)
