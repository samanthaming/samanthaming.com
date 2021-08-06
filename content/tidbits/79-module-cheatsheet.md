---
title: ‪Module Cheatsheet 📄‬
description: Here's a cheatsheet to show you the different ways of exporting and the corresponding way to import it...
tags: [javascript]
order: 79
createdAt: 2019-11-16
---

Here's a cheatsheet to show you the different ways of exporting and the corresponding way to import it. It really distills to 3 types: name, default, and list. Just make sure your export matches your import way and you will have no problem 👍

```javascript
// Name Export | Name Import
export const name = 'value';
import { name } from '...';

// Default Export | Default Import
export default 'value';
import anyName from '...';

// Rename Export | NameImport
export { name as newName };
import { newName } from '...';

// Name + Default | Import All
export const name = 'value';
export default 'value';
import * as anyName from '...';

// Export List + Rename | Import List + Rename
export { name1, name2 as newName2 };
import { name1 as newName1, newName2 } from '...';
```

Now let's look at each of them and see how they work 🤓

## a. Name

The key here is having a **name**. Hence a "named" export lol 😂

```javascript
export const name = 'value';
```

```javascript
import { name } from 'some-path/file';

console.log(name); // 'value'
```

❌ What did I say, no name, no export!

```javascript
export 'value'

import { } // 👈 see I don't even know what to put here...give me a name!
```

## b. Default

With a default export, you don't need any name. Because you can name it whatever you want 👏

```javascript
export default 'value';
```

```javascript
import anyName from 'some-path/file';

console.log(anyName); // 'value'
```

❌ No Variable Declaration with Default

```javascript
export default const name = 'value'; // don't try to give me a name!
```

### Mixing Default + Name

You can absolutely combine default and name export in one file 🤝

```javascript
export const name = 'value';
export default 'value';
```

```javascript
import anyName, { name } from 'some-path/file';
```

## c. Export List

The third style is an Export List.

```javascript
const name1 = 'value1';
const name2 = 'value2';

export { name1, name2 };
```

```javascript
import { name1, name2 } from 'some-path/file';

console.log(
  name1, // 'value1'
  name2, // 'value2'
);
```

One important thing to note is that these lists are NOT objects. Yes, I know it looks like it. But it isn't. I made this confusion when I first learned modules. It's not an object, it's an export list!

```javascript
// ❌ Export list ≠ Object
export {
  name: 'name'
}
```

### Renaming Export

Not happy with the export name. No problem, you can rename it using the `as` keyword.

```javascript
const name = 'value';

export { name as newName };
```

```javascript
import { newName } from 'some-path/file';

console.log(newName); // 'value'

// Original name is not accessible
console.log(name); // ❌ undefined
```

❌ Can not combine inline export with export list

```javascript
export const name = 'value';

// You're already exporting name ☝️, don't export me again
export { name };
```

### Renaming Import

The same rule applies to import. We can rename it using the `as` keyword.

```javascript
const name1 = 'value1';
const name2 = 'value2';

export { name1, name2 as newName2 };
```

```javascript
import {
  name1 as newName1,
  newName2
} from '...'

console.log(newName1); // 'value1'
console.log(newName2); // 'value2'

❌
name1; // undefined
name2; // undefined
```

## Import All

```javascript
export const name = 'value';

export default 'defaultValue';
```

```javascript
import * as anyName from 'some-path/file';

console.log(anyName.name); // 'value'
console.log(anyName.default); // 'defaultValue'
```

## Name vs Default

There's been a lot of debate whether one should use `default` export at all. Check out these 2 articles.

- [Why I've stopped exporting defaults from my JavaScript modules](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/)
- [GitLab RFC by Thomas Randolph](https://gitlab.com/gitlab-org/frontend/rfcs/issues/20)

Like with anything, there is no right or wrong answer. The right way is always what's best for you and your team. But here's how I can think of this debate. Samantha's Story Time ...

### Name vs Default Export in Non-Dev Terms

Let's say you owe your friend some money. Your friend says you can pay them back with cash or e-transfer. Paying through e-transfer is like a `named export` because your name is attached to the transaction. So if your friend is forgetful and starts chasing you down claiming that you still owe them money. You can simply show them the proof of transfer because your name is on the payment. However, if you had paid your friend back with cash, which is like a `default export`, you have no proof. They can say the $50 is from Susan and NOT you. The cash has no name attached to it so they could say it's from you or whoever it is 😵

So is it better to go with e-transfer (`named export`) or cash (`default export`)? Well that depends, do you trust your friend or not 🤔 Actually, that's not the right way to frame this dilemma. A better solution is to NOT put your relationship in that position. It's better to be explicit so you don't risk jeopardizing your friendship. And yes, this idea also applies to whether you pick `named` or `default` export. I prefer to be more explicit, so your code is crystal clear. But of course, your code is your code. And you can do whatever works for you and your team 😄

## Community Input

_[@kyleshevlin](https://twitter.com/kyleshevlin/status/1195792080406073344?s=20):_ Maybe there's a way you could add the asterisk import, too, where you import all exports from a module. `import * as myModule from '/modules/my-module.js';`. The key with that one is that on the import side when using the module, the default is there as `myModule.default` and the rest are as they are named, `myModule.nameOfSomething`. [CodeSandbox Example](https://codesandbox.io/s/runtime-bush-ftdeq)

_[@erikayabar_](https://twitter.com/erikaybar_/status/1195788688388710400?s=20):\_ 👍 the emphasis on anyName here for default exports! \*This is why I prefer named exports, but it seems community is set on default export all the things (especially React components) so it's good to understand the difference! Also seen confused: `named imports != destructuring`

### Community Question

- _[@Kevin](https://dev.to/kevinhch/comment/i0gf):_ Hi, this only works in node or something like that? When I tried to reproduce the first example in Vanilla JS, always say the same error: SyntaxError: Cannot use import statement outside a module.

- _[@brianwfl88](https://dev.to/brianwfl88/comment/i0pg):_ ES6 import module only works in (bundler) like webpack. The support for node is currently in experimental stage.

> To add to it ...the goal of import/export is to allow you to split your JS into separate files. To bring it back together, you need a module bundler (ie. Webpack or gulp) to join all the files together. The end result is one giant JS file. And that's the file you can use in your HTML.

> In non-dev terms, think of it as a kitchen. It's split into different workstations (why? because everyone can focus on what they're good it and is more efficient). And then there's the chef that puts everything together (think Gordon Ramsay lol). That chef is the module bundler. And she/he makes sure the dish is all combined so the customer can eat it 🥗

## Resources

- [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN: Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Exploring JS: Modules](https://exploringjs.com/es6/ch_modules.html)
- [2ality: Importing & Exporting](https://2ality.com/2014/09/es6-modules-final.html#more-on-importing-and-exporting)
