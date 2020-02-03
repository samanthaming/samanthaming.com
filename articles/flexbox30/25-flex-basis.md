# Day 25: flex-basis

With the flex-grow and flex-shrink property, we know the flex size changes. With the flex-basis property, this is where we set its initial size. You can think of this property as the width of our flex items. So your next question might be what's the difference between width and flex-basis. Of course, you can still use width and it will still work. The reason it works is because if you didn't set the flex-basis, it will default to the width. So your browser will always try to find the flex-basis value as the size indicator. And if it can't find it, then it has no choice but to go with your width property. Don't make the browser do extra work. Do it the proper flex way and use flex-basis.

You may notice I referenced width in my previous formulas. That's because I had not cover flex-basis at that point. So if we want to be flex correct, please replace where I mentioned width with flex-basis 😝

<!-- prettier-ignore -->
```css
.child {
  flex-basis: auto /* default */
           or <width>
}
```
