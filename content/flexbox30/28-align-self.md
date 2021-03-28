---
title: align-self
tags: [css, flexbox]
order: 28
section: Child Properties
createdAt: 2020-02-20
---

Remember our align-items property where we can set the flex item along the cross axis. The thing with align-items is that it forces ALL of the flex items to play with the rules. But what if you want one of them to break the rule. No worries, for you independent thinkers, you can use align-self. This property accepts all of the same values given to align-items, so you can easily break from the pack 😎

<!-- prettier-ignore -->
```css
.child-1 {
  align-self: stretch /* default */
           or flex-start
           or flex-end
           or center
           or baseline
}
```
