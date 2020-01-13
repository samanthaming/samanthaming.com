# How to Create Multi-Line String with Template Literals

With the arrival of Template Literals, it's finally super easy to produce multi-line strings. Previously, we had to use the `\n` or separate string concatenation which was messy and difficult to read. Finally, it’s easier now. ES6 for the win 🙌

```javascript
// Old way
const multiLine1 = "1️⃣first \n2️⃣second";

// ✅ ES6 way
const multiLine2 = `1️⃣first
2️⃣second`;
                   
/* RESULT
1️⃣first
2️⃣second
*/
```

## Multi-line vs Single-line Strings

I just want to make sure I clarify that when I say "Multi-Line", I mean the **output** of the string is spanning on multiple lines. For example, if I `console.log` the variable, it will produce something like this:

```
// Multi-Line

1️⃣first
2️⃣second
```

And here's a "Single-Line" output:

```
// Single-Line

1️⃣first 2️⃣second
```

The reason why I'm emphasizing this is because there are other methods in JavaScript to create strings. But watch out, they actually don't produce true "Multi-Line" outputs 😱

**Ex. Using `+`** 

```javascript
const notTrueMultiLine = '1️⃣first' +
'2️⃣second' +
'3️⃣three';

console.log(notTrueMultiLine);
// 1️⃣first2️⃣second3️⃣three
```

**Ex. Using `\`** 

```javascript
const notTrueMultiLine = "\
1️⃣first \
2️⃣second \
3️⃣three";

console.log(notTrueMultiLine);
// 1️⃣first2️⃣second3️⃣three
```

Even though, it may appear in your code as multi-line. But when it's outputted, it's actually a single-line. To create true multi-line output, you have to use Template Literals or `\n`. Just wanted to make sure I point this out cause I remember making this mistake when I was first learning JavaScript 😖

## Blank Space in Template Literals

So template literals will output as it appears, spaces and all! Because of that, be mindful of your blank spaces or lines. 

```javascript
const blankSpace = `
first
    second
  third
  
`;
```

Here's the output. I denoted the white space with a dot, ⚪️ and line break with a square ◻️:

```
□
first
····second
··third
□
□
```

## HTML Templating with Template Literals

This is my favorite use case of using template literals multi-string capability. It makes super readable and easy to render HTML markup. I remember before, the only way to do this is to use a template system such as [Handlebars.js](https://handlebarsjs.com/). Well, not anymore. We can achieve the same result without importing anything and just use vanilla JS. It's awesome! Anyhoo, let's take a look at some examples:

**✅Ex. HTML Markup using Template Literals**

```javascript
const HTMLmarkup = `
<article>
  <h1>Code Tidbits</h1>
</article>
`;
```

**Ex. HTML Markup using Old JavaScript**

```javascript
const HTMLmarkup = "<article>" +
"<h1>Code Tidbits</h1>" + 
"</article>";
```

**Ex. HTML Markup using Handlebars.js**

```html
<script id="entry-template" type="text/x-handlebars-template">
  <article>
    <h1>Code Tidbits</h1>
  </article>
</script>

<!-- also need to import handlebars -->
```

## Resources

- [MDN Web Docs: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Stack Overflow: Creating multiline strings in JavaScript](https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)
- [CSS Tricks: Multiline String Variables in JavaScript](https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/)
- [DWB: Multi-Line JavaScript Strings](https://davidwalsh.name/multiline-javascript-strings)
- [Multiline strings in ES6 JavaScript](https://jack.ofspades.com/multiline-strings-in-es6-javascript/)
- [Github Gist: Multiline](https://gist.github.com/jeromeetienne/6257420)
- [Easy Creation of HTML with JavaScript’s Template Strings](https://wesbos.com/template-strings-html/)
