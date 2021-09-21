---
title: 'Array - `join()`'
tags: [javascript]
order: 3
section: Array
createdAt: 2020-01-12
---

Welcome back to my weekly Web Basics, a series on essential programming topics every web developer should absolutely know!

Today’s lesson is about `join()`. This method pieces all the item in an array and returns a new string.

The default separator if you don’t pass in anything is commas `,` To specify your own custom separator, you just pass it as the argument. Example: `join('+')`

```javascript
const pieces = ['s', 'a', 'm'];

pieces.join('');
// 'sam'
```

## Examples

```javascript
const strings = ['Web', 'Basics', '!'];

strings.join(); // default comma (,)
// 'Web,Basics,!'

strings.join(' '); // empty space
// 'Web Basics !'

strings.join('-'); // dash
// 'Web-Basics-!'
```

Let's look at some examples using numbers:

```javascript
const numbers = [2, 10, 5];

numbers.join(' + '); // note the blank space before and after
// '2 + 10 + 5'
```

## Resources

- [MDN Web Docs: join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
