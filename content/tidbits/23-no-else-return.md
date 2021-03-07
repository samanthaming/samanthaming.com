---
title: No Else Return
description: You can skip the else block if your `if` block always executes a `return` statement. I find this way makes my code a lot easier to read...
tags: [javascript]
order: 23
---

You can skip the else block if your `if` block always executes a return statement. I find this way makes your code a lot easier to read. It’s also the preferred way from Airbnb style guide 🤩

The logic behind this is, if the `if` condition is met, that’s the end of the function (since you have the return keyword), so the `else` block will never be reached anyway. So you can skip the `else` block entirely. That way you can avoid the unnecessary indentation and code block, making your code more readable 👍

```javascript
// ❌  You can skip the else block
function hello(name) {
  if (name) {
    return '👋';
  } else {
    return '👻';
  }
}

// ✅  Yay, much easier to read
function hello(name) {
  if (name) {
    return '👋';
  }

  return '👻';
}
```

<markdown-toc></markdown-toc>

## Also Known As...

A lot of you have mentioned a few names for this pattern. So here's a list of them:

- Early return
- Early exit
- Fail fast

I'm not sure if there is an actual official term. If there is, leave in the comment below and I'll update this list.

## Refactoring with a Ternary Operator

Absolutely, for this example, you can use a ternary operator instead.

```javascript
function hello(name) {
  return name ? '👋' : '👻';
}
```

But keep in mind, you can't always use a ternary. When you're doing more logic or if you're dealing with a larger block of code, the ternary operator won't be ideal.

```javascript
function hello(name) {
  let status = 'alive';

  if (name) {
    const chars = name.length;
    return `👋 ${name}(${chars}), you are ${status}`;
  }

  status = 'dead';
  return `👻 , you are ${status}`;
}
```

## Example with nested `if/else` statements

Can you always get rid of the `else` block in a nested `if/else`. You betcha! Take a look at this example:

```javascript
// ❌  You can skip the else block
function calcPercentage(number) {
  // Check if valid number
  if (typeof number === 'number') {
    // Another check: only do calculation number is less than 1
    if (number > 1) {
      return 'Number must be less than 1';
    } else {
      return `${number * 100}%`;
    }
  } else {
    return 'Please enter valid whole number';
  }
}

// ✅  Yay, much easier to read
function calcPercentage(number) {
  if (typeof number === 'number') {
    if (number > 1) {
      return 'Number must be less than 1';
    }

    return `${number * 100}%`;
  }

  return 'Please enter valid whole number';
}
```

## Improvement with `Guard` Pattern

I'm going to throw a curve ball and introduce the `guard` pattern. The guard clause is a block of code that is at the begining of the function that returns early, and stop all execution(s), if the statment is met. Let me refactor the above example and hopefully it will make more sense.

```javascript
function calcPercentage(number) {
  // Guard #1: Stop execution if it's not a valid number
  if (typeof number !== 'number') {
    return 'Please enter valid whole number';
  }

  // By this point, you know if will be a valid number
  // Guard #2: Stop execution if number is greater than 1
  if (number > 1) {
    return 'Number must be less than 1';
  }

  // Finally by this point, you know all the conditions have been met
  //  Now, it's safe to perform your execution 🎉
  return `${number * 100}%`;
}
```

☝️ Don't you think it's a lot easier to read with the guard pattern. You can read more about it here:

- [Replace Nested Conditional with Guard Clauses](https://refactoring.guru/replace-nested-conditional-with-guard-clauses)
- [Guard clauses in JavaScript](https://elliotekj.com/2016/12/02/guard-clauses-in-javascript/)

## Community Examples

### Using Early Exit for Typechecking

_Rainer:_ An **early exit** can also be used for Typechecking to abort a function if the parameter not have the needed types (if you don't use TypeScript and depend on a distinct type of a parameter:

```javascript
function addTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameter no number');
  }

  return a + b;
}
```

_Rainer:_ If the given parameters are no numbers the function exits with an error before executing any other code.
Some functions may also return false instead of throwing an error.

```javascript
function addTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }

  return a + b;
}
```

_Rainer:_ You migth use this function then like this:

```javascript
const result = addTwoNumbers('1', 2);

if (!result) {
  // no number do some error handling
}
```

_Thanks: Rainer K._

## Resources

- [ESLint: no-else-return](https://eslint.org/docs/rules/no-else-return)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#blocks--no-else-return)
- [Stack Overflow: Unnecessary 'else' after 'return'. (No-else-return)](https://stackoverflow.com/questions/46875442/unnecessary-else-after-return-no-else-return)
- [StackExchange: Best practice on if/return](https://softwareengineering.stackexchange.com/questions/157407/best-practice-on-if-return)
