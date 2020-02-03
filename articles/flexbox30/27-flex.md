# Day 27: flex

Sometimes, setting flex-grow, flex-shrink and flex-basis separately are tiring. Well, don't you worry. For the lazy programmers, I mean the efficient programmers 😜 You can set all 3 with the flex shorthand. The added bonus of this way is you don't have to set all 3 value, you can skip the properties you're not interested in and just set the one you are. And for the ones you skipped, it will just take on the default value. Awesome 👍

<!-- prettier-ignore -->
```css
.child {
  flex: 0 1 auto /* default */
     or <flex-grow> <flex-shrink> <flex-basis>
     or <flex-grow>
     or <flex-basis>
     or <flex-grow> <flex-basis>
     or <flex-grow> <flex-shrink>
}
```
