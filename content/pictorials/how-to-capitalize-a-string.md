---
title: How to Capitalize a Word in JavaScript
tags: [javascript]
order: 6
section: JavaScript
createdAt: 2020-01-12
---

Back to another round of Pictorials, where we solve popular algorithm challenges step-by-step with tidbits. Today, let's learn how to capitalize a word!

Here are the 4 methods I'll be covering:

- [toUpperCase()](/basics/string-touppercase)
- [slice()](/basics/string-slice)
- [charAt()](/basics/string-charat)
- [toLowerCase()](/basics/string-tolowercase)

_☝️ Click more on the methods if you want to learn more. They're covered in my [Web Basics](/basics/) series 👩🏻‍🏫_

<markdown-toc></markdown-toc>

## The Challenge

Write a function that capitalize a string.

<markdown-image img="challenge"></markdown-image>

```javascript
capitalize('sAm'); // 'Sam'
```

## 1. `toLowerCase()`

Unfortunately in JavaScript, there isn't a capitalize or title case a string. So what we can is utilize `toLowerCase()` to make the entire string lower-cased and then uppercase the first letter.

> Convert the entire string to lower case.

<markdown-image img="tolowercase"></markdown-image>

```javascript
const name = 'sAm';
const lower = name.toLowerCase();
```

## 2. `charAt()`

Let's access the first letter of our string so we can uppercase it later.

> Get the first character of the string

<markdown-image img="charat"></markdown-image>

```javascript
const name = 'sAm';
const first = name.charAt(0);
```

## 3. `toUpperCase()`

Great! Now we can uppercase that first letter.

> Transform the first character to upper case

<markdown-image img="touppercase"></markdown-image>

```javascript
const first = 's';
const upper = first.toUpperCase();
```

## 4. `slice()`

So there's 2 part of our string to complete our capitalization. The first letter which has been upper-cased and we got that with `charAt()`. Next we need the rest of our letters. And we can extract using `.slice()`.

> Extract the entire string except the first letter

<markdown-image img="slice"></markdown-image>

```javascript
const lower = 'sam';
const remain = lower.slice(1);
```

## 3. `+`

Alright, we have all the pieces. Next, we need to put it together. We can use our `+` operator to combine strings.

> Combine the strings

<markdown-image img="plus"></markdown-image>

```javascript
upper; // 'S'
remain; // 'am'

const combined = upper + remain; // 'Sam'
```

## Final Solution

Awesome! We have successfully capitalize our string 🥳

<markdown-image img="result"></markdown-image>

```javascript
function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
```

## More Solutions

### Using charAt

```javascript
function capitalize(word) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
```

### Using Bracket Notation

```javascript
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
```

### Using `substring`

```javascript
function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
```

### Using 2 steps

```javascript
function capitalize(word) {
  const loweredCase = word.toLowerCase();
  return word[0].toUpperCase() + loweredCase.slice(1);
}
```

### Using Rest parameter

```javascript
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('').toLowerCase();
}
```

### Using Map

```javascript
function capitalize(word) {
  return word
    .split('')
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .join('');
}
```

### Using Regex

```javascript
function capitalize(word) {
  return word
    .toLowerCase()
    .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}
```
