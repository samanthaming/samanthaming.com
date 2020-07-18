# Improve Readability with ES6 Template Strings

Yay, no more backslash `\` to escape characters in strings! A better way is to use template strings with backticks ( ` ). This makes your string so much more readable, don’t you think 👏

If you use the eslint linter in your code, this is under the “no-useless-escape” rule 🤓

```javascript
// Old way
const messy = 'No useless \\ (backslash) to escape "" \'\'';

// ✅ ES6 way
const better = `No useless \ (backslash) to escape "" ''`;

// Same result
console.log(messy === better); // true
```

## Improve Readability with String Interpolation

Another awesome feature of the template strings, is when you want to include a variable within the strings. No more messy `+` concatenation.

```javascript
const weather = '☀️';

// Old way
const messy = 'Today is a ' + weather + '!';

// ✅ ES6 way
const better = `Today is a ${weather} day!`;

// Same result
console.log(messy === better); // true
```

## ESLint: no-useless-escape

ESLint or any linter is like a spell checker in a word document. It goes through your code and let you know when you made a mistake.

But the challenging thing about code, is that it’s quite subjective. So unlike a spelling error, there is no hard defined rule what is right and wrong. Instead the rules are set by you. But does the mean you need to go rule by rule and adjust it. Not at all, there are tons of community eslint rules that you can use instead of setting your own. And if don’t agree with any particular one, you can easily adjust them. Some popular ones include AirBnB, Google, or just use ESLint recommended one rules.

This is how you can turn on the `no-useless-escape` rule:

_.eslintrc_

```javascript
{
  "rules": {
    "no-useless-escape": "2"
  }
}
```

The options you can pass in are:

- "off" or 0 👉 turn the rule off
- "warn" or 1 👉 turn the rule on as a warning
- "error" or 2 👉 turn the rule on as an error

## Resources

- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ESLint: no-useless-escape](https://eslint.org/docs/2.13.1/rules/no-useless-escape)
- [ESLint: Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
- [Airbnb ESLint Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Google ESLint config](https://github.com/google/eslint-config-google)
