---
title: How to Set Dynamic Property Keys with ES6
description: Previously, we always had to use the bracket notation to use a dynamic key. With ES6, we can finally create dynamic variable key in the object declaration.
tags: [javascript, es6]
order: 37
createdAt: 2018-10-13
---

Previously, we had to do 2 steps - create the object literal and then use the bracket notation. With ES6, you can now directly use a variable as your property key in your object literal. YAY! 👏

```javascript
let cake = '🍰';

// ❌ Old way requires 2 steps
let pan = {
  id: 1,
};
pan[cake] = '🥞';

// ✅ YAY, much easier with ES6
let pan = {
  id: 1,
  [cake]: '🥞',
};
```

<markdown-toc></markdown-toc>

## The 3 ways to access the object value

We can output the object value by passing in the appropriate key. Because I used emoji as the key in my example, it's a bit tricky. So let's look at a easier example.

```javascript
let me = {
  name: 'samantha',
};

// 1. Dot notation
me.name; // samantha

// 2. Bracket notation (string key)
me['name']; // samantha

// 3. Bracket notation (variable key)
let key = 'name';
me[key]; // samantha
```

## How to Access Object Value With Emoji Keys

Alright back to our emoji example. Let's take a look at the output.

```javascript
let cake = '🍰';

let pan = {
  [cake]: '🥞',
};

// Output -> { '🍰': '🥞' }
```

Unfortunately, when you're using an Emoji as a key, you won't be able to use the dot notation. You're limited to the Bracket Notation.

```javascript
// 2. Bracket notation (string key)
pan['🍰']; // '🥞'

// 3. Bracket notation (variable key)
let key = '🍰';
me[key]; // '🥞'
```

## Resources

- [MDN Web Docs - Computed Property Names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)
- [w3schools: JavaScript Properties](https://www.w3schools.com/js/js_object_properties.asp)
