---
title: CSS User Select
description: 'You can use it to disable text selection (user-select: none). Or make it super easy for text selection with just ONE click (user-select: all)...'
tags: [css]
order: 27
createdAt: 2018-8-4
---

Control your Text Selection with CSS 🎉

It’s been awhile since my last CSS tidbit, so here it is 😄 You can use `user-select` to disable text selection (user-select: none). Or you can make it super simple for user to select the text with just one click (user-select: all). This is useful if you’re trying to create an easy text copy & paste experience 👍

```css
/* Select all text with just ONE click */
p {
  user-select: all;
}

/* Disable text selection */
p {
  user-select: none;
}
```

## Vendor Prefixes

Don't forget your vendor prefixes:

```css
-webkit-user-select
-moz-user-select
-ms-user-select
```

Note: this is an experimental technology. So check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select#Browser_compatibility) before using it in production.

## Custom CSS Selection Styling

For those wondering how I got the pink highlight. It's using CSS selection styling. See my previous post about it.

[CSS Tidbit- Custom CSS Selection Styling](http://www.samanthaming.com/tidbits/6-custom-css-selection-styling)

## Community Input

### Using `user-select` with buttons

**CJ J.**: I find myself using `user-select: none;` a lot for buttons and other elements where highlighting the text doesn't make sense. Alternatively this can be achieved by putting the text inside the `content: '';` property of a `::before` or `::after` CSS pseudo element.

_Thanks: [CJ J](https://www.linkedin.com/in/~cj-johnson)._

## Resources

- [MDN Web Docs: user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
- [CSS Tricks: user-select](https://css-tricks.com/almanac/properties/u/user-select/)
