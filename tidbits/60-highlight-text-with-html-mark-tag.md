---
title: Highlight text with HTML `<mark>` tag
description: Need to highlight a text, use the HTML5 mark tag. This is a more semantic option that will easily style your highlighted text without CSS.
tags: [html]
order: 60
createdAt: 2019-05-10
updatedAt: 2019-05-10
---

If you ever need to mark text within a paragraph, better use the `<mark>` tag. It's HTML version of a yellow highlighter. I've always used a `<span>` tag with some CSS styling sprinkled on it, not realizing this more semantic option existed. HTML5 is filled with all kind of goodies, am I right 😆

```html
<p>
  <mark>Highlight</mark>
  text with HTML &lt;mark&gt; tag
</p>
```

## Default `<mark>` styling

The default background color of `<mark>` is yellow.

```html
<p>
  <mark>Default Yellow Highlight</mark>
</p>
```

_Output_

> <mark>Default Yellow Highlight</mark>

## Custom Styling `<mark>` with CSS

Of course, like any text HTML tag, you can apply custom styling with CSS. You can think of it similarly to how you would style a `<p>` tag.

```css
mark {
  background: red;
  color: white;
}
```

_Output_

> <mark style="background: red; color: white;">Custom Highlight</mark>

## `<mark>` vs Other Text HTML Tags

### strong

`<strong>` is used to indicate text that has strong importance than the surrounding text, such as a warning or error. Semantically, its importance. It appears as **bold**

### b

`<b>` is very similar to `<strong>` as it also appears as **bold**. However, unlike it, it doesn't really convey any importance and it's more a stylistic thing than semantics.

### em

`<em>` is used to stress emphasis on a particular word. It appears as _italics_

### mark

`<mark>` merely highlights the relevance of a certain piece of text. Prior to the existence of this tag, many have used `em` or `strong` to give the highlighted content some semantic meaning. Well no more! If you need to highlight, use this tag 🌟

## Why semantic HTML tag is important

The reason you don't just use `<div>` tags everywhere is because they are not semantic. You might be like me when I first started learning programming - who cares about being semantically-correct 🙄. Wrong ❌. In fact, search engines like Google do! Because semantics convey meaning about your site. When search robots crawl through your site, they'll know what's up. In other words, ding ding ding on your SEO or **search engine optimization** 🏆

Another reason to be semantically-correct is for accessibility. A lot of the accessibility tools rely on the tags' semantics to convert your site into meaning to the human user using it (ie. screen readers). Here's an analogy. Remember back in the days, when we got the computer reading text from a site. It sounded super robotic and odd 🤖. Without the proper semantics, it's just like that. Does it work, sure - but the listening experience is terrible 😱. However, when you use proper semantics, it's like listening to Siri. It sounds way more human-y because it has all the different inflection, changes in pitch, and even know when to pause. And this is the similar type of better experience you can achieve when using semantically-correct HTML tags 👍

### HTML5 tag and SEO

I do want to point out one thing though.

Google's [John Mueller](https://twitter.com/JohnMu/status/1004985438812196864) mentioned this in a Twitter response:

> It certainly makes sense to use HTML5 properly if you can, there's no SEO downside to doing so :).

Here's what I gather from this. Whether or not you use HTML5 tags, it won't hurt your Google search result ranking. However, does that mean you should use HTML5 tags. Not at all! The accessibility benefits are still there. And some HTML5 tags have really interesting browser behavior and it opens up your user to more advanced feature that it didn't before 🤩

## Accessibility Concerns

Alright, hopefully, I have successfully conveyed to you the importance of semantic HTML tags. And you can now understand how `<mark>` is not simply to style texts, but it's semantically a good thing.

But! there is some concern with its accessibility. Unfortunately, the use of the `<mark>` tag is not announced by most screen readers in its default settings. But good news, there's is a way around it. You can use the CSS content property and pseudo-element to make an announcement.

```css
mark::before {
  content: ' [highlight start] ';
}

mark::after {
  content: ' [highlight end] ';
}

/* Hide the text created in the CSS content property */
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

So what the screen reader will do here. When it encounters text that's wrapped in the `<mark>` tag, it will announce "highlight start" followed by the text within the tag. and then announce "highlight end" once the mark tag ends.

### BUT...

Please note: if you have a lot of these "announcement", it can be very verbose and add in sometimes annoying unnecessary information. Which can cause some screen reader users to turn off this feature. So, the lesson here is. "With great power comes great responsibility 🕷". Don't abuse this technique and ONLY apply it in instances where NOT knowing the highlighted content can adversely affect understanding for the user.

## Use Case for `<mark>`

The fun part now! Let's take at some use cases for `<mark>`:

### Use Case: Search Result

Here's a popular one. You can use it to highlight the term a user has searched for.

```html
<p>Search Result for "Vue"</p>

<hr />

<p>
  <mark>Vue</mark> is a awesome JavaScript framework. <mark>Vue</mark> is
  awesome. Can you tell I really like <mark>Vue</mark> 😆
</p>
```

_Output_

> <p>Search Result for "Vue"</p><hr><p><mark>Vue</mark> is a awesome JavaScript framework. <mark>Vue</mark> is awesome. Can you tell I really like <mark>Vue</mark> 😆</p>

### Use Case: Quotes

It's great to provide highlights for quotation (`<q>`) and block quote (`<blockquote>`).

```html
<p>
  According to Samantha, <q>Vue is <mark>AWESOME</mark></q>
</p>
```

_Output_

> <p>According to Samantha, <q>Vue is <mark>AWESOME</mark></q></p>

## Browser Support

Browser support for this is quite good! All major browser supports this including Internet Explorer. Check it!

[MDN: Browser Compaitibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark#Browser_compatibility)

## Resources

- [MDN Web Docs: HTML Mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
- [w3schools: HTML Mark](https://www.w3schools.com/tags/tag_mark.asp)
- [TutorialsPoint: HTML Mark Tag](https://www.tutorialspoint.com/html/html_mark_tag.htm)
- [20 HTML Elements for Better Text Semantics](https://www.sitepoint.com/20-html-elements-better-text-semantics)
- [Mark Tag in HTML5](https://www.c-sharpcorner.com/UploadFile/667ddf/mark-tag-in-html5/)
- [TechOnTheNet: HTML mark tag](https://www.techonthenet.com/html/elements/mark_tag.php)
- [HTML5Doctor: Draw attention with mark](http://html5doctor.com/draw-attention-with-mark/)
- [TutorialRepublic: HTML5 mark tag](https://www.tutorialrepublic.com/html-reference/html5-mark-tag.php)
- [Using HTML5 Properly Has No SEO Downside](https://www.seroundtable.com/google-html5-seo-25870.html)
