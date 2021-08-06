---
title: When NOT to use ES6 Arrow functions
description: Arrow functions are terrific, but not suitable for all situations. Avoid them in objects because 'this' is always scoped to the parent.
tags: [javascript, es6]
order: 3
createdAt: 2018-2-17
---

Arrow functions are terrific, but not suitable for all situations. Avoid them in objects because 'this' is always scoped to the parent -- which is the 'window' in this case.

```javascript

  type: '🍔',
  eat: () => { // Should use function() instead
    console.log(this); // 'this' is Window, not burger
  }
}

// Avoid Arrow Functions in Objects
```

## Resources

- [Arrow Function No No](https://wesbos.com/arrow-function-no-no/)
