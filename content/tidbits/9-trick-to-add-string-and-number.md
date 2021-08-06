---
title: Trick to Adding String and Number in JavaScript
description: The unary + operator is a shortcut to convert a string into a number.
tags: [javascript, string, number]
order: 9
createdAt: 2018-3-31
---

The unary + operator is a shortcut to convert a string into a number 🤩

Problem: Adding strings that contain numbers does NOT add them. Instead, the strings are concatenated ❌

Solution: Convert the string into a number. Then you can calculate the sum ✅

```javascript
const string = '100';
const number = 5;

// This doesn't return the sum, it's concatentated
console.log(string + number); // 1005

// Prepend string with "+" to calculate the sum
console.log(+string + number); // 105
```

## Resources

- [Cast to Number in JavaScript using the Unary (+) Operator](https://medium.com/@nikjohn/cast-to-number-in-javascript-using-the-unary-operator-f4ca67c792ce)
