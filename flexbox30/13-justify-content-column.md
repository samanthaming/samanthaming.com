---
title: justify-content [column]
tags: [css, flexbox]
order: 13
section: Parent Properties
createdAt: 2020-02-20
---

The main axis can also lie vertically. In that case, flex-direction is set to column. Here's how the flex items will be aligned in that instance.

<!-- prettier-ignore -->
```css
.parent {
  flex-direction: column;

  justify-content: flex-start /* default */
                or flex-end
                or center
                or space-around
                or space-between
                or space-evenly
}
```
