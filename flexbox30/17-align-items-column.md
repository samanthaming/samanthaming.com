---
title: align-items [column]
tags: [css, flexbox]
order: 17
section: Parent Properties
createdAt: 2020-02-20
---

Now let's take a look at how our flex items are aligned if the cross axis is sitting horizontally. In other words, flex-direction is column.

<!-- prettier-ignore -->
```css
.parent {
  flex-direction: column;

  align-items: stretch /* default */
            or flex-start
            or flex-end
            or center
            or baseline
}
```
