# ES6 Classes

When I say ES6 Classes, you might go YAY 🎊 JS finally introduced a new object-oriented inheritance model. Well, not exactly. It’s still using the existing prototype-based inheritance (labelled as “Old way” in the photo). But now it just look more like Object Oriented Programming (OOP). Yay, I think this syntactical sugar is GREAT!

```javascript
// Old way

var Halloween = function(costume) {
  this.costume = costume
}

Halloween.prototype.boo = function() {
  return 'Happy Halloween 🎃'
}


// Classes in ES6

class Halloween {
  constructor (costume) {
    this.costume = costume
  }

  boo() {
    return 'Happy Halloween 🎃'
  }
}
```


## Defining a Class

For those coming from Object Oriented Programming, then you're good. But for those new to this or just want a friendly reminder. The first step is to create our class. The keyword to use is `class`.

```javascript
class Halloween {
  constructor(costume) {
    this.costume = costume.
  }
  
  // Prototype Method
  boo() {
    return 'Happy Halloween 🎃'
  }
  
  // Static Method
  static trickOrTreat() {
    return '🍬🍬🍬'
  }
}
```

**Constructor**: This is a special method for initializing an instance of that class. So what that means is that whenever we create a new instance of the class, it will invoke the constructor. This is a great place to set some properties and assign parameters. For our example, we want to make sure when someone create a new Halloween instance, they have a costume in place.

**Prototype Method**: A prototype method is a method that is only accessible when you create an instance of the class. This will be clear when I saw you example later.

**Static Method**: A static method is something you can call without instantiating the class. More on this later.


## Create a Class Instance

Great, now you created the class. Let's create an Instance of it using the `new` keyword.

```javascript
class Halloween { ... }

const zombie = new Halloween('zombieCostume');
```

Now we can call our prototype method:

```javascript
zombie.boo();
// 'Happy Halloween 🎃'
```

⚠️ But! you can't access static methods.

```javascript
zombie.trickOrTreat();
// TypeError
```

That's because static methods is not accessible by the instance. It can only be called by the class

```javascript
Halloween.trickOrTreat();
// '🍬🍬🍬'
```


## Static vs Instance Methods

So you must be wondering when should you use a static or instance methods. Here's a very simple answer. Use static methods when you don't want to create an instance of the class. Lol, I know that's not a very satisfactory answer. Most of the time, you will see static methods used for creating utility functions for an application. Any other time, it's better to stick with an instance method.


## Resources

- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
