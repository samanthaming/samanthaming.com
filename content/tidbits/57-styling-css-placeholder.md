---
title: Styling Placeholder Text with CSS
description: Learn how to use the ::placeholder pseudo-element to style your placeholder text in an <input>or <textarea> form element.
tags: [css]
order: 57
createdAt: 2019-04-21
updatedAt: 2020-07-17
---

Use the `::placeholder` pseudo-element to style your placeholder text in an `<input>` or `<textarea>` form element. Most modern browsers support this, but for older browsers, vendor prefixes will be required.

```css
::placeholder {
  color: deeppink;
  font-size: 5rem;
  text-transform: uppercase;
}
```

HTML

```javascript
<input placeholder="CSS Placeholder">
```

<markdown-toc></markdown-toc>

## Vendor Prefixes

So the syntax I used is supported by most modern browsers:

```css
/* MODERN BROWSER */
::placeholder {
  color: deeppink;
}
```

But for some browsers or older browsers, you will need to use the vendor prefixes.

```css
/* WebKit, Edge */
::-webkit-input-placeholder {
  color: deeppink;
}
/* Firefox 4-18 */
:-moz-placeholder {
  color: deeppink;
  opacity: 1;
}
/* Firefox 19+ */
::-moz-placeholder {
  color: deeppink;
  opacity: 1;
}
/* IE 10-11 */
:-ms-input-placeholder {
  color: deeppink;
}
/* Edge */
::-ms-input-placeholder {
  color: deeppink;
}
/* MODERN BROWSER */
::placeholder {
  color: deeppink;
}
```

Whoa! I know, that's a huge list. And you might notice quite a few different variations of implementations. So let's break down these differences and understand what's going on here.

### Pseudo-element vs Pseudo-class

You may notice that I use a double colon `::`. This is called a pseudo-element and it was introduced in CSS3. If we used a single colon `:`, this would be called a pseudo-class.

Because the pseudo-element, `::`, was introduced in CSS3 and not the earlier CSS versions, some older browser such as Internet Explorer just never supported it. Whereas pseudo-class, `:`, was introduced earlier (in CSS1 and CSS2). That's why a lot more browsers, including Internet Explorer support it.

Therefore, in our `::placeholder` vendor prefix, you will a mixture of pseudo-class and pseudo-element being used.

### Firefox Placeholder Default Opacity

Okay, what's this deal with `opacity: 1` for Firefox. That's because, by default, Firefox's placeholders have an opacity value applied to them. So to override this, we need to set it. That way our placeholder text will show up and doesn't have the faded out appearance from the default Firefox setting.

```css
opacity: 1;
```

### CSS Handling Invalid Selectors

So you might also be thinking, why did we not just group all the vendor-prefixes together like this:

<!-- prettier-ignore -->
```css
::-moz-placeholder, /* Firefox 19+ */
:-moz-placeholder /* Firefox 4-18 */
{
  color: deeppink;
  opacity: 1;
}
```

Well, that's because there was a rule in CSS3 that states:

> a group of selectors containing an invalid selector is invalid.

Let's look at an example to see what this means. Here's a valid CSS selector

```css
h1 {
  color: blue;
}
```

So in our HTML, this will appear as expected

```html
<h1>Hello</h1>
<!-- This text will have a blue color-->
```

But what happens if we add in an invalid CSS selector

<!-- prettier-ignore -->
```css
h1, /* valid */
h2::poop /* invalid */
{
  color: blue;
}
```

Since there is an invalid CSS selector in the group. The entire group would be deemed invalid and no styling will be applied.

```html
<h1>Hello</h1>
<!-- No blue color will be applied -->
```

That's why we need separate rules for each browser. Otherwise, the entire group would be ignored by all browser.

⭐️ **BUT!** it looks like this might be changed in CSS4.

> Generally, if there is an invalid pseudo-element or pseudo-class within in a chain or group of selectors, the whole selector list is invalid. If a pseudo-element (but not pseudo-class) has a -webkit- prefix, As of Firefox 63, Blink, Webkit and Gecko browsers assume it is valid, not invalidating the selector list.

Read more about this in an article by Chris Coyier, ["One Invalid Pseudo Selector Equals an Entire Ignored Selector"](https://css-tricks.com/one-invalid-pseudo-selector-equals-an-entire-ignored-selector/)

## Supported Styles

Here's a list of all the styles that you can apply to your placeholder text:

- `background` properties
- `color`
- `font` properties
- `letter-spacing`
- `line-height`
- `opacity`
- `text-decoration`
- `text-indent`
- `text-transform`
- `vertical-align`
- `word-spacing`

```css
::placeholder {
  /* styles */
}
```

## Accessibility Concerns

Being able to style placeholders is awesome. But I need to point out something really important - placeholder text doesn't replace the label element, `<label>`!! I was guilty of this when I first got into web programming 🙁. When your form relies purely on placeholder instructions without labels, it's very harmful to accessibility. Accessibility is not only important to make your website accessible for everyone, but it's also helpful for creating a better user experience. And ultimately creating a better website or web application 💪

Here's a really [awesome article](https://www.nngroup.com/articles/form-design-placeholders/) about the concerns of using placeholders only without any labels. Below are the top 3 points:

1. Because placeholder text is disappearing in nature, it can strain your user's short term memory
2. Without labels, users cannot check their work before submitting a form.
3. When error messages occur, people don’t know how to fix the problem.

## Automatically Add Vendor-Prefixes

If you don't want to deal with all the vendor-prefixes, you can use [PostCSS](https://github.com/postcss/postcss) with the [Autoprefixer](https://github.com/postcss/autoprefixer) plugin. This plugin will parse your CSS and add vendor prefixes.

## Community Input

- _@edufurlongo:_ Also, use `opacity:1` because most browser apply an alpha (usually 0.5) to the placeholder

## Resources

- [MDN Web Docs: placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
- [w3schools: placeholder](https://www.w3schools.com/howto/howto_css_placeholder.asp)
- [CSS-Tricks: placeholder](https://css-tricks.com/almanac/selectors/p/placeholder/)
- [CSS-Tricks: One Invalid Pseudo Selector Equals an Entire Ignored Selector](https://css-tricks.com/one-invalid-pseudo-selector-equals-an-entire-ignored-selector/)
- [Stack Overflow: Change an HTML5 input's placeholder color with CSS](https://stackoverflow.com/questions/2610497/change-an-html5-inputs-placeholder-color-with-css)
- [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/)
