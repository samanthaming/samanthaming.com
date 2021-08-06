---
title: CSS :not Selector
description: Instead of using 2 different selectors to assign styling and then another to negate it. Use the :not selector for more precise selection.
tags: [css]
order: 46
createdAt: 2019-2-2
---

Instead of using 2 different selectors to assign styling and then another to negate it. Use the :not selector to select every element except those that match the argument you passed through 👍

```css
/* ❌ */

li {
  margin-left: 10px;
}

li:first-of-type {
  margin-left: 0;
}

/* ✅ Much Better */

li:not(:first-of-type) {
  margin-left: 10px;
}
```

<markdown-toc></markdown-toc>

## Allowed Arguments

In the current draft, CSS Selectors Level 3, you can only pass [simple selector](https://www.w3.org/TR/selectors-3/#simple-selectors-dfn) as your argument.

**Simple Selectors:**

- Type Selector
- Universal Selector
- Attribute Selector
- Class Selector
- ID Selector
- Pseudo-class

<!-- prettier-ignore -->
```css
/* Type */
h1 {}

/* Universal */
* {}

/* Attribute */
a[title] {}

/* Class */
.parent {}

/* ID */
#demo {}

/* Pseudo-class */
:first-child {}
```

### CSS Versioning Briefly Explained

Just like how JavaScript or ECMAScript have different versions. CSS also have different versions. However, unlike ECMAScript where everything is under one huge category (ES5, ES6, ES7), CSS works in chunks.

For example, they have _CSS Selectors Level 3_, _CSS Grid Layout Level 1_, and _CSS Flexbox Level 1_. The `:not` selector falls under the [CSS Selectors Level 3](https://www.w3.org/TR/selectors-3/) specification. The next one that the CSS Working Group is working on is...hint, what comes after 3...ding ding, [CSS Selectors Level 4](https://drafts.csswg.org/selectors-4/) 😜

Rachel Andrew wrote a fantastic article explaining [CSS Levels](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/), I also linked it in the Resource section, so have a read if you're interested 🤓

### Passing a list of selectors

In the current version, you can only pass in simple selectors as your argument. However, in CSS Selectors Level 4, you will be able to pass in a list of selectors. So cool, right 👏.

```css
/* CSS Selectors Level 3 */
p:not(:first-of-type):not(.special) {
}

/* CSS Selectors Level 4 */
p:not(:first-of-type, .special) {
}
```

And here is what will be selected

<!-- prettier-ignore -->
```html
<div>
  <p>1</p>
  <p>2</p><!-- selected -->
  <p>3</p><!-- selected -->
  <p class="special">4</p>
  <p>5</p><!-- selected -->
</div>
```

## Nesting Negations not allowed 🙈

One thing to point out is that negations maybe not be nested. So this is a no-no:

```css
:not(:not(...)) {
}
```

## `:first-child` vs `:first-of-type`

Let's start by defining them individually:

`:first-child` only selects the first element IF it is the first child of its parent. That means if it's not the first child of the parent, nothing will be selected.

`:first-of-type` will select the first element of the type you specified. Even if it's not the first child of its parent. So a result will always appear if you use this selector (unless you picked an element that doesn't exist at all).

Alright, let's look at some examples.

### Children are all the same type

Because the child type is all the same, the result is the same for both.

<!-- prettier-ignore -->
```html
<div>
  <p></p> <!-- p:first-child, p:first-of-type -->
  <p></p>
</div>
```

### Children are different types

<!-- prettier-ignore -->
```html
<div>
  <h1></h1>
  <p></p> <!-- p:first-of-type -->
  <p></p>
</div>
```

**BUT** because `p` is no longer the first child. If you call `p:first-child`, NOTHING will be selected.

<!-- prettier-ignore -->
```html
<!-- ⚠️ p:first-child ➡️ no element selected -->
<div>
  <h1></h1>
  <p></p>
  <p></p>
</div>
```

### Selecting First Child

So you might be wondering, what if I don't care about the type, I just want to select the first child of its parent. In that case, you can do this:

```css
.parent :first-child {
  color: blue;
}
```

<!-- prettier-ignore -->
```html
<div class="parent">
  <h1></h1><!-- selected -->
  <p></p>
  <p></p>
</div>
```

### Other similar CSS pseudo-class

And this understanding applies to the other cousin classes:

- `:last-child` and `:last-of-type`
- `:nth-child` and `:nth-of-type`
- `:only-child` and `only-of-type`

## Browser Support

The `:not` selector is supported by most modern browsers and Internet Explorer 9 and up.

[Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/:not#Browser_compatibility)

## Community Input

_[@hkfoster](https://twitter.com/hkfoster/status/1202622637865947136):_ A couple more one-liners that accomplish this as well:

- `li:nth-of-type(n + 2)`
- `li ~ li`

_[@vels_io](https://twitter.com/vels_io/status/1202634874823180288):_ `li + li {...}`

_[@andr3](https://www.instagram.com/p/B5sl7ASgG5H/):_ It’s a powerful tool and as with anything, must be used responsibly. For the example you have, you can get by with a simple:

<!-- prettier-ignore -->
```css
li { margin-left: 0; }
li + li { margin-left: 10px; }
```

## Resources

- [MDN Web Docs - CSS :not](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [w3schools - CSS :not](https://www.w3schools.com/cssref/sel_not.asp)
- [W3C - CSS :not](https://www.w3.org/TR/selectors/#negation)
- [CSS Tricks - CSS :not](https://css-tricks.com/almanac/selectors/n/not/)
- [caniuse - CSS :not](https://caniuse.com/#feat=css-not-sel-list)
- [Why there is no CSS4 - explaining CSS Levels](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/)
- [w3schools - CSS :first-child](https://www.w3schools.com/cssref/sel_firstchild.asp)
- [w3schools - CSS :first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp)
