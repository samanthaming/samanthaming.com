# Exponentiation Operator **

I always found the old way of writing an exponentiation expression a bit awkward.  Luckily, the exponentiation operator was introduced. This syntax also makes it more similar to other languages (ie. Ruby, Python). Cool 👍


```javascript
// Old way
const old = Math.pow(3, 7);
// 2187

// ✅ ES7 way 
const es7 = 3 ** 7;
// 2187
```

## Infix Notation

The use of `**` is called infix notation. It is characterized by the placement of operators between operands. Other popular infix notations include: `+` or `-`.

The reason this syntax was introduced is because:

> Infix notation is more succinct than function notation, which makes it more preferable

## Exponentiation in Other Languages

Also, you will notice this syntax is very similar to other languages:

```javascript
// Python
a ** b

// Ruby
a ** b

// Perl
a ** b

// F#
a ** b
```

I actually like that it's similar to other languages. Because it makes picking up JavaScript a lot of easier for those folks and they can be up and running very quickly.

## Assignment Operator

You must have seen arithmetic operator combined with the assignment operator. For example `+=`:

```javascript
a += b

// Same as
// a = a + b
```

Well, similarly, this can also be done with the exponentiation operator. `**=`:

```javascript
a **= b

// Same as
// a = a ** b
```

## Negative Base

There's one bit of a gotcha. When you have a negative base, you will have to wrap it around parenthesis. 

```javascript
// ❌ Syntax Error
const wrong = -3 ** 7;

// ✅
const correct = (-3) ** 7;
```

However, this isn't an issue if you use the older function way.

```javascript
const works = Math.pow(-3, 7);
```

## Resources

- [MDN Web Docs: Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
- [MDN Web Docs: Exponentiation **](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**))
- [w3schools: JS Assignment](https://www.w3schools.com/js/js_assignment.asp)
- [2ality: Exponentiation Operator](http://2ality.com/2016/02/exponentiation-operator.html)
- [ExploringJS: Exponentiation operator](http://exploringjs.com/es2016-es2017/ch_exponentiation-operator.html)
- [TC39: Exponentiation Operator](https://github.com/tc39/proposal-exponentiation-operator)
- [The Exponentiation Operator in JavaScript](https://mariusschulz.com/blog/the-exponentiation-operator-in-javascript)
- [Exponentiation Operator](https://medium.com/@tournetorres/es6-every-day-es2016s-exponentiation-operator-eab53dec0d8a)
- [Wikipedia: Infix Notation](https://en.wikipedia.org/wiki/Infix_notation)
