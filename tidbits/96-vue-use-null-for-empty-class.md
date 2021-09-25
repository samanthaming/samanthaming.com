---
title: Avoid Empty Class in Vue with Null
description: Avoid adding an empty class into the DOM by using "null" in Vue
tags: [vue]
order: 96
createdAt: 2020-08-01
updatedAt: 2020-08-01
---

Instead of passing an empty string, which can lead to an empty class in the DOM output. In your ternary operator, you can return "null". This will ensure no empty class in the DOM 🌟

```vue
<!-- ❌ -->
<div :class="isBold ? 'bold' : ''">
<!-- <div class> -->

<!-- ✅ -->
<div :class="isBold ? 'bold' : null">
<!-- <div> -->
```

<markdown-toc></markdown-toc>

## Comparing Empty String `''` vs `null`

Let's dig into the above example, and see a more complete picture of what's going on.

### Scenario 1: Using Empty String `''`

We are using a ternary operator to conditional set the appropriate class depending on if `isBold` is truthy or falsy. In this example, we're saying that if `isBold` is truthy, it will set the class to be `bold`. If it's falsy, it will return an empty string `''`. This syntax `:class` is short for `v-bind:class`.

```html
<div :class="isBold ? 'bold' : ''"></div>
```

```js
data() {
  return {
    isBold: false
  }
}
```

This will render:

```html
<div class></div>
<!-- 😱 Yikes, empty class -->
```

And if `isBold` is `true`, it will render:

```html
<div class="bold"></div>
```

### Scenario 2: Using `null`

Alright, let's see what happens if we assign `null` as the value for our class.

```html
<div :class="isBold ? 'bold' : null"></div>
```

```js
data() {
  return {
    isBold: false
  }
}
```

This will render:

```html
<div></div>
<!-- ✅ Nice, no empty class -->
```

And if `isBold` is `true`, it will render:

```html
<div class="bold"></div>
```

### Scenario 3: using `undefined`

By the way, `undefined` would also work 👍

```html
<div :class="isBold ? 'bold' : undefined"></div>
```

```html
<div></div>
<!-- ✅ Nice, no empty class -->
```

### Falsy Values

Just a quick reminder that these are the falsy values in JavaScript. So if `isBold` is any of these values, it will return the falsy condition of the ternary operator.

```javascript
false
undefined
null
NaN
0
"" or '' or `` (empty string)
```

To read more about this topic, you can check out my previous post, [JS Essentials: Falsy Values](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values/).

## Refactoring with Object Syntax

For my simple example, it's probably way better to use the Object Syntax like this:

```html
<div :class="{ bold: isBold }"></div>
```

I guess a better example of using a ternary operator would be for setting multiple classes.

```html
<div :class="isActive ? 'underline bold' : null"></div>
```

_Tangent:_ When I'm creating tidbits, I always try to keep things as simple as I can. And one way to do it is to reduce as much visual noise as possible. So my examples can sometimes be overly simplified in hope of the reader being able to grasp the concept immediately without doing much processing. A big inspiration that I follow is from this book, [Don't Make Me Think](https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think). Okay enough tangent, let's get back to the main course! 😆

## Using `&&` to set class

Let's explore another scenario and see if it works.

```html
<div :class="isBold && 'bold'"></div>
```

`&&` is not just a logical operator that results in a boolean value. It can actually produce a value. So it's saying if `isBold` is truthy then return `bold`. However, if `isBold` is falsy, then return the value of `isBold`.

Emphasis on the last point -- **It will return the value of `isBold`**. So our original problem of having an empty class can still exist depending on what the value of `isBold` is. Let's look at some examples.

### Example A: `isBold` equals `false`

```html
<div :class="isBold && 'bold'"></div>
```

This will still render the empty class 😱

```html
<div class></div>
```

### Example B: `isBold` equals `null`

```html
<div :class="isBold && 'bold'"></div>
```

Since isBold is `null`, the empty class is gone 👍

```html
<div></div>
```

There's nothing wrong with `&&` -- it is in fact doing its job. It's just that we need a specific return value. In other for us NOT to render an empty class, we have to pass `null` or `undefined`. Any other falsy value just won't work. Because this can be so easily missed, I much prefer the more explicit ternary operator OR simply the object syntax 👍

## Is Empty Class Attribute Bad?

I tried checking this with the [W3C Markup Validation Service](https://validator.w3.org/), and both syntaxes do indeed pass.

```html
<!-- Pass -->
<div class>...</div>

<!-- Pass -->
<div>...</div>
```

And diving into the [HTML Standard: Empty attribute syntax](https://html.spec.whatwg.org/multipage/syntax.html#attributes-2), it doesn't seem like it disallows empty attribute.

### BUT...

But the valid-ness does NOT apply to `id`. Because empty id is considered invalid.

```html
<!-- Fail -->
<div id>...</div>

<!-- Fail -->
<div id="">...</div>

<!-- Pass -->
<div id="name">...</div>
```

> ❌ Error: An ID must not be the empty string.

### Conclusion

Since the empty class is considered valid and the specs are not against it, this all comes to your stylistic choice. It's your codebase and you can decide how you want to handle it. If you want to keep your HTML output clean, then you can pass `null` to your Vue ternary operator. If it doesn't matter to you, then forget it. There's no incorrect answer here, it all depends on what you prefer 👍

## Community Input

_[@kiwi_kaiser](https://twitter.com/kiwi_kaiser/status/1289797552984883201?s=21):_ \_(What's wrong with Empty classes?\_\_ Noise in the code. Makes it bigger, the user has to download more and search machines have to work harder to get the important information out of the website.

_[@felipperegazio](https://dev.to/felipperegazio/comment/138cc):_ Just a quick comment about something to consider: CSS `:not([class])` selector wont be applied for an element with `class=""`. I mean: an element with `class=""` wont be targeted by `:not([class])` - which is right because the attribute class is there.

This could lead to misconceptions and that's why I consider that kind of selector a bad practice. Anyway, some developers use this selector to validate whether the element has classes or not, which became especially dangerous when using Vue, so your post subject is also useful to prevent bugs in this situation.

## Resources

- [Vue: Class and Style Bindings](https://vuejs.org/v2/guide/class-and-style.html)
- [Stack Overflow: Is an empty class attribute valid HTML?](https://stackoverflow.com/questions/30748847/is-an-empty-class-attribute-valid-html)
- [HTML Standard: Empty attribute syntax](https://html.spec.whatwg.org/dev/syntax.html#attributes-2)
- [Stack Overflow: are attributes without value allowed in HTML4?](https://stackoverflow.com/questions/21796217/are-attributes-without-value-allowed-in-html4)
- [Stack Overflow: For which html5 attributes is the “empty attribute syntax” allowed?](https://stackoverflow.com/questions/32949632/for-which-html5-attributes-is-the-empty-attribute-syntax-allowed#:~:text=The%20empty%20attribute%20syntax%20is,anything%20special%20on%20its%20own.&text=Error%3A%20Bad%20value%20for%20attribute,not%20be%20the%20empty%20string.)
