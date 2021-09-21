---
title: Immediate Child Only
tags: [css, flexbox]
order: 3
section: Flexbox Core Concepts
createdAt: 2020-02-20
---

One VERY important thing I want to point out is that the flex container only wraps around its immediate children. The flex container doesn't wrap beyond one layer deep. Only the immediate children. So there is NOT a grandchildren or grand-grandchildren relationship. Only Parent ↔️ Immediate Children!

Of course, you can establish a Flexbox as long as there is a parent-child relationship. So a child can also be the flex container to its children. But it will be a separate flex container. And it doesn't carry over the grandparent flex properties.

This is probably one of the most important concepts that helped me understand how Flexbox works. And knowing this will help solve a lot of those "hey, why isn't this working" moments 😅
