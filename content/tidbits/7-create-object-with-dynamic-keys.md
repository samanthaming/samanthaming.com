---
title: Creating Objects with ES6 Dynamic Keys
description:
tags: [javascript, object]
order: 7
createdAt: 2018-03-17
updatedAt: 2020-07-17
---

Easier way to create objects with dynamic keys 💪

Previously, we always had to use the bracket notation to use a dynamic key. With ES6, we can finally create dynamic variable key in the object declaration. Woohoo! 🤩

```javascript
var key = '🔑';

// Old Way
var lock = {};
lock[key] = 'unlock';

// New Way
var lock = {
  [key]: 'unlock';
}
```
