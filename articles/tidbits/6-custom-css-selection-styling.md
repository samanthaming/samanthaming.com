
# Custom CSS Selection Styling

Custom Selection Styling is fun! 🎉

The ::selection CSS pseudo-element allows you to apply styles to your text when it’s highlighted. It's a great way to add some pizzaz to your site 💃


```css
p::selection {
  background: DeepPink;
  color: white;
}
```

For Firefox, you will need to use ::-moz-selection 👍

```css
p::-moz-selection {
  background: DeepPink;
  color: white;
}
```

## Resources

- https://css-tricks.com/almanac/selectors/s/selection/
