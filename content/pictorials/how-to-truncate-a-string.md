---
title: How to Truncate a String in JavaScript
tags: [javascript]
order: 2
section: JavaScript
createdAt: 2020-01-12
---

- [slice()](/basics/string-slice)
- `+`
- `length`
- `<=`

<markdown-toc :hidden="false"></markdown-toc>

## The Challenge

Write a function that returns a shortened string with ellipsis if it's too long.

<markdown-image img="challenge"></markdown-image>

## 1. `slice()`

With this challenge, the only method we're using is `slice` to trim our string. Once we have it trimmed, we then append the necessary `...` to the final string.

> Shortened the string to the specified length

<markdown-image img="slice"></markdown-image>

## 2. `+`

Let's append our ellipsis which is just `...` to our string.

> Append the ellipsis to our string

<markdown-image img="plus"></markdown-image>

## 3. `length`

So we only want to add our ellipsis if the string is longer than the limit. We can check this by calling the `length` property.

> Check the length of the string

<markdown-image img="length"></markdown-image>

## 4. `<=`

We will need to utilize an `if` statement to check if our string is within the limit.

> No need to truncate if the string is within the limit

<markdown-image img="greater-equal"></markdown-image>

## Final Solution

Let's put this all together! You will notice that I didn't have an `else` statement. This is called the early return. Because a function will end and stop all execution once the `return` keyword is called. So we won't need an `else` keyword since that will never be called. We can simply get rid of that `else` bracket and write all our code in the open. You will see this pattern a lot in the wild, it's a nice refactoring technique you can employ in your own code too!

Alright! Another challenge down! You know how to truncate a string in JavaScript 🥳

<markdown-image img="result"></markdown-image>
