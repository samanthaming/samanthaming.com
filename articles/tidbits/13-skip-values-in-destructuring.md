# Skip Values In Destructuring

Skip Values in Destructuring 🎉

You can use blanks to skip over unwanted values.

This way you can avoid useless variable assignments for values you don’t want during destructuring 👍

```javascript
// Ugh, useless variable assignments
let [a,b,c] = ['ignore', 'ignore', 'keep'];
console.log(a, b, c); // ignore ignore keep

// Use blanks to skip over unwanted values
let [ , , c2] = ['ignore', 'ignore', 'keep'];
console.log(c2); // keep
```

## Community Suggestions

### Use Comments to Improve Code Readability

You can use comments within the blank spaces to make your code more readable.
This will help communicate to your fellow developers that you are intentionally skipping over the unwanted values.

_Thanks: [@sulco](https://twitter.com/sulco/status/990952399060832257)_

```js
let [
  chili,
  , // rotten
  , // rancid
  apple,
  olive
] = ['chili', 'rotten', 'rancid', 'apple', 'olive'];

// OR

let [chili, /*rotten*/, /*rancid*/, c] = ['chili', 'rotten', 'rancid', 'keep', 'olive'];
```

## Community Examples

### Parsing data from `split()`

Parsing comma-deliminated data and grabbing only what you need.

_Thanks: [@SamHulick](https://twitter.com/SamHulick)_

```js
const tooMuchData = '33871,LOC,type1,99.27,FN';
const [, , , price] = tooMuchData.split(',');

console.log(price); // 99.27
```

## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values

- http://untangled.io/advanced-es6-destructuring-techniques/

- https://stackoverflow.com/questions/46775128/how-can-i-ignore-certain-returned-values-from-array-destructuring

- http://2ality.com/2015/01/es6-destructuring.html
