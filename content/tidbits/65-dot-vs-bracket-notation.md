---
title: Dot notation vs Bracket notation
description: Which one should I use - Dot or Bracket? Both notations can access object property. Let's break it down and see which to use when...
tags: [javascript, es6, object]
order: 65
createdAt: 2019-6-15
---

Both notations can access object properties. But the question is often which one should I use 🤔. Wonder no more, just follow Airbnb's style guide. Always use Dot. And when you want to access object property with a variable, use Bracket 👍

```javascript
// Dot notation vs Bracket notation

const variable = 'cookie';

const snack = {
  cookie: '🍪',
};

// ✅ Dot: access property
snack.cookie;

// ✅ Bracket: access property with variable
snack[variable];
```

## Accessing Object Properties

There are 2 ways to access object properties. Dot and Bracket.

```javascript
const obj = {
  name: 'value',
};

// Dot Notation
obj.name; // 'value'

// Bracket Notation
obj['name']; // 'value'
```

## Dot Notation for the win

I remember when I was first learning this. Understanding the 2 different ways was simple. Nothing too complicated. But my concern was never about the different notations. My biggest dilemma was, WHICH SHOULD I USE?? 🤯

If you were like me! Here's the breakdown. They both do the same. So here is the simple rule. By default, just use the Dot notation.

✅ Dot Notation 🏆

- It's a lot easier to read
- It's way faster to type.

## Dot Notation's Limitation

With any rule, there are always exceptions 😂. So let's look at some of the limitations.

a. Issue working with Identifiers
b. Issue working with Variables

## a. Working with Identifiers

One of the major limits of using the Dot notations is that it only works with valid identifiers. First, let' me define what is an **identifier**

> An identifier is a sequence of characters in the code that identifies a variable, function, or property.

_[MDN web docs](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)_

The **identifier** has the following rules:

- case sensitive
- can contain Unicode letters
- `$`, `-`, are allowed
- Digits (0-9) are okay BUT may not start with a digit

So let's sample some of these examples and see what happens when we use the Dot notation.

```javascript
const obj = {
  123: 'digit',
  123name: 'start with digit',
  name123: 'does not start with digit',
  $name: '$ sign',
  name-123: 'hyphen',
  NAME: 'upper case',
  name: 'lower case'
};
```

_Note:_

You may notice some property names I had to include quotes. Example: `123name`. I had to do that otherwise the object would be considered invalid and it would throw a Syntax Error.

### Dot Notation

```javascript
obj.123;      // ❌ SyntaxError
obj.123name;  // ❌ SyntaxError
obj.name123;  // ✅ 'does not start with digit'
obj.$name;    // ✅  '$ sign'

obj.name-123;  // ❌ SyntaxError
obj.'name-123';// ❌ SyntaxError

obj.NAME; // ✅ 'upper case'
obj.name; // ✅ 'lower case'
```

See how I tried to be clever and use quotes in the `obj.'name-123'` example. Well, don't, cause it still won't work 😂.

### Bracket Notation

But none of this is a problem for the Bracket Notation.

```javascript
obj['123']; // ✅ 'digit'
obj['123name']; // ✅ 'start with digit'
obj['name123']; // ✅ 'does not start with digit'
obj['$name']; // ✅ '$ sign'

obj['name-123']; // ✅ 'does not start with digit'

obj['NAME']; // ✅ 'upper case'
obj['name']; // ✅ 'lower case'
```

### Verdict

If you think you have an invalid JavaScript identifier as your property key, use the Bracket Notation 👍

## b. Accessing Property with Variables

Another limitation of the Dot notation is working with variables. You definitely should use the Bracket Notation. Note! When you're referencing a variable in the Bracket Notation, you need to skip the quote. That's kinda how you know you're dealing with a variable instead of accessing the property key.

```javascript
const variable = 'name';

const obj = {
  name: 'value',
};

// Bracket Notation
obj[variable]; // ✅ 'value'

// Dot Notation
obj.variable; // undefined
```

## Undefined Property

When you're trying to access a property that doesn't exist, it will return `undefined`. It doesn't throw an error.

```javascript
const emptyObj = {};

emptyObj.name; // undefined
emptyObj['name']; // undefined
```

## Only Bracket Notation works with Variable

Let's return to our variable object example previously. If you used the Dot notation, it will just assume you're trying to access the property with a valid JavaScript identifier. Because it's returning something, you might think everything is working fine. Under the hood, yes it is. But if your intention is to use the variable, it might throw you off. This definitely can be a source of a debugging headache. So watch out for that!!

```javascript
const variable = 'name';

const obj = {
  name: 'value',
  variable: '👻',
};

// Bracket Notation
obj[variable]; // ✅ 'value'

// Dot Notation
obj.variable; // '👻'
```

Never use the Dot Notation when using a Variable

## Which to use?

Knowing the limitations of Dot Notation, let's update our rule.

> Use the Dot Notation. But if you're dealing with invalid identifier or variables, use the Bracket notation.

## Community Input

- _[@Marcello Nicoletti](https://dev.to/marcellonicoletti/comment/c3lh):_ [Another benefits of the Dot notation] It also looks like object usage in other C-like languages. It will be easier to read and write for people coming from C, C#, and Java.

## Resources

- [Stack Overflow: dot notation vs. brackets](https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets)
- [Airbnb's JavaScript Style Guide: Properties](https://github.com/airbnb/javascript#properties)
- [codeburst.io: Dot Notation vs Bracket notation](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781)
- [MDN Web Docs: Identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
- [Property Dot Notation / Bracket Notation](http://xahlee.info/js/javascript_dot_notation_vs_bracket_notation.html)
