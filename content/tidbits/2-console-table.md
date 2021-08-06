---
title: console.table to Display Data
description: This is a cool way to display your data in your browser dev tools. Works great with Array and Objects. Instead of console.log, try console.table next time.
tags: [console, browser]
order: 2
createdAt: 2018-2-15
---

This is a cool way to display your data in your browser dev tools. Works great with Array and Objects. Instead of console.log, try `console.table` next time ⭐️

```javascript
const amazingAthletes = [
  {
    firstName: 'Ronda',
    lastName: 'Rousey',
    sport: '🥊',
  },
  {
    firstName: 'Chloe',
    lastName: 'Kim',
    sport: '🏂',
  },
  {
    firstName: 'Tessa',
    lastName: 'Virtue',
    sport: '⛸',
  },
  {
    firstName: 'Hayley',
    lastName: 'Wickenheiser',
    sport: '🏒',
  },
];

console.table(amazingAthletes);
```
