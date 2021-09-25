---
title: 'String - `slice()`'
tags: [javascript]
order: 6
section: String
createdAt: 2020-01-12
---

This method extracts a section of a string and returns the extracted part as a new string 🍏

Remember, JS is 0-index. So the first character has a 0 position, and the second character has a 1-position 👍

This method accepts 2 parameters: `start` and `end`

**`start`**: this is where you pass in the starting index to extract. If you don’t pass in anything, the default is 0 (or the first character).

**`end`**: this is where you pass the index before which to end the extraction. Note, the character at this index will not be included. If you don’t pass in anything, slice() will select all characters from the start point to the end.

```javascript
const name = 'samantha';
name.slice(0, 3);
```

## Examples

```javascript
const string = 'Web Basics';

string.slice(0); // Clone the string
// 'Web Basics'

string.slice(); // Default is 0, so it will just clone
// 'Web Basics'

string.slice(-1); // Get the last letter
// 's'
```

Let's see some examples with an `end` argument. I'll show you some different combination to grab the same text from our string example.

```javascript
const string = 'Web Basics';

string.slice(4, 7); // 'Bas'
string.slice(-6, -3); // 'Bas'
string.slice(4, -3); // 'Bas'
```

As to which is better? It doesn't matter, if you get the result you want then it's the best result. For me, I prefer working with positive numbers. Why? Because that's just how my brain works lol 😂. So figure out how your brain works, and go with that 😝

## Resources

- [MDN Web Docs: slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
