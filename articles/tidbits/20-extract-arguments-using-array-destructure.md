# Extracting Arguments using Array Destructure

Happy Father’s Day!

Array Destructuring is terrific at extracting value from your arguments. So the next time you see the array bracket notation, just swap them out and use array destructuring syntax instead 🎉


```javascript
function sendLove(...args) {

  // ❌ Old way
  const hug = args[0];
  const gift = args[1];

  // ✅ Better way using Array Destructure
  const [icon, gift] = args;
}

sendLove('🤗', '🎁')
```

The first thing we’re doing is spreading our arguments, so you can get an array. Next we’re assigning them to our variables using array destructuring.

```javascript
// Step 1:
(...args)
args // [ '🤗', '🎁' ]


// Step 2:
const [icon, gift] = args;

icon // '🤗'
gift // '🎁'
```

## Understanding the `arguments` Object

There's been some confusion on the syntax. I think it's because of the arguments objects. So I'm going to try to explain it. In every function, there is a built in `arguments` object. The `arguments` object is an Array-like object that corresponds to the arguments passed into a function.

```javascript
function sendLove() {

  console.log(arguments); // { 0: '🤗', 1: '🎁' }
}

sendLove('🤗', '🎁')
```

As you can see the `arguments` is not an array. That's why in "Step 1", I'm using the `...` spread syntax to convert it to a real array. So this is essentially what I'm doing:

```javascript
function sendLove(...args) {
}

// Same as

function sendLove() {
  var args = [...arguments];
  console.log(args) // [ '🤗', '🎁' ]
}
```

That's why I can name it whatever I want:

```javascript
function sendLove(...hello) {
  console.log(hello); // [ '🤗', '🎁' ]
}
```

Read more about the `arguments` object here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments


## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
- http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/
- https://gist.github.com/mikaelbr/9900818
- https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
