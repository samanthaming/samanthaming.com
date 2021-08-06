---
title: String Pad in JavaScript
description: It's super easy to pad a string! Just pass in your desired string and length. The string will be padded until the length has been met.
tags: [string]
order: 97
createdAt: 2020-08-10
---

It's super easy to pad a string! Just pass in your desired string and length. The string will be padded until the length has been met. Use padStart to apply it at the start and padEnd to apply it at the end 🎀

```javascript
const string = 'hi';

string.padStart(3, 'c'); // "chi"

string.padEnd(4, 'l'); // "hill"
```

<markdown-toc></markdown-toc>

## Syntax

This is the syntax of how to use the method.

```javascript
string.padStart(<maxLength>, <padString>)

string.padEnd(<maxLength>, <padString>)
```

## Understanding the Parameters

`padEnd` and `padStart` accepts the same parameters.

### 1. maxLength

This is the max length of the **result** string.

```javascript
const result = string.padStart(5);

result.length; // 5
```

When I was learning this, this took me a while to grasp. I kept thinking it was the amount of times the pad string argument would be repeated. So just want to stress that this parameter is setting the MAX or targeted length of the result string. It is NOT the amount the pad string is repeated. But you're way smarter than I am, so I'm sure you did not have this confusion 😆

### 2. padString

This is the string you want to pad your string with. This is _optional_. If you don't specify anything, the default would be an empty space.

```javascript
'hi'.padStart(5);

// Same as
'hi'.padStart(5, ' ');
```

And if you try to pass an empty string, then no padding will happen.

```javascript
const result = 'hi'.padStart(5, '');

result; // ''
result.length; // 2
```

## How it handles other data types

For the second parameter, `padString`, it accepts a `string`. If you try to pass any other data types. It will be coerced into a string using `toString` and that will be used. So let's see what happens when we use the `toString` on different value types.

<!-- prettier-ignore -->
```javascript
// NUMBER
(100).toString(); // '100'

// BOOLEAN
true.toString();   // 'true'
false.toString();  // 'false'

// ARRAY
['A'].toString(); // 'A'
[''].toString();  // ''

// OBJECT
({}).toString();         // '[object Object]'
({hi: 'hi'}).toString(); // '[object Object]'
```

Now knowing this, let's see if pass these other value types to `padStart` (`padEnd` will have the same behaviour).

<!-- prettier-ignore -->
```javascript
'SAM'.padStart(8, 100);    // '10010SAM'

'SAM'.padStart(8, true);   // 'truetSAM'
'SAM'.padStart(8, false);  // 'falseSAM'

'SAM'.padStart(5, ['']);   // 'SAM'
'SAM'.padStart(5, ['hi']); // 'hiSAM'

'SAM'.padStart(18, {});         // '[object Object]SAM'
'SAM'.padStart(18, {hi: 'hi'}); // '[object Object]SAM'
```

### Handling `undefined`

But here's an interesting one. When you try to coerce `undefined`, you will get a `TypeError`

```javascript
undefined.toString(); // TypeError: Cannot read property 'toString' of undefined
```

But when you pass in `undefined` as your second argument, you get this:

```javascript
'SAM'.padStart(10, undefined);
// '       SAM'
```

So when I said the `padString` argument will be coerced using `toString`, did I just lie to you 🙊 Well, let's dive into the spec:

> [ECMAScript Spec](https://tc39.es/ecma262/#sec-string.prototype.padstart) If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).

Okay, so let me update what I said! Unless, it's `undefined`, everything other data type you passed will be coerced using `toString` 😉

## What if padString exceeds maxLength?

When the first argument `maxLength` doesn't allow enough length for your first argument, `padString`, it will simply be ignored.

```javascript
'hi'.padEnd(2, 'SAM');
// 'hi'
```

Or if it would be cut off. Remember `maxLength` means the maximum length your `padString` is allowed to occupy minus what's being occupied by the string.

```javascript
'hi'.padEnd(7, 'SAMANTHA');
// 'hiSAMAN'
```

And if your first argument, `maxLength` is less then your string, it will simply just return the string.

```javascript
'hello'.padEnd(1, 'SAM');
// 'hello'
```

## padStart/padEnd vs padLeft/padRight

In a previous code note, I covered [String Trim](https://www.samanthaming.com/tidbits/85-string-trim/#trim-aliases) where I mentioned the trim methods had aliases.

- `trimLeft` is an alias for `trimStart`
- `trimRight` is an alias for `trimEnd`

But for string pad methods, there are no aliases. So do NOT use `padLeft` and `padRight`, they do not exist. It is also the reason why you are encouraged to not use the trim aliases so there is better consistency in your codebase 😄

## Use Case

### Tabular Formatting with `padEnd`

A good use case of the string pad methods is for formatting. I covered [how to display string in tabular format](https://www.samanthaming.com/tidbits/69-display-string-in-tabular-format-with-padend/).

### Right Aligning String with `padStart`

You can format right alignment with `padStart`.

```javascript
console.log('JavaScript'.padStart(15));
console.log('HTML'.padStart(15));
console.log('CSS'.padStart(15));
console.log('Vue'.padStart(15));
```

This will output:

```bash
     JavaScript
           HTML
            CSS
            Vue
```

### Receipt formatting

With the knowledge of right alignment formatting, you can mimic a receipt print out like this:

```javascript
const purchase = [
  ['Masks', '9.99'],
  ['Shirt', '20.00'],
  ['Jacket', '200.00'],
  ['Gloves', '10.00'],
];

purchase.forEach(([item, price]) => {
  console.log(item + price.padStart(20 - item.length));
});
```

This will output:

```javascript
Masks           9.99
Shirt          20.00
Jacket        200.00
Gloves         10.00
```

### Masking Numbers

We can also use it to display masked numbers.

```javascript
const bankNumber = '2222 2222 2222 2222';
const last4Digits = bankNumber.slice(-4);

last4Digits.padStart(bankNumber.length, '*');
// ***************2222
```

_Thanks [@cilly_boloe](https://twitter.com/Cilly_Boloe/status/1150208542923579392)_

## Browser Support

`padStart` and `padEnd` were introduced at the same time, so they share similar browser support. All but Internet Explorer, but are we really surprised 😅

| Browser           |     |
| ----------------- | --- |
| Chrome            | ✅  |
| Firefox           | ✅  |
| Safari            | ✅  |
| Edge              | ✅  |
| Internet Explorer | ❌  |

- [Browser Support: String Pad](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#Browser_compatibility)

### Polyfill

For IE or older browser support, please see this [polyfill](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)

## Community Input

_[@ljc_dev](https://twitter.com/ljc_dev/status/1292357356521652225?s=21):_ I saw someone use it to add an extra zero in their clock when the number is one digit.

## Resources

- [MDN Web Docs: padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [MDN Web Docs: padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
- [tc39: proposal-string-pad-start-end](https://github.com/tc39/proposal-string-pad-start-end)
- [ECMAScript Spec: padStart](https://tc39.es/ecma262/#sec-string.prototype.padstart)
- [SamanthaMing.com: padEnd](https://www.samanthaming.com/tidbits/69-display-string-in-tabular-format-with-padend/)
- [Learn JavaScript ES 2017: String padding — padStart & padEnd](https://codeburst.io/learn-javascript-es-2017-string-padding-padstart-padend-88e90783e7de)
- [Alligator: padStart and padEnd String Methods in JavaScript](https://alligator.io/js/padstart-padend-string-methods/)
