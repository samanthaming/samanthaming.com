---
title: CSS :placeholder-shown
description: Use this pseudo-class to style an input that is currently displaying the placeholder text -- in other words, the user has not typed anything in the textbox.
tags: [css]
order: 88
createdAt: 2020-05-02
---

Use this pseudo-class to style an input that is currently displaying the placeholder text -- in other words, the user has not typed anything in the textbox 📭

It's great to apply some dynamic styling depending if your input is empty or not 👏

```css
input:placeholder-shown {
  border-color: pink;
}
```

<blockquote class="demo">
  <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" placeholder="placeholder text">
  <br><br>
  <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" placeholder="placeholder text" value="has value">
</blockquote>

<markdown-toc></markdown-toc>

## How does it work?

The `:placeholder-show` is a CSS pseudo-class that allows you to apply styling to `<input>` or `<textarea>` that has a placeholder text.

```html
<input placeholder="placeholder text" />
<textarea placeholder="placeholder text"></textarea>
```

<blockquote class="demo">
  <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" placeholder="placeholder text">
  <br><br>
  <textarea class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" placeholder="placeholder text"></textarea>
</blockquote>

<div class="underline">Result:</div>

- <span style="border: 2px solid DeepPink; padding:0 4px;">Pink</span> if placeholder is shown, user has not typed anything
- <span style="border: 2px solid black; padding:0 4px;">Black</span> if NO placeholder is shown, user has typed something

### `:placeholder-shown` must have placeholder

This selector will not work if the element does NOT have a placeholder text.

```html
<input /><!-- no placeholder -->

<!-- This is also considered no placeholder text -->
<input placeholder="" />
```

```css
input:placeholder-shown {
  border-color: pink;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" placeholder="">
> <br>
> <small>No placeholder text displayed</small>

## `:placeholder-shown` vs `::placeholder`

So we can use `:placeholder-shown` to style the input element.

```css
input:placeholder-shown {
  border: 1px solid pink;
  background: yellow;
  color: green;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown-test-color" placeholder="placeholder text">

☝️Hmmm...notice something odd 🤔 -- We set `color: green` but it didn't work. Well, that's because `:placeholder-shown` will only target the input itself. But for the actual placeholder text, you have to use the pseudo-element `::placeholder`.

```css
input::placeholder {
  color: green;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__input-placeholder" placeholder="placeholder text">

⚠️ BUT! When I was playing around with this, I noticed there are some other properties that if applied at the `:placeholder-shown` level will affect the placeholder text.

```css
input:placeholder-shown {
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 5px;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown-font-properties" placeholder="placeholder text">

Now, I don't really know why this is the case 🤷‍♀️ Maybe because those properties get inherited by the placeholder. Anyways, if you know the real reason, please do submit a [pull request](https://github.com/samanthaming/sample-src/blob/master/articles/tidbits/88-css-placeholder-shown.md) in the "Community Input" section 😄

## `:placeholder-shown` vs `:empty`

Although `:placeholder-shown` is specifically made to target if an element is displaying the placeholder or not. We can essentially use it to check if the input is empty or not (of course, assuming, all your input has a placeholder). So maybe your next question, can't we use [CSS empty](https://www.samanthaming.com/tidbits/72-css-empty-selector/)? Well, let's check 👩‍🔬

<!-- prettier-ignore -->
```html
<input value="not empty">
<input><!-- empty -->
```

```css
input:empty {
  border: 1px solid pink;
}

input {
  border: 1px solid black;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__input-empty" type="text" value="not empty">
> <br>
> <small><i>❌Expect this to be black</i></small>
> <br><br>
> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__input-empty" type="text">

<div class="underline font-bold">Expectation:</div>

- <span style="border: 2px solid DeepPink; padding:0 4px;">Pink</span> if empty
- <span style="border: 2px solid black; padding:0 4px;">Black</span> if NOT empty

Hmmm...from here you might assume that `:empty` seem to be working because we are seeing the <span style="border: 2px solid DeepPink; padding:0 4px;">Pink</span> border. But it actually isn't working 😔

The reason the pink is displaying because **pseudo-class** increases the [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#Selector_Types). Similar to how class selectors (ie. `.form-input`) has a higher specificity than a type selector (ie. `input`). Higher specificity selectors will always override the styles of those set at a lower specificity.

Here's the verdict! Don't use `:empty` to check if an input element is empty or not 🙅‍♀️

### How to check input emptiness without a placeholder?

Okay, so our only way of checking if an input is empty or not is using `:placeholder-shown`. But what happens if our input element doesn't have a placeholder. Well here's a clever way! Pass in an empty string, `" "`.

<!-- prettier-ignore -->
```html
<input placeholder=" "><!-- 👈 pass empty string -->
```

```css
input:placeholder-shown {
  border-color: pink;
}
```

<!-- prettier-ignore -->
> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__placeholder-shown" type="text" placeholder=" ">
> <br>
> <small>No placeholder text displayed</small>

<span class="text-ink-lighter"><i>Thanks [@jeltehomminga](https://twitter.com/jeltehomminga/status/1256847468874080256?s=21) for sharing this tip!</i></span>

## Combined with other selectors

So it's cool we can target the input elements that are displaying the placeholder text. In other words, if the placeholder text is shown, then it must mean that element is empty. Using this knowledge, we can combine this pseudo-class with other selectors and do some really neat things! Let's have a look 🤩

### Inverse `:placeholder-shown` with `:not`

We can do the inverse of something using the `:not` pseudo-class. Here, we can target when the input is NOT empty.

```html
<input placeholder="placeholder" value="not empty" />
```

```css
input:not(:placeholder) {
  border-color: green;
}
```

> <input class="eighty-eight-tidbit__input eighty-eight-tidbit__input-not" type="text" placeholder="placeholder" value="not empty">

<div class="underline">Result:</div>

- <span style="border: 2px solid LimeGreen; padding:0 4px;">Green</span> if NOT empty, user has typed something
- <span style="border: 2px solid black; padding:0 4px;">Black</span> if empty

### Floating Label

One of the problems of using a placeholder and not using a label is accessibility. Because once you're typing the placeholder text is gone. This can lead to confusion for the user. A really good solution is the floating label. Initially, the placeholder text is displayed without the label. And once the user starts typing, the label will appear. This way you can still maintain the cleanliness of your form without compromising the user experience or accessibility. Double win 🥳

And this is possible with pure CSS. We just have to combine `placeholder-shown` with `:not` and `+`. Here's a super simplified version of the floating label.

<!-- prettier-ignore -->
```html
<input name="name" placeholder="Type name..." />
<label for="name">NAME</label>
```

```css
label {
  display: none;
  position: absolute;
  top: 0;
}

input:not(:placeholder-shown) + label {
  display: block;
}
```

<blockquote class="demo">
  <input name="name" type="text" placeholder="Type name..." autocomplete="off" class="eighty-eight-tidbit__input eighty-eight-tidbit__name eighty-eight-tidbit__input-not" />
  <label for="name" class="eighty-eight-tidbit__label">NAME</label>
</blockquote>

And if you start typing, this is the result you will get:

<blockquote class="demo">
  <input name="name" type="text" placeholder="Type name..." value="Samantha" autocomplete="off" class="eighty-eight-tidbit__input eighty-eight-tidbit__name eighty-eight-tidbit__input-not" />
  <label for="name" class="eighty-eight-tidbit__label">NAME</label>
</blockquote>

## Browser Support

Support for `:placeholder-shown` is excellent! This includes Internet Explorer (yes, I'm as surprised as you are 😆). But (of course there's a "but"), for IE, you will need to use the non-standard name `:-ms-input-placeholder`.

| Browser           | placeholder-shown             |
| ----------------- | ----------------------------- |
| Chrome            | ✅                            |
| Firefox           | ✅                            |
| Safari            | ✅                            |
| Edge              | ✅                            |
| Internet Explorer | ✅ (`:-ms-input-placeholder`) |

- [Browser Support: placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown#Browser_compatibility)

## Community Input

- _[@cilly_boloe](https://twitter.com/cilly_boloe/status/1256809908290433030?s=21):_ This works really well with adjacent labels you can move or highlight with "input:placeholder-shown + label" instead of having to add a custom class with JS on focus events like I had been doing 🙃

- _[@xirclebox](https://twitter.com/xirclebox/status/1256680477295022088?s=21):_ You can take this a step further by adding an explicit or implicit label to the input. That way the users will always know what the field is for. This is great for UX and accessibility.

- _[@robertgroves](https://twitter.com/robertgroves/status/1256677840411602944?s=21):_ I put up a quick [CodePen](https://t.co/X6KG728Cen?amp=1) to show how this could be used to include a visual for indicating that input from the user is still needed.

- _[@jibijohndavid](https://twitter.com/jibijohndavid/status/1256991874910351360?s=21):_ CSS Only Floating Label: [CodePen](https://codepen.io/jibijohndavid/full/ExYKBry)

- _[@codedgar_dev](https://twitter.com/codedgar_dev/status/1257096972433010694?s=21):_ I use that along :valid and :invalid to validate natively inputs in my framework [Puppertino](https://codedgar.github.io/Puppertino/examples/forms.html)

- _[@nachocoloma](https://twitter.com/nachocoloma/status/1257056903101906949?s=21):_ You can make it required and use :invalid, but that would be triggered by any failing validation, not just a missing value (and maybe the case is not an empty required field). Better use an empty placeholder instead.

## Resources

- [MDN Web Docs: :placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)
- [MDN Web Docs: ::placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Aplaceholder)
- [MDN Web Docs: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#Selector_Types)
- [Stack Overflow: input:not(:placeholder-shown)](https://stackoverflow.com/questions/55427966/inputnotplaceholder-shown-label-selector-does-not-work-with-autofill)
- [CSS Tricks: :placeholder-shown](https://css-tricks.com/almanac/selectors/p/placeholder-shown/)
- [CSS Tricks: CSS Only Floated Labels with :placeholder-shown pseudo class](https://css-tricks.com/css-only-floated-labels-with-placeholder-shown-pseudo-class/)
- [DavidWalsh: placeholder-shown](https://davidwalsh.name/placeholder-shown)
- [caniuse: placeholder-show](https://caniuse.com/#feat=css-placeholder-shown)

<!-- IGNORE -->
<style scoped>
.eighty-eight-tidbit__input {
  outline: none;
  padding: 2px 8px;
  border: 2px solid black;
}
.eighty-eight-tidbit__placeholder-shown:placeholder-shown {
  border-color: DeepPink;
}
.eighty-eight-tidbit__placeholder-shown-test-color:placeholder-shown {
  background: yellow;
  color: green;
}
.eighty-eight-tidbit__input-placeholder::placeholder{
  color: green;
}
.eighty-eight-tidbit__placeholder-shown-font-properties:placeholder-shown {
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.eighty-eight-tidbit__input-empty:empty{
  border-color: DeepPink;
}
.eighty-eight-tidbit__input-not:not(:placeholder-shown) {
  border-color: LimeGreen;
}

.eighty-eight-tidbit__name:not(:placeholder-shown) + .eighty-eight-tidbit__label {
  display: block;
}
.eighty-eight-tidbit__label {
  display: none;
  color: LimeGreen;
  font-size: 1rem;
  margin-top: 3px;
  transition: all 0.25s ease;
  position: absolute;
  top: 0;
}
</style>
