---
title: Use `console.table` to display your data
description: 'This is a cool way to display your data in your browser dev tools. Works great with Array and Objects. Instead of console.log, try console.table next time...'
tags: [CONSOLE]
order: 2
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
