---
title: display
tags: [css, flexbox]
order: 7
section: Parent Properties
createdAt: 2020-02-20
---

To start this Flexbox party, we need to first create our flex container. This is done by applying flex to the display property on the parent element. Bam! Now all its immediate children will become flex items 🎊

There are 2 types of flex container: flex will create a block level flex container, and inline-flex will create an inline level flex container. More on block and inline in the next post 😉

<!-- prettier-ignore -->
```css
.parent {
  display: flex /* default */
        or inline-flex
}
```
