---
title: How to use Lodash with Vue
description: Learn how to install Lodash and use it with Vue.
tags: [journal, javascript]
updatedAt: 2020-10-15
---

Lodash is a JavaScript library that is packed with a bunch of goodies 🍬. Unlike Halloween goodies that means you have to do laps around your neighborhood to burn those extra calories. These goodies are common utility functions so you can avoid re-inventing the wheel 👍 And when you're working on a startup project like me, it helps me to get up and running super fast 🦸‍♀️

[[toc]]

## Install Lodash with Vue

```bash
# Yarn
yarn add lodash

# NPM
npm i --save lodash
```

## Using Lodash in Vue

The typical way to start using Lodash in your Vue application is to import the needed function on a Vue component basis. And that's what I'll be showing you.

But if you want to have Lodash available in all of your Vue components, I found some instructions on [Stack Overflow](https://stackoverflow.com/questions/37694243/using-lodash-in-all-of-vue-component-template). There are some downsides to this way, so make sure you read the discussions. This is NOT my preferred way as I think it's way better to just import on a component basis along with the function you actually need instead of importing the entire library. But I'll let you make that decision 🙂

Alright, let us continue to see how you would use Lodash in your Vue components 🎢

## A. Import Entire Lodash Library

You can import all of lodash by doing this:

```vue
<script>
import _ from 'lodash';

const range = _.range(1, 3); // [1, 2]
const random = _.random(0, 5); // an integer between 0 and 5
</script>
```

## B. Import Specific Lodash Functions

Importing the entire Lodash library is not my preference. If you look at their docs, there are a lot of functions 🤯 And by importing them all, you're taking on all those unnecessary weights. Lodash is around 24kB when gzipped (not terribly big). But, I like to think of this of how I like to pack for my travels. If you're visiting Hawaii in the summertime 🏝, why are you wasting your precious suitcase space with winter clothing? So we should treat our application bundle size the same way. We should avoid adding unnecessary that makes our application size larger. Nice and slim means a faster performance experience for our users, yay 👏

### B-1. Default Import

You can import them individually directly from a specific path.

```vue
<script>
import _range from 'lodash/range';
import _random from 'lodash/random';

const range = _range(1, 3);
const random = _random(0, 5);
</script>
```

### B-2. Named Import

You can also import individually from `lodash` directly.

```vue
<script>
import { range, random } from 'lodash';

const range = range(1, 3);
const random = random(0, 5);
</script>
```

### B-3. Named Import + Rename

But I like to distinguish my Lodash function. So you use the `as` to rename it to whatever you wish. The convention is `_`, so I just pre-pend that to my function.

```vue
<script>
import { range as _range, random as _random } from 'lodash';

const range = _range(1, 3);
const random = _random(0, 5);
</script>
```

### B-1 for the win!

My personal preference is _B-1_ since I always like to clearly identify the Lodash functions. Sure I could also go with _B-3_, although it's all within one import statement, I still have to deal with all those individual renaming. So I find _B-1_ the cleanest for me and reads better.

## Improving Discussions 💛

As you can see, many programming decisions are quite subjective. I know some people can get very passionate about declaring their own stance as the rule of the law. But most programming choices are subjective. The computer doesn't really care. Yes, there are conventions that are agreed upon by most people. But if YOU don't think the convention fits you and your team, there's nothing wrong to go against the grain. I think the more important thing is consistency. If you pick a rule, stick with it. This will make it easier for other people in your team to quickly understand your code.

I think it's fantastic people when people have discussions with such passion. My favorite is the always on-going debate of `tabs` versus `space` 😂 -- that's always fun to see the passion each side takes 🔥. As long as we approach these discussions with **respect** and **empathy**, I think it's great to have these debates. However, with the absence of respect and empathy, these discussions can become toxic. And when that happens, it's not just not fun, it can be scary. People will then tune out and not participate. And we WANT people to participate, it's how we achieve better and more creative solutions.

So the next time you jump into a discussion, let we all **assume positive intent**, **be respectful** of disagreeing point of views, and **deploy empathy**. I think those will result in more constructive and much more fun discussions 💛

## Do you really need Lodash?

For a tiny application, I wouldn't even bother with Lodash. I typically use it for larger applications. If you're just having lunch with a friend, would you really bring along your suitcase? I would say a purse or small bag should be plenty. Of course, there are exceptions! And what those exceptions are will really depend on your situation and the person to know best is YOU! So do what works for you. My default is always to start with less and when reality tells you otherwise, then layer up 👍

## You don't need Lodash

With that lovely preface of asking yourself if you really need Lodash, let me further cement my case and point you to this lovely repo 👉 [You Don't Need Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore). With modern JavaScript, you can do so much natively. And au natural is always the way to go 😆

Here are 3 examples:

### Filter

```javascript
const array = [1, 2, 3, 4, 5];

// Lodash
_.filter(array, (value) => value > 3);

// ✅ Vanilla
array.filter((value) => value > 3);
```

### Flatten

```javascript
const array = [1, [2, [3, [4]], 5]];
// Lodash
_.flatten(array);

// ✅ Vanilla
array.flat();
```

### EndWith

```javascript
// Lodash
_.endsWith('abc', 'c');

// ✅ Vanilla
'abc'.endsWith('c');
```

## Conclusion

LOL, this article was about using Lodash yet in the latter half I spend it arguing you against using it. Such is life, am I right 😂 JavaScript has really evolved so much since its inception. There are so many more native functions that make programming in it so much more convenient. And having a good grasp of vanilla or native JavaScript is way better for your career than being proficient in using Lodash. But don't be afraid to use Lodash. There are some really useful functions that prevent you from wasting your time to re-invent the wheel. This means you can spend more time building your app than worrying about building the tools.

My rule of thumb is always to start with plain vanilla JavaScript and when you have exhausted it, then bring in Lodash. One of my favorite quotes -- **"How would you know? Reality will tell you"** 😄

## Resources

- [Lodash](https://lodash.com/)
- [You Might Not Need Lodash](https://youmightnotneed.com/lodash/)
- [Stack Overflow: Using Lodash in all of Vue component](https://stackoverflow.com/questions/37694243/using-lodash-in-all-of-vue-component-template)
