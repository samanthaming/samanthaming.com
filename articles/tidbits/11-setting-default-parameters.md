# Setting Default Parameters

Super simple to set Default Parameters with ES6 👏‬

The old way was to use a ternary operator to assign the default value if it was undefined.

With ES6, you can set the default value right inside the function parameters 🎉


```javascript
// Old Way
function coffeeOrTea(drink) {
  drink = drink !== undefined ? drink : '🍵';
}

// ES6 Way
function coffeeOrTea2(drink = '🍵') {

}
```

## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
