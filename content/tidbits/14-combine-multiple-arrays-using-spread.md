---
title: Combine Multiple Arrays using ES6 Spread
description: Instead of using concat() to concatenate arrays, try using the spread syntax to combine multiple arrays into one flattened array.
tags: [javascript, array, es6]
order: 14
createdAt: 2018-05-05
updatedAt: 2020-07-22
---

Combine Multiple Arrays using ES6 Spread ‬🤩

Instead of using concat() to concatenate arrays, try using the spread syntax to combine multiple arrays into one flattened array👍

```javascript
let veggie = ['🍅', '🥑'];
let meat = ['🥓'];

// Old Way
let sandwich = veggie.concat(meat, '🍞');
console.log(sandwich); // [ '🍅', '🥑', '🥓', '🍞' ]

// ES6 Way
let sandwich2 = [...veggie, ...meat, '🍞'];
console.log(sandwich2); // [ '🍅', '🥑', '🥓', '🍞' ]
```

## Resources

- [Spread Operator](https://davidwalsh.name/spread-operator)
- [GitHub Gist](https://gist.github.com/yesvods/51af798dd1e7058625f4)
