---
title: 'String - `charAt()`'
tags: [javascript]
order: 5
section: String
createdAt: 2020-01-12
---

Welcome back to our Web Basics, a series on essential programming topics every web developer should absolutely know 🍏

Let’s step up our game a bit today with `charAt()` - This method returns the character at the specified index of a string.

`charAt()` — the default is 0. That means it returns the first letter. Remember, array in JS are 0-indexed. So if you leave it empty or try to pass it anything else such as a string, null, undefined, false, the default will take over and you will get the first letter.

```javascript
const name = 'samantha';

name.charAt(0); // 's'
```

## Examples

```javascript
const text = 'Web Basics';

text.charAt(); // Remember, default is 0
// 'W'

text.charAt(text.length - 1); // Get the last letter
// 's'

text.charAt(1000); // Out of rand index
// ''
```

So `charAt()` accepts numbers. What happens if you try to pass in something else 🤔

```javascript
const text = 'Web Basics';

text.charAt('B'); // 'W'
text.charAt(null); // 'W'
```

If you try to pass in anything else, it would just default to `0` and return the first letter.

## Resources

- [MDN Web Docs: charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
