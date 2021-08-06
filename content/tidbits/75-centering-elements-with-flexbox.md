---
title: Centering Elements with Flexbox
description: Learn more about flexbox with my free series Flexbox30. Follow my Twitter (@samantha_ming) or Instagram (@samanthaming) to catch it.
tags: [css, flexbox]
order: 75
createdAt: 2019-8-24
---

The biggest CSS headache is "How do I vertically center something". Throw away your migraine pills, it's now been solved with Flexbox!

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Keeping this code note super short. Because I'll be spending the entire next month posting about Flexbox on my [Twitter](https://twitter.com/samantha_ming) and [Instagram](https://www.instagram.com/samanthaming/) Account!

The series is called **#Flexbox30**. You will learn flexbox in 30 days with 30 code tidbits. You heard that right, a new code tidbit every day for 30 days 💪 It starts September 1st 🔥

If you're interested in this FREE series, make sure you follow me on:

- Instgram > [@samanthaming](https://www.instagram.com/samanthaming/)
- Twitter > [@samantha_ming](https://twitter.com/samantha_ming)

## Flexbox with Auto Margins

You can also achieve the same outcome by using auto margin!

```css
.parent {
  display: flex;
}
.child {
  margin: auto;
}
```

This is new for me. If you're interested to learn more about this. Here are some great resources:

- [Flexbox's Best-Kept Secret](https://hackernoon.com/flexbox-s-best-kept-secret-bd3d892826b6)
- [The peculiar magic of flexbox and auto margins](https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/)
- [Stack Overflow: Why are there no "justify-items" and "justify-self" properties?](https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties/33856609#33856609)
- [Stack Overflow: Can't scroll to top of flex item that is overflowing container](https://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container)
