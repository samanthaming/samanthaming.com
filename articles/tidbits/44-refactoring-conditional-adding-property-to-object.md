# Refactoring Conditional Adding Property to Object

Instead of conditionally adding a property using a Ternary. Use the "||" operator 👍 So if the 1st expression can be converted to true, use that. Otherwise, use the 2nd expression 🌟

```javascript
const refill = {};

// Ternary
refill['🥤'] = refill['🥤'] ? refill['🥤'] + 1 : 1;

// ✅ Refactor using ||
refill['🥤'] = refill['🥤'] + 1 || 1;
```

## What is this Code doing?

Let me explain this in words what this code is doing:

1. If the property `'🥤'` exists in the object, then add 1
2. If the property doesn't exist, create that property and set the value as 1

Alright, let's look at the output of the individual scenario:

**1. Property doesn't exist**

```javascript
const refill = {};

refill['🥤'] = refill['🥤'] + 1 || 1;

console.log(refill); 
// OUTPUT ➡️ { '🥤': 1 }
```

**2. Property does exist**

```javascript
const refill = { '🥤': 1 };

refill['🥤'] = refill['🥤'] + 1 || 1;

console.log(refill); 
// OUTPUT ➡️ { '🥤': 2 }
```

## Rewriting this Ternary with `if`

In case you're unfamiliar with the ternary operation, let me re-write this code with a `if` statement. Hope this will make this code a bit more digestible 🍎

```javascript
const refill = {};

if (refill['🥤']) {
  refill['🥤'] = refill['🥤'] + 1
} else {
  refill['🥤'] = 1
}
```


## Explaining the `||` Operator

For the longest time, I thought the `||` operator was only used in conditional. Until I read Kyle Simpson's "You Don't Know JS" book - I highly recommend reading his book! Did I mention that it's FREE 👏

Kyle explains `||` as **selector operators** instead of logical operators:

> Why? Because they don't actually result in logic value (aka `Boolean`). 
> So what do they result in? They result in the value of one (and only one) of their two operands. In other words, they select one of the two operand's values.

That means you can use it as a value assignment. Whoa, isn't that cool 🤩 And that's exactly what I'm doing in this code tidbit 👍

This pattern is quite often used for setting default values. If this is the first time you've seen this pattern, it helps thinking of it in terms of ternary. At least, it was helpful for me at the beginning of understanding it 😝

```javascript
'Option A' || 'default option';

// This is roughly the same as
'Option A' ? 'Option A' : 'default option';
```

⚠️ BUT! Before you go crazy and refactor all ternary statements with the `||` operator. Read the next section!

## `||` Does NOT Replace Ternary Operator!

Although the `||` operator is a very useful patter to set default values. It does NOT replace the ternary. You should only use it in situations where you want ALL falsy values to be skipped. Otherwise, it's better to use a ternary instead where you can be more explicit.

### An example where Ternary is better than `||`

Let's look at a slightly different version of our refill example. Here's a function of creating our refill object. But now, we allow our users to skip the refill. Meaning they want `0` refills.

```javascript
function refillDrink(num) {
  const refill = {};

  refill['🍺'] = num || 1;

  return refill;
}

refillDrink(0);
// 😱 This is NOT what we want >> { '🍺': 1 }
```

☝️ Oh no! We can't pass in `0`. That's because `0` is a falsy value. In the situation, a ternary would be much better.

```javascript
function refillDrink(num) {
  const refill = {};

  refill['🍺'] = num !== undefined ? num : 1;

  return refill;
}

refillDrink(0);
// ✅ { '🍺': 0 }
```

☝️ Yay, we can set `0` as our value 👍

## Resources

- [You Don't Know JS: Operators ||](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#operators--and-)
- [My article on Falsy Values](https://www.samanthaming.com/tidbits/25-js-essentials-falsy-values)
