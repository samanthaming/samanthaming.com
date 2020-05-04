# CSS :empty Selector

Often, we want to style elements that contain content. How about when an element has no children or text at all? Easy, you can use the `:empty` selector 🤩

<!-- prettier-ignore -->
```html
<p> </p>
<!-- NOT empty: note the blank space -->

<p></p>
<!-- YES empty: nothing inbetween -->
```

```css
p::before {
  font-family: 'FontAwesome';
  content: '\f240';
}

p:empty::before {
  content: '\f244';
}

p {
  color: silver;
}

p:empty {
  color: red;
}
```

## What's considered empty?

When I first encounter this, there was a few confusion about what this property considers as **empty**. Let's stick with [MDN's](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) definition here:

> The :empty CSS pseudo-class represents any element that has no children. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS content do not affect whether an element is considered empty.

### Is empty

As long as there is no whitespace, it's an empty element.

```html
<p></p>
```

Comment in between is also considered an empty element. As long as there is no whitespace.

```html
<p><!-- comment --></p>
```

### Not empty

Whitespace is considered not empty. Even in a new line, there is whitespace, so not empty! Emphasizing on this, cause I made the same mistake 😅

<!-- prettier-ignore -->
```html
<p> </p>

<p>
  <!-- comment -->
</p>
```

Having children element also counts as not empty

```html
<p><span></span></p>
```

### Whitespace in Future Spec

The good news is in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), whitespace would be considered empty! This will make it similar to act like `:-moz-only-whitespace`. In other words, this would considered empty:

<!-- prettier-ignore -->
```html
<!-- Considered Empty in CSS Selectors Level 4 -->
<p> </p>
```

⚠️ BUT, don't do this yet. Currently no browser supports this.

## Examples using `:empty`

Okay, let's take a look at some real-life examples of using `:empty`.

### Using `:empty` in Form Error Message

This is the example that made me first discovered `:empty`. So I wanted to prepend a ❌ icon on my error message. But the problem is the icon appeared even when I had no error message. But then no problem, I can just use the `:empty` to only append the icon when there IS an error message 👍

**_CSS_**

```css
.error:before {
  color: red;
  content: '\0274c '; /* ❌ icon */
}
```

**_HTML_**

```html
<!-- No error message -->
<div class="error"></div>

<!-- Yes error message -->
<div class="error">Missing Email</div>
```

**_Output_**

Without Empty

> <div class="error" style="">❌</div><div class="error" style="">❌ Missing Email</div>

With `:empty`

> <div class="error" style=""></div><div class="error" style="">❌ Missing Email</div>

### Using `:empty` in Alerts

Here's another example using `:empty` to hide empty state.

```css
.alert {
  background: pink;
  padding: 10px;
}
.alert:empty {
  display: none;
}
```

**_HTML_**

```html
<div class="alert"></div>
<div class="alert">Alert Message</div>
```

**_Output_**

Without empty

> <div class="alert" style="background: pink; padding: 10px; margin-bottom:20px;"></div><div class="alert" style="background: pink; padding: 10px">Alert Message</div>

With `:empty`

> <div class="alert"></div><div class="alert" style="background: pink; padding: 10px">Alert Message</div>

## Browser Support

Support on this is actually really good. It supports all the way to Internet Explorer 9 🙌

- [Browser Support: empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty#Browser_compatibility)

## Community Examples

I discovered `:empty` when I was trying to style empty error messages in a form. `<div class="error"></div>`. No JS required anymore, I can use pure CSS 👍

**💬 What other use cases do you know?**

- _[@delusioninabox](https://twitter.com/delusioninabox/status/1157800773557899265?s=20):_ A fix to remove janky spacing of empty paragraph tags, generally from user-created content. 😅

- _[@hkfoster](https://twitter.com/hkfoster/status/1157784925631856640?s=20):_ I’ve used it to squash any number of randomly generated selectors that I can’t weed out on the templating side. 👍

- _[@sumurai8](https://twitter.com/Sumurai8/status/1157784283886555137?s=20):_ Removing padding from empty paragraphs

- _[@\_ottenga](https://www.instagram.com/p/B0tm0prAUGc/):_ Nice for notification dot (if empty is not visible, if has some number - for example - is red with the number inside)

- _[@stephenjbell](https://twitter.com/stephenjbell/status/1158072968955813890?s=20):_ `li:empty { visibility:hidden; }` Let an empty list item act as kind of a paragraph break (no bullet) in the middle of a list.

- _[@jlabs](https://dev.to/jlabs/comment/dmpn):_ I've used this recently within ul that show's a message when the ul has no children - the list was populated via JS.

## Community Input

- _[@bourhaouta](https://twitter.com/bourhaouta/status/1157750024664702976?s=20):_ One more thing about :empty it doesn't select elements that contain whitespace, in the other side we have :blank but it's not well supported yet 😔

- _[@link2twenty](https://dev.to/link2twenty/comment/dmoj):_ I love seeing little known features like this getting some spotlight! It's probably worth noting when the level 4 selectors roll out white space will be included as empty 🙂

_[@nevkatz](https://twitter.com/nevkatz/status/1255541927979745287?s=21):_ I finally found a use for that :empty pseudoselector you introduced me to a while back — error panels! I like to add them to the error panel markup at the outset, but when they're empty, no need to show 'em!

- _[@okumurakengo](https://dev.to/okumurakengo/comment/e1c3):_ also :not and :empty can be used to hide empty state 😀

```html
<style>
  .alert:not(:empty) {
    background: pink;
    padding: 10px;
  }
</style>
<div class="alert"></div>
<div class="alert">Alert Message</div>
```

## Resources

- [MDN Web Docs: empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)
- [w3schools: empty](https://www.w3schools.com/cssref/sel_empty.asp)
- [CSS Tricks: empty](https://css-tricks.com/almanac/selectors/e/empty/)
- [5 Lesser Used CSS Selectors](https://bitsofco.de/5-lesser-used-css-selectors/)
- [empty and blank](https://zellwk.com/blog/empty-and-blank/)
- [freeCodeCamp: When to use the :empty and :blank CSS pseudo selectors](https://www.freecodecamp.org/news/empty-and-blank-53b9e96151cd/)
- [Why empty states deserve more design time](https://www.invisionapp.com/inside-design/why-empty-states-deserve-more-design-time/)
- [codrops: empty](https://tympanus.net/codrops/css_reference/empty/)
