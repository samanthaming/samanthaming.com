---
title: A Guide to CSS `counter`
description: A complete guide to CSS counter. How it works and how you can apply automatic incrementation to any HTML element just like ordered lists.
tags: [css]
order: 53
createdAt: 2019-03-23
updatedAt: 2019-03-23
---

Use the "counter" property to turn any element into a numbered list. Similar to how the ordered list tag works `<ol>`. Very useful if you're creating a documentation site where you need to automatically number the headings or create a table of contents 👍

```css
div {
  /* Define & Initialize Counter */
  counter-reset: tidbit-counter;
}

h2::before {
  /* Increment Counter */
  counter-increment: tidbit-counter;

  /* Display Counter */
  content: counter(tidbit-counter) ': ';
}
```

```html
<div>
  <h2>HTML</h2>
  <h2>CSS</h2>
  <h2>JS</h2>
</div>
```

## How the counter property work

There are 3 steps to get the counter to work:

1. Define & Initialize Counter
2. Increment Counter
3. Display Counter

### 1. Define & Initialize Counter

There are 2 parts to this step. You need to define your counter and give it a name.

**1a. Define Counter**
I have named mine `tidbit-counter`. We give it a name so we can call it in the later steps.

```css
counter-reset: tidbit-counter;
```

**1b. Initialize Counter**

The next part is to initialize your counter. By default, the value of this is `0`. Note, this number is not displayed. This is just where you setting the "starting" of your counter. So if I had set this number to be `20`, then my output would go `21, 22, 23...etc`. Assuming that my increment is `1` (more on this later).

| `counter-reset` | Output           |
| --------------- | ---------------- |
| 0               | 1, 2, 3 ...etc   |
| 20              | 21, 22, 23...etc |
| 58              | 59, 60, 61...etc |

Here's an example:

```css
div {
  counter-reset: tidbit-counter 58; /* 👈 */
}

h2::before {
  counter-increment: tidbit-counter;
  content: counter(tidbit-counter) ': ';
}
```

```html
<div>
  <h2>HTML</h2>
  <h2>CSS</h2>
  <h2>JS</h2>
</div>
```

```
59: HTML
60: CSS
61: JS
```

**Where to apply the `counter-reset` property?**

You want to apply the `counter-reset` property on the parent element. Here's what happens if you don't apply it to the parent.

```css
/* ❌ Wrong */
h2 {
  counter-reset: tidbit-counter;
}

h2::before {
  counter-increment: tidbit-counter;
  content: counter(tidbit-counter) ': ';
}
```

And here's the **output**. As you noticed, it doesn't increment properly 🙁

```
1: HTML
1: CSS
1: JS
```

Also, it doesn't have to be the direct parent. As long as it's an HTML element that wraps your counter list. You're good. Like this:

```html
<section>
  <div>
    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JS</h2>
  </div>
</section>
```

```css
/* ✅ This works */
section {
  counter-reset: tidbit-counter;
}
```

```
1: HTML
2: CSS
3: JS
```

### 2. Increment Counter

Once you set up your counter. Now you can start incrementing it. Here's the syntax for this property:

```
counter-increment: <counter name> <integer>
```

As you noticed, it accepts an integer argument. That means you are not restricted to just increasing the counter value by `1`. Below chart assumes `counter-reset` is `0`.

| `counter-increment` | Output             |
| ------------------- | ------------------ |
| 1 (default)         | 1, 2, 3 ...etc     |
| 5                   | 5, 10, 15...etc    |
| -5                  | -5, -10, -15...etc |

And yes, you can also pass in a negative integer to decrease the counter. Okay, let's see how that would be implemented:

```css
div {
  counter-reset: tidbit-counter;
}

h2::before {
  counter-increment: tidbit-counter -5; /* 👈 */
  content: counter(tidbit-counter) ': ';
}
```

```html
<div>
  <h2>HTML</h2>
  <h2>CSS</h2>
  <h2>JS</h2>
</div>
```

```
-5: HTML
-10: CSS
-15: JS
```

### 3. Display Counter

Finally, to display the counter, we need to pass the `counter` function as the value for our `content` property. The `content` property is often the way for us to display value in our HTML through CSS. Here's the syntax for our `counter` function.

```
counter(<counter name>, <counter list style>)
```

By default, we have been working numbers. And that's the default `counter list style` or in the docs, they call it `style`. But you can also pass in other `styles`.

| `style`     | Output            |
| ----------- | ----------------- |
| _default_   | 1, 2, 3 ...etc    |
| upper-alpha | A, B, C ...etc    |
| lower-roman | i, ii, iii ...etc |
| thai        | ๑, ๒, ๓ ...etc    |

You can see the full list of styles [here](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Values)

And let's look at an example:

```css
div {
  counter-reset: tidbit-counter;
}

h2::before {
  counter-increment: tidbit-counter;
  content: counter(tidbit-counter, thai); /* 👈 */
}
```

```html
<div>
  <h2>HTML</h2>
  <h2>CSS</h2>
  <h2>JS</h2>
</div>
```

```
๑HTML
๒CSS
๓JS
```

## Multiple Counters

You can also set multiple counters just by simply defining another counter name.

```css
div {
  counter-reset: counter-one counter-two 100; /* 👈 */
}

h2::before {
  counter-increment: counter-one;
  content: counter(counter-one) ': ';
}

h3::before {
  counter-increment: counter-two;
  content: counter(counter-two) ': ';
}
```

```html
<div>
  <h2>one</h2>
  <h2>one</h2>

  <h3>two</h3>
  <h3>two</h3>
</div>
```

```
1: one
2: one

101: two
102: two
```

## Nested Counter

You can also set a nested counter. Instead of using `counter`, you use the plural form `counters`. The `counters` accept an additional argument:

```
counters(<counter name>, <string>, <counter list style>)
```

The string argument is a string separator that you use to indicated how you want to separate the list item for nested counters.

| `string` | Output               |
| -------- | -------------------- |
| `"."`    | 1.1, 1.2, 1.3 ...etc |
| `">"`    | 1>1, 1>2, 1>3 ...etc |
| `":"`    | 1:1, 1:2, 1:3 ...etc |

Let's look at an example:

```css
div {
  counter-reset: multi-counters;
}

h2::before {
  counter-increment: multi-counters;
  content: counters(multi-counters, '.') ': ';
}
```

```html
<div>
  <h2>Frameworks</h2>
  <div>
    <h2>Vue</h2>
    <h2>React</h2>
    <h2>Angular</h2>
  </div>
</div>
```

```
1: Frameworks
  1.1: Vue
  1.2: React
  1.3: Angular
```

## counter vs `<ol>`

CSS counter doesn't replace `<ol>`. If you have a numbered ordered list, then you should absolutely still use `<ol>` because it's important that you structure your HTML using the proper semantics. Semantic markup is crucial for Accessibility and SEO.

**`<ol>` for the win**

Here's an example where I should use `<ol>`. In this instance, I'm just listing a bunch of rules. It makes semantic sense to use an ordered list `<ol>`.

```html
<h2>Rules</h2>

<ol>
  <li>You do not talk about Fight Club</li>
  <li>You do not talk about Fight Club</li>
</ol>
```

**CSS`counter` for the win**

Here's an example where I would use CSS `counter`. In this instance, I have a documentation page using headings `h2` and paragraphs `p`. In this example, having a counter is more of a visual presentation. This example would make sense using CSS `counter`.

```html
<article>
  <h2>What is Vue.js?</h2>
  <p>Vue is a progressive framework for building user interfaces.</p>

  <h2>Getting Started</h2>
  <p>Visit Vuejs.org to learn more!</p>
</article>
```

```
1: What is Vue.js?
Vue is a progressive framework for building user interfaces.

2: Getting Started
Visit Vuejs.org to learn more!
```

☝️Can you tell I really like Vue.js 😝

## Browser Support

The CSS `counter` is supported by all major browsers including Internet Explorer 8 and above.

[Can I Use: CSS Counters](https://caniuse.com/#feat=css-counters)

## Resources

- [MDN Web Docs: Using CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- [MDN WebDocs: List Style Type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Values)
- [w3schools: CSS counter-increment](https://www.w3schools.com/CSSref/pr_gen_counter-increment.asp)
- [w3schools: CSS counter-reset](https://www.w3schools.com/CSSref/pr_gen_counter-reset.asp)
- [CSS Tricks: counter-increment](https://css-tricks.com/almanac/properties/c/counter-increment/)
- [CSS Tricks: counter-reset](https://css-tricks.com/almanac/properties/c/counter-reset/)
- [30 Seconds of CSS](https://30-seconds.github.io/30-seconds-of-css/#counter)
- [Counters and Calc(): Two Little-Known CSS Features Explained](https://creativemarket.com/blog/counters-and-calc-two-little-known-css-features-explained)
- [The Accessibility of ::before and ::after](https://thatdevgirl.com/blog/before-after-accessibility)
- [Accessiblity support for CSS generated content](https://tink.uk/accessibility-support-for-css-generated-content/)
