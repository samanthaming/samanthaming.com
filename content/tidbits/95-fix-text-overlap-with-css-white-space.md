---
title: Fix Text Overlap with CSS white-space
description: Fix overlapping text by setting CSS white-space from "nowrap" to "normal".
tags: [css]
order: 95
createdAt: 2020-07-18
---

Sometimes `nowrap` is helpful when you don't want the text to break in an awkward spot 🔗

However, `nowrap` can sometimes lead to overlapping text. You can easily fix it by setting the `white-space` to be `normal` 👍

```css
div {
  white-space: nowrap;
}
```

<blockquote>
  <div style="display:flex;align-items:center;">
  <div class="mr-4">❌</div>
  <div style="width:120px; padding:8px; white-space:nowrap; background:bisque; color:saddlebrown; z-index:100;">Some extra long text</div>
  <div style="width:120px; padding:8px; background:PaleTurquoise; color:darkblue;">Some text</div>
</div>
</blockquote>

```css
div {
  white-space: normal;
}
```

<blockquote>
  <div style="display:flex;">
  <div class="self-center mr-4">✅</div>
  <div style="width:120px; padding:8px; white-space:normal; background:bisque; color:saddlebrown; z-index:100;">Some extra long text</div>
  <div style="width:120px; padding:8px; background:PaleTurquoise; color:darkblue;">Some text</div>
</div>
</blockquote>

[[toc]]

## Why does text overlap occur?

Let's dig into it a bit deeper why text overlap occurs.

```html
<div class="container">
  <div class="boxes">Some extra long text</div>
  <div class="boxes">Short text</div>
</div>
```

```css
.container {
  display: flex;
}

.boxes {
  white-space: nowrap;
}
```

<blockquote>
  <div style="display:flex;">
  <div style="padding:8px; white-space:nowrap; background:bisque; color:saddlebrown; z-index:100;">Some extra long text</div>
  <div style="padding:8px; background:PaleTurquoise; color:darkblue;">Some text</div>
</div>
</blockquote>

Even though, we have `nowrap` set, there is no overlapping. Great! But let's see what happen we set a fixed `width` on our boxes.

```css
.boxes {
  width: 100px;
}
```

<blockquote>
  <div style="display:flex;align-items:center;">
  <div style="width:120px; padding:8px; white-space:nowrap; background:bisque; color:saddlebrown; z-index:100;">Some extra long text</div>
  <div style="width:120px; padding:8px; background:PaleTurquoise; color:darkblue;">Some text</div>
</div>
</blockquote>

Oh no 😱 The overlapping is upon us! This is happening because the default is `width: auto` . Which means the boxes would expand based on its content. However, when we slap a fixed width, we restrict it from growing. And with no where to go, the text bleeds into its sibling box 🤭

## Solution to overlapping text

We can easily fix this by changing our `white-space` to `normal`.

```scss
.container {
  display: flex;
}

.boxes {
  width: 100px;
  white-space: normal; // 👈
}
```

<blockquote>
<div style="display:flex;">
  <div style="padding:8px; width:120px; white-space:normal; background:bisque; color:saddlebrown; z-index:100;">Some extra long text</div>
  <div style="padding:8px; width:120px; background:PaleTurquoise; color:darkblue;">Some text</div>
</div>
</blockquote>

Of course, you can also fix this by removing the fixed width (ie. `width: auto`) if you don't mind the box expanding. Which is better? Well, it all depends on the User Interface you want to design 🙂

## Use case of `nowrap`

Before you jump to the conclusion that `nowrap` is no good because it can cause overlap. There are instances where I want to preserve the original form of my text. Because the text breaking apart would render the result unintentional effect and create an awkward user interface and hurt user experience.

### Advantage of `nowrap` for code display

For example, in code blocks, I don't want the text to wrap. Text wrap would make the comprehension of my code example difficult. Instead, I want to preserve it on a single line and have the overflow trigger a scroll bar.

<blockquote>
<code>white-space: normal</code>
<div class="flex mt-4">
  <div class="mt-3 mr-4">❌</div>
  <code style="padding:8px; width:200px; white-space:normal; background:bisque; color:saddlebrown;">
    value && Object.keys(value).length === 0 && value.constructor === Object;
  </code>
</div>
</blockquote>

<blockquote class="overflow-x-auto">
<code>white-space: nowrap</code>
<div class="flex items-center mt-4">
  <div class="mr-4">✅</div>
  <code style="padding:8px; width:200px; white-space:nowrap; background:bisque; color:saddlebrown;" >
    Object.keys(value).length === 0 && value.constructor === Object;
  </code>
</div>
</blockquote>

### Advantage of `nowrap` for links

Sometimes when you create a "Learn more" or "Read more", you might append a caret "&#187;" or "&#8250;". And you want this text to be together because breaking them apart can create an awkward result.

<blockquote>
<code>white-space: normal</code>
<div class="flex mt-4">
  <div class="mt-3 mr-4">❌</div>
  <div style="padding:8px; background:bisque;">Read the code notes
    <a class="underline">
      <!-- force line break to mimic white-space:normal with width in smaller screens-->
      Learn more <br>&#187;
    </a>
  </div>
</div>
</blockquote>

<blockquote>
<code>white-space: nowrap</code>
<div class="flex items-center mt-4">
  <div class="mr-4">✅</div>
  <div>
    <!-- html and style setup are to mimic white-space:nowrap with width in smaller screen sizes  -->
    <span style="background:bisque;" class="p-2">Read the code notes</span><a class="underline">
      <span class="py-2" style="background:bisque;">Learn more</span>
      <span class="">&#187</span>
    </a>
  </div>
</div>
</blockquote>

## CSS white-space

There's more values you can set with `white-space`:

```css
white-space: normal; /* default */
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;
```

I plan to cover each of these in great details in a future code tidbit. In the mean time, if you want a head start, check out [MDN docs: white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) 👍

## Assume Positive Intent When Working on Existing Code Base

So I noted that `white-space: normal` is the default. That means this overlap would never had happen if we didn't implement `white-space: nowrap`. That means someone actually wrote this style into our codebase 😳 Before you get 😡 ...

When you're working on existing codebase, we often run into code that doesn't makes sense. But before you go all `git blame` 😅, let's assume positive intent. As developers, we always try to plan for the edge cases. But often, we won't really know until we push up the code and let our users start using it. It's very difficult to 100% understand the full extent of our implementation. We do our best but we might miss a few spots. Quite frankly, it's why developers still have a job. Most of the time, we're doing bug fixes 🐞

We shouldn't be afraid to make changes. In fact, it's how we progress and become better. During our attempt to improve things, we're going to make mistakes. When that happens, don't spin your wheels playing the blame game or be quick to negative judgement. We need to be empathetic that we all went in with the best intention. The important thing is, we need to learn from our mistakes, fix it swiftly, and continue moving forward 💪

## Community Input

_[@KyleDaltonSmith](https://twitter.com/kyledaltonsmith/status/1284709543125999620?s=21):_ text-overflow: ellipsis can also help in the right situation.

_[@longlho](https://twitter.com/longlho/status/1284654364766986241?s=20):_ white-space property has quirks around certain scripts that don’t use whitespaces so it’s not 100% i18n-safe.

- Yup it's a pretty common problem in different standards interop (CSS - W3C, JS - ECMA262, Unicode - Unicode). If you take any sentence in Lao like ມື້ນີ້ເປັນມື້ທີ່ດີ FF & Chrome break differently. Same for other text manipulation CSS like uppercase/word-wrap/text-overflow...

- Interestingly also if you look at my tweet above in FF vs Chrome u can already see the difference in wrapping when it encounters Lao. Multibyte characters like zalgo get worse.

<!-- markdownlint-disable MD044 -->

- _[@donut87](https://dev.to/donut87/comment/12c7c):_ I always assume positive intent. Nevertheless if I do not understand something `git blame` is one of the handiest tools there is. It tells me who to ask. The naming is awful, though. It has nothing to do with blaming a person for a mistake, but is rather a 'show me who is responsible'. I know people who have/had a git alias for blame and called it `praise`.

<!-- markdownlint-enable MD044 -->

- _[@andr3](https://www.instagram.com/andr3/):_ Mix it with media queries and you have a great solution for responsive anti-typographic-orphans! :D [Orphans & Long Lines](http://workshop.andr3.net/rwd/orphans.html) I love this property. Much more powerful than the simple `&nbsp;` entity. Love your write up. Especially the "Assume Positive Intent" towards legacy code :D Indeed!

## Resources

- [MDN: white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
- [w3schools: white-space](https://www.w3schools.com/cssref/pr_text_white-space.asp)
- [CSS Tricks: whitespace](https://css-tricks.com/almanac/properties/w/whitespace/)
- [Alligator: white-space](https://alligator.io/css/white-space-property/)
- [CSS Reference: white-space](https://cssreference.io/property/white-space/)
- [CSS white-space](https://www.impressivewebs.com/css-white-space/)
- [GitLab: Fix overlapping string](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/36108)
- [GitLab: Assume Positive Intent](https://about.gitlab.com/handbook/values/#assume-positive-intent)
- [Orphans & Long Lines](http://workshop.andr3.net/rwd/orphans.html)
