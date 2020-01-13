# 3 Ways to Clone Objects in JavaScript

Because objects in JavaScript are references values, you can't simply just copy using the `=`. But no worries, here are 3 ways for you to clone an object 👍

```javascript
const food = { beef: '🥩', bacon: '🥓' }


// "Spread"
{ ...food }


// "Object.assign"
Object.assign({}, food)


// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: '🥩', bacon: '🥓' }
```

## Objects are Reference Types

Your first question might be, why can't I use `=`. Let's see what happens if we do that:

```javascript
const obj = {one: 1, two: 2};

const obj2 = obj;

console.log(
  obj,  // {one: 1, two: 2};
  obj2  // {one: 1, two: 2};
)
```

So far, both object seems to output the same thing. So no problem, right. But let's see what happens if we edit our second object:

```javascript
const obj2.three = 3;

console.log(obj2);
// {one: 1, two: 2, three: 3}; <-- ✅

console.log(obj);
// {one: 1, two: 2, three: 3}; <-- 😱
```

WTH?! I changed `obj2` but why was `obj` also affected. That's because Objects are reference types. So when you use `=`, it copied the pointer to the memory space it occupies. Reference types don't hold values, they are a pointer to the value in memory.

If you want to learn more about this, check out Gordon's Zhu [Watch and Code](https://watchandcode.com) course. It's free to enroll and watch the video "Comparison with objects". He gives a super awesome explanation on it.

## 1. Using Spread

Using spread will clone your object. Note this will be a shallow copy. As of this post, the spread operator for cloning objects is in Stage 4. So it's not officially in the specifications yet. So if you were to use this, you would need to compile it with Babel (or something similar).

```javascript
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }
```

## 2. Using Object.assign

Alternatively, `Object.assign` is in the official released and will also create a shallow copy of the object.

```javascript
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }
```

Note the empty `{}` as the first argument, this will ensure you don't mutate the original object 👍

## 3. Using JSON

This final way will give you a deep copy. Now I will mention, this is a quick and dirty way of deep cloning an object. For a more robust solution, I would recommend using something like [lodash](https://lodash.com/docs/#cloneDeep)

```javascript
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = JSON.parse(JSON.stringify(food))

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }
```

### Lodash DeepClone vs JSON

Here's a comment from the community. Yes, it was for my previous post, [How to Deep Clone an Array](https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array). But the idea still applies to objects.

_[Alfredo Salzillo](https://dev.to/alfredosalzillo/comment/96ne):_ I'd like you to note that there are some differences between deepClone and JSON.stringify/parse.

- **JSON.stringify/parse** only work with Number and String and Object literal without function or Symbol properties.
- **deepClone** work with all types, function and Symbol are copied by reference.

Here's an example:

```javascript
const lodashClonedeep = require("lodash.clonedeep");

const arrOfFunction = [() => 2, {
    test: () => 3,
}, Symbol('4')];

// deepClone copy by refence function and Symbol
console.log(lodashClonedeep(arrOfFunction));
// JSON replace function with null and function in object with undefined
console.log(JSON.parse(JSON.stringify(arrOfFunction)));

// function and symbol are copied by reference in deepClone
console.log(lodashClonedeep(arrOfFunction)[0] === lodashClonedeep(arrOfFunction)[0]);
console.log(lodashClonedeep(arrOfFunction)[2] === lodashClonedeep(arrOfFunction)[2]);
```

_[@OlegVaraksin](https://twitter.com/OlegVaraksin/status/1152850845303824384):_ The JSON method has troubles with circular dependencies. Furthermore, the order of properties in the cloned object may be different.

## Shallow Clone vs Deep Clone

When I used spread `...` to copy an object, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work. Here's our example we will be using:

```javascript
const nestedObject = {
  country: '🇨🇦',
  {
    city: 'vancouver'
  }
};
```

### Shallow Copy

Let's clone our object using spread:

```javascript
const shallowClone = { ...nestedObject };

// Changed our cloned object
clonedNestedObject.country = '🇹🇼'
clonedNestedObject.country.city = 'taipei';
```

So we changed our cloned object by changing the city. Let's see the output.

```javascript
console.log(shallowClone);
// {country: '🇹🇼', {city: 'taipei'}} <-- ✅

console.log(nestedObject);
// {country: '🇨🇦', {city: 'taipei'}} <-- 😱
```

A shallow copy means the first level is copied, deeper levels are referenced.

### Deep Copy

Let's take the same example but applying a deep copy using "JSON"

```javascript
const deepClone = JSON.parse(JSON.stringify(nestedObject));

console.log(deepClone);
// {country: '🇹🇼', {city: 'taipei'}} <-- ✅

console.log(nestedObject);
// {country: '🇨🇦', {city: 'vancouver'}} <-- ✅
```

As you can see, the deep copy is a true copy for nested objects. Often time shallow copy is good enough, you don't really need a deep copy. It's like a nail gun vs a hammer. Most of the time the hammer is perfectly fine. Using a nail gun for some small arts and craft is often case an overkill, a hammer is just fine. It's all about using the right tool for the right job 🤓

## Performance

Unfortunately, I can't write a test for spread because it's not officially in the spec yet. Nevertheless, I included it in the test so you can run it in the future 😝. But the result shows `Object.assign` is a lot faster than `JSON`.

[Performance Test](https://jsperf.com/3-ways-to-clone-object/1)

## Community Input

### Object.assign vs Spread

_[@d9el](https://dev.to/adameier/comment/d9el):_ It's important to note that Object.assign is a function which modifies and returns the target object. In Samantha's example using the following,

```javascript
const cloneFood = Object.assign({}, food)
```

`{}` is the object that is modified. The target object is not referenced by any variable at that point, but because `Object.assign` returns the target object, we are able to store the resulting assigned object into the `cloneFood` variable. We could switch our example up and use the following:

```javascript
const food = { beef: '🌽', bacon: '🥓' };

Object.assign(food, { beef: '🥩' });

console.log(food);
// { beef: '🥩', bacon: '🥓' }
```

Obviously, the value of `beef` in our food object is wrong, so we can assign the correct value of `beef` using `Object.assign`. We aren't actually using the returned value of the function at all, but we are modifying our target object which we have referenced with the const `food`.

Spread on the other hand is an operator which copies properties of one object into a new object. If we wanted to replicate the above example using spread to modify our variable `food...`

```javascript
const food = { beef: '🌽', bacon: '🥓' };

food = {
  ...food,
  beef: '🥩',
}
// TypeError: invalid assignment to const `food'
```

`...` we get an error, because we use spread when creating new objects, and therefore are assigning a whole new object to `food` which was declared with `const`, which is illegal. So we can either choose to declare a new variable to hold our new object in, like the following:

```javascript
const food = { beef: '🌽', bacon: '🥓' };

const newFood = {
  ...food,
  beef: '🥩',
}

console.log(newFood);
// { beef: '🥩', bacon: '🥓' }
```

or we could declare `food` with `let` or `var` which would allow us to assign a whole new object:

```javascript
let food = { beef: '🌽', bacon: '🥓' };

food = {
  ...food,
  beef: '🥩',
}

console.log(food);
// { beef: '🥩', bacon: '🥓' }
```

_Thanks: [@d9el](https://dev.to/adameier/comment/d9el)_

### Deep Clone using External Libraries

- _[@lesjeuxdebebel](https://twitter.com/lesjeuxdebebel/status/1153259251705503744):_ Personally I use jquery with `$.extend();` function
- _[@edlinkiii](https://twitter.com/edlinkiii/status/1153035836356747267):_ underscore.js ~~ `_.clone()`
- _[@Percy_Burton](https://twitter.com/Percy_Burton/status/1152671704155660289):_ The only way I've known to do this is with the Lodash library, cloneDeep method.

### More Ways using JavaScript

- _[@hariharan_d3v](https://twitter.com/hariharan_d3v/status/1152815791009460224):_ `Object.fromEntries(Object.entries(food))` [shallow] clones the object.

## Resources

- [MDN Web Docs: Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Stack Overflow: What is the most efficient way to deep clone an object in JavaScript?](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript)
- [2ality: Rest/Spread Properties](https://2ality.com/2016/10/rest-spread-properties.html)
- [Stack Overflow: Object spread vs. Object.assign](https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign)
