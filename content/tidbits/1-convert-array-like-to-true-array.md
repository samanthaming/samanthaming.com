---
title: Convert Array-like to True Array in JavaScript
description:
tags: [javascript, array, es6]
order: 1
createdAt: 2018-02-10
updatedAt: 2018-02-10
---

This is cool! Learning something new @wesbos ES6 course 🔥

```javascript
const nodeList = document.querySelectorAll('ul li');

// Method 1: Convert to true Array
Array.from(nodeList);

// Method 2: Convert to true Array
[...nodeList];

// Now you can use map and other methods to loop
```

## Resources

- [Wes Bos: ES6 Array.from() and Array.of()](<https://github.com/wesbos/es6-articles/blob/master/25%20-%20Array.from()%20and%20Array.of().md>)
