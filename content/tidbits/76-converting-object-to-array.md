---
title: Converting Object to an Array
description: Finally with ES2017, it's official now! We have 3 variations to convert an Object to an Array in JavaScript
tags: [javascript, es6, object, array]
order: 76
createdAt: 2019-08-26
updatedAt: 2019-08-26
---

Finally, with ES2017, it's official now! We have 3 variations to convert an Object to an Array 🎊

Array has an array of methods (sorry, bad pun 😝). So by converting the object into an array, you have access to all of that. Woohoo 🥳

```javascript
const zoo = {
  lion: '🦁',
  panda: '🐼',
};

Object.keys(zoo);
// ['lion', 'panda']

Object.values(zoo);
// ['🦁', '🐼']

Object.entries(zoo);
// [ ['lion', '🦁'], ['panda', '🐼'] ]
```

<markdown-toc></markdown-toc>

## Time for a story...

### Ancient times

Long long ago, in a far far galaxy, looping over Objects was not so easy. Okay, I'm exaggerating a bit 😅. But I remember whenever I needed to convert an `object` into an `array`, I had to do something like this.

```javascript
var numbers = {
  one: 1,
  two: 2,
};

var keys = [];

for (var number in numbers) {
  if (numbers.hasOwnProperty(number)) {
    keys.push(number);
  }
}

keys; // [ 'one', 'two' ]
```

I always was so angry and wished there was a better way...

### ES6 - `Object.keys`

And then ES6 happened! My life changed! We finally have an easier way 🥳

Now, there was a built-in method that quickly turns all the keys in my object into an array:

```javascript
const numbers = {
  one: 1,
  two: 2,
};

Object.keys(numbers);
// [ 'one', 'two' ]
```

Life was beautiful! But then I became angry again. Why can I only extract the keys, I want my values too! Humans always want more don't we 😂 And then ES2017 rolled in...

### Object.values

Hi, I'm ES2017 and I grant you all your wish 🧞‍♀️. you can now easily extract the values into an array with one method.

```javascript
const numbers = {
  one: 1,
  two: 2,
};

Object.values(numbers);
// [ 1, 2 ]
```

### Object.entries

But ES2017 didn't stop there. It gave me more! I grant you BOTH keys and values now, so stop being angry. I was blown away. It turned my frown upside down 😆

```javascript
const numbers = {
  one: 1,
  two: 2,
};

Object.entries(numbers);
// [ ['one', 1], ['two', 2] ]
```

Booya 👊

### Object.entries + Destructuring

But then I'm like...nested array 🤨. C'mon, that's not fun to work with. ES6 swoops in and like, don't worry! That's why I gave you destructuring!

```javascript
const numbers = {
  one: 1,
};

const objectArray = Object.entries(numbers);

objectArray.forEach(([key, value]) => {
  console.log(key); // 'one'
  console.log(value); // 1
});
```

ES6, that's why you are simply the best 💛

## End of story

Hope you enjoyed my code story-telling time 😂

Now go out there and have some fun with all these amazing Object methods 😊

## Browser Support

`Object.keys` has the best support. When I say best, it means it supports Internet Explorer 😆. The other, `Object.values` and `Object.entries`, unfortunately, don't support Internet Explorer. Luckily, polyfill exists which can improve support.

**Polyfill**

- [MDN: Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill)
- [MDN: Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values#Polyfill)
- [MDN: Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Polyfill)

## But wait, there's more...

Your next question might be, now how do I convert the array back to an object. Don't worry, that's covered. There is a new method called `Object.fromEntries`. It essentially is the opposite of `Object.entries`.

```javascript
const array = [
  ['one', 1],
  ['two', 2],
];

Object.fromEntries(array);
// { one: 1, two: 2 }
```

[MDN: Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

Note: This is extremely new, so support will be limited. Keep this in your knowledge box, but maybe wait a bit longer before you put it in your actual toolbox 🧰

## Community Input

- _[@podfeet](https://twitter.com/podfeet/status/1188467945984249856?s=20):_ I wanted to create an object in a specific form, so I used `object.keys` to discover the indices of the specific elements I wanted to extract.

## Resources

- [MDN Web Docs: Iterating over properties of an object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#Example.3a_Iterating_over_the_properties_of_an_object)
- [MDN Web Docs: Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Web Docs: Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)
- [MDN Web Docs: Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [TC39: Object.fromEntries Proposal](https://github.com/tc39/proposal-object-from-entries)
