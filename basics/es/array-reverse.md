# Array - `reverse`

¡Bienvenido de nuevo a nuestro _Web Basics_ semanal, una serie sobre temas de programación esenciales que todo desarrollador web debería saber absolutamente!

La lección de hoy trata sobre `reverse()`. Este método se usa para invertir el orden de los elementos de un _array_. Y si, se puede usar con cualquier tipo de _array_

```javascript
const letras = ['a', 'b', 'c'];

letras.reverse();
// ['c', 'b', 'a'];
```

## Ejemplo

### _Array_ de Numeros

```javascript
const nums = [2, 10, 5];

nums.reverse;
// [5, 10, 2]
```

### _Array_ de Emojis

No, "emojis" no son un tipo. Es solo un string. Noten las comillas a su alrededor. Es importante divertirse mientras programamos, Yo encuentro que los emojis siempre ayudan 😝

```javascript
const medallas = ['🥇', '🥈', '🥉'];

medallas.reverse();
// ['🥉' , '🥈', '🥇' ]
```

### _Array_ de Tipo Mixto

```javascript
const mix = [true, 'hola', null, 100, undefined];

mix.reverse();
// [ undefined, 100, null, 'hola', true ]
```

## Bibliografía

- [MDN Web Docs: reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
