---
title: 'Convertendo um Array-Like para um Array'
createdAt: 2020-09-22
translator: '@wenderpmachado'
---

É incrível aprender algo novo no curso de ES6 do [@wesbos](https://twitter.com/wesbos) 🔥

```javascript
const nodeList = document.querySelectorAll('ul li');

// Método 1: Converter para um array
Array.from(nodeList);

// Método 2:  Converter para um array
[...nodeList];

// Agora você pode usar map e outros métodos para loops
```

## Resources

- [Wes Bos: ES6 Array.from() and Array.of()](<https://github.com/wesbos/es6-articles/blob/master/25%20-%20Array.from()%20and%20Array.of().md>)
