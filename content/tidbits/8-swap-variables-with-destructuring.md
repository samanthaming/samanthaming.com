---
title: Swapping Variables With Destructuring
description: "ES6 Destructuring to the rescue! Easily swap two variables using ES6 destructing. It's a great way to fix #Oscars Best Picture mix-up..."
tags: [JS, ARRAY, ES6]
order: 8
---

ES6 Destructuring to the rescue 🏆

Easily swap two variables using ES6 destructing. It’s a great way to fix #Oscars Best Picture mix-ups 😜

```javascript
let oscar = 'La La Land';
let nominee = 'Moonlight';

[oscar, nominee] = [nominee, oscar];

console.log(oscar); // Moonlight
console.log(nominee); // La La Land
```
