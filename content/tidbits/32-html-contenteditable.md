---
title: Make a HTML element editable with `contenteditable`
description: Apply the contenteditable attribute and you can edit it similar to <input> or <textarea>. Users can click on the text and make an update creating a smooth editing experience.
tags: [html]
order: 32
createdAt: 2018-9-8
---

Apply the `contenteditable` attribute to any HTML element. Voila! You can now edit them similar to how a `<input>` or `<textarea>` would work 👍

This is cool for creating a seamless smooth editing experience for your user. They can simple click the element and make the update to the text immediately. If you had done it with your standard `<textarea>` or `<input>`, you have the additional steps of using some JS to toggle between the different types of elements, or some sort of CSS styling to make it look less textarea-ish, if you know what I mean lol 😂

```html
<p contenteditable="true">...</p>
```

## `contenteditable` Attribute Values

There can be 3 different values:

```html
<p contenteditable="true">Element is editable</p>

<p contenteditable="false">Element is NOT editable</p>

<p contenteditable="inherit">Element inherits its parent's editable status</p>
```

## `contenteditable` Events

To retrieve the text from the `contendeditable` element, you will need to attach an event listener. The `input` event will fire every time the content of the `contenteditable` changes.

```html
<p contenteditable="true">Hello</p>
```

```javascript
var content = document.querySelector('[contenteditable]');

// 1. Listen for changes of the contenteditable element
content.addEventListener('input', function (event) {
  // 2. Retrive the text from inside the element
  console.log(content.innerHTML);
});
```

## Rich-Text Editing with `contenteditable`

A great use case is to use the property to turn your read-only HTML element into a rich text editor. This allows your user to read the content and edit as they please. Pretty neat 👍

## Resources

- [MDN Web Docs: contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable)
- [w3schools: contenteditable](https://www.w3schools.com/TAGS/att_global_contenteditable.asp)
- [Native Rich-Test Editing with the contenteditable Attribute](http://blog.teamtreehouse.com/native-rich-text-editing-with-the-contenteditable-attribute)
- [Create an Inline Text Editor with the contenteditable Attribute](https://code.tutsplus.com/tutorials/create-an-inline-text-editor-with-the-contenteditable-attribute--cms-25655)
- [MDN Web Docs: input event](https://developer.mozilla.org/en-US/docs/Web/Events/input)
- [Getting plain text from user input on a contenteditable element](https://medium.com/@albertogasparin/getting-plain-text-from-user-input-on-a-contenteditable-element-b711aba2cb36)
- [Team Treehouse: Native Rich-Text Editing with the contenteditable Attribute](https://blog.teamtreehouse.com/native-rich-text-editing-with-the-contenteditable-attribute)
