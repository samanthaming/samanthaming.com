# Day 15: align-items [row]

So justify-content controls how items are laid out on the main axis. What about their layout in the cross axis? Don't worry, that's where align-items come into play. Remember the cross axis is always perpendicular to the main axis. So if the main axis is sitting horizontally, where flex-direction is row. Then , the cross axis is sitting vertically. Aren't you glad we spend almost a week on the fundamentals, that knowledge is all being applied now 🤓

<!-- prettier-ignore -->
```css
.parent {
  align-items: stretch /* default */
            or flex-start
            or flex-end
            or center
            or baseline
}
```
