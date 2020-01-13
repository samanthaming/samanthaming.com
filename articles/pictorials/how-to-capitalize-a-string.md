# How to Capitalize a Word in JavaScript

Back to another round of Pictorials, where we solve popular algorithm challenges step-by-step with tidbits. Today, let's learn how to capitalize a word!

Here are the 4 methods I'll be covering:

- [toUpperCase()](/basics/string-touppercase)
- [slice()](/basics/string-slice)
- [charAt()](/basics/string-charat)
- [toLowerCase()](/basics/string-tolowercase)

☝️ Click more on the methods if you want to learn more. They're covered in my [Web Basics](/basics/) series 👩🏻‍🏫

<ArticleImage />

## The Challenge

Write a function that capitalize a string.

<ArticleImage name="1" />

## 1. `toLowerCase()`

Unfortunately in JavaScript, there isn't a capitalize or title case a string. So what we can is utilize `toLowerCase()` to make the entire string lower-cased and then uppercase the first letter.

> Convert the entire string to lower case.

<ArticleImage name="2" />

## 2. `charAt()`

Let's access the first letter of our string so we can uppercase it later.

> Get the first character of the string

<ArticleImage name="3" />

## 3. `toUpperCase()`

Great! Now we can uppercase that first letter.

> Transform the first character to upper case

<ArticleImage name="4" />

## 4. `slice()`

So there's 2 part of our string to complete our capitalization. The first letter which has been upper-cased and we got that with `charAt()`. Next we need the rest of our letters. And we can extract using `.slice()`.

> Extract the entire string except the first letter

<ArticleImage name="5" />

## 3. `+`

Alright, we have all the pieces. Next, we need to put it together. We can use our `+` operator to combine strings.

> Combine the strings

<ArticleImage name="6" />

## Final Solution

Awesome! We have successfully capitalize our string 🥳

<!-- TODO: uncomment once re-uploaded -->
<ArticleImage name="7" />
