---
title: Custom CSS Selection Styling
description: The ::selection CSS pseudo-element allows you to apply styles to your text when it’s highlighted. Great way to add some pizzaz to your site...
tags: [css]
order: 6
createdAt: 2018-3-10
---

Custom Selection Styling is fun! 🎉

The ::selection CSS pseudo-element allows you to apply styles to your text when it’s highlighted. It's a great way to add some pizzaz to your site 💃

```css
p::selection {
  background: DeepPink;
  color: white;
}
```

For Firefox, you will need to use ::-moz-selection 👍

```css
p::-moz-selection {
  background: DeepPink;
  color: white;
}
```

## Community Input

_[@robinware77](https://twitter.com/robinware77/status/1297363122169229312?s=21):_ This sounds like it could be used to make secret code messages. Only if you highlight the correct words will the next clue be revealed!

## Resources

- [CSS Tricks: Selection](https://css-tricks.com/almanac/selectors/s/selection/)
