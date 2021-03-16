---
title: Royal Wedding with Default Parameter
description:
tags: [javascript]
order: 16
createdAt: 2018-5-19
---

Congratulations to the Duke and Duchess of Sussex!

Will you take Harry to be your husband? I know the default is “I will”. Luckily with ES6, we can set a default parameter for the traditionalists😉. But for me, I would respond… "HECK YEAH 💋" !!! 😆

```javascript
function marryMe(yes = 'I will') {
  console.log(yes);
}

marryMe(); // I will

marryMe('HECK YEAH 💋'); // HECK YEAH 💋
```

## Multiple Default Parameters

You can also have multiple parameters with default values.

```javascript
function marryMe(yes = 'I will', prince = 'Harry') {
  console.log(yes);
  console.log(prince);
}

marryMe();
// yes
// Harry
```

## Single String `console.log` Output

You can print the the above line in one `console.log` statement.
Just separate the value by a comma `,`

```javascript
function marryMe(yes = 'I will', prince = 'Harry') {
  console.log(yes, prince);
}

marryMe(); // I will Harry
```

## Skip Parameter with `undefined`

If you want to skip over parameters and maintain the default values. You can pass `undefined` as the argument for the parameters you want to gloss over.

```javascript
function marryMe(yes = 'I will', prince = 'Harry', title = 'Sussex') {
  console.log(yes, prince, title);
}

marryMe(undefined, undefined, 'Cambridge'); // I will Harry Cambridge
```

## Community Examples

**Multiple Default Parameters**

You can print all the default params in an object.

```js
const person = (age = 29, gender = 'male', location = 'NC') => {
  console.log({ age, gender, location });
};

person();
// { age: 29, gender: 'male', location: 'NC' }
```

_Thanks: Brian R._

☝️ The reason the above works is because it is utilizing ES6 enhanced object literal property value shorthand. When the property key matches the variable name, you can omit the variable name.

```javascript
// Old Way
console.log({
  age: age,
  gender: gender,
  location: location,
});

// Using ES6 object literal property value shorthand
console.log({
  age, //: age,
  gender, //: gender,
  location, //: location
});
```

_Thanks: Emmanuel K._

## Resources

- [MDN: Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
