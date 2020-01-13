# 4 Ways to Combine Strings

Happy Mother’s Day 🌷

4 ways to combine strings in JavaScript. My favourite way is using ES6’s Template Strings. Why? Because it’s more readable, no backslash to escape quotes, and no more messy plus operators.

```js
const mom = '🌷';

// ES6's Template Strings
const templateString = `Happy Mother's Day ${mom}`;

// join() Method
const joinMethod = ['Happy', 'Mother\'s', 'Day', mom].join(' ');

// Concat() Method
const concatMethod = "".concat('Happy ', 'Mother\'s ', 'Day ', mom);

// + Operator
const plusOperator = 'Happy Mother\'s Day ' + mom;
```

## Resources

- [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
