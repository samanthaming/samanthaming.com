---
title: Colorful Console Message 🌈
description: Add some style to your console statement with the `%c` specifier. This is super handy to help you easily identify debug information from the console.
tags: [console, browser]
order: 40
createdAt: 2018-11-3
---

Add some attitude to your console statement with the `%c` specifier 👩‍🎨 This is super handy to help you easily identify debug information from the console 👾

Especially if you have a huge application where there are tons of logs being printed out in the browser console. Styling your log message will make sure those important messages don't get buried 👍

Or use it like Facebook to tell people to stay away. Next time you visit their site, open up the Developer Tools, you will see a large "Stop!" message in the console. Well, now you know how that's being created 💥

```javascript
// Put this in your browser console
console.log('%cHello', 'color: green; background: yellow; font-size: 30px');
```

<markdown-toc></markdown-toc>

## What is `%c`

**%c**: Applies CSS style rules to the output string as specified by the second parameter

## Multiple Console Message Styles

To add multiple style, you just pre-pend the message with `%c`. The text before the directive will not be affected. Only the text after the directive will be styled using the CSS declarations in the parameter.

```javascript
console.log(
  'Nothing here %cHi Cat %cHey Bear', // Console Message
  'color: blue',
  'color: red', // CSS Style
);
```

## Applying style to other `console` messages

There are 5 console types of console messages:

- `console.log`
- `console.info`
- `console.debug`
- `console.warn`
- `console.error`

Any yup, you can style the rest of them as well!

```javascript
console.log('%cconsole.log', 'color: green;');
console.info('%cconsole.info', 'color: green;');
console.debug('%cconsole.debug', 'color: green;');
console.warn('%cconsole.warn', 'color: green;');
console.error('%cconsole.error', 'color: green;');
```

## Passing the console CSS style as an Array

As you get more styles, the string can be quite long. Here's a nifty trick you can do to clean things up. You can pass the styles as an array. And then you can use the `join()` method to turn the array style elements into a string.

```javascript
// 1. Pass the css styles in an array
const styles = [
  'color: green',
  'background: yellow',
  'font-size: 30px',
  'border: 1px solid red',
  'text-shadow: 2px 2px black',
  'padding: 10px',
].join(';'); // 2. Concatenate the individual array item and concatenate them into a string separated by a semi-colon (;)

// 3. Pass the styles variable
console.log('%cHello There', styles);
```

To learn more about `join()`, you can read my [Web Basics series](https://www.samanthaming.com/web-basics/how-to-reverse-a-string-in-js) or check out the official [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

## Refactoring console message with `%s`

Beside cleaning up the console message by passing the styles as an array. We can also clean up the message using the `%s` specifier.

```javascript
const styles = ['color: green', 'background: yellow'].join(';');

const message = 'Some Important Message Here';

// 3. Using the styles and message variable
console.log('%c%s', styles, message);
```

## Community Suggestions

### Console Font Color in `node.js`

If you're running node.js application, you can use the color reference of text to style your messages.

[Stack Overflow: Color Reference](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

```javascript
console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); // Cyan
console.log('\x1b[33m%s\x1b[0m', 'yellow'); // Yellow
```

_Thanks [@danieldeepak7](https://www.instagram.com/danieldeepak7/)_

### Community Feedback

_[@thecodegoddess](https://www.instagram.com/thecodegoddess/):_ I love this especially for projects that have a ton of logging from third party apps. My logs will get buried. I even added a snippet to my IDE so I can easily stick this in. My go to CSS debugging color? Deeppink.

## Resources

- [MDN Web Docs - Console Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [Google Developers - Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
- [Hackernoon - Styling logs in browser console](https://hackernoon.com/styling-logs-in-browser-console-2ec0807dc91a)
- [Make Console.log() output colorful and stylish in browser & node](http://voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/)
- [Colorful console.log](https://coderwall.com/p/fskzdw/colorful-console-log)
- [Add Styles to Console Statements](https://davidwalsh.name/add-styles-console)
- [Google Developers - Styling console output with CSS](https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css)
- [Enhance your JS console logging messages](https://coderwall.com/p/m2trga/enhance-your-js-console-logging-messages)
