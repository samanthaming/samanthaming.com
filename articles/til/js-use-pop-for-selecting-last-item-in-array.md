# Use ".pop()" to select last item from Array in JavaScript

‪Use ".pop" when selecting the last item in an array 👍‬

‪I know this is a simple one. But it completely slipped my brain. JavaScript just has way too many methods to remember. So treat this as a friendly reminder 😄‬

```javascript
const array = [1, 2, 'last element'];

// Before
array[array.length - 1];
// "last element"

// ✅ After
const last = array.pop();
// "last element"
```

### ⚠️ Be aware! `pop` mutates original array!

One very important thing to note is that `pop` mutates your original array. Let's see what I mean here:

```javascript
const array = [1, 2, 'last element'];

const last = array.pop();

console.log(array);
// [1, 2]
```

This is especially problematic if you are referencing your original array somewhere else, because it will affect there. Here's what I mean:

```javascript
const menu = ['water', 'coffee', 'tea'];

const restaurantOne = menu;
const restaurantTwo = menu;

const remove teaFromRestaurantTwo = restaurantTwo.pop();

// Great, we removed the last menu item from Restaurant Two
console.log(restaurantTwo); // ['water', 'coffee']

// 😱 But, Restaurant One's menu is also affected
console.log(restaurantOne); // ['water', 'coffee']
```

## When immutability doesn't matter

Affecting the original array is definitely problematic if you are planning to use the original array elsewhere. But let's look at a use case where mutating the original array doesn't matter because we have no intentions of using it down the road. Let's take a look:

```javascript
function getFileExtention(file) {
  const array = file.split('.'); // ['name', 'jpg']
  return array.pop();
}

const file = 'name.jpg';
getFileExtention(file);
// 'jpg'
```

☝️Here I am writing a function to get the extension from a file name. I created an `array` just to store the result of when I called `.split()` on my `file` (string). I have no intentions of using the `array` elsewhere, nor am I referencing it anywhere, and it is scoped within the function scope so it won't pollute my global scope (no global variable is created). In this use case, it is perfectly safe to use `.pop()` even if it affect the original array.

## General Rule 👍

My general rule is to always go for immutability, in other words use a method that doesn't affect the original array. Always good to err on the side of caution 😉

But again, that's a "general" rule. Every use case will be different. And YOU as the author will know best. Use the way that best fit your app. My goal is always to show you the different tools, so you can pick the best one to use in YOUR use case. And that's what JavaScript is doing, they created a bunch of these methods to stock your toolkit. It's probably the reason, I rarely speak in the definite, because the answer is always...it depends 🙂. So keep an open mindset, always maintain a #StudentMindset, and you will never stop improving 💪

## Other ways

### Using Spread with `.pop`

Spread , `...`, will create a copy of the array. So when you call `.pop()`, it will not affect the original array.

```javascript
[...array].pop();
```

### Using Destructuring with `slice`

When you pass `-1` in your slice parameter, it will return the last item of your array. And then we're using destructuring to retrieve that element from the array;

```javascript
const [lastItem] = array.slice(-1);
```

### Using Reverse

Here's another one. Although I personally think it might be a bit of an overkill and perhaps performance problem if the array was longer 🤔 But it's always nice to see all the different ways, to get our creative juice flowing, and let you decide which way works best for your app 😄

```javascript
const array.reverse()[0];
```

## Community Input

_[@lindseykopacz](https://www.instagram.com/p/B8wSUaiAL8x/):_ I love using pop! I always transform my nodelists into arrays so I can use it!
