# How to check if array includes a value in JavaScript?

Here's a Code Recipe to check if a #JavaScript array contains a value. You can use the new array `includes` method 😋 For older browsers and IE, you can use `indexOf` 👍

```javascript
const array = ['🥗', '🍔', '🍰'];

// Modern Browser
array.includes('🍰'); // true

// Older Browser
array.indexOf('🍰') !== -1; // true
```

## `includes` with other primitive types

Besides strings, `includes` also works great with other [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

<!-- prettier-ignore -->
```javascript
const symbol = Symbol('symbol');

const array = [
  'string',
  200,
  0,
  undefined,
  null,
  symbol
];
```

Using `includes`

```javascript
array.includes('string'); // true
array.includes(200); // true
array.includes(0); // true
array.includes(undefined); // true
array.includes(null); // true
array.includes(symbol); // true
```

Using `indexOf`

```javascript
array.indexOf('string') !== -1; // true
array.indexOf(200) !== -1; // true
array.indexOf(0) !== -1; // true
array.indexOf(undefined) !== -1; // true
array.indexOf(null) !== -1; // true
array.indexOf(symbol) !== -1; // true
```

## Caveats of `indexOf`

So far, I have shown you values where both `includes` and `indexOf` work interchangeably. However, there is one value, where they differ 🤭

```javascript
const array = [NaN];

// ✅
array.includes(NaN); // true

// 😱
array.indexOf(NaN) !== -1; // false
```

## Checking for Array of Objects using `some()`

For a more versatile solution that works on other data types, you may want to use `some` instead.

> ".some()": tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```javascript
const array = ['🥗', '🍔', '🍰'];

array.some(food => food === '🍰'); // true
```

This method is ideal for an array of objects.

```javascript
const array = [{ name: 'js' }, { name: 'css' }];

array.some(code => code.name === 'js'); // true
array.some(code => code.name === '🤖'); // false
```

In a previous code note, I talked about a quick & dirty way to check `objects` using `JSON.stringify()`.

> [How to Compare 2 Objects in JavaScript](https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/)

Taking that concept, we can also use it to compare object element in an array like this:

```javascript
const array = [{ name: 'js' }, { name: 'css' }];

array.some(code => JSON.stringify(code) === JSON.stringify({ name: 'css' }));
// true
```

## Case Sensitive

Both `includes` and `indexOf` are case sensitive:

```javascript
const array = ['SAMANTHA'];

array.includes('samantha'); // false
array.indexOf('samantha') !== -1; // false
```

To make it case insensitive, you could consider changing the case of the array like so:

```javascript
const array = ['SAMANTHA'];

const sameCaseArray = array.map(value => value.toLowerCase());
// ['samantha']

sameCaseArray.includes('samantha'); // true
sameCaseArray.indexOf('samantha') !== -1; // true
```

But if you were using `some`, you can do it in one line:

```javascript
const array = ['SAMANTHA'];

array.some(value => value.toLowerCase() === 'samantha'); // true
```

## Browser Support

Support for `includes` is really good for all modern browsers. However, if you need IE or older browser, you will need to use `indexOf`.

Can I use? [Array.prototype.includes](https://caniuse.com/#feat=array-includes)

## Community Input

- _@lolinoid:_ `contains` > _@prvnbist_ That's a method DOM Nodes, most known example for it would be getting a list of classnames which will be a node list then you can use contain method to see if it has a classname. Or you can convert it to an array and then use includes method

- You can use the `in` operator to loop over an object to check if a specific property key exists. (Knowledge shared by _@fvbix_)

```javascript
const object = { kiwi: '🥝', pear: '🍐', cheese: '🧀' },;

'kiwi' in object; // true

// Use it as a conditional
if ('kiwi' in object) {
  // do something if property key exists
}
```

<!-- prettier-ignore -->
- _[@pixelfixer](https://twitter.com/pixelfixer_/status/1234011311006191617?s=21):_ And if you want the value returned, you can use `Array.find()`

- Performance test > [array indexOf vs includes](https://jsperf.com/array-indexof-vs-includes). Thanks _[@equiman](https://twitter.com/equiman/status/1234226687531012096?s=20):_

## Resources

- [MDN Web Docs: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN Web Docs: indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Stack Overflow: How do I check if an array includes a value in JavaScript?](https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript)
- [MDN Web Docs: some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [w3schools: contains](https://www.w3schools.com/jsref/met_node_contains.asp)
- [MDN Web Docs: in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
