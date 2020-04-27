# 5 Way to Append Item to Array in JavaScript

Here are 5 ways to add an item to the end of an array. `push`, `splice`, and `length` will mutate the original array. Whereas `concat` and `spread` will not and will instead return a new array. Which is the best depends on your use case 👍

**Mutative**

This will change the original array

```javascript
const array = ['🦊'];

array.push('🐴');
array.splice(array.length, 0, '🐴');
array[array.length] = '🐴';

// Result
// ['🦊', '🐴']
```

**Non Mutative**

This will create a new array and the original array remains unchanged.

```javascript
const original = ['🦊'];
let newArray;

newArray = original.concat('🦄');
newArray = [...original, '🦄'];

// Result
newArray; // ['🦊', '🦄']
original; // ['🦊']
```

[[toc]]

## 3 Ways to Append Item to Array (Mutative)

Let's look at the 3 ways we can push an item to an array. This will be the mutative way, meaning it will change the original array.

### push

The simplest way to add items to the end of an array is to use `push`.

```javascript
const zoo = ['🦊', '🐮'];

zoo.push('🐧');

console.log(zoo); // ['🦊', '🐮', '🐧']
```

Notice I said item**s** and not just item 😉 Yup, you can push multiple items.

```javascript
const zoo = ['🦊', '🐮'];

zoo.push('🐧', '🐦', '🐤');

console.log(zoo); // ['🦊', '🐮', '🐧', '🐦', '🐤']
```

But passing individual items is such a drag, luckily we can use the ES6's spread feature. This allows us to pass an array and then use the `...` syntax to spread the item into individual arguments 🙌

```javascript
const zoo = ['🦊', '🐮'];
const birds = ['🐧', '🐦', '🐤'];

zoo.push(...birds);

console.log(zoo); // ['🦊', '🐮', '🐧', '🐦', '🐤']
```

### splice

At first glance, this method can seem super needy 😂 because we're passing a bunch of arguments. That's because this method can add OR remove array items. Hence it requires us to give it a bit more info for it to do its job. Let's look at the parameters it requires:

| Parameters | Parameter Name | Definition                                                                           |
| ---------- | -------------- | ------------------------------------------------------------------------------------ |
| 1          | startIndex     | The index where you want to add/remove item                                          |
| 2          | deleteCount    | The number of items you want to remove                                               |
| 3          | items          | The number you want to add <br>(_If you're removing, you can just leave this blank_) |

<!-- prettier-ignore -->
```javascript
const zoo = ['🦊', '🐮'];

zoo.splice(
  zoo.length, // We want add at the END of our array
  0, // We do NOT want to remove any item
  '🐧', '🐦', '🐤', // These are the items we want to add
);

console.log(zoo); // ['🦊', '🐮', '🐧', '🐦', '🐤']
```

### length

I think this is the most clever way of all the methods. It's one of the ways that never crossed my mind. So let's understand why this works.

Arrays in JavaScript are zero-index. So the first item has an index of `0`.

```javascript
const zoo = ['🦊', '🐮'];

// '🦊' | Index = 0
// '🐮' | Index = 1
```

The bracket notation in arrays allows us to retrieve the item BUT it can also let us override that item.

```javascript
const zoo = ['🦊', '🐮'];

// Retrieve
zoo[0]; // Returns '🦊'

// Override
zoo[1] = '🥩';

console.log(zoo); // ['🦊', '🥩']; **

// ** JUST JOKING 😂
// ...I promise no animals were hurt in this blog post 😬
```

The interesting thing is `array.length` returns us the total count of items in the array. That means the length is always one number higher than the last item of our index. So by assigning a value at the length index, it's essentially adding an item to the end of the array.

```javascript
const zoo = ['🦊', '🐮'];
const length = zoo.length; // 2

zoo[length] = '🐯';

console.log(zoo); // ['🦊', '🐮', '🐯']
```

## 2 Ways to Append Item to Array (Non Mutative)

Alright, let's move on to appending an item to an array in a non mutative way. Where the original array will remain untouched and a new array will contain the addition.

### concat

This method is meant to merge arrays. So we can use it to add multiple items by passing in an array.

```javascript
const ocean = ['🐙', '🦀'];
const fish = ['🐠', '🐟']; // Array of multiple items

const aquarium = ocean.concat(fish);

aquarium; // ['🐙', '🦀', '🐠', '🐟']

// Original Array Not Affected
ocean; //  ['🐙', '🦀']
```

But it doesn't just accept arrays as its parameter, it also accepts value(s).

```javascript
const ocean = ['🐙', '🦀'];

const aquarium = ocean.concat('🐡'); // Add a single value
const sushi = ocean.concat('🐡', '🍚'); // Add multiple values

aquarium; // ['🐙', '🦀', '🐡']
sushi; //  ['🐙', '🦀', '🐡', '🍚']

// Original Array Not Affected
ocean; // ['🐙', '🦀']
```

### spread

We can use the spread syntax to expand each array element into individual elements. A very popular application is to use spread to create a copy or merge two separate arrays. This is similar to the effects of `concat`.

```javascript
const ocean = ['🐙', '🦀'];
const fish = ['🐠', '🐟'];

const aquarium = [...ocean, ...fish];

aquarium; // ['🐙', '🦀', '🐠', '🐟']

// Original Array Not Affected
ocean; //  ['🐙', '🦀']
```

However, if we didn't use spread, we will instead get a nested array, which is not what we want.

<!-- prettier-ignore -->
```javascript
const ocean = ['🐙', '🦀'];
const fish = ['🐠', '🐟'];

const aquarium = [ocean, fish];

// [  ['🐙', '🦀'],  ['🐠', '🐟'] ]
```

So I can use it to merge arrays, but we can also pass the individual value(s), just like we do in creating a regular array.

```javascript
const ocean = ['🐙', '🦀'];

const aquarium = [...ocean, '🐡']; // Add a single value
const sushi = [...ocean, '🐡', '🍚']; // Add multiple values

aquarium; // ['🐙', '🦀', '🐡']
sushi; //  ['🐙', '🦀', '🐡', '🍚']

// Original Array Not Affected
ocean; // ['🐙', '🦀']
```

## To Mutate Or Not to Mutate?

So the question is, to mutate or not to mutate 🎭 Well that really depends on your use case. When you're working in Redux or any state management architecture, then it's all about the immutability. So the non-mutative methods will be your choices. Also, the idea of immutability is often preferred as it's considered a good practice to avoid side effects -- which is the foundation of functional programming and producing pure functions.

But does that mean we should never use mutative methods? Not at all. Because there are times when immutability just doesn't matter. Take this simple example.

```javascript
function menu(isFriday) {
  const food = ['🍗', '🍳'];
  isFriday ? food.push('🍷') : food;

  return food;
}
```

In these cases, why not use the mutative methods. My go-to for appending a value is `push`. Why? Because it's less typing (yes, I'm very lazy 😂) and super readable. Yes, you can argue that `concat` is also very short to type. But check out this performance test. Push is a lot faster! ⚡️

> [Performance Test: Push vs Concat](https://jsperf.com/javascript-array-concat-vs-push/100)

## Community Input

_[@DigianPaul](https://twitter.com/DigianPaul/status/1254297626067046403?s=20):_ **To Mutate or Not to Mutate?** In general it is a very deep question. But, to simplify, suppose the original array is still needed somewhere else? Then you don't want to mutate it. If it is not needed, you can mutate it directly, which is usually faster than creating a copy.

Said there are data structures where creating a copied of the array is as cheap as mutate it (or comparable cheap) and those are very cool but not so widespread in the JavaScript community.

Those are called "Persistent data structures" and are extremely useful in a lot of cases. But they are quite complex to design.

They make simple to implement functionality like undo-redo for instance. But they really shine in functional programming and also in multithread applications.

_[@KClarkADSTech](https://twitter.com/KClarkADSTech/status/1254142125584728065?s=20):_ Also you can prepend by using `[ newEl, ...array]` or `array.unshift(newEl)`.

## Resources

- [MDN Web Docs: push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN Web Docs: concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [MDN Web Docs: splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [MDN Web Docs: spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Web Docs: array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Stack Overflow: How to append something to an array?](https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array)
- [How to append an item to an array in JavaScript](https://flaviocopes.com/how-to-append-item-to-array/)
- [JavaScript Array Methods: Mutating vs. Non-Mutating](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)
- [To mutate, or not to mutate, in JavaScript](https://slemgrim.com/mutate-or-not-to-mutate/)
- [Array Add](https://www.dyn-web.com/javascript/arrays/add.php)
- [JavaScript "Add to Array" Functions (push vs unshift vs others)](https://www.hostingadvice.com/how-to/javascript-add-to-array/)
- [push is 945x than concat](https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki)
