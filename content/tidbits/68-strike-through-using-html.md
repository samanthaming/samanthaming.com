---
title: Strikethrough using HTML5
description: HTML semantic provide meaning to your content. If you're striking through content, indicate the meaning with proper tag using <del> or <s>
tags: [html]
order: 68
createdAt: 2019-06-07
updatedAt: 2020-01-12
---

CSS is great for styling, but not so good for providing meaning of your content. That's what HTML semantic tags are for. When you're trying to strikethrough content, there's typically a reason you're doing that. And that reason can be described using the proper HTML tag. Communicate that using `<del>` or `<s>` and give your code semantic meaning 🙌

```html
<s>Text no longer relevant</s>
```

> <s>Text no longer relevant</s>

```html
<del>Text removed from document</del>
```

> <del>Text removed from document</del>

## `<s>` vs `<del>`

Yes, they are both strikethroughs. However, they convey different meaning about the content. So they are not interchangeable. You want to pick the one that reflects what you are trying to achieve. Let's start with the definition.

### `<s>`

> Use this when you are trying to represent things that are no longer relevant or not longer accurate.

✅ A good example of this is for Price Discount

```html
<p><s>$100</s></p>
<p>$999.99</p>
```

> <p>On sale!</p><p><s>$100</s><span style="color:red">$899</span></p>

❌ However, this tag shouldn't be used when indicating document edits. That's where `<del>` come in.

### `<del>`

> Use this when you want to indicated something is removed from the document

✅ A good example of this is for Todo List

```html
<p>TODO</p>

<ul>
  <li><del>Get a Job</del></li>
  <li>Become a Senior Developer</li>
</ul>
```

> <p>TODO</p><ul><li><del>Get a Job</del></li><li>Become a Senior Developer</li></ul>

### Rule

Here's how I remember which to use. If the content represents something deleted, use `<del>`. And for all other instances, use the `<s>` 👍

## Using `<del>` with `<ins>`

Here's where I think `<del>` really shines. You can pair it up for `<ins>` and use them together to create an interface that track and record changes that happened in your document.

### Example: Text Editor

```html
<p>
  My name is
  <del>Smanta</del>
  <ins>Samantha</ins>
</p>
```

> <p>My name is <del style="background:#fbb">Smanta</del>&nbsp;&nbsp;<ins style="background: #d4fcbc">Samantha</ins></p>

### Example: Git Interface

```html
<table>
  <tr>
    <td><del>+ function TEA() {</del></td>
    <td><ins>- function tea() {</ins></td>
  </tr>
</table>
```

> <div style="font-family: monospace;"><div>+&nbsp;<del style="background: #f9d7dc;text-decoration: none;">function TEA(){</del></div><div>-&nbsp;<ins style="background: #ddfbe6;text-decoration: none;">function tea(){</ins></div></div>

## `<strike>`

You might have seen the `<strike>` tag. This is actually the old tag that was deprecated in HTML4. It was replaced with a more semantically appropriate `<s>` and `<del>` tags, which was introduced in HTML5.

The `<del>` and `<s>` is quite well supported, even in Internet Explorer. Although some browser may still support the `<strike>` tags, it's best practice to avoid it 🙅‍♀️

## Accessibility Concerns

These particular tags, unfortunately, won’t be read by most screen readers. But you can use `::before` and `::after` property to have it announced. However best not to abuse this technique as some people deliberately disable announcing content that creates verbosity ✨

**`<del>`**

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: ' [deletion start] ';
}

del::after {
  content: ' [deletion end] ';
}

/* MDN */
```

**`<s>`**

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: ' [start of stricken text] ';
}

s::after {
  content: ' [end of stricken text] ';
}

/* MDN */
```

## Community Inputs

**💬 What are some HTML strikethrough use cases you've seen?** Let's take a look at what the community said 👀

- _[@its4zahoor](https://twitter.com/its4zahoor/status/1147644230409555969):_ I have seen it a lot in Price Discount of Product promotions Screens. Case: Strike through the real price & show discounted one along

- _[@jamielarchin\_\_](https://twitter.com/jamielarchin__/status/1147768705687969792):_ In an account creation form when there is a password field, list the password requirements and then strikethrough them as the user has completed each one.

- _[@kotpes](https://twitter.com/kotpes/status/1147709273503338496):_ Chat apps

- _[@ultrasamad](https://twitter.com/ultrasamad/status/1147751037127839744):_ Seen in completed todo list items

## Resources

- [MDN Web Docs: del>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
- [MDN Web Docs: s](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
- [Stack Overflow: s vs del](https://stackoverflow.com/questions/52113995/s-vs-del-in-html)
- [Stack Overflow: Difference between s and del in HTML](https://stackoverflow.com/questions/16743581/what-is-the-difference-between-s-and-del-in-html-and-do-they-affect-website)
- [HTML5 Doctor: Comparing and contrasting ins, del, and s](http://html5doctor.com/ins-del-s/)
