# Flatten Array using Array.flat() in JavaScript

It was always complicated to flatten an array in #JavaScript. Not anymore! ES2019 introduced a new method that flattens arrays. And there's a "depth" parameter, so you can pass in ANY levels of nesting. AMAZING 🤩

```javascript
const nested = [['📦', '📦'], ['📦']];

const flattened = nested.flat();

console.log(flattened);
// ['📦', '📦', '📦']
```

[[toc]]

## Setting `depth` parameter

Here's the syntax for this method:

```javascript
array.flat(<depth>);
```

By default, `flat()` will only flatten one layer deep. In other words, `depth` is `1`.

```javascript
array.flat();

// Same as

array.flat(1);
```

## Deeper Nested Arrays

The great thing is that this method also works beyond 1 level deep. You simply have to set the appropriate `depth` parameter to flatten deeper nested arrays.

```javascript
const twoLevelsDeep = [[1, [2, 2], 1]];

// depth = 1
twoLevelsDeep.flat();
// [1, [2, 2], 1]

// depth = 2
twoLevelsDeep.flat(2);
// [1, 2, 2, 1]
```

## Infinitely Nested Arrays

Let's say, you want to go infinitely deep. Not a problem, we can do that too. Just pass `Infinity`.

```javascript
const veryDeep = [[1, [2, 2, [3, [4, [5, [6]]]]], 1]];

veryDeep.flat(Infinity);
// [1, 2, 2, 3, 4, 5, 6, 1]
```

## Array with Empty Slots

One other cool thing that `flat()` can do is remove empty slots in an array.

```javascript
const missingNumbers = [1, , 3, , 5];

missingNumbers.flat();
// [1, 3, 5];
```

## Browser Support

`flat` is a super new feature introduced in ES2019, so forget Internet Explorer or Edge. But no surprise there 😅

| Browser           |     |
| ----------------- | --- |
| Chrome            | ✅  |
| Firefox           | ✅  |
| Safari            | ✅  |
| Edge              | ✅  |
| Internet Explorer | ❌  |

[Browser Support: flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#Browser_compatibility)

## Alternative Solution

Since support is not great. Here are some alternative solutions.

### ES6 Solution

Here is a ES6 solution. This only work for one level nested array.

```javascript
const oneLevelDeep = [[1, 2], [3]];

const flattened = [].concat(...oneLevelDeep);
// [1, 2, 3,]
```

### Older Browser Solution

Here's one for older browser and pre ES6. Again, this only works for one level nested array.

```javascript
const oneLevelDeep = [[1, 2], [3]];

const flattened = [].concat.apply([], oneLevelDeep);
// [1, 2, 3,]
```

### Recursion

For arrays with deeper nesting, you can use recursion. Here's the solution from [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#Alternative):

```javascript
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

## Community Input

_[@willvincent](https://twitter.com/willvincent/status/1288892504188821504?s=21):_ Worth noting though, flat() doesn't remove nulls, just literal _empty_ slots.

```javascript
foo = [1, 4, null, true, false, , 'apple']; // [1, 4, null, true, false, <1 empty item> ,'apple']

foo.flat(); // [1, 4, null, true, false, ,'apple']

foo.filter(i => i); // [1, 4, true, 'apple']
```

Q: Syntactic sugar for just `.filter(elem => elem !== undefined)`, I guess?

- _[@bradkovach](https://twitter.com/bradkovach/status/1289070574635905025?s=21):_ Not syntactic sugar. Flat is for collapsing multi-dimensional arrays. <br> `[1,2,3, [4,5,6], 789].flat()` becomes `[1,2,3,4,5,6,7,8,9]` <br> Removing undefined indices is a side effect of the flattening process.

Q: Does `flat()` preserve the index numbering?

- _[@bradkovach](https://twitter.com/bradkovach/status/1289070989595222017?s=21):_ It’s for flattening nested arrays to a specified depth. Removing empty indices is a side effect of the flattening process.

**💬 Got any interesting use cases of Array.flat()?**

- _[@hocine_abdellatif](https://www.instagram.com/hocine_abdellatif/):_ A little far use case but probably worth mentioning, in machine learning if you have for example an array of generations, each generation is an array of students, if you want to have every student from every generation,this method will be very practical.

- _[@devjacks](https://twitter.com/devjacks/status/1155273208595021825?s=20):_ I wrote a code test with a problem like this a few weeks ago. This would have made my life so much easier! 😂

```javascript
// Please write a function to search for 213

function search(needle, haystack) {}

const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 177, [98, [210, [213]]]]]]];
const needle = 213;
```

## Resources

- [MDN Web Docs: flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Alligator: Flatten Arrays in Vanilla JavaScript with flat and flatMap](https://alligator.io/js/flat-flatmap/)
- [Flatten array of arrays with JavaScript](http://joelabrahamsson.com/flatten-array-of-arrays-with-javascript/)
- [Stack Overflow: Merge/flatten an array of arrays](https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays)
- [Flattening multidimensional Arrays in JavaScript](https://www.jstips.co/en/javascript/flattening-multidimensional-arrays-in-javascript/)
- [Flattening Arrays in JavaScript with flat and flatMap](https://davidtang.io/2019/03/09/flattening-arrays-in-javascript-with-flat-and-flatMap.html)
