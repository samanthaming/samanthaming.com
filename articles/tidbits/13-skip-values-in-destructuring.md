# Skipping Values In JavaScript Destructuring

You can use blanks to skip over unwanted values 🤓

This way you can avoid useless variable assignments for values you don’t want during destructuring 👍

You can also prefix "\_" followed by the variable name you're disregarding. This helps communicates to your team member that it's a useless variable 🤝

```javascript
// ❌ Ugh, useless variable assignment
const [ignore, keep] = ['ignore', 'keep'];

// ✅ Good (blank space)
const [, keep] = ['ignore', 'keep'];

// ✅ Good ("_" communicates useless variable)
const [_ignore, keep] = ['ignore', 'keep'];
```

## Add Comments to Improve Code Readability

When using the blank space option to skip over values, you can also add comments. This will help communicate to your fellow developers that you are intentionally skipping over the unwanted values.

<!-- prettier-ignore -->
```js
let [
  chili,
  , // rotten
  , // rancid
  apple,
  olive,
] = ['chili', 'rotten', 'rancid', 'apple', 'olive'];

// OR

let [
  chili,
  /* rotten */,
  /* rancid */,
  keep,
  olive
] = ['chili', 'rotten', 'rancid', 'keep', 'olive'];
```

## Simple Use Case

Here is a simple use case where this could be helpful.

<!-- prettier-ignore -->
```javascript
const url = 'www.samanthaming.com/tidbit.jpg';

// 1. Split string by "."
const array = url.split('.'); // [ 'www', 'samanthaming', 'com/tidbit', 'jpg' ]

// 2. Create only the variable we want
const [ , domain, ,type] = array;

// 3. Consuming the variable we created
const name = `${domain}.${type}`;
// 'samanthaming.jpg'
```

## Community Input

_[@komputarist](https://twitter.com/komputarist/status/1231469117816877056?s=20):_ The underscore will be quite helpful. At least someone reading the codes won't have to trace what the variables look like. It can be stressful though when there are lots of variables in the destructured item (array or object).

_[@FPresencia](https://twitter.com/FPresencia/status/1231509593064398854?s=20):_ Learning that you can do `[ , valueICareAbout]` has been very useful. As most linters complain about unused variables.

_[@Erik](https://twitter.com/ErikSjaastad/status/1231332363818287105?s=20):_ In TypeScript the convention is just `_`

_[@sulco](https://twitter.com/sulco/status/990952399060832257)_ Agreed, but always look at it pragmatically and have code readability in mind. It can get to absurd situation of making your fellow developer (or you in a future) to have to start counting commas to understand the code ;-)

```javascript
const values = ['ignore', 'ignore', 'keep'];

// ❌ Don't do useless variable assignment
const [a, b, c] = values;

// ✅ if all you need is one value...
const [, keep] = ['ignore', 'keep'];

// 🦄 But also, don't overhack it:
let c = values[2]; // simpler is better
```

<br>

_[@SamHulick](https://twitter.com/SamHulick):_ Parsing comma-deliminated data and grabbing only what you need.

```js
const tooMuchData = '33871,LOC,type1,99.27,FN';
const [, , , price] = tooMuchData.split(',');

console.log(price); // 99.27
```

<br>

_[@zornwebdev](https://twitter.com/zornwebdev/status/1231595452254085120?s=21):_ Or, you can even destructure an array like an object where the key is the index and then you rename the key to the variable name you want `const {1: name} = ['ignore', 'keep']`. The value for `name` would be `keep` due to that being the value at index 1 in the array.

<br>

_[@fetishlace](https://twitter.com/fetishlace/status/1232104714533208065?s=21):_ Or you can even (<-good start for syntactic gymnastics show:D) destructure the length and dynamically use it to get the last item, not knowing that index:

```javascript
const { length: l, [l - 1]: last } = ['one', 'two', 'three', 'four', 'five'];

console.log(last); // 'five'
```

☝️ This example is pretty gangster. It's destructuring the `length` from the array and assigning it to a new variable `l`. I can also write this without the assignment.

<!-- prettier-ignore -->
```javascript
const {
  length,
  [length - 1]: last
} = ['one', 'two', 'three', 'four', 'five'];

console.log(last); // 'five'
```

## Resources

- [MDN Web Docs: Destructuring - Ignoring some returned values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values)
- [Advanced ES6 Destructuring Techniques](http://untangled.io/advanced-es6-destructuring-techniques/)
- [Stack Overflow: How can I ignore certain returned values from array destructuring?](https://stackoverflow.com/questions/46775128/how-can-i-ignore-certain-returned-values-from-array-destructuring)
