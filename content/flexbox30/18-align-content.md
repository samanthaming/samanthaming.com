---
title: align-content
tags: [css, flexbox]
order: 18
section: Parent Properties
createdAt: 2020-02-20
---

Remember we had flex-wrap where we allow flex items to wrap on separate lines. Well, with align-content we can control how those row of items are aligned on the cross axis. Since this is only for wrapped items, this property won't have any effect if you only have a singular line of flex items.

<!-- prettier-ignore -->
```css
.parent {
  align-content: stretch /* default */
              or flex-start
              or flex-end
              or center
              or space-between
              or space-around
}
```
