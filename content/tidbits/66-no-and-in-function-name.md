---
title: Code Smell: No AND in Function name
description: Function should do one thing and one thing only. If your function name includes AND, it means you're doing too much! Let's fix this!
tags: [javascript]
order: 66
createdAt: 2019-6-22
---

Function should adhere to the Single Responsibility Principle - meaning it should do one thing and one thing only. So if your function name includes "AND", it means you're doing too much. Solution? Remove the "AND" and split it into separate functions 👍

```javascript
// ❌ Bad
function teaAndSugar() {}

// ✅ Better
function tea() {}
function sugar() {}
```

[[toc]]

## Single Responsibility Principle (SRP)

> Every module should have one single responsibility. This means two separate concerns/responsibilities/tasks should always be implemented in separate modules.

_[Principles Wiki: SRP](http://www.principles-wiki.net/principles:single_responsibility_principle)_

And the Rationale behind is:

> When this rule is not adhered to, one module has several tasks. If one of these tasks changes, there is the risk that this also has an effect on the other task that normally should be independent. Thus unrelated functionality may break.

When you follow the Single Responsibility Principle, you create a code base that is more flexible and modular.

## SRP Benefits in Non Dev Terms

Let's try to explain this in non-dev terms. Let's say you're a chef and you're trying to order ingredients for your kitchen. Two sellers approach you with their options. Seller A tells you, we have all the ingredients you need and everything is mixed for you. Seller B tells you, we have all the ingredients you need and will sell them to you separately. Which one would you buy? Sure Seller A option is pretty good because everything is pre-mixed. BUT the recipes you can make is very limited because you're confined to recipes that require all 3 ingredients. However, with Seller B, the recipes you make are endless. You can make desserts and savory recipes 👩‍🍳

Seller A:

Buying pre-mixed ingredients limit you to recipes that require ALL 3 items.

```javascript
function flourAndSugarAndEgg() {}
```

Seller B:

Buying individual ingredients removes the limitation and allows you to create far more recipes 🏆

```javascript
function flour() {}

function sugar() {}

function egg() {}
```

## Maintainability Benefit

Another great thing with sticking with this rule is maintainability. When you just start out, sure it may seem a lot easier just to put everything together. But I guarantee you that over time, as you add more functionality or make changes, one singular function that does everything becomes very messy to maintain.

### Explained in Non-Dev Terms

Let's explain this with another non-dev term explanation. Let's say you're a big Lego builder and you bought yourself a brand new Lego set. You're super excited you open the new set and dump all the pieces into a container. Unfortunately, you have a final exam the next week so you have no time to build it yet. A few weeks later, your rich aunt buys a few more Lego sets. I mentioned your aunt is rich because we all know Lego sets are ridiculously expensive 😂. Again you open the new set and dump them in the same container, thinking that it's no big deal. Not to be outdone by your rich aunt, your rich grandma also wants to win your love, so she buys more Lego sets for you. Again, you didn't think it'd be a big deal, you open everything and dump them all in the same container. Okay, a few weeks have passed and now you're ready to build your Lego sets. Guess what happened? You're now knocking your head against the wall. Because all the pieces are mixed into one single container and you don't know which is which. However, if you had kept all the Lego sets in its own container, you wouldn't have this problem 💩

That's why one function should do one thing and one thing only. When it's doing more than one thing. It may not seem like it now, but over time and with changing requirements, this function will become bloated and it will become extremely difficult to maintain.

## Community Input

- _[@MaxStalker](https://twitter.com/samantha_ming/status/1204431457843761154):_ function names are much more helpful when they "command" action (in form of a imperative verb)

- _[@Skateside](https://twitter.com/Skateside/status/1142508099753975809):_ Another pro tip: start the function names with a verb. This makes your intentions clearer and easier to explain - "this one makes tea, that one adds sugar."

```javascript
function makeTea() {}
function addSugar() {}
```

- _[@sunnysingh.io](https://www.instagram.com/sunnysingh.io/):_ Generic functions like `getData()` 😝 Um... what type of data? Unless it's a top-level utility, I like being specific like `getUser()`, `getPost()`, etc.

- _[@Mouadovicc](https://twitter.com/Mouadovicc/status/1142524184997838848):_ I prefer to use `drinkTea` and `drinkSugar` by replacing AND by a unified word in this case is drink

- _[@SohelAhmedM](https://twitter.com/samantha_ming/status/1204431457843761154):_ Very helpful. I used to do `doOneTwoAndThree()`. Mistake corrected

## Resources

- [Things I Learnt The Hard Way](https://blog.juliobiason.net/thoughts/things-i-learnt-the-hard-way/)
- [Why is the use of conjunctions in method names a bad naming convention?](https://softwareengineering.stackexchange.com/questions/255669/why-is-the-use-of-conjunctions-in-method-names-a-bad-naming-convention)
- [SamanthaMing: Bad Variable Names to Avoid](https://www.samanthaming.com/tidbits/36-bad-variable-names-to-avoid)
- [SamanthaMing: How to give your boolean variables a better name](https://www.samanthaming.com/tidbits/34-better-boolean-variable-names)
- [Understanding SOLID Principles: Single Responsibility](https://codeburst.io/understanding-solid-principles-single-responsibility-b7c7ec0bf80)
- [Principles Wiki: SRP](http://www.principles-wiki.net/principles:single_responsibility_principle)
