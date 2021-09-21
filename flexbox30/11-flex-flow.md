---
title: flex-flow
tags: [css, flexbox]
order: 11
section: Parent Properties
createdAt: 2020-02-20
---

So we've learned flex-direction and flex-wrap. If you understand those 2, you'll get flex-flow! Because it's just a shorthand for these two properties 👏

You can set both properties at the same time. Or you can just pass one of them. The default value is row nowrap. So if you just set one value, the property that you didn't set will just take on the default value.

<!-- prettier-ignore -->
```css
.parent {
  flex-flow: row nowrap /* default */
          or <flex-direction> <flex-wrap>
          or <flex-direction>
          or <flex-wrap>
}
```
