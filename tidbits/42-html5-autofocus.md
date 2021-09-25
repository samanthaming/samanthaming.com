---
title: Set Input Focus with HTML5 `autofocus` 🎉
description:
tags: [html]
order: 42
createdAt: 2018-11-17
updatedAt: 2018-11-17
---

Use the `autofocus` attribute on form elements to automatically focus the input field when the page loads 👍

This is super handy if your site has a form and you can automatically select the first input field and your user can start typing right away 👏

For example, if you have a search site like Google, you can use this attribute to automatically select the search field. That way your user can start typing immediately without needing to click on the input field first. Yay, awesome User Experience 🤩

```html
<input autofocus />
```

## Applies to

You can apply the `autofocus` attribute on:

```html
<input autofocus>
<button autofocus>
<select autofocus>
<textarea autofocus>
```

## `autofocus` Faux Pas

Note you can't apply `autofocus` on inputs of type `hidden` because hidden inputs can't be focused.

```html
<!-- ❌ do NOT do this -->
<input type="hidden" autofocus />
```

Also, `autofocus` can only be on one element on one page. So don't use it on multiple elements.

## Accessibility Concerns

I'll be remissed not to mention some of the accessibility concerns of `autofocus`. So please keep this in mind before using this attribute.

> Automatically focusing a form control can confuse visually-impaired people who using screen-reading technology. When autofocus is assigned, screen-readers "teleport" their user to the form control without warning them beforehand.

_[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)_

I also want to point a possible solution of using `aria-describedby` that may help with this. Of course, if you know of any other solutions, please do share!

When this alert loads, the `autofocus` is kicked in to automatically select the "Do not delete" button. However, due to the limitation of `autofocus` for screen readers. This is not ideal for accessibility. A possible solution is to utilize the `aria-describedby` attribute. So the screen reader will now announce: "Are you sure? dialog. Once you delete this thing, it’s gone forever! Do not delete, button."

```html
<div role="alertdialog" aria-labelledby="acc_name" aria-describedby="acc_desc">
  <h2 id="acc_name">Are you sure?</h2>
  <p id="acc_desc">Once you delete this thing, it's gone forever!</p>
  <button autofocus>Do not delete</button>
  <button>Delete</button>
</div>
```

_Credit to [developer.paciellogroup.com](https://developer.paciellogroup.com/blog/2018/09/describing-aria-describedby/)_

## Resources

- [W3C: autofocus](https://www.w3.org/TR/html5/forms.html#autofocusing-a-form-control:-the-autofocus-attribute)
- [w3schools: autofocus](https://www.w3schools.com/tags/att_input_autofocus.asp)
- [DWB: HTML5 autofocus attribute](https://davidwalsh.name/autofocus)
- [Wufoo: autofocus attribute](https://www.wufoo.com/html5/autofocus-attribute/)
- [Can I use: autofocus](https://caniuse.com/#feat=autofocus)
