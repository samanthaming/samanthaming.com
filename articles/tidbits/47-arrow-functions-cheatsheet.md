# ES6 Arrow Functions Cheatsheet

Here’s a cheatsheet to show you the many ways to write your arrow functions.

```javascript
// Explicit Return, Multi-Line
a => {
  return a
}

// Explicit Return, Single-Line
a => { return a }

// Implicit Return, Multi-line
a => (
  a
)

// Implicit Return, Single-Line
a => a

// Multiple Parameters, Parentheses Required
(a, b) => a + b
```

## Implicit vs Explicit Return

We have several ways of writing our arrow functions. This is because arrow functions can have either "implied return" or "explicit return" keyword.

With normal functions, if you want to return something, you have to use the `return` keyword. Arrow functions also have that. When you use the `return` keyword, it's called an **explicit return**. However, arrow functions up their game and allow something called **implied return** where the `return` keyword can be skipped. Let's look at some examples 🤓:

### Example A: Normal Function

```javascript
const sayHi = function(name) {
  return name
}
```

### Example B: Arrow Function with Explicit Return

```javascript
// Multi-line
const sayHi = (name) => {
  return name
}

// Single-line
const sayHi = (name) => { return name }
```

### Example C: Arrow Function with Implicit Return

```javascript
// Single-line
const sayHi = (name) => name

// Multi-line
const sayHi = (name) => (
  name
)
```

Notice the difference? When you use curly braces `{}`, you need to explicitly state the return. However, when you don't use curly braces, the `return` is implied and you don't need it.

There's actually a name for this. When you use curly braces like in *Example b*, it's called a **block body**. And the syntax in *Example c* is called a **concise body**.

⭐️ Here are the rules:

- Block body ➡️ `return` keyword is required
- Concise body ➡️ `return` keyword is implied and not needed

## Parentheses

With a normal function, we always had to use parentheses. However, with Arrow Functions, parentheses are optional if there is ONLY one parameter.

### Parentheses are optional for a SINGLE parameter

```javascript
// Normal Function
const numbers = function(one) {}

// Arrow Function, with parentheses
const numbers = (one) => {}

// Arrow Function, without parentheses
const numbers = one => {}
```

### Parentheses are required for MULTIPLE parameters

```javascript
// Normal Function
const numbers = function(one, two) {}

// Arrow Function, with parentheses
const numbers = (one, two) => {}
```

## ⚠️ Arrow Functions Gotcha: Returning Objects

Remember I mentioned about the different body types - concise body and block body. Just to quickly update you in case you skipped that section (I'm a bit sad, but not offended 😝). Block body is where you use curly braces and have an explicit `return`. Concise body is where you don't use curly braces, and you skip the `return` keyword. Alright, now you're caught up, let's get back to the gotcha 🤯

Let's purposely break our code, so you can learn your lesson lol 😂

```javascript
const me = () => { name: "samantha" };

me(); // undefined 😱
```

What?! Why isn't it returning my object. Don't worry, let's fix it by wrapping it in parentheses.

```javascript
const me = () => ({ name: "samantha" });

me(); // { name: "samantha" } ✅
```

⭐️ Here's the rule:

- For a concise body, wrap object literal in parentheses

## Resources

- [MDN Web Docs - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript Arrow Function Return Rules](https://jaketrent.com/post/javascript-arrow-function-return-rules/)
