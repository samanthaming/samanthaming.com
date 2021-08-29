# String - `split()`

As many of you know, I’ve been sharing weekly code tidbits. In this new series, I want to focus on topics that are programming essentials - things that you absolutely should know as a developer! For the more advance programmers, you can view these posts as a reminder of what you already know. For the code newbies, this will be a nice gateway into the wonderful world of programming 💻

In today’s lesson, let’s learn about `split()`! This method slices up your string into separate substrings. In my example, I’m splitting it by `split('')` which means split each letter. So the output is an array of each letter.

```javascript
const name = 'samantha';

name.split('');
// [ 's', 'a', 'm', 'a', 'n', 't', 'h', 'a' ]
```

Split method can also take limit as another optional argumument  `split(separatior*,limit*)` [ * represent optional], which will be a non-negative integer specifying the limit on the maximum number of substrings to be included in the returing array.

```javascript
const name = 'samantha';

name.split('',3);
// [ 's', 'a', 'm' ]
```

## Examples

```javascript
const name = 'samantha';

name.split(); // Default is entire string
// 'samantha'
```

A handy one I've been using split is for URL addresses. Check it!

```javascript
const url = 'www.samanthaming.com/tidbits/80-flatmap';

url.split('/');
// [ 'www.samanthaming.com', 'tidbits', '80-flatmap' ]
```

And now I can extract the various portion using destructuring.

```javascript
const splitted = ['www.samanthaming.com', 'tidbits', '80-flatmap'];

const [domain, parentPath, childPath] = splitted;

console.log(
  domain, // 'www.samanthaming.com'
  parentPath, // 'tidbits'
  childPath, // '80-flatmap'
);
```

## Resources

- [MDN Web Docs: split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN Web Docs: destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
