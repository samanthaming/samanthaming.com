---
title: CSS only-child
description: We have first-child, last-child, and nth-child. What if you're the only child? No problem, CSS got you! Let's learn how only-child works.
tags: [css]
order: 64
createdAt: 2019-06-08
updatedAt: 2020-07-17
---

We have first-child, last-child, and nth-child. What if you're the only child. Not everyone has siblings, you know! No worries, CSS got you covered 🤗. If you want to style an element that has no siblings, use the :only-child pseudo-class selector 👩‍👧

_HTML_

```html
<ul>
  <li>I'm the only child👩‍👧</li>
</ul>

<ul>
  <li>I have siblings👩‍👧‍👧</li>
  <li>I have siblings👩‍👧‍👧</li>
</ul>
```

_CSS_

```css
li:only-child {
  color: DeepPink;
}
```

_Output_

> <li style="color: deeppink">I'm the only child 👩‍👧</li>
>
> <li>I have siblings 👩‍👧‍👧</li>
> <li>I have siblings 👩‍👧‍👧</li>

<markdown-toc></markdown-toc>

## Alternative Solutions

Alternatively, you can also achieve this "only child" using the other child selectors

### Using :first-child and :last-child

This will also select the only child.

```css
li:first-child:last-child {
  color: DeepPink;
}
```

### Using :nth-child and :nth-last-child

```css
li:nth-child(1):nth-last-child(1) {
  color: DeepPink;
}
```

### What's the difference?

So the difference between using the alternative solution and `:nth-child` is that our latter will have lower specificity.

> If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

_[w3schools.com: CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)_

### Specificity Battle ⚔️

Let's take a look at this example. Since `only-child` has lower specificity, the text color that will appear would be <strong style="color:blue">blue</strong>.

```css
li:first-child:last-child {
  color: blue; /* 👈 This will win */
}

li:only-child {
  color: DeepPink;
}
```

And if we battle all 3 of them. This `:first-child:last-child` has the same specificity as `:nth-child(1):nth-last-child(1)`, so the rule would be whichever comes last will the winner. In our case, since `:nth-child(1):nth-last-child(1)` appears after, that the text color that will appear would be <strong style="color:green">green</strong>.

```css
li:first-child:last-child {
  color: blue;
}

li:nth-child(1):nth-last-child(1) {
  color: green; /* 👈 This will win */
}

li:only-child {
  color: DeepPink;
}
```

## only-child vs only-of-type

Let's start by explaining them individually:

`:only-child` only selects an element that is the ONLY child of a parent. That means only one element within that parent. Even if it's a different element type, it won't be considered an only child. One element, no exceptions!

`:only-of-type` only selects an element if that is the ONLY child of a particular type within a parent. So having other siblings of different types are fine.

Now that we have the explanation down. Let's take a look at some examples.

### Example: only-child

Here's an easy one. `<p>` is the only child of the parent `<div>` element, so this fits the criteria.

<!-- prettier-ignore -->
```html
<div>
  <p></p>
  <!-- p:only-child -->
</div>
```

### Example: NOT only-child

But now we have a problem. The parent, `<div>`, has 2 children. So if we were to use `:only-child` as our selector, nothing would be selected.

<!-- prettier-ignore -->
```html
<!-- ⚠️ p:only-child ➡️ no element selected -->
<div>
  <h1></h1>
  <p></p>
</div>
```

### Example: only-of-type

However, if we used `:only-of-type`, we're okay. Even though our parent, `<div>`, has 2 children. `<p>` still remains to be the ONLY child of that particular type. In this case, our `<p>` is the only type of our children. So it satisfies the criteria of being the only type, hence it is selected.

<!-- prettier-ignore -->
```html
<div>
  <h1></h1>
  <p></p>
  <!-- p:only-of-type -->
</div>
```

## Other similar CSS pseudo-class

Here are some other similar CSS pseudo-classes

- `:first-child` and `:first-of-type`
- `:last-child` and `:last-of-type`
- `:nth-child` and `:nth-of-type`

I covered `:first-child` and `:first-of-type` in my previous code notes, scroll down near the end to read it 🤓

> [CSS Not Selector](https://www.samanthaming.com/tidbits/46-css-not-selector)

## Browser Support

It's also quite well supported, including Internet Explorer!

> [Browser Support: only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child#Browser_compatibility)

## Update: only-child in CSS Selectors 4

Want to also include this update. It's in the Working Draft of CSS Selectors Level 4.

> Matching elements are not required to have a parent.

_[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child#Specifications)_

So does it mean an only child can exist without a parent element 🤔 I don't really know the details of this 😅. But if you know what this is about, leave it in the comments so I can learn more. You know what they say, sharing is caring 🤗

## Community Input

- _[@EmmiePaivarinta](https://twitter.com/EmmiePaivarinta/status/1137430744555560960):_ `:empty` is also super useful 😊 It only applies if the element has no child elements.

- _[@Skateside](https://twitter.com/Skateside/status/1137448069312720901):_ Fair warning with `:empty`

np

```html
<i></i> <!-- empty -->
<i><!-- not empty --></i>
<i><b hidden>not empty</b></i>
<i> </i><!-- not empty (white space)
```

### first-child vs only-child

_[@yoann_buzenet](https://twitter.com/Yoann_Buzenet/status/1137756830703267841):_ Why would we use `only-child` instead of `first-child`? Don't they do the same thing?

_[@cancrexo](https://twitter.com/cancrexo/status/1137759928934780928):_ well, `first-child` not always is the only child 😉

_[@yoann_buzenet](https://twitter.com/Yoann_Buzenet/status/1137761065448722432):_ Yes but if there is only one child, `first-child` will work too, that’s what I don't get?

_[@cancrexo](https://twitter.com/cancrexo/status/1137763327843721216):_ Yes, but it will apply to all `:first-child`, regardless if it has more elements 😊

## Resources

- [MDN Web Docs: only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)
- [codrops: only-child](https://tympanus.net/codrops/css_reference/only-child/)
- [CSS Tricks: only-child](https://css-tricks.com/almanac/selectors/o/only-child/)
- [CSS Tricks: only-of-type](https://css-tricks.com/almanac/selectors/o/only-of-type/)
- [w3schools: only-child](https://www.w3schools.com/csSref/sel_only-child.asp)
- [w3schools: only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp)
