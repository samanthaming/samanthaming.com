---
title: padEnd String Method in JavaScript
description: padEnd is great for us to add some padding to display our strings in a tabular format. Use this method to pad characters to a string's end..
tags: [javascript]
order: 69
createdAt: 2019-7-13
---

With `padEnd`, it adds characters to the end of a string so it reaches a specified length. This is great for us to add some padding to display our strings in a tabular format. Isn't it so much easier to read, yay 🍹

```javascript
// Display String in Tabular Format with padEnd

// ❌
'Day: Monday' + 'Drink: 🍵';
'Day: Saturday' + 'Drink: 🍹';

// ✅
'Day: Monday'.padEnd(20) + 'Drink: 🍵';
'Day: Saturday'.padEnd(20) + 'Drink: 🍹';
```

## padEnd Parameters

The `padEnd` accepts 2 parameters:

```javascript
string.padEnd( <length>, <character>)
```

### 1st Parameter: Length

This is the final length of your result string. It is required.

Let's say you begin with a string that has 3 characters. And you set the length to be 5 characters. That means, `padEnd` will pad it with 2 characters so the total length meets your target length of 5 characters.

Here's an example. I'm denoting the space character with `·` to show you the padded space.

```javascript
'abc'.padEnd(5);

// abc··
```

### 2nd Parameter: Character

This is an optional parameter. As you see from above, the default padded character is an empty space. However, you might want to pad it with a different character. No problem! Just pass it here.

```javascript
'hi'.padEnd(10, '!');

// 'hi!!!!!!!!'
```

### Tabular Format only works with Monospace Font

So in my example of using `padEnd` to create table formatted string. One thing to note is that it only works with Monospace Font.

> A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space.

_[Wikipedia](https://en.wikipedia.org/wiki/Monospaced_font)_

<small><i><a href="https://commons.wikimedia.org/wiki/File:Proportional-vs-monospace-v4.jpg#/media/File:Proportional-vs-monospace-v4.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Proportional-vs-monospace-v4.jpg" alt="Proportional-vs-monospace-v4.jpg"></a>By <a href="//commons.wikimedia.org/w/index.php?title=User:Garethlwalt&amp;action=edit&amp;redlink=1" class="new" title="User:Garethlwalt (page does not exist)">Garethlwalt</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by/3.0" title="Creative Commons Attribution 3.0">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=9110833">Link</a></i></small>

Fonts such as "Roboto" or "Monaco" are Monospace Font. Meaning each character will have the same width. Whereas fonts such as "Times New Roman" are not monospace. They are proportional, so each character will have different widths. And since each character has a different width, it would be hard to create the **Table** format using `padEnd`.

## padEnd vs padStart

The purpose of string padding is to add characters to a string, so the outcome has a specific length.

`padEnd` adds characters at the end of the string. Whereas `padStart` adds characters at the start of the string

**`padEnd`**

```javascript
'hello '.padEnd(10, '👋');

// 'hello 👋👋'
```

**`padStart`**

```javascript
' hello'.padStart(10, '👋');

// '👋👋 hello '
```

### Watch out! padEnd with emojis

If you're padding with emojis, you might run into this issue.

```javascript
'hello '.padEnd(11, '👋');

// 'hello 👋👋�'
```

Notice the last "👋" is not displayed. But instead "�" is shown. Well, that's because emojis are typically made up of 2 characters.

```javascript
'👋'.length === 2; // true
```

So if you're padding with emojis, just be mindful that the emoji might be cut off if you don't provide it enough length.

## Community Input

- _[@2alin](https://twitter.com/2alin/status/1150120894758621185):_ Just something to add: to have a tabular style use, the font should be mono-space and HTML render will remove any extra space; which makes such application important mainly in information displayed in the terminal.

- _[@Cilly_Boloe](https://twitter.com/Cilly_Boloe/status/1150208542923579392):_ padEnd and padStart example → [link](https://twitter.com/Cilly_Boloe/status/1150208542923579392)

## Resources

- [MDN Web Docs: String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
- [Learn JavaScript ES 2017: String padding — padStart & padEnd](https://codeburst.io/learn-javascript-es-2017-string-padding-padstart-padend-88e90783e7de)
- [Exploring JS: String Padding](https://exploringjs.com/es2016-es2017/ch_string-padding.html)
- [Flaviocopes: The String padEnd method](https://flaviocopes.com/javascript-string-padend/)
- [String padding with padStart and padEnd](https://node.university/blog/7297/es7-es8-post)
- [Alligator: padStart and padEnd String Methods in JavaScript](https://alligator.io/js/padstart-padend-string-methods/)
- [tc39: ECMAScript spec proposal for String.prototype.{padStart,padEnd}](https://github.com/tc39/proposal-string-pad-start-end)
