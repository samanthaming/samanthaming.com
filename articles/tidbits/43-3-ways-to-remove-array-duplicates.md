# How to Remove Array Duplicates in ES6

Here are 3 ways to filter out duplicates from an array and return only the unique values. My favorite is using Set cause it’s the shortest and simplest 😁

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// 1: "Set"
[...new Set(array)];

// 2: "Filter"
array.filter((item, index) => array.indexOf(item) === index);

// 3: "Reduce"
array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
);

// RESULT:
// ['🐑', 1, 2, 3];
```

[[toc]]

## 1. Using `set`

Let me start first by explaining what Set is:

`Set` is a new data object introduced in ES6. Because `Set` only lets you store unique values. When you pass in an array, it will remove any duplicate values.

Okay, let's go back to our code and break down what's happening. There are 2 things going on:

1. First, we are creating a new `Set` by passing an array. Because `Set` only allows unique values, all duplicates will be removed.
2. Now the duplicates are gone, we're going to convert it back to an array by using the spread operator `...`

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// Step 1
const uniqueSet = new Set(array);
// Set { '🐑', 1, 2, 3 }

// Step 2
const backToArray = [...uniqueSet];
// ['🐑', 1, 2, 3]
```

### Convert `Set` to an Array using `Array.from`

Alternatively, you can also use `Array.from` to convert a `Set` into an array:

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

Array.from(new Set(array));

// ['🐑', 1, 2, 3]
```

## 2: Using `filter`

In order to understand this option, let's go through what these two methods are doing: `indexOf` and `filter`

### indexOf

The `indexOf` method returns the first index it finds of the provided element from our array.

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.indexOf('🐑'); // 0
array.indexOf(1); // 1
array.indexOf(2); // 2
array.indexOf(3); // 5
```

### filter

The `filter()` method creates a new array of elements that pass the conditional we provide. In other words, if the element passes and returns `true`, it will be included in the filtered array. And any element that fails or return `false`, it will be NOT be in the filtered array.

Let's step in and walk through what happens as we loop through the array.

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.filter((item, index) => {
  console.log(
    // a. Item
    item,
    // b. Index
    index,
    // c. indexOf
    array.indexOf(item),
    // d. Condition
    array.indexOf(item) === index,
  );

  return array.indexOf(item) === index;
});
```

Below is the output from the console.log showed above. The duplicates are where the index doesn’t match the indexOf. So in those cases, the condition will be false and won’t be included in our filtered array.

| Item | Index | indexOf | Condition |
| ---- | ----- | ------- | --------- |
| 🐑   | 0     | 0       | **true**  |
| 1    | 1     | 1       | **true**  |
| 2    | 2     | 2       | **true**  |
| 🐑   | 3     | 0       | false     |
| 🐑   | 4     | 0       | false     |
| 3    | 5     | 5       | **true**  |

### Retrieve the duplicate values

We can also use the filter method to retrieve the duplicate values from the array. We can do this by simply adjusting our condition like so:

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.filter((item, index) => array.indexOf(item) !== index);

// ['🐑','🐑']
```

Again, let step through this and see the output:

| Item | Index | indexOf | Condition |
| ---- | ----- | ------- | --------- |
| 🐑   | 0     | 0       | false     |
| 1    | 1     | 1       | false     |
| 2    | 2     | 2       | false     |
| 🐑   | 3     | 0       | **true**  |
| 🐑   | 4     | 0       | **true**  |
| 3    | 5     | 5       | false     |

## 3: Using `reduce`

The `reduce` method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.

In this case, our reducer function is checking if our final array contains the item. If it doesn't, push that item into our final array. Otherwise, skip that element and return just our final array as is (essentially skipping over that element).

Reduce is always a bit more tricky to understand, so let's also step into each case and see the output:

```javascript
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.reduce((unique, item) => {
  console.log(
    // a. Item
    item,
    // b. Final Array (Accumulator)
    unique,
    // c. Condition (Remember it only get pushed if this returns `false`)
    unique.includes(item),
    // d. Reducer Function Result
    unique.includes(item) ? unique : [...unique, item],
  );

  return unique.includes(item) ? unique : [...unique, item];
}, []); // 👈 The initial value of our Accumulator is an empty array

// RESULT:
// ['🐑', 1, 2, 3];
```

And here's the output from the console.log:

| Item | Accumulator (BEFORE Reducer Function) | Push to Accumulator? | Accumulator (AFTER Reducer Function) |
| ---- | ------------------------------------- | -------------------- | ------------------------------------ |
| 🐑   | `[]`                                  | **Yes**              | `[ '🐑' ]`                           |
| 1    | `['🐑']`                              | **Yes**              | `[ '🐑', 1 ]`                        |
| 2    | `[ '🐑', 1 ]`                         | **Yes**              | `[ '🐑', 1, 2 ]`                     |
| 🐑   | `[ '🐑', 1, 2 ]`                      | No                   | `[ '🐑', 1, 2 ]`                     |
| 🐑   | `[ '🐑', 1, 2 ]`                      | No                   | `[ '🐑', 1, 2 ]`                     |
| 3    | `[ '🐑', 1, 2 ]`                      | **Yes**              | `[ '🐑', 1, 2, 3 ]`                  |

## Resources

- [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN Web Docs - Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [GitHubGist: Remove duplicates from JS array](https://gist.github.com/telekosmos/3b62a31a5c43f40849bb)
- [CodeHandbook: How to Remove Duplicates from JavaScript Array](https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/)
