# Abbreviate Your Code with HTML abbr Tag

Semantic HTML is a great way to convey meaning of your page. Mark up abbreviated content with the `<abbr>` tag. And when you pass a title, it will create a tooltip when hovered over. Nice! 👏

```html
<abbr title="Today I learned">TIL</abbr> something awesome!
```

[[toc]]

## Default Styling

The default styling of `<abbr>` varies a bit from different browsers. In Chrome and Firefox, it will have an underline and when hovered it will a tooltip of the `title` value you passed.

<blockquote class="demo">
  <p><abbr title="Today I learned">TIL</abbr> something awesome!</p>
</blockquote>

If you open this page on Safari, there will be no underline. Also, the underline is only present if you have a `title` attribute.

## Styling abbr Tag

With its unique tag, it also makes customization styling very easy. You can do something like this

```css
abbr {
  text-decoration: underline blue dotted;
  color: blue;
}

abbr:hover {
  cursor: help;
}
```

<blockquote class="demo">
  <p>Hover <abbr title="abbr is cool">me</abbr> to see my custom help (?) cursor</p>
</blockquote>

Because of the cross-browser variations, I would recommend that you impose a custom styling for your `<abbr>` tag. That way you will have a consistent look between browsers 🤓

## Battle between `abbr` VS `acronym` ⚔️

Back in 1997, there was this fierce debate about `acronym` vs `abbr`. The war began when Netscape created the `<abbr>` tag and Microsoft had the `<acronym>`. No side wanted to budge! And our mediator, <abbr title="World Wide Web Consortium">W3C</abbr>, refused to interfere and take a stand. The battle continued for many years, leading many developers confused and unsure which to use. Microsoft seems to have an edge with its dominating Internet Explorer presence. But then HTML5 landed...

W3C finally decided to step in and said, <i class="text-purple">"Nobody wins when the family feuds, We all lose when the family feuds, What's better than one billionaire? Two"</i> ... Opps, sorry that was the lyrics to [Jay Z's Family Feuds](https://youtu.be/z2kEKZ6jyQQ?t=300), but I'm pretty sure it was along that lines 😂

Anyways, long story short! `<acronym>` is deprecated, so use `<abbr>` 👍

## Mixing `abbr` with `dfn`

When you are defining a term, you can wrap it in the `<dfn>` tag. So if you're using an abbreviation plus you're explaining it, you can mix these tags like this:

```html
<p>
  <dfn>
    <abbr title="Hypertext Markup Language">HTML</abbr>
  </dfn>
  is the standard markup language for documents designed to be displayed in a
  web browser.
</p>
```

<blockquote class="demo">
<p>
  <dfn><abbr title="Hypertext Markup Language">HTML</abbr></dfn>
  is the standard markup language for documents designed to be displayed in a web browser.
</p>
</blockquote>

## Why Semantic HTML is important

Semantic HTML is important because it allows you to convey meaning of your code. I remember when I first started learning programming, I'd just wrap all my text in `<div>` and then use CSS to apply the correct styling. For a visual person, it made no difference. The user would see what I want them to see 🤷‍♀️

But wrapping everything in a `<div>` tag, even with styling, means nothing for a machine. So that means a machine such as a screen reader would not know how to take your text and properly communicate your content for a visually impaired person. Nor would a search engine bot, think <abbr title="Search Engine Optimization">SEO</abbr>, know how to crawl your content, and properly rank your site. By the way, noticed what I did there, I wrapped my SEO in an `<abbr>` tag 😉 That's right! Got to always be applying them knowledge 😎

As developers, it is our job to ensure our website or app is inclusive for everyone. And the way to do that is to use the proper semantic HTML tag 💛 Just like if you're a restaurant, you wouldn't turn away paying customers 😆 (that's right, it's all about the money! Utility ain't paying themselves 🤑)

## Display HTML abbr on Mobile

So far, I got you all pumped about using the HTML `<abbr>`. It's semantic and it has a nice tooltip when hovered. Before you break the champagne out...there is a little problem 😅

The problem is with Mobile. The hover works great on desktop where there is a pointing device. But once you switch over to a mobile device, the hover tooltip won't work. But no worries! I found some creative solutions 👏

### Solution 1: Display Non-abbreviated Term

Here's a very simple solution. Let's just display the full non-abbreviated term once they're at a smaller screen size.

```html
<abbr title="Today I learned">TIL</abbr>
```

And with CSS, we take the non-abbreviated term indicated in the `title` attribute and output it on our page in brackets.

```css
abbr[title]::after {
  content: ' (' attr(title) ')';
}
```

<blockquote class="demo ninety-eight-tidbit__mobile-solution-one">
  <p><abbr title="Today I learned">TIL</abbr> 👈 The non-abbreviation is displayed</p>
</blockquote>

And we can also use media queries to get rid of the non-abbreviated term once it hits a bigger screen size.

```css
@media screen and (min-width: 992px) {
  abbr[title]::after {
    content: '';
  }
}
```

Credit: [Aurelio De Rosa](https://www.audero.it/blog/2013/12/23/enhancing-the-abbr-element-on-mobile/)

### Solution 2: Display Non-abbreviated Term with Tap

It's nice that we display the non-abbreviated term on smaller screen sizes. But we all know how real estate is even more previous on mobile devices, so we might not want to clog our screen with unnecessary text. In that case, we can utilize our `hover` state to only show the non-abbreviated term only when tapped.

```css
abbr[title]:hover::after {
  content: ' (' attr(title) ')';
}
```

<blockquote class="demo ninety-eight-tidbit__mobile-solution-two">
  <div class="mb-2"><abbr title="Today I learned">TIL</abbr></div>
  <div>☝️Desktop: hover to see non-abbreviation</div>
  <div>☝️Mobile: tap to see non-abbreviation</div>
</blockquote>

We can even further improve on this by including keyboard support. We can indicate the `abbr` tag is focusable in sequential keyboard navigation with `tabindex="0"` and then trigger our non-abbreviated content when focused.

```html
<abbr title="Today I learned" tabindex="0">TIL</abbr>
```

```css
abbr[title]:focus::after {
  content: ' (' attr(title) ')';
}
```

<blockquote class="demo ninety-eight-tidbit__mobile-solution-two-keyboard">
  <div class="mb-2"><abbr title="Today I learned" tabindex="0">TIL</abbr></div>
  <div>☝️Use the <kbd>tab</kbd> key OR click to trigger focus</div>
</blockquote>

Credit: [Ire Aderinokun](https://bitsofco.de/making-abbr-work-for-touchscreen-keyboard-mouse/)

### Solution 3: JavaScript Tooltip

Instead of using CSS, you can also simply use JavaScript to trigger a tooltip. If you're using Bootstrap, you can use the [Tooltips](https://getbootstrap.com/docs/4.5/components/tooltips/) component.

It definitely would be nice if there was a native solution to address the `<abbr>` issues in mobile or non-pointing device. Unfortunately at this time, there isn't 😔. But semantic HTML is still very important and as developers, we need to do our best to use it whenever possible. For now, we just have to understand the issues and use our creative juices to work around it. Semantic HTML all the way!!! 🏆

## Browser Support

| Browser           | HTML `abbr` |
| ----------------- | ----------- |
| Chrome            | ✅          |
| Firefox           | ✅          |
| Safari            | ✅          |
| Edge              | ✅          |
| Internet Explorer | ✅          |

- [Browser Support](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr#Browser_compatibility)

## Community Input

- _[@oskar.zanota](https://www.instagram.com/p/CD_rhQYAyxc/):_ `cursor: help` doesn’t need to be in `:hover`, you can just put it in abbr.

## Resources

- [MDN Web Docs: HTML abbr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
- [w3schools: HTML abbr](https://www.w3schools.com/tags/tag_abbr.asp)
- [HTML.com: abbr](https://html.com/tags/abbr/)
- [HTML5Doctor: abbr](http://html5doctor.com/the-abbr-element/)
- [W3C archive](https://lists.w3.org/Archives/Public/www-html/1997Jul/0558.html)
- [W3C: dfn](https://www.w3.org/TR/html52/textlevel-semantics.html#the-dfn-element)
- [Stack Overflow: The HTML dfn and abbr tags and correct usage of the title attribute](https://stackoverflow.com/questions/21682350/the-html-dfn-and-abbr-tags-and-correct-usage-of-the-title-attribute)
- [Enhancing the HTML abbr Element on Mobile](https://www.audero.it/blog/2013/12/23/enhancing-the-abbr-element-on-mobile/)
- [Making the abbr element work for touchscreen, keyboard, and mouse](https://bitsofco.de/making-abbr-work-for-touchscreen-keyboard-mouse/)

<!-- IGNORE -->
<style scoped>

.demo abbr {
  text-decoration: underline blue dotted;
  color: blue;
  font-weight: bold;
  cursor: help;
}
.ninety-eight-tidbit__mobile-solution-one abbr[title]::after{
  content: " (" attr(title) ")";
  text:
}
.ninety-eight-tidbit__mobile-solution-two abbr[title]:hover::after{
  content: " (" attr(title) ")";
}
.ninety-eight-tidbit__mobile-solution-two-keyboard abbr[title]:focus::after{
  content: " (" attr(title) ")";
}
</style>
