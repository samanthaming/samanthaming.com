# 2 Ways to Merge Arrays in JavaScript

Here are 2 ways to combine your arrays and return a NEW array. I like using the Spread operator. But if you need older browser support, you should use Concat.

```javascript
// 2 Ways to Merge Arrays 

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

// Method 1: Concat 
const combined1 = [].concat(cars, trucks);

// Method 2: Spread
const combined2 = [...cars, ...trucks];

// Result
// [ '🚗', '🚙', '🚚', '🚛' ]
```

## Alternative Concat Syntax

Alternatively, you can also write the `concat` method, in this regard:

```javascript
const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

const combined = cars.concat(trucks);
// [ '🚗', '🚙', '🚚', '🚛' ]

console.log(cars); // ['🚗', '🚙'];
console.log(trucks); // ['🚚', '🚛'];
```

As you can see, this way of writing it doesn't manipulate or change the existing array. 

**Which one should I pick?**

Let's list out both versions, so you can see it in comparison.

```javascript
// Version A:
const combinedA = [].concat(cars, trucks);

// Version B:
const combinedB = cars.concat(trucks);
```

So now the question is, which one should I pick 🤔. I prefer **Version A** because I think the intention is a lot more clear. Just by looking at it, I know I'm creating a new array and I'm not manipulating the existing array. Whereas if I look at **Version B**, it appears like I'm adding the `trucks` array to the `cars` array, and it doesn't seem obvious to me that the `cars` array isn't being changed. But, maybe that's just me. I'd be curious to know what you think? 

Since I don't really have a substantial reason besides aesthetics, I think you and your team should stick with whatever you choose 👍

## Difference between Spread vs Concat

I prefer using `spread`, because I find it more concise and easier to write. BUT, there are still benefits of using `concat`.

Spread is fantastic when you know beforehand that you're dealing with arrays. But what happens when the source is something else, like a string. And you want to add that string to the array. Let's walk through an example.

### Example: Dealing with an arbitrary argument

Let's say this is the outcome we want:

```javascript
[1,2,3,'random']
```

**A. Using Spread**
 
And if we follow the pattern we've been using and used the spread operator. Here's what happens:

```javascript
function combineArray(array1, array2) {
  return [...array1, ...array2];
}

const isArray = [1,2,3];
const notArray = 'random';

combineArray(isArray, notArray);
// 😱 [ 1, 2, 3, 'r', 'a', 'n', 'd', 'o', 'm' ]
```

☝️ If we spread our string, it will split the word into separate letters. So it doesn't achieve the result we want.

**B. Using Concat**

BUT, if we follow the concat pattern that we've been doing. Here's what happens:

```javascript
function combineArray(array1, array2) {
  return [].concat(array1, array2);
}

const isArray = [1,2,3];
const notArray = 'random';

combineArray(isArray, notArray);
// ✅  [ 1, 2, 3, 'random' ]
```

☝️ Excellent! We get the result we want.

I know some of you are like, duh! I'll just write some conditional to make sure what I'm passing is an array and execute accordingly. Sure that'd work too. Or just write less code and use `concat` and be done with 😂

**Verdict**

So here's the quick rule. If you know you're dealing with arrays, use `spread`. But if you might be dealing with the possibility with a non-array, then use `concat` to merge an array 👍

Anyways I just want to point that out, so you can use the most appropriate method depending on the problem you're trying to solve 👍

## Merge Array with Push 🤔

Some of you are asking, hey, can't I also use `push` to merge an array. And yes, you sure can! But when you use `push`, it manipulates or changes the existing array. It does NOT create a new array. So depending on what you're trying to do. Make sure you keep that in mind.

```javascript
const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

const combined = cars.push(...trucks);

console.log(combined); // 4
// ☝when you use push, it returns the LENGTH of the combined array

console.log(cars); // [ '🚗', '🚙', '🚚', '🚛' ]
console.log(trucks); // ['🚚', '🚛']
```

Also, when you're trying to push an array to another array. You will need to spread it, otherwise, you will end up getting a nested array. Of course, unless that's what you wanted 😜

```javascript
const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

cars.push(trucks);
// 😱 cars: [ '🚗', '🚙', [ '🚚', '🚛' ] ]

cars.push(...trucks);
// ✅ cars: [ '🚗', '🚙', '🚚', '🚛' ]
```

## Browser Support

Spread was introduced in ES6, so all modern browser supports it. Except for the "I'm too cool" Internet Explorer - no support there 😕. So if you need IE support, you want to use `concat` instead or use a compiler like [Babel](https://babeljs.io/).

- [Browser Support: Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Browser_compatibility)
- [Browser Support: Concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#Browser_compatibility)


## Resources

- [MDN Web Docs - Concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [MDN Web Docs - Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Stack Overflow: spread operator vs array.concat](https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat)
