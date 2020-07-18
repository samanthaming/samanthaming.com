# How to Change the Cursor Color in CSS

You can use the `caret-color` to change the colour of the cursor (caret). You know the blinking cursor when you click on the `<input>` or `<textarea>`, yup that! Now you can change the color to match the theme of your website. Cool right 😁 This css properties only applies to the caret color, there’s nothing for the caret width or other types of appearance. Maybe that will come soon 😜

```css
input {
  /* default */
  caret-color: auto;
}

input {
  /* custom */
  caret-color: DeepPink;
}
```

[[toc]]

## Applicable Elements

The `caret-color` styling can be applied to:

- `<input>`
- `<textarea>`
- elements with `contenteditable` attribute

```css
input {
  caret-color: red;
}

textarea {
  caret-color: green;
}
```

## What is the `contenteditable` Attribute?

The `contenteditable` is an attribute that you can apply to any element to make them editable.

```html
<p contenteditable="true">
  This is now an editable paragraph! Similar to the input element :)
</p>
```

Now you will have a blinking cursor on the element and you can apply a custom color on it.

```css
p {
  caret-color: blue;
}
```

## Removing the Caret 😱

With great power comes great responsibility. You can set the caret to transparent and now it seems like the caret is gone. As to why you will do this, I'm not too sure. When I first saw this, it really confused me. I was wondering the whole time where the caret went lol. I guess it could be a good April Fool's Joke 😂

```css
input {
  caret-color: transparent;
}
```

⚠️ **NOTE:** Remember prioritizing good user experience is super important for a web developer. Having the power to mess with the caret (cursor) color is cool, but definitely not at the expense of usability. Please be mindful of that and make sure there is enough color contrast so your user can see the caret (cursor) on the screen. 😊

## Browser Support

This feature is not fully supported by all browsers. So make sure you check to see if this feature is compatible with the browser you're targeting. In other words, if all your users are using Internet Explorer, I'd advise not using this feature. But what websites are you building where all your users on Internet Explorer, we all know the cool folks are not there...jk 😜

[Can I Use: caret-color](https://caniuse.com/#search=caret-color)

## Community Feedback

_[@aschmelyun](https://twitter.com/aschmelyun/status/1076658692370718720):_ This would be a great (super subtle) addition if you're live-checking for password length or valid username format, style the cursor red to match the input border/label color/etc.

## Resources

- [MDN Web Docs: caret-color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)
- [w3schools: caret-color](https://www.w3schools.com/cssref/css3_pr_caret-color.asp)
- [CSS Tricks: caret-color](https://css-tricks.com/almanac/properties/c/caret-color/)
