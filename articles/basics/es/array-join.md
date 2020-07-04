# Array - `join()`

¡Bienvenido de nuevo a mi _Web Basics_ semanal, una serie sobre temas de programación esenciales que todo desarrollador web debería saber absolutamente!

La lección de hoy trata sobre `join ()`. Este método toma todos los elementos en un _array_ y devuelve un nuevo _string_.

El separador predeterminado si no pasa nada es comas `,` Para especificar un separador personalizado, simplemente páselo como argumento. Ejemplo: `join ('+')`

```javascript
const partes = ['s', 'a', 'm'];

partes.join('');
// 'sam'
```

## Ejemplo

```javascript
const titulo = ['Web', 'Basics', '!'];

titulo.join(); // coma predeterminada (,)
// 'Web,Basics,!'

titulo.join(' '); // espacio vacío
// 'Web Basics !'

titulo.join('-'); // guión
// 'Web-Basics-!'
```

Veamos algunos ejemplos con numeros:

```javascript
const numeros = [2, 10, 5];

numeros.join(' + '); // nótese el espacio antes y después
// '2 + 10 + 5'
```

## Bibliografía

- [MDN Web Docs: join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
