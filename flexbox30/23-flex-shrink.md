---
title: flex-shrink
tags: [css, flexbox]
order: 23
section: Child Properties
createdAt: 2020-02-20
---

So flex-grow will expand to fill the extra space if there are any. The opposite of that is flex-shrink. What happens when you run out of space. This is the property that controls how much your flex items will shrink to fit. Note the larger the number, the more it will shrink 👍

<!-- prettier-ignore -->
```css
.child {
  flex-shrink: 1 /* default */
            or <number>
}
```
