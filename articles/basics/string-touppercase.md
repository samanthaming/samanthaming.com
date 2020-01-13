# String - `toUpperCase()`

So last time, we ended our Web Basics with an Algorithm Challenge. So now we return with another new set of series. Make sure you follow every week to understand the methods. Because at the end of it, you’ll use it for the next Web Basics Challenge 👍

Today, let’s start off with something simple and learn about `toUpperCase()` — this method is used to convert all the letters in a string to uppercase. It doesn’t change the original string. Instead, it will return a new modified string 🔅

```javascript
const name = 'samantha';

name.toUpperCase();
// 'SAMANTHA'
```

## Examples

Let’s take a look at some use cases with this method. As you can see, it doesn’t affect the original string. If you have a string with numbers, there’s not uppercase of it, so that doesn’t change.

```javascript
const original = 'Web Basics 101';
const upper = original.toUpperCase();

original; // 'Web Basics 101'
upper; // 'WEB BASICS 101'
```

### `toUpperCase()` No No's ❌

One thing to note. This method is only applicable for strings. If you try to pass in other data types (such as null, undefined, or number), it will throw an error. You will get a TypeError. So make sure you check the type before passing it into this function, otherwise your app will crash.

```javascript
// ⚠️ Other Data Types Won't Work!

null.toUpperCase(); // TypeError
undefined.toUpperCase(); // TypeError
['hey'].toUpperCase(); // TypeError
(75).toUpperCase(); // TypeError
```

## Resources

- [MDN Web Docs: toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
