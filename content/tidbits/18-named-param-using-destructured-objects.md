---
title: Named Parameters using JavaScript Destructured Objects
description: Since JavaScript doesn’t natively support named parameters. Here's a solution using object. No more worrying about the specific order of inserting your arguments
tags: [javascript, object]
order: 18
createdAt: 2018-06-02
updatedAt: 2020-07-17
---

Yay, Destructured Objects to the rescue 🎉

Since JavaScript doesn’t natively support named parameters. This is a cool way around this issue. No more worrying about the specific order of inserting your arguments 👍

```javascript
// Boo, arguments must be in specific order
function meal(protein, carb, veggie) {}
meal('🥩', '🍚', '🥦');

// Yay, arguments can be in any order
function meal2({ protein, carb, veggie }) {}
meal2({ carb: '🍚', veggie: '🥦', protein: '🥩' });
```

Here's how you can access the value within the function

```javascript
function meal2({ protein, carb, veggie }) {
  console.log(protein, veggie, carb); // 🥩  🥦  🍚
}
meal2({ carb: '🍚', veggie: '🥦', protein: '🥩' });
```

<markdown-toc></markdown-toc>

## Add a Default to Safe Guard from Error

If you forget to pass an argument to the function, you will get a `TypeError`

```javascript
function meal2({ protein, carb, veggie }) {}

meal2(); // No Argument

// This will throw a "TypeError: Cannot destructure property ..."
```

<br/>

**Solution**: To solve this, you can set a default empty object, `{}`. So if you forget to pass an argument, you will get `undefined` instead.

<!-- prettier-ignore -->
```javascript
function meal2({ protein, carb, veggie } = {}) { // 👈

}

meal2(); // No Argument

// This will return "undefined"
```

## Combining with Default Parameters

You can also set default parameter within the object.

```javascript
function meal2({ protein = 'protein', carb, veggie } = {}) {
  console.log(
    protein, // 'protein'
    veggie, // undefined
    carb, // '🍚'
  );
}

meal2({ carb: '🍚' });
```

## Community Examples

### Combining with Optional Arguments

**RanqueBenoit**: Great if some are optional arguments too! Also for default values.

```javascript
function oneFunc(options = {}) {
  let defaults = { one: 1 };
  options = { ...defaults, ...options };

  return options.one;
}

oneFunc(); // 1
oneFunc({}); // 1
oneFunc({ one: 2 }); // 2
```

_Thanks: [@RanqueBenoit](https://twitter.com/RanqueBenoit/status/1002991906685583360)_

## Resources

- [CSS Tricks: Destructured Object Parameters](https://css-tricks.com/new-favorite-es6-toy-destructured-objects-parameters/)
- [MDN: Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)
