# 3 Ways to Convert to Boolean

Congrats to @warriors for the win! 🏀🏆

3 ways to convert a value to a Boolean. My favourite is using `!!`. It’s also the recommended method by Airbnb’s style guide.

```javascript
const isChamp = 'Golden State Warriors';


new Boolean(isChamp); // true

Boolean(isChamp); // true

!!isChamp; // true
```

### How the `!!` works

The first `!` coerce the value to a boolean and inverse it. In this case, !isChamp will return false. So to reverse it back to true, we put another `!` on it. Hence the double use   `!!`.

```javascript
const isChamp = 'Warriors';

!isChamp;  // false

!!isChamp; // true
```

## Community Suggestions

### Use Primitives instead of Object Types

**CJ J.**: It's worth noting that the first style isn't a boolean but rather an instance of Boolean. Primitives are cheaper and should be preferred over the object type.

**CJ J.**: `new Boolean(str)` returns an object type. `Boolean(str)` just returns a primitive boolean. I would suspect `Boolean(str)` is faster then `!!str` because it's only one operation, but it's also entirely possible that browsers implement an optimization such that when they see `!!` they know to directly cast the argument to a boolean primitive (instead of actually doing `NOT()` twice in a row).

**CJ J.**: Primitives are cheap because they're immutable so you can share references and not have to hold any state on the instance. It's just `true` or `false`. But `new Boolean(str)` is an object. It has it's own unique memory address and it can hold internal state that is unique to it. This means it can't just hold a reference to an immutable singleton instance. Every call to `new Boolean(str)` instantiates an entire new `Boolean()` object.


```javascript
var str = "str"

// Avoid 
typeof (new Boolean(str)); // object

// Preferred
typeof (Boolean(str)); // boolean
typeof (!!str); // boolean
```

_Thanks: [CJ J](https://www.linkedin.com/in/~cj-johnson)._


## Community Examples

### Remove empty strings with Boolean Constructor

**CJ J.**: This is the classic example. If you get a list of string values separated by commas and you want to filter out the empty strings, you can pass the Boolean constructor function into Array.prototype.filter and it will automatically strip out the zero-length strings leaving an array of only valid strings. 

```javascript
var str = "some,list,,of,values";
var arr = str.split(",");

arr // [ 'some', 'list', '', 'of', 'values' ]

arr.filter(Boolean) // [ 'some', 'list', 'of', 'values' ]
```

_Thanks: [CJ J](https://www.linkedin.com/in/~cj-johnson)._


## Resources

- https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful#logical-not

- https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript

- https://github.com/airbnb/javascript#type-casting--coercion
