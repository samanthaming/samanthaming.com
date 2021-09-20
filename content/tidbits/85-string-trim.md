---
title: How to Trim String in JavaScript
description: It's super simple to remove whitespace from a string. trimStart is to remove leading whitespace, trimEnd will remove trailing, and trim will remove it all.
tags: [javascript, string]
order: 85
createdAt: 2020-04-12
updatedAt: 2020-07-17
---

It's super simple to remove whitespace from a string. To remove just the leading whitespace, you can use `trimStart()`. To remove trailing whitespace, use `trimEnd()`. Or remove it all with `trim()` 🙌

<!-- prettier-ignore -->
```javascript
const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimEnd();   // "   hi"
string.trim();      // "hi"
```

<markdown-toc></markdown-toc>

## Trim Return Value

All trim methods, will return a new string. That means your original string will be left intact.

<!-- prettier-ignore -->
```javascript
const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimEnd();   // "   hi"
string.trim();      // "hi"

string;            // "   hi   "
```

## What is Whitespace

So `trim` removes whitespace. So that is the white space created by:

- space
- tab
- no-break space
- line terminator characters

### Trimming Line Terminator Characters

You might be wondering what are [line terminator characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Line_terminators). Well, let's take a look at some examples.

```javascript
'hi \n'.trim(); // "hi"

'hi \t'.trim(); // "hi"

'hi \r'.trim(); // "hi"
```

## Multi-line String

In JavaScript, you can easily create multi-line strings using the **Template Literals**. So if you're wondering if `trim` works with that, you bet it does 👍

```javascript
const multiLine = `
hi


`;

multiline.trim(); // "hi"
```

## Trimming Multiple Words

Remember `trim` only works for whitespace at the start and end. So it doesn't trim the space in between words.

```javascript
'  hi there  '.trim(); // "hi there"
```

### Multi-Line of Multiple Words

Same with multi-line, it only trims the beginning of the first word and the ending of the last word.

```javascript
const multiLine = `
hi

there


`;

// Returns

"hi

there"
```

## Trim Aliases

### trimStart vs trimLeft

`trimStart` removes the leading white space. So all the whitespace from the beginning of a string to the first non-whitespace character will be gone.

You might also see people using `trimLeft()`. Well, that's because it's an alias. It does the same thing.

<!-- prettier-ignore -->
```javascript
const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimLeft();  // "hi   "
```

### trimEnd vs trimRight

`trimEnd` removes the trailing white space. So all the whitespace from the end of a string will be gone. The alias of this method is `trimRight()`. Again, they do the same thing.

<!-- prettier-ignore -->
```javascript
const string = "   hi   ";

string.trimEnd();   // "   hi"
string.trimRight(); // "   hi"
```

### Which one should I use?

So which one should you use? Well, let's see what the [ECMAScript Specification](https://ecma-international.org/ecma-262/10.0/index.html#sec-string.prototype.trimstart) says:

> The property `trimStart` nad `trimEnd` are preferred. The `trimLeft` and `trimRight` property are provided principally for compatibility with old code. It is recommended that the trimStart property be used in new ECMAScript code.

`trimStart` and `trimEnd` for the win 👑

### Why are there aliases?

So `trimLeft` and `trimRight` were introduced first. However, the committee decided to propose a word change to `trimStart` and `trimEnd` instead. That's because it's more consistent to their other built-in methods, `padStart` and `padEnd`. Which makes sense to me, I think consistency is key and using the same language helps lessen confusion.

But for web compatibility reasons, they're keeping the old terms (`trimLeft` and `trimRight`) as aliases. So if your code is using the older methods, no problem, they will still work 👍 However if you have the capacity, I'd recommend you changing it to use the official ones instead of the alias so you don't have two different methods floating around in your codebase. Remember it's all about that consistency 😎

## Trim Methods Use Case

**trim**

I mostly used `trim()`. Very handy to remove whitespace for a form input 👍

```html
<input type="text" id="search" />
```

```javascript
const inputValue = document.getElementById('search').value.trim();
```

You can also use it to remove odd whitespaces in a sentence and format it properly. Essentially creating your very own sentence prettier 💅

<!-- prettier-ignore -->
```javascript
const uglySentence = "One  Two   Three Four   ";

const prettySentence = uglySentence
    .split(' ') // ["One", "", "Two", "", "", "Three", "Four", "", "", ""]
    .filter(word => word) // ["One", "Two", "Three", "Four"]
    .join(' '); // "One Two Three Four"

// ✅ Result
console.log(prettySentence); // "One Two Three Four"
```

**trimStart**

I haven't used this before. But I can see where this can be handy. Take a Markdown file. You would want to preserve the leading whitespaces. But with the trailing whitespaces, you might want to automatically get rid of it so it doesn't render out a confusing or unexpected result for your user.

```bash
- List Item
  - Sub List Item
  - Sub List Item
```

**trimEnd**

I don't have a great example for this one. But if I stayed with the Markdown file example. We might want to prohibit nested listed items. However, we still want to preserve trailing whitespace. In Markdown, if you use insert two whitespaces, it will create a line break. I'm going to denote whitespaces with a dot `·`, so you can see what's going on.

Markdown won't create a line break here

```javascript
hi
there

// Result
hi there
```

To force a line break, you can add 2 spaces.

<!-- prettier-ignore -->
```javascript
hi··
there

// Result
hi
there
```

So knowing this, you might not want to remove the trailing space. However, you still want to get rid of a nested list. In that case, then `trimStart` might be the one for you.

## Browser Support

Support for `trim()` is pretty awesome! However, it's a bit limited for `trimStart` and `trimEnd`, that's because they were introduced later on.

| Browser           | trim | trimStart | trimEnd |
| ----------------- | ---- | --------- | ------- |
| Chrome            | ✅   | ✅        | ✅      |
| Firefox           | ✅   | ✅        | ✅      |
| Safari            | ✅   | ✅        | ✅      |
| Edge              | ✅   | ✅        | ✅      |
| Internet Explorer | ✅   | ❌        | ❌      |

- [trim: MDN Browser Compatibility Chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Browser_compatibility)
- [trimStart: MDN Browser Compatibility Chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimStart#Browser_compatibility)
- [trimEnd: MDN Browser Compatibility Chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimEnd#Browser_compatibility)

## Community Input

_[@ArtesEveni](https://twitter.com/ArtesEveni/status/1249122063077584907?s=20):_

```javascript
const string = '  hi   ';
string.replace(/ /g, ''); // "hi"
```

👆 Note: this solution will remove ALL whitespace from the string. To trim would be this:

```javascript
let str = '      Samantha Ming      ';
let trimmedStr = str.replace(/^\s+ | \s+$/g, '');

console.log(trimmedStr); // "Samantha Ming"
```

_Thanks [@Jalaj](https://dev.to/jalaj/comment/nnh5)_

## Resources

- [MDN Web Docs: trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [MDN Web Docs: trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
- [MDN Web Docs: trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
- [Stack Overflow: Trim string in JavaScript](https://stackoverflow.com/questions/498970/trim-string-in-javascript)
- [Stack Overflow: Difference between JavaScript's trimLeft vs trimStart](https://stackoverflow.com/questions/51550917/difference-between-javascripts-trimleft-vs-trimstart)
- [tc39 Trim Proposal](https://github.com/tc39/proposal-string-left-right-trim)
