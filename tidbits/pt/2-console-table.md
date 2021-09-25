# Use o `console.table` para mostrar seus dados

Isso é muito melhor do que exibir os seus dados no dev tools do navegador. Funciona muito bem com Arrays e Objetos. Invés de usar o `console.log`, tente o `console.table` na próxima vez ⭐️

```javascript
const atletasIncriveis = [
  {
    nome: 'Ronda',
    sobreNome: 'Rousey',
    esporte: '🥊',
  },
  {
    nome: 'Chloe',
    sobreNome: 'Kim',
    esporte: '🏂',
  },
  {
    nome: 'Tessa',
    sobreNome: 'Virtue',
    esporte: '⛸',
  },
  {
    nome: 'Hayley',
    sobreNome: 'Wickenheiser',
    esporte: '🏒',
  },
];

console.table(atletasIncriveis);
```
