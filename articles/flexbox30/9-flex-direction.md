# Day 9: flex-direction

This is the property that allows us to define our main axis. Remember I mentioned that our main axis can be horizontal or vertical. So if we want the main axis to be horizontal, that's called row. And if we want it to be vertical, that's called column. Also, remember we had a main start and main end. We simply add a reverse suffix to set our "main start" in the reverse direction. Pretty cool eh 👍

<!-- prettier-ignore -->
```css
.parent {
  flex-direction: row /* default */
               or row-reverse
               or column
               or column-reverse
}
```
