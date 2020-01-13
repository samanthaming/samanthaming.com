# String - `toLowerCase()`

If you’ve been following this series, I talked about uppercase() a few weeks ago. Well here’s the opposite of it. It takes your string and convert it all to lowercase 👍

```javascript
const name = 'SaMaNthA';

name.toLowerCase();
// 'samantha'
```

## Examples

Let’s take a look at some use cases with this method. As you can see, it doesn’t affect the original string. If you have a string with numbers, well there’s no uppercase version of it, so it remains unchanged.

```javascript
const original = 'WeB BasIcS 102';
const lower = original.toLowerCase();

original; // 'WeB BasIcS 102'
lower; // 'web basics 102'
```

### `toLowerCase()` No No's ❌

One thing to note, this method is only applicable for strings. If you try to pass in other data types (such as null, undefined, or number), it will throw an error. You will get a TypeError. So make sure you check the type before passing it into this function, otherwise your app will crash.

```javascript
// ⚠️ Other Data Types Won't Work!

null.toLowerCase(); // TypeError
undefined.toLowerCase(); // TypeError
['hey'].toLowerCase(); // TypeError
(75).toLowerCase(); // TypeError
```

## Resources

- [MDN Web Docs: toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
