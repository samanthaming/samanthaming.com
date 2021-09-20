---
title: Swapping Variables with ES6 Destructuring
description: "ES6 Destructuring to the rescue! Easily swap two variables using ES6 destructing. It's a great way to fix #Oscars Best Picture mix-up."
tags: [javascript, array, es6]
order: 8
createdAt: 2018-03-24
updatedAt: 2020-07-17
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
