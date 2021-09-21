---
title: Split String using ES6 Spread
description: Convert a string to an array of characters using the spread syntax.
tags: [javascript, array, string]
order: 12
createdAt: 2018-04-21
updatedAt: 2018-04-21
---

Convert a string to an array of characters using the spread syntax!

It goes through each character in the “pizza” string and assigns it to our new “splitPizza” array. Very cool 🤩

```javascript
const pizza = 'pizza';

// Old way
const slicedPizza = pizza.split('');
console.log(slicedPizza); // [ 'p', 'i', 'z', 'z', 'a' ]

// ES6: using Spread
const slicedPizza2 = [...pizza];
console.log(slicedPizza2); // [ 'p', 'i', 'z', 'z', 'a' ]

// ES6: using Array.from
const slicedPizza3 = Array.from(pizza);
console.log(slicedPizza3); // [ 'p', 'i', 'z', 'z', 'a' ]
```

## Example

### Capitalizing String

Here's a good use case as to why you would want to split strings.

```javascript
const name = 'samantha';

const capitalizeName = [
  // Capitalize the first character of the array
  ...name[0].toUpperCase(),

  // Ignore the first character and return the return the rest of the array
  ...name.slice(1),
]
  // Join the array to make a single string
  .join('');

console.log(capitalizeName); // Samantha
```

## Community Suggestions

### Split doesn't work with Emojis

Not only is using spread more concise, but there are consequences to using split when multi-byte #UTF8 chars are involved such as emoji characters.

```javascript
// Using Split
'pizza🍕'.split(''); // [ 'p', 'i', 'z', 'z', 'a', '�', '�' ]

// Using Spread
[...'pizza🍕']; // [ 'p', 'i', 'z', 'z', 'a', '🍕' ]

// Using Array.from
Array.from('pizza🍕'); // [ 'p', 'i', 'z', 'z', 'a', '🍕' ]
```

_Thanks: [@donavon](https://twitter.com/donavon/status/987764794320093185)_

### Explaining Emoji

And the reason why split spits out garbled results is because the '🍕' emoji has a length of 2. It is a surrogate pair of unicode code points. With the split method, it splits this pair apart, hence resulting in 2 giberish results.

```javascript
'🍕'.length; // 2

// The pizza emoji is made up of a surrogate pair
'🍕'.charCodeAt(0); // 55356
'🍕'.charCodeAt(1); // 57173

// The code in its individual form result in an odd return
String.fromCharCode(55356); // '�'
String.fromCharCode(57173); // '�'

// But in its combined form, it gives you back the pizze emoji
String.fromCharCode(55356, 57173); // '🍕'
```

_Thanks: Aleksandar H_

## Resources

- [Stackoverflow: Why does spread syntax convert my string into an array?](https://stackoverflow.com/questions/44900175/why-does-spread-syntax-convert-my-string-into-an-array)
- [MDN: Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Emoji.prototype.length](https://www.contentful.com/blog/2016/12/06/unicode-javascript-and-the-emoji-family/)
- [What every JavaScript developer should know about Unicode](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)
- [Iterating Over Emoji Characters the ES6 Way](https://medium.com/@giltayar/iterating-over-emoji-characters-the-es6-way-f06e4589516)
