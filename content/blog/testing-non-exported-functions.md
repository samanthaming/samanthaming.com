---
title: Testing Non-Exported Functions in JavaScript with Rewire
description: To test exported function, you can simply import it. But what about non-exported functions? Well that's easy too, thanks to Rewire!
tags: [journal, javascript, programming]
createdAt: 2020-10-04
---

Recently, I finally integrated unit testing into my startup project. I've settled with [Jest](https://jestjs.io/), I'll speak more about this in a separate journal entry. While writing my test, I ran into a bit of a dilemma of trying to write unit tests for non-exported functions 😖

[[toc]]

## Testing Exported Function

It's super straightforward to test exported functions.

```javascript
// utils.js
export function sayHi() {
  return '👋';
}
```

And a unit test could be something like this:

```javascript
// utils.test.js

import { sayHi } from './utils.js';

describe('sayHi', () => {
  it('returns wave emoji', () => {
    expect(sayHi()).toBe('👋');
  });
});
```

## Non-export function

Now, what if the function is not exported?

```javascript
function saySecret() {
  return '🤫';
}
```

Ah yikes, there is no way to test it! 🤷‍♀️

```javascript
// utils.test.js

// ❌
import { saySecret } from './utils.js';

saySecret; // undefined
```

## Introducing Rewire

And then I discover this nifty package called [Rewire](https://github.com/jhnns/rewire)! Here's their official description:

> Rewire adds a special setter and getter to modules so you can modify their behaviour for better unit testing. You may
>
> - inject mocks for other modules or globals like process
> - **inspect private variables**
> - override variables within the module.

The second point is exactly what I needed!

## Installing Rewire for a Vue app

Instead of using `rewire`, I used a package called `babel-plugin-rewire`. Which is essentially ES6 version of `rewire`, so I can use `import`. Here's their description:

> It is inspired by rewire.js and transfers its concepts to es6 using babel.

### Step 1: Install package

```bash
# Yarn
yarn add -D babel-plugin-rewire

# Npm
npm install babel-plugin-rewire --save-dev
```

### Step 2: Add to babel config

_babel.config.js_

```javascript
module.exports = {
  plugins: ['babel-plugin-rewire'],
};
```

### Step 3: Using it

Alright, now that it's installed, let's revisit our non-exported function.

```javascript
function saySecret() {
  return '🤫';
}
```

And now, we can use `rewire` to fetch our non-export function:

```javascript
// utils.test.js

import utilsRewire from './utils.js';

describe('saySecret', () => {
  it('returns shh emoji', () => {
    const saySecret = utilsRewire.__get__('saySecret'); // 👈 the secret sauce

    expect(saySecret()).toBe('🤫');
  });
});
```

## Non-exported function must be called in Exported Function

One important thing I need to point out! In order to test the non-exported function, it needs to be used in an exported function.

❌ So this won't work on its own.

```javascript
function saySecret() {
  return '🤫';
}
```

✅ You need to **also** call this in an exported function of the same file.

```javascript
function sayHi(password) {
  if (password) {
    saySecret(); // 👈 Calling the non-export function
  }
}
```

Now, can you actually test it 👍

```javascript
// utils.test.js

import utilsRewire from './utils.js';

describe('saySecret', () => {
  it('returns shh emoji', () => {
    const saySecret = utilsRewire.__get__('saySecret');

    expect(saySecret()).toBe('🤫');
  });
});
```

## Warning! Vuex with Rewire

To my dismay, after I finally got `rewire` set up and successfully added testing for my non-export functions. When I serve up my Vue app, I got this error:

> ❌ Uncaught Error: [vuex] actions should be function or object with "handler" function but "actions.default" in module "editor" is {}.

🤦‍♀️ Like many developers, when one hits a roadblock, you shut the project and give up! NO! That's not the developer way -- you go to LinkedIn and starting looking for a new career 😖 Again NO 😂 Let's see what Google has to say!

Often, I'll tell junior developers to just Google it. But even googling is a skill that takes time to hone. And knowing what to search is important. So I'm going to share the terms I used:

- _(copy & paste the error)_
- _Rewire not working with Vuex_

Luckily on the second search, I found the solution! Turns out GitLab had the same problem and even posted a [solution](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/52179). Let me copy and paste their findings:

> [Rewire] adds a default export to any module which does not already have one. This causes problems with our current pattern of using `import * as getters from './getters.js'` for Vuex resources because default will end up being an unexpected data type (object, not function). As a result we've had to add `export default function() {}` to each of our getters to ensure this doesn't cause Vuex to complain.

Excellent, not only did they explain the problem, they provided the solution 👏

### 1. My Problematic Code

In my Vue app, I had the same pattern as GitLab. Not surprisingly, I work there so I just reference the same pattern from work 😅. This was my original setup:

```javascript
// actions.js

export const someAction = () => {};
```

```javascript
// store/index.js

import * as actions from './actions';

export default {
  actions,
};
```

### 2. The solution

Using the solution found from GitLab, all I had to do is add a default export like so:

```javascript
// actions.js

export default function () {} // 👈 Add this!

export const someAction = () => {};
```

### Alternative solutions

Of course, I could avoid this default export by following a different pattern. On the official [Vuex](https://vuex.vuejs.org/guide/structure.html) guide, they have a [Shopping cart example](https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js) you can reference. They have something like this:

<!-- prettier-ignore -->
```javascript
// modules/cart.js

const actions = {
  someAction() {},
};

export default { // 👈 no problem cause there's the default!
  actions,
};
```

```javascript
// store/index.js

import cart from './modules/cart';

export default new Vuex.Store({
  modules: {
    cart,
  },
});
```

## Proficiency leads to Result!

Maybe down the road, I'll change it, But that's what I have now so I'll just leave it 😅 In programming, I learned very early on, that there are always multiple solutions. There is often no best way, there's only the way that works for you 👍

I like my current setup. And to be honest, I'm more experienced with this way (heads up, I work at GitLab). So for me, this is MY best way. And when you're working on a startup, proficiency is key. You don't want to spend your time spinning your wheels to learn something. **It's all about the RESULT.** Pick the tool you're more familiar and start producing 💪

## Beginner Friendly Resources

If you come from my [Tidbit](https://www.samanthaming.com/tidbits/) community, you will be familiar with my more beginner-friendly posts. However, with my journal series, some of the topics will be a bit more advance. As they are topics that I'm encountering while I'm building up my startup project. I'm learning so much from it so I just want to keep knowledge sharing. And to able to churn these post out quickly, I often won't be able to lay out the foundation -- so I apologize in advance to the more beginner folks 😓 But don't fret! We all once started as beginners, as long as we put in the work, we can all level up! 🧗‍♀️

Here's what I'll do, I'll link up resources that might help you follow my entry a bit more. Thanks again for reading my journal and can't wait to share more!

### Unit testing in JavaScript Part 1 - Why unit testing?

<div class="iframe-yt">
  <iframe src="https://www.youtube.com/embed/Eu35xM76kKY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Jest Crash Course - Unit Testing in JavaScript

<div class="iframe-yt">
  <iframe src="https://www.youtube.com/embed/7r4xVDI2vho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Resources

- [GitHub: Jest test on function that's not exported](https://github.com/speedskater/babel-plugin-rewire/issues/183)
- [Unit Testing Private, Non-exported Functions with Rewire](https://shipshape.io/blog/unit-testing-private-non-exported-functions-with-rewire/)
- [Stack Overflow: Using babel-plugin-rewire to test private non-referenced functions](https://stackoverflow.com/questions/59002536/using-babel-plugin-rewire-to-test-private-non-referenced-functions)
- [GitLab: Remove babel-plugin-rewire](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/52179)
