---
title: Classes in JavaScript
description: ES6 Classes are syntactical sugar that sweetens the existing prototype-based inheritance. Now it's even easier for OOP devs to pick up JS.
tags: [javascript]
order: 39
createdAt: 2018-10-27
---

When I say Classes, you might go YAY 🎊 JS finally introduced a new object-oriented inheritance model. Well, not exactly. It’s still using the existing prototype-based inheritance (labeled as “Old” in the photo). But now it just looks more like Object Oriented Programming (OOP). Yay, I think this syntactical sugar is GREAT!

```javascript
// Old way

var Meal = function (food) {
  this.food = food;
};

Meal.prototype.eat = function () {
  return '😋';
};

// Classes in ES6

class Meal {
  constructor(food) {
    this.food = food;
  }

  eat() {
    return '😋';
  }
}
```

[[toc]]

## Defining a Class

For those coming from Object-Oriented Programming, then you're good. But for those new to this or just want a friendly reminder. The first step is to create our class. The keyword to use is `class`.

```javascript
class Meal {
  constructor(food) {
    this.food = food;
  }

  // Prototype Method
  eat() {
    return '😋';
  }

  // Static Method
  static utensil() {
    return '🥢';
  }
}
```

**Constructor**: This is a special method for initializing an instance of that class. So what that means is that whenever we create a new instance of the class, it will invoke the constructor. This is a great place to set some properties and assign parameters. For our example, we want to make sure when someone creates a new `Meal` instance, they have a costume in place.

**Prototype Method**: A prototype method is a method that is only accessible when you create an instance of the class. This will be clear when I show you an example later.

**Static Method**: A static method is something you can call without instantiating the class. More on this later.

## Create a Class Instance

Great, now you created the class. Let's create an **instance** of it using the `new` keyword.

```javascript
class Meal { ... }

const dumpling = new Meal('🥟');
```

Now we can call our prototype method:

```javascript
dumpling.eat();
// '🥟'
```

⚠️ But! you can't access static methods.

```javascript
dumpling.utensil();
// TypeError
```

That's because static methods are not accessible by the instance. It can only be called by the class

```javascript
Meal.utensil();
// '🥢'
```

## Static vs Instance Methods

So you must be wondering when you should use a static or instance methods. Here's a very simple answer. Use static methods when you don't want to create an instance of the class. Lol, I know that's not a very satisfactory answer. Most of the time, you will see static methods used for creating utility functions for an application. Any other time, it's better to stick with an instance method.

## No Arrow Function

Another cool thing ES6 introduced is Arrow Function

> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions): An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

### Arrow Function has No Prototype Property

So in the non-sugar way, notice we used the `function` keyword:

```javascript
var Meal = function (food) {
  this.food = food;
};

Meal.prototype.eat = function () {
  // <-- No Arrow Function
  return '😋';
};
```

The arrow function does not have a `prototype` property, so we can not use the arrow function.

```javascript
// ❌
Meal.prototype.eat = () => '😋';
Meal.prototype; // undefined
```

### Arrow Function has No New Operator

Second thing, arrow functions can't be used as constructors.

```javascript
// ❌
const Meal = () => {};

const rawChicken = new Meal();
// TypeError: Meal is not a constructor
```

So here's another one where you should use the regular `function` syntax.

```javascript
// ✅
const Meal = function () {};

const cookedChicken = new Meal();
```

## Sugar is bad for you!

Some of you may argue that `class` is bad because it obscures the true nature of JS. And I think that is absolutely a fair point. Let's peel back at the intention of classes. It was introduced to make JavaScript easier to pick up 👍

For those coming from an object-oriented programming language such as Ruby or Python, this will make the transition of learning JS a lot easier because of the familiar syntax. For newcomers, this will mean it's faster to ramped up and ready to go. And once you get going, hopefully, you will be encouraged to dive deeper into the JS and learn what's actually under the hood 🤓

**But a spoonful of sugar makes the medicine go down...🎶**

Learning a new language is hard, so if we can make this process a bit easier, I think that's a great thing. It's very easy to be overwhelmed when everything is thrown at you. It's like trying to drink from a fire hose, you end up drinking no water at all. That's why tutorials are done by steps. No one goes from a white belt to a black belt right away. You have to go through the process, it requires time.

So should you employ `class`? -- well that depends on you and your team. Like I always say, there is never a right way; the right way is always it depends 😉 Let's not immediately dismiss "sugar" as bad. As developers, we should always keep an open mind to new ideas. Less judgment, more listening, and assume good intentions 😊

## Community Input

Please note when you use the `typeof` on a class, it will return `function`.

```javascript
class someClass {}

typeof someClass; // 'function'
```

_Thanks [@ianwijma](https://dev.to/ianwijma/comment/p968)_

## Resources

- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [w3schools: Classes](https://www.w3schools.com/js/js_classes.asp)
- [Arrow Function No No](https://wesbos.com/arrow-function-no-no)
- [Understanding Classes in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- [ExporingJS: Classes](https://exploringjs.com/es6/ch_classes.html)
- [The Complete Guide to JavaScript Classes](https://dmitripavlutin.com/javascript-classes-complete-guide/)
- [EloquentJS: Objects](https://eloquentjavascript.net/06_object.html)
