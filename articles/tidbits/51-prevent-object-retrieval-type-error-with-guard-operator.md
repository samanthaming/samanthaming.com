# Prevent Object Retrieval TypeError with && 🛡

When you retrieve an object value that’s `undefined`, it will crash due to a TypeError! So make sure you do an initial check with an `if` statement. Better yet, refactor this using `&&` 👍

Using `&&` in this way is sometimes called the **Guard Operator** because the 1st expression safeguards the 2nd expression. In other words, only if the 1st expression is truthy, then will the 2nd expression be evaluated.

```javascript
const forest = {};

forest.tree; // undefined
forest.tree.seed; // TypeError 😱

// This will prevent the TypeError but...
if (forest.tree) {
  forest.tree.seed;
}

// ✅Much better using &&
forest.tree && forest.tree.seed; // undefined
```

[[toc]]

## Understanding the && Operator

I always thought the `&&` was just used for boolean checks like this:

```javascript
if (a && b) {
  // do something
}
```

I never thought you can use `&&` to evaluate to something or produce some sort of value. So when I first learned of this **Guard Operator**, I was super confused. So don't worry if you are too. It will take some time to understand this. The resource that helped me finally understand this is Kyle Simpson's "[You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch4.md#operators--and-)" book.

How he describes it is think of `&&` not just as logical operator but **Selector Operators**. They don't result in a boolean value or logic value. Instead, the result is always one of the two expressions. In his words, **they select one of the 2 operands' values**.

> The value produced by a && or || operator is not necessarily of type Boolean. The value produced will always be the value of one of the two operand expressions.

Before you throw in the towel, let's take a look at an example:

```javascript
const truthy = true;
const falsy = false;
const money = '💰';

truthy && money; // '💰'
falsy && money; // false
```

So `money` will be selected if the 1st expression (left side) is truthy. Otherwise, the 1st expression will be selected and the 2nd expression (right side) won't be evaluated. This is what's called **Short-circuit evaluation** because the 2nd expression is never evaluated.

And here's the definition from Kyle Simpson's "You Don't Know JS" book:

> The right-hand operand will not be evaluated if the left-hand operand is sufficient to determine the outcome of the operation. Hence, the name "short circuited" (in that if possible, it will take an early shortcut out).

### Truthy Value

So essentially the 1st expression (left side) is your truth checker. If it's true, then your 2nd expression (right side) will be selected. If your 1st expression is false, then the 1st expression's value will be used. In order to understand what's truthy, let's go over it 🤓

The truthy value list is quite an extensive one. So instead of remembering what's truthy. It's a lot easier to just remember the falsy list. And whatever is not on falsty list, is considered truthy 👍 _(I wrote another blog post on Falsy Values, which you can read it [here](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values))_

```javascript
// JS Essentials: Falsy Values

false
undefined
null
NaN
0 or +0 or -0
"" or '' or `` (empty string)

// Everything else is truthy
```

## Refactoring `if` conditionals with `&&`

Let's look at another example to see how the guard operator can also be useful to refactor conditional statements.

```javascript
const steak = '🥩'
function cook() = {...}

// Most people use `if`
if(steak) {
  cook()
}

// Refactored using &&
steak && cook(); // `cook` only gets called if `steak` is true
```

Here's a good one to think about this:

```javascript
someCondition && doSomething();
```

_Thanks: [@marcdel](https://twitter.com/marcdel/status/1104466866100002816)_

## Proposal Optional Chaining

So this is really exciting. The EcmaScript folks or the JavaScript committee is proposing an "Optional Chaining" syntax. When I was working in C#, this was such a game changer for me. I always wished JavaScript would have something similar. Really hope this proposal goes through 🙌

Rewriting our example with the Proposed Optional Chaining Syntax 🤩:

```javascript
// Current
forest.tree && forest.tree.seed;

// Proposal
forest.tree?.seed;
```

_DO NOT use this in your app, this is currently NOT supported._

Read more about the proposal [here](https://github.com/tc39/proposal-optional-chaining).

## Resources

- [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [YDKJS: Types & Grammer](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch4.md)
- [YDKJS: Short Circuited](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch5.md#short-circuited)
- [Guard And Default Operators In JavaScript](https://seanmonstar.com/post/707078771/guard-and-default-operators)
- [JavaScript/Operators](https://en.wikibooks.org/wiki/JavaScript/Operators)
- [SamanthaMing.com: Falsy Values](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values)
