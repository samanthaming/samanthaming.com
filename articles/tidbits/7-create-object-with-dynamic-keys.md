# ES6 Way of Creating Object with Dynamic Keys

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
