# CSS Variables

Move over Sass, we have #CSS variables! I still love Sass of course. But it’s great native CSS supports this. No need for a preprocessor & no more compiling 🥳

Global scope will allow you to access the variable everywhere. Local scope will just be within your specific selector 👍

```css
:root {
  /* 1. Defining in Global Scope */
  --color: red;

  /* 2. Available in all selector*/
  color: var(--color); /* red */
}

.local {
  /* 1. Defining in Local Scope */
  --color: blue;

  /* 2. Scoped to the .local class only */
  color: var(--color); /* blue */
}
```

## Story time...

It's been awhile since I had story time, so let's me share the journey of a discontent css developer who finally stopped being so angry 😂

### Yucky Duplicated CSS Code

Back in the days, I remember having to make a lot of duplicate styling...

```css
.subtitle {
  color: #999;
}
.subtext {
  color: #999;
}
```

This was always annoying to me! Because I knew the concept of `variables` from other programming language. So I always cringe when I see this duplication.

### Sass to the rescue 🦸‍♀️

And then I discovered [Sass](https://sass-lang.com/documentation/variables). Yay, I can finally utilize variables!

```scss
$secondary-color: #999;

.subtitle {
  color: $secondary-color;
}
.subtext {
  color: $secondary-color;
}
```

This was all great. But then you have to deal with installing Sass to your project and the overhead of dealing with a preprocessor and compiling. And for a tiny a project, the effort of setting up Sass just doesn't make sense. So back to being a complain-y developer and tweeting a firestorm of how CSS is annoying...cause that's why Twitter was created right, it's a place for angry developers to vent 😅

### Out of the way Sass, CSS is my hero 💪

CSS finally had enough of me sending it bad energy. So it introduced CSS variables. Now I can set a variable natively. No preprocessor, no extra installation, just plain CSS out of the box. Beautiful isn't it 😍

```css
:root {
  --secondary-color: #999;
}
.subtitle {
  color: var(--secondary-color);
}
.subtext {
  color: var(--secondary-color);
}
```

Can I complain about the awkward syntax 🤔 Sure...but gratitude is the way to happiness. So I'm going to soak in this variable heaven for a bit...until the next story time 😂

## CSS Variable Syntax

**1. Declaring a CSS variable**

You prefix your variable name with 2 dashes, `--`.

```css
--variable-name: some-value;
```

**2. Using the CSS variable**

And to use it. You use pass your variable name into `var()`.

```css
css-property: var(--variable-name);
```

## Scopes in CSS Variable

You can declare your CSS variable in the global scope, meaning it can be available throughout your entire app. Or you can just set the CSS variable in the local scope, where it's only available in the specific selector.

### Global Scope

To declare it in the global scope, you first set your definition inside `:root {}`.

```css
:root {
  --primary-color: #000;
}

h1 {
  color: var(--primary-color);
}
```

### Local Scope

To declare it in the local scope, you just define your variable inside your element block. And that variable is only available within that selector. If you tried to use is somewhere, it won't have any effect.

```css
h2 {
  --h2-color: #999;
  color: var(--h2-color);
}

h3 {
  /* No Effect */
  color: var(--h2-color);
}
```

### Examples

Let's go over some different ways you can have some fun defining CSS variables ✅

#### You can set multiple value

```css
:root {
  --margin: 10px 20px;
}

div {
  margin: var(--margin);
}
```

#### You can build up values

This is handy when used it with `calc()`. Are you sensing some cool dynamic sizing application with this. Ya, my spidy senses are tingling too! 🕷

```css
:root {
  --value: 5;
}

div {
  padding: calc(var(--value) * 1px); /* 5px */
}
```

⚠️Note: You can not concatenate a unitless value with a unit. So this won't work:

```css
:root {
  --value: 5;
}

div {
  padding: var(--value) px; /* ❌ will not give you 5px */
}
```

☝️If you're trying to build up values, you need to use css `calc()` ✅

#### You can reference variable in another definition

```css
:root {
  --border-width: 10px;
  --border: var(--border-width) solid #000;
}

div {
  border: var(--border);
}
```

After some testing, I found the order doesn't matter. You can reference a latter variable in an earlier definition. But coming from JavaScript where you should always use the variable after it's been defined, this seems a bit off to me 😅

```css
/* This also works */
:root {
  --border: var(--border-width) solid #000;
  --border-width: 10px;
}
```

## Overriding CSS Variable Values

The great thing is you can override the global value, so can set something unique to a specific context.

```css
:root {
  --default-color: pink;
}

.content {
  /* Override the global css variable */
  --default-color: green;
}

p {
  color: var(--default-color);
}
```

```html
<p>Default "Pink" color</p>

<div class="content">
  <p>Overridden "Green" color</p>
</div>
```

## Setting Fallback Value

What happens when you use a variable that has never been assigned 🤔

```css
p {
  color: var(--color);
}
```

The answer is NOTHING. Your app doesn't break. I guess that's nice. But if that seems a bit risque, you can set a **Fallback Value**.

```css
p {
  color: var(--color, pink);
}
```

```html
<p>Pink color</p>
```

And if you do define it, the defined color will just take over.

```css
p {
  --color: black;
  color: var(--color, pink);
}
```

```html
<p>Black color</p>
```

## Using CSS Variable in JavaScript

The best thing about using CSS variable instead of Sass variable, is that you can access it in JavaScript! And you know when JS joins the party, it's going to get crazy 😆

Let's go over the basics usage and see how we can retrieve and set our CSS variables.

### Retrieve from inline style

If you set your CSS variable via inline style.

```html
<p style="--color: red"></p>
```

Then you retrieve your value with `getPropertyValue()`:

```javascript
// Get our <p> element
const element = document.querySelector('p');

// Retrieve our CSS variable "--color"
element.style.getPropertyValue('--color'); // 'red'
```

### Retrieve from inline or css file

If you set your CSS variable in your style tag or an external CSS file.

```html
<style>
  p {
    --color: red;
  }
</style>
```

Then you need to use this first `getComputedStyle()`:

```javascript
// Get our <p> element
const element = document.querySelector('p');

// Retrieve our CSS variable "--color"
getComputedStyle(element).getPropertyValue('--color'); // 'red'
```

And yes, you can also use this way to retrieve your inline style as well:

```html
<p style="--color: red"></p>
```

```javascript
// Get our <p> element
const element = document.querySelector('p');

// Retrieve our CSS variable "--color"
getComputedStyle(element).getPropertyValue('--color'); // 'red'
```

### Setting a CSS Variable with JS

And to adjust your CSS variable, you just use `setProperty`.

```javascript
// Get our <p> element
const element = document.querySelector('p');

// Set our "--color" variable to be "blue"
element.style.setProperty('--color', 'blue');
```

### Simple Example

Let's put everything together and look at a simple example. Here we want to check our text color when the text is clicked.

```html
<p style="--color:red; color: var(--color)"></p>
```

```javascript
// Get our <p> element
const element = document.querySelector('p');

// On click, change text from "red" to "blue"
element.addEventListener('click', function() {
  element.style.setProperty('--color', 'blue');
});
```

### Retrieve Global CSS Variable from JavaScript

If you set your CSS variable in the global scope. To retrieve the value in JavaScript, you will have to go with the `getComputedStyle` route, but instead of passing the **element**, you just pass in `document.documentElement`. So something like this:

```css
:root {
  --color: red;
}
```

```javascript
getComputedStyle(document.documentElement).getPropertyValue('--color'); // "red"
```

## Browser Support

Beside party 💩 Internet Explorer, the rest of the browsers are all game!

- [Browser Support: CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Browser_compatibility)

## Community Input

_[@lisovskyvlad](https://twitter.com/lisovskyvlad/status/1226386669856792576?s=20):_ IE11 :( There's JS polyfill but on our experience, it makes ie11 so slow, it's hardly possible to use :(

_[@phillipkent](https://twitter.com/phillipkent/status/1226493790623600642?s=20):_ Still always wonder why can't we just assume IE11 users are clearly okay with a terrible experience? Lol

☝️This is my favorite response ever. I'm definitely going to use this whenever I get asked to fix something in IE. I'm a huge advocate of accoutability. But this is the only time I'll say, "It's you, not me" 😂

_[@lfdn](https://dev.to/cristijora/comment/lfdn):_ Some neat things you can do with css variables is easily control font sizes, spacings, colors on different viewports/pages. You could even do dark mode really easily by changing some css variables.

_[@jhildenbiddle](https://dev.to/jhildenbiddle/comment/lmi3):_ Those looking for IE/legacy support for CSS custom properties (i.e. "CSS variables") can check out [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill). Forgive the self promotion (I am the author), but I thought it would be helpful for those still burdened--as I was not too long ago--with IE/legacy support.

### Community Examples

_[@dillonheadley](https://dev.to/dillonheadley/comment/ln6m):_ css vars are awesome. Here are some cool things I've been using them for. Flexible container widths without having to overwrite the rule: [CodePen](codepen.io/dillonbheadley/pen/oNXNyPa)

_[@azzcatdesign](https://dev.to/azzcatdesign/comment/ljab):_ I'm totally on board with CSS variables! I've got CodePens where I worked out responsive typography, spacers, and containers using global and scoped variables plu with calc(). Even took it further with HSL colors and abstracting the separate values to local variables for button colors. You can't do the same kind of color edits in CSS with variables as you can with SCSS ie: darken(\$color, 10%) but I've found I'm not missing SCSS variables for color, just organizing differently.

- [CodePen: Layout Overlay with Container & Grid Modifiers](codepen.io/azzcatdesign/pen/PoovWmp)
- [CodePen: Type Variables: Responsive Scale Ratios](codepen.io/azzcatdesign/pen/yLLWgbq)
- [CodePen: Spacing Variables (Fibonacci)](codepen.io/azzcatdesign/pen/YzzbNQ)
- [CodePen: HSL Custom Properties for States](https://codepen.io/azzcatdesign/pen/WNNBRjd)

## Resources

- [MDN Web Docs: CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN Web Docs: Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Tricks: What is the difference between CSS variables and preprocessor variables?](https://css-tricks.com/difference-between-types-of-css-variables/)
- [freeCodeCamp: Everything you need to know about CSS Variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
- [flaviocopes: CSS Variables](https://flaviocopes.com/css-variables/)
- [MDN Web Docs: getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
- [MDN Web Docs: getPropertyValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
