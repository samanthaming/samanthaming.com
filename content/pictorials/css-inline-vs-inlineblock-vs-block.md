---
title: CSS Inline vs Inline-Block vs Block
tags: [css]
order: 5
section: CSS
createdAt: 2020-01-12
---

Alright, let’s switch up Pictorials to cover CSS. Beside JavaScript algorithm questions, as a Front End Developer, you might also get asked CSS related questions. So let’s make sure you’re ready and level up your web basics!

I was actually asked about this in an interview question. I was interviewing for a Front-end role, so I only prepared for algorithm questions. So I stumbled on this a bit 😰 That's the best thing of mistakes, you get a chance to learn from it so you don't make them again. That's why I always recommend folks applying to as many place as they can. Interview is like any skill, the more practice you get, the better you get. Now, this question never fazes me anymore, cause I'll be ready! And so will you, let's get started!

<markdown-toc :hidden="false"></markdown-toc>

## a. `inline`

> Displays an element as an inline element. Any height and width properties will have no effect.

<markdown-image name="display-inline"></markdown-image>

The `display` property specifics the display behavior of an element. It’s a must know for controlling the layout of an element. There’s a bunch of property values. But let’s start off with the essential `inline`.

This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.

```css
.inline-element {
  display: inline;
  width: 1000px; /* ❌ won't have any effect */
  height: 1000px; /* ❌ won't have any effect */
}
```

### `inline` elements

Here are a few elements that have a default `inline` property:

- `span`
- `a`
- `img`

And most of the formatting tags are also are inherently `inline`:

- `em`
- `strong`
- `i`
- `small`

## b. `inline-block`

> Displays an element as an inline-level block container. You CAN set height and width values.

<markdown-image name="display-inline-block"></markdown-image>

Alright, let's move on to `inline-block`. It’s essentially the same thing as `inline`, except that you can set height and width values.

```css
.inline-block-element {
  display: inline-block;
  width: 1000px; /* ✅  yes, it will work */
  height: 1000px; /* ✅  yes, it will work */
}
```

## c. `block`

> Check the length of the string

<markdown-image name="display-block"></markdown-image>

So far, we talked about `inline`. Now let's switched to the opposite of it, `block`. Remember `inline` elements appears on the same line. Well, `block` starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element.

### `block` elements

Here are a few elements that have a default `block` property:

- `div`
- `h1`
- `p`
- `li`
- `section`

## Explained in non-dev terms

Imagine if you're attending a concert, you have rows of seats, right. If you assign your friend with an `inline` seat, they will sit next to you. So the thing with `inline` seats, it's that they all are the same physical chair.You can't manipulate the chair to make it larger or smaller. One size fits all they call it!

Now your friend Jennifer wants to join you, but because she is the daughter of the owner of the stadium. She gets assigned an `inline-block` seat. Well, she still gets to sit next to you. Cause she's "inline" with you (bad pun, lol 😂) and of course you want her to sit next to you. However, because she is the daughter of the stadium, her mom wants to make sure she's comfortable. So she gives her a special seat, where her chair is customized and can be adjusted to make it bigger or smaller. Nepotism at its finest 🤫

Your classmate Angelina is also attending the concert. Now your friend Jennifer doesn't really like her. So she tells her mom to assign her a `block` seat. That way Angelina is not seated next to you. Instead she sits in the next row.

## Final Solution

> **inline** The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.

> **inline-block** It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.

> **block** The element will start on a new line and occupy the full width available. And you can set width and height values.

<markdown-image name="definition"></markdown-image>

Here's a visual of how all those `display` elements look like:

<markdown-image name="diagram"></markdown-image>

Now, in your technical interview, you might get a variation on this questions:

- What's the difference between `inline` vs `block`
- What's the difference between `inline` vs `inline-block`

But no matter what variation, you should be able to address them! Good luck with your interview 👍

## Resources

- [w3schools: display](https://www.w3schools.com/cssref/pr_class_display.asp)
- [w3schools: disply layout](https://www.w3schools.com/css/css_display_visibility.asp)
- [w3schools: HTML Text Formatting](https://www.w3schools.com/html/html_formatting.asp)
- [MDN web docs: Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- [CSS Tricks: display](https://css-tricks.com/almanac/properties/d/display/)
- [Inline vs Inline-Block Display in CSS](https://alligator.io/css/display-inline-vs-inline-block/)
