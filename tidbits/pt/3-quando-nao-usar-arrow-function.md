# Quando Não Utilizar Arrow Functions

Arrow Functions são incríveis, porém não devem ser usados em todos as situações. Deve-se evitá-los em objetos porque o 'this' sempre estará referênciado o scopo pai -- que é o 'window', nesse caso.

```javascript
const hamburger = {
  type: '🍔',
  comer: () => {
    // deveria ser usado o function()
    console.log(this); // 'this' referencia ao  window, não ao hamburger
  },
};

// Evite Arrow Functions em Objetos
```

## Referências

- https://wesbos.com/arrow-function-no-no/
