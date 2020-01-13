# Pretty JSON Output

Tired of the one-liner JSON output, well no more! Utilize `JSON.stringify` built-in pretty printing. Set the 3rd parameter with your desired spacing level 👍 Bam, instant GLAM✨

```javascript
const protein = {steak: '🥩', bacon: '🥓'};

JSON.stringify(protein);
// {"steak":"🥩","bacon":"🥓"}

JSON.stringify(protein, null, 2);
/*
{
  "steak": "🥩",
  "bacon": "🥓"
}
*/
```

## Tab Spacing 😉

But the Tab folks are like how about us?? Don’t worry, you can also pass `"\t"` for tab level spacing 😄

```javascript
const protein = {steak: '🥩', bacon: '🥓'};

JSON.stringify(protein, null, "\t");

/*
{
	"steak": "🥩",
	"bacon": "🥓"
}
*/
```

## Understanding the "Space" argument

The 3rd parameter of the `JSON.stringify` is used to control the spacing. It's what gives you that pretty string output.

It allows 2 types of arguments: Number and String.

### a. Number

You can use any number from 0 to 10 as your indentation.

```javascript
const protein = {steak: '🥩', bacon: '🥓'};

JSON.stringify(protein, null, 1);
/*
{
 "steak": "🥩",
 "bacon": "🥓"
}
*/
```

### b. String

Alternatively, you can use a string as your indentation. It allows a maximum of 10 characters. If you try to pass more than 10, it will just use the first 10 characters. So don't try to beat the system 😝

```javascript
const protein = {steak: '🥩', bacon: '🥓'};

JSON.stringify(protein, null, "I 💛");
/*
{
I 💛"steak": "🥩",
I 💛"bacon": "🥓"
}
*/
```

## What is the 2nd parameter 🤔

The 2nd parameter is also called the **replacer** parameter. You can use it to transform the result.

It allows 2 types of arguments: Array and Function.

### a. Array

I want to show you something really interesting when you pass in an `array`. You can use it to cherry pick the key-value pair that you want to output. 

```javascript
const protein = {
  steak: '🥩', 
  bacon: '🥓',
  pop: '🥤',
  tea: '🍵',
  shrimp: '🍤',
};

JSON.stringify(protein, ['steak', 'pop'], 2);
/*
{
  "steak": "🥩",
  "pop": "🥤"
}
*/
```

### b. Function

The **replacer** is called for each item. So you can also pass in a `function`. This means you can loop over each item and with each pass, manipulate with the logic defined in your function.

Here's an example, where I skip over the properties where the value is not a string. In other words, I only want to show the items where the value is a number.

```javascript
const protein = {
  steak: '🥩', 
  calorie: 271,
  bacon: '🥓',
  sodium: 58,
};

const replacer = function(key, value) {
  if(typeof value !== "string") {
    return value
  }
  return undefined;
}


JSON.stringify(protein, replacer, 2);
/*
{
  "calorie": 271,
  "sodium": 58
}
*/
```

## Resources

- [MDN Web Docs - JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [w3schools - JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)
- [Stack Overflow: How can I pretty-print JSON using JavaScript?](https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript)
