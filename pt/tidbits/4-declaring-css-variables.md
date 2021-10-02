---
title: 'Declarando Variáveis CSS'
createdAt: 2020-09-22
translator: '@wenderpmachado'
---

Supere o Sass, nós temos variáveis CSS!

Eu ainda amo Sass, claro. Porém é incrível que o css nativo suporta isso.
✅ Não existe a necessidade de preprocessadores e compilação.

```css
:root {
  /* 1a. Escopo Global */
  --color: blue;
}

.fun {
  /* 1b. Escopo Local */
  --color: red;
  /* ☝️ Escopo definido apenas para a classe .fun */
  color: var(--color); /* red */
}

/* 2. Usando variáveis CSS  */
div {
  color: var(--color); /* blue */
}
```

## Referências

- [freeCodeCamp: Everything you need to know about CSS Variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
