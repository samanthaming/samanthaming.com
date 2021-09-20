---
title: How to Check if Object is Empty in JavaScript
description: Here's a Code Recipe to check if an object is empty or not.
tags: [javascript, object, code recipes]
order: 94
createdAt: 2020-07-11
updatedAt: 2020-07-11
---

Here's a Code Recipe to check if an object is empty or not. For newer browsers, you can use plain vanilla JS and use the new "Object.keys" 🍦 But for older browser support, you can install the Lodash library and use their "isEmpty" method 🤖

<!-- prettier-ignore -->
```javascript
const empty = {};

/* -------------------------
  Plain JS for Newer Browser
----------------------------*/
Object.keys(empty).length === 0 && empty.constructor === Object
// true

/* -------------------------
  Lodash for Older Browser
----------------------------*/
_.isEmpty(empty)
// true
```

<markdown-toc></markdown-toc>

## What is Vanilla JavaScript

Vanilla JavaScript is not a new framework or library. It's just regular, plain JavaScript without the use of a library like Lodash or jQuery.

## A. Empty Object Check in Newer Browsers

We can use the built-in `Object.keys` method to check for an empty object.

```javascript
const empty = {};

Object.keys(empty).length === 0 && empty.constructor === Object;
```

### Why do we need an additional `constructor` check?

You may be wondering why do we need the `constructor` check. Well, it's to cover for the wrapper instances. In JavaScript, we have 9 built-in constructors.

```javascript
new Object();

new String();
new Number();
new Boolean();
new Array();
new RegExp();
new Function();
new Date();
```

So we can create an empty object with `new Object()`. Side note: you should NEVER create an object using the constructor. It's considered bad practice, see [Airbnb Style Guide](https://github.com/airbnb/javascript#objects--no-new) and [ESLint](https://eslint.org/docs/2.0.0/rules/no-new-wrappers).

```javascript
const obj = new Object();

Object.keys(obj).length === 0; // true
```

So just using the `Object.keys`, it does return `true` when the object is empty ✅. But what happens when we create a new object instance using these other constructors.

<!-- prettier-ignore -->
```javascript
function badEmptyCheck(value) {
  return Object.keys(value).length === 0;
}

badEmptyCheck(new String());    // true 😱
badEmptyCheck(new Number());    // true 😱
badEmptyCheck(new Boolean());   // true 😱
badEmptyCheck(new Array());     // true 😱
badEmptyCheck(new RegExp());    // true 😱
badEmptyCheck(new Function());  // true 😱
badEmptyCheck(new Date());      // true 😱
```

Ah ya ya, we have a false positive 😱

### Solving false positive with `constructor` check

Let's correct this by adding a constructor check.

<!-- prettier-ignore -->
```javascript
function goodEmptyCheck(value) {
  Object.keys(value).length === 0
    && value.constructor === Object; // 👈 constructor check
}

goodEmptyCheck(new String());   // false ✅
goodEmptyCheck(new Number());   // false ✅
goodEmptyCheck(new Boolean());  // false ✅
goodEmptyCheck(new Array());    // false ✅
goodEmptyCheck(new RegExp());   // false ✅
goodEmptyCheck(new Function()); // false ✅
goodEmptyCheck(new Date());     // false ✅
```

Beautiful! We have covered our edge case 👍

### Testing empty check on other values

Alright, let's test our method on some values and see what we get 🧪

```javascript
function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
```

Looks good so far, it returns `false` for non-objects.

<!-- prettier-ignore -->
```javascript
isEmptyObject(100)  // false
isEmptyObject(true) // false
isEmptyObject([])   // false
```

🚨But watch out! These values will throw an error.

```javascript
// TypeError: Cannot covert undefined or null ot object
goodEmptyCheck(undefined);
goodEmptyCheck(null);
```

### Improve empty check for `null` and `undefined`

If you don't want it to throw a `TypeError`, you can add an extra check:

<!-- prettier-ignore -->
```javascript
let value;

value // 👈 null and undefined check
 && Object.keys(value).length === 0 && value.constructor === Object;

value = null;       // null
value = undefined;  // undefined
```

Perfect, no error is thrown 😁

## B. Empty Object Check in Older Browsers

What if you need to support older browsers? Heck, who am I kidding! We all know when I say older browsers, I'm referring to Internet Explorer 😂 Well, we have 2 options. We can stick with vanilla or utilize a library.

### Checking empty object with JavaScript

The plain vanilla way is not as concise. But it does do the job 👍

```javascript
function isObjectEmpty(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    JSON.stringify(value) === '{}'
  );
}
```

It returns `true` for objects.

<!-- prettier-ignore -->
```javascript
isObjectEmpty({});           // true ✅
isObjectEmpty(new Object()); // true ✅
```

Excellent, it doesn't get trick by our constructor objects 😉

<!-- prettier-ignore -->
```javascript
isObjectEmpty(new String());   // false ✅
isObjectEmpty(new Number());   // false ✅
isObjectEmpty(new Boolean());  // false ✅
isObjectEmpty(new Array());    // false ✅
isObjectEmpty(new RegExp());   // false ✅
isObjectEmpty(new Function()); // false ✅
isObjectEmpty(new Date());     // false ✅
```

And we're covered for `null` and `undefined`. It will return `false` and not throw a `TypeError`.

<!-- prettier-ignore -->
```javascript
isObjectEmpty(null);      // false
isObjectEmpty(undefined); // false
```

### Checking empty object with external libraries

There are tons of external libraries you can use to check for empty objects. And most of them have great support for older browsers 👍

**Lodash**

```javascript
_.isEmpty({});
// true
```

**Underscore**

```javascript
_.isEmpty({});
// true
```

**jQuery**

```javascript
jQuery.isEmptyObject({});
// true
```

### Vanilla vs Libraries

The answer is it depends! I'm a huge fan of going vanilla whenever possible as I don't like the overhead of an external library. Plus for smaller apps, I'm too lazy to set up the external library 😂. But if your app already has an external library installed, then go ahead and use it. You will know your app better than anyone else. So choose what works best for your situation 👍

## Conscious Decision Making

- _[@lexLohr](https://twitter.com/lexLohr/status/1282280901808992256?s=20):_ Like most things in development, it's a compromise. A good developer is aware of the available options. A great developer is also aware of their implications.

I love this mindset so much! Often, we have to make some compromises. And there's nothing wrong with that. Especially, when you work within a team, sometimes disagreement arises. But in the end, we have to make a decision. This doesn't mean we blind ourselves from other options. Quite the opposite, we do our best to seek other possible solutions and understand each implication. That's how we can make an informed decision. Maybe compromise is not the right word, I think of it as "conscious decision making" 😆

Yup, I too can coin terms, just like Gwyneth Paltrow's [conscious uncoupling](https://www.nytimes.com/2014/03/30/fashion/gwyneth-paltrow-and-chris-martins-separation-gives-phrase-conscious-uncoupling-a-boost.html). Maybe I should start a tech version of Goop...but minus the jade roller and the other "interesting" products 😂

## Community Input

- [@lexLohr](https://twitter.com/lexLohr/status/1282028571725307904?s=20)

```javascript
for (var key in object) {
  if (object.hasOwnProperty(key)) {
    return false;
  }
}
return true;
```

- [@amanboss_9](https://twitter.com/amanboss_9/status/1282154730844635136?s=20)

```javascript
Object.prototype.toString.call(a) == '[object Object]' &&
  JSON.stringify(a) == '{}';
```

- _[@kevinsar](https://www.instagram.com/p/CCgyefXA_GX/):_ Lodash tends to throw security exceptions in analysis tools like sonarqube and whitesource, I tend to just create my own util function and use vanilla instead.

  - _[@sush_keny](https://www.instagram.com/p/CCgyefXA_GX/):_ (Because of) prototype pollution

- _[@functional_js](https://dev.to/functional_js/comment/123g0):_ [isNotObj Gist](https://gist.github.com/funfunction/b4b41804615a0ffce0c31b016de3f848)

## Resources

- [MDN: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [w3schools: Built-in JavaScript Constructors](https://www.w3schools.com/JS/js_object_constructors.asp)
- [Stack Overflow: Is object empty?](https://stackoverflow.com/questions/4994201/is-object-empty)
- [Stack Overflow: How do I test for an empty JavaScript object?](https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object)
- [CSS Tricks: Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)
- [JavaScript's Primitive Wrapper Objects](http://adripofjavascript.com/blog/drips/javascripts-primitive-wrapper-objects.html)
- [Wrapper Objects](https://programmingwithmosh.com/javascript/javascript-wrapper-objects/)
- [JavaScript’s Primitive Wrapper Objects](https://dev.to/abdelrahmanahmed/javascript-s-primitive-wrapper-objects-4agb)
- [ESLint: Disallow Primitive Wrapper Instances](https://eslint.org/docs/2.0.0/rules/no-new-wrappers)
- [Airbnb: no-new-object](https://github.com/airbnb/javascript#objects--no-new)
- [Lodash: isEmpty](https://lodash.com/docs/4.17.15#isEmpty)
- [Underscore: isEmpty](https://underscorejs.org/#isEmpty)
- [jQuery: isEmptyObject](https://api.jquery.com/jquery.isemptyobject/)
