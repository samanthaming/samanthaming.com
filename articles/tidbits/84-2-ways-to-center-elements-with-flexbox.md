# 2 ways to Center Elements with Flexbox

Being able to horizontal & vertical center something is super simple with CSS Flexbox. The standard way is to use flex properties. But you can also use do it with margin. Pretty neat right 👏

In this code note, I will assume you have some familiarity of Flexbox. But if you're new to Flexbox, I recommend checking out my FREE course first, [Flexbox30 - Learn flexbox with 30 code tidbits](https://www.samanthaming.com/flexbox30/).

Using Flex properties

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Using Margin

```css
.parent {
  display: flex;
}

.child {
  margin: auto;
}
```

[[toc]]

## Centering with Flex Properties

The easiest way is to use the flex properties and add it to the parent container using the `align-items` and `justify-content`.

_html_

```html
<div class="parent">
  <div class="child"></div>
</div>
```

_css_

```css
.parent {
  border: 1px solid red;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  width: 100px;
  height: 100px;
  background: green;
}
```

> <div style="border: 3px solid IndianRed;height:200px;display:flex;align-items:center;justify-content: center;"><div style="width:100px;height:100px;background:ForestGreen;"></div></div>

### Horizontal Centering with Flexbox

When you set `display: flex`, the flex direction is to be `row`. In that case, `justify-content` will control the horizontal placements of its flex children.

```css
.parent {
  /*...*/
  display: flex;
  justify-content: center;
}
```

> <div style="border: 3px solid IndianRed;height:200px;display:flex;justify-content: center;"><div style="width:100px;height:100px;background:ForestGreen;"></div></div>

_Note:_ if the `flex direction` is `column`, then `align-items` would control the vertical placements of its flex children.

### Vertical Centering with Flexbox

When you set `display: flex`, the flex direction is to be `row`. In that case, `align-items` will control the vertical placements of its flex children.

```css
.parent {
  /*...*/
  display: flex;
  align-items: center;
}
```

> <div style="border:3px solid IndianRed;height:200px;display:flex;align-items:center;"><div style="width:100px;height:100px;background:ForestGreen;"></div></div>

_Note:_ if the `flex direction` is `column`, then `align-items` would control the horizontal placements of its flex children.

## Centering with Margin

Prior to flexbox, you might have used `margin:auto` to center an element horizontally like this:

_html_

```html
<div class="parent">
  <div class="child"></div>
</div>
```

_css_

```css
.parent {
  border: 1px solid red;
  height: 200px;
  display: block; /* 👈 */
}

.child {
  width: 100px;
  height: 100px;
  background: blue;
  margin: auto; /* 👈 */
}
```

> <div class="parent" style="border: 3px solid IndianRed;height:200px;"><div style="width:100px;height:100px;background:DeepSkyBlue;margin:auto;text-align:center;">block</div></div>

### Vertical + Horizontal Centering with Flexbox + Margin

However if you add flexbox to the mix, you can actually control both the horizontal and vertical alignment of the element.

```css
.parent {
  /*...*/
  display: flex;
}

.child {
  /*...*/
  margin: auto;
}
```

> <div class="parent" style="display:flex;border: 5px solid IndianRed;height:200px;"><div style="width:100px;height:100px;background:DeepSkyBlue;margin:auto"></div></div>

The `margin` is a shorthand for setting the margin in the top, left, right, bottom direction. This is the syntax:

```css
/* Syntax */
margin: <top> <right> <bottom> <left>;
```

Example:

```css
.child {
  margin: auto;

  /* same as */
  margin: auto auto auto auto;

  /* equivalent */
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}
```

### Horizontal Centering with Flexbox + Margin

To control horizontal centering. We will need to affect the `left` and `right` margins of our child element.

```css
.parent {
  /*...*/
  display: flex;
}

.child {
  /*...*/
  margin-top: auto;
  margin-bottom: auto;
}
```

> <div class="parent" style="display:flex;border: 5px solid IndianRed;height:200px;"><div style="width:100px;height:100px;background:DeepSkyBlue;margin-left:auto;margin-right:auto;"></div></div>

### Vertical Centering with Flexbox + Margin

To control horizontal centering. We will need to affect the `top` and `down` margins of our child element.

```css
.parent {
  /*...*/
  display: flex;
}

.child {
  /*...*/
  margin-left: auto;
  margin-right: auto;
}
```

> <div class="parent" style="display:flex;border: 5px solid IndianRed;height:200px;"><div style="width:100px;height:100px;background:DeepSkyBlue;margin-top:auto;margin-bottom:auto;"></div></div>

To learn more about how margin works with Flexbox, you can read the lesson from my free Flexbox30 course, [Flexbox: Aligning with Auto Margins](https://www.samanthaming.com/flexbox30/31-flexbox-with-auto-margins/)

## Margin vs Flex Parent Properties

You might have noticed, I applied `margin` to the child element. That's because `margin` is used to control a specific child element. Where `justify-content` and `align-items` are parent properties -- so it will affect all enclosing children. My examples have been a single element, so it doesn't matter. But when you have multiple elements, then you will notice some different effects. If this is confusing to you, please do check out my [free course](https://www.samanthaming.com/flexbox30/). And before you face palm 🤦‍♀️, thinking it will be a long read. Apparently, you can get through them in a few minutes 😂

> _[@damafeez](https://twitter.com/damafeez/status/1244402133731954688?s=21):_ These flexbox tidbits by [@samantha_ming](https://twitter.com/samantha_ming) are a great way to learn CSS flexbox. Simple, informative and straight to the point. Ran through them in just a few minutes.

## Community Example

### Debugging Fixed Position with Flex

This example is not necessarily related to flexbox, but more so with `position:fixed`. The twitter community got involved in debugging it, so I wanted to include it in the notes, as some of you might find it interesting. You can follow the original [Twitter thread here](https://twitter.com/rapzzyofficial/status/1244360589104775168?s=21) by @rapzzyofficial.

I'm going to simplify his example so it's easier to follow here. But the idea is the same. He wants to build a navbar where the links are spaced out between each other like this.

```css
.navbar {
  display: flex;
  justify-content: space-between;
}
```

> <div style="border:1px solid IndianRed; display:flex; justify-content:space-between"><div>Home</div><div>Shop</div><div>About</div></div>

However, when he adds `position: fixed`, all the content is squished together, which is not what he wants.

```css
.navbar {
  display: flex;
  justify-content: space-between;
  position: fixed; /* 👈 */
}
```

> <div style="border:1px solid IndianRed;display:flex;"><div>Home</div><div>Shop</div><div>About</div></div>

**Solution**

Because `position: fixed` kind of acts like changing a "block" into an "inline-block", where it goes from taking up the entire row to only as big as the content's width. To fix this, you can do one of the following:

```css
.navbar {
  /* Solution 1 */
  width: 100%;

  /* Solution 2 */
  left: 0;
  right: 0;

  top: 0; /* might also be required to be fixed at top */
}
```

_[@SelenIT2](https://twitter.com/selenit2/status/1244481502542540801?s=21):_ It’s not only inline-blocks that behave that way, floating elements and out-of-flow elements, which absolutely/fixed positioned elements actually are, also shrink to the content width by default. `width:100%` will work, as well as `left:0;right:0;`

## Resources

- [Flexbox30 - Learn flexbox with 30 code tidbits](https://www.samanthaming.com/flexbox30/)
- [Flexbox30 Lesson: Aligning with Auto Margins](https://www.samanthaming.com/flexbox30/31-flexbox-with-auto-margins/)
- [Flexbox30 Lesson: align-items](https://www.samanthaming.com/flexbox30/15-align-items-row/)
- [Flexbox30 Lesson: justify-content](https://www.samanthaming.com/flexbox30/12-justify-content-row/)
