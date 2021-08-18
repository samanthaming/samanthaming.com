---
title: window.location Cheatsheet
description: The window.location object can be used to get information on the current page address (URL). You can also use its method to do a page redirect or refresh.
tags: [browser]
order: 86
createdAt: 2020-04-19
---

Looking for a site's URL information, then the `window.location` object is for you! Use its properties to get information on the current page address or use its methods to do some page redirect or refresh 💫

> **`https://www.samanthaming.com/tidbits/?filter=JS#2`**

```javascript
window.location.origin   → 'https://www.samanthaming.com'
               .protocol → 'https:'
               .host     → 'www.samanthaming.com'
               .hostname → 'www.samanthaming.com'
               .port     → ''
               .pathname → '/tidbits/'
               .search   → '?filter=JS'
               .hash     → '#2'
               .href     → 'https://www.samanthaming.com/tidbits/?filter=JS#2'
```

<!-- prettier-ignore -->
```javascript
window.location.assign('url')
               .replace('url')
               .reload()
               .toString()
```

<markdown-toc></markdown-toc>

## window.location Properties

| `window.location` | Returns                                           |
| ----------------: | ------------------------------------------------- |
|         `.origin` | Base URL (Protocol + hostname + port number)      |
|       `.protocol` | Protocol Schema (`http`: or `https`)              |
|           `.host` | Domain name + port                                |
|       `.hostname` | Domain name                                       |
|           `.port` | Port Number                                       |
|       `.pathname` | The initial '/' followed by the Path              |
|         `.search` | `?` followed by Query String                      |
|           `.hash` | `#` followed by the Anchor or Fragment identifier |
|           `.href` | Full URL                                          |

### Difference between `host` vs `hostname`

In my above example, you will notice that `host` and `hostname` returns the value. So why do these properties. Well, it has do with the port number. Let's take a look.

**URL without Port**

> `https://www.samanthaming.com`

```javascript
window.location.host; // 'www.samanthaming.com'
window.location.hostname; // 'www.samanthaming.com'

window.location.port; // ''
```

**URL with Port**

> `https://www.samanthaming.com:8080`

```javascript
window.location.host; // 'www.samanthaming.com:8080'
window.location.hostname; // 'www.samanthaming.com'

window.location.port; // '8080'
```

So `host` will include the port number, whereas `hostname` will only return the host name.

### How to change URL properties

Not only can you call these location properties to retrieve the URL information. You can use it to set new properties and change the URL. Let's see what I mean.

```javascript
// START 'www.samanthaming.com'

window.location.pathname = '/tidbits'; // Set the pathname

// RESULT 'www.samanthaming.com/tidbits'
```

Here's the complete list of properties that you can change:

<!-- prettier-ignore -->
```javascript
// Example
window.location.protocol = 'https'
               .host     = 'localhost:8080'
               .hostname = 'localhost'
               .port     = '8080'
               .pathname = 'path'
               .search   = 'query string' // (you don't need to pass ?)
               .hash     = 'hash' // (you don't need to pass #)
               .href     = 'url'
```

The only property you can't set is `window.location.origin`. This property is read-only.

## Location Object

The `window.location` returns a `Location` object. Which gives you information about the current location of the page. But you can also access the `Location` object in several ways.

```javascript
window.location          → Location
window.document.location → Location
document.location        → Location
location                 → Location
```

The reason we can do this is because these are global variables in our browser.

<markdown-image img="86-browser-global-variable" width="728" height="281" width-option="full"></markdown-image>

### window.location vs location

All 4 of these properties point at the same `Location` object. I personally prefer `window.location` and would actually avoid using `location`. Mainly because `location` reads more like a generic term and someone might accidentally name their variable that, which would override the global variable. Take for example:

```javascript
// https://www.samanthaming.com

location.protocol; // 'https'

function localFile() {
  const location = '/sam';

  return location.protocol;
  // ❌ undefined
  //    b/c local "location" has override the global variable
}
```

I think that most developer is aware that `window` is a global variable. So you're less likely to cause confusion. To be honest, I had no idea `location` was a global variable until I wrote this post 😅. So my recommendation is to be more explicit and use `window.location` instead 👍

Here's my personal order of preference:

```javascript
// ✅
1. window.location   // 🏆
2. document.location

// ❌
3. window.document.location //  why not just use #1 or #2 😅
4. location // feels too ambiguous 😵
```

Of course, this is just my preference. You're the expert of your codebase, there is no best way, the best way is always the one that works best for you and your team 🤓

## window.location Methods

| `window.location` |                                                                        |
| ----------------: | ---------------------------------------------------------------------- |
|       `.assign()` | Navigates to the given URL                                             |
|      `.replace()` | Navigates to given URL & removes current page from the session history |
|       `.reload()` | Reload the current page                                                |
|     `.toString()` | Returns the URL                                                        |

### window.location.toString

Here's the definition from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location/toString)

> This method returns the [USVString](https://developer.mozilla.org/en-US/docs/Web/API/USVString) of the URL. It is a read-only version of Location.href

In other words, you can use it to get the `href` value from the

```javascript
// https://www.samanthaming.com

window.location.href; // https://www.samanthaming.com
window.location.toString(); // https://www.samanthaming.com
```

As to which to use, I couldn't find much information as to which is better; but if you do, please [submit a PR](https://github.com/samanthaming/sample-src/blob/master/articles/tidbits/86-window-location-cheatsheet.md) on this 😊. But I did find a performance test on the difference.

> [JSPerf: Location toString vs Location href](https://jsperf.com/location-tostring-vs-location-href)

One thing I want to note about these speed tests is that it is browser specific. Different browser and versions will render different outcome. I'm using Chrome, so the `href` came out faster then the rest. So that's one I'll use. Also I think it reads more explicit then `toString()`. It is very obvious that `href` will provide the URL whereas `toString` seems like something it being converted to a string 😅

### assign vs replace

Both of these methods will help you redirect or navigate to another URL. The difference is `assign` will save your **current page** in history, so your user can use the "back" button to navigate to it. Whereas with `replace` method, it doesn't save it. Confused? No problem, I was too. Let's walk through an example.

**Assign**

```md
1. Open a new blank page
2. Go to www.samanthaming.com (current page)

3. Load new page 👉 `window.location.assign('https://www.w3schools.com')`
4. Press "Back"
5. Returns to 👉 www.samanthaming.com
```

**Replace**

```md
1. Open a new blank place
2. Go to www.samanthaming.com (current Page)

3. Load new page 👉 `window.location.replace('https://www.w3schools.com')`
4. Press "Back"
5. Return to 👉 blank page
```

**Current Page**

I just need to emphasize the "current page" in the definition. It is the page right before you call `assign` or `replace`.

```md
1. Open a new blank place
2. Go to www.developer.mozilla.org
3. Go to www.samanthaming.com 👈 this is the current Page
```

```javascript
4. window.location.assign('https://www.w3schools.com'); // Will go to #3
4. window.location.replace('https://www.w3schools.com'); // Will go to #2
```

## How to Do a Page Redirect

By now, you know we can change the properties of the `window.location` by assigning a value using `=`. Similarly, there are methods we can access to do some actions. So in regards to "how to redirect to another page", well there are 3 ways.

```javascript
// Setting href properties
window.location.href = 'https://www.samanthaming.com';

// Using Assign
window.location.assign('https://www.samanthaming.com');

// Using Replace
window.location.replace('https://www.samanthaming.com');
```

### replace vs assign vs href

All three does redirect, the difference has to do with browser history. `href` and `assign` are the same here. It will save your **current page** in history, whereas `replace` won't. So if you prefer creating an experience where the navigation can't press back to the originating page, then use `replace` 👍

So the question now is `href` vs `assign`. I guess this will come to personal preference. I like the `assign` better because it's a method so it feels like I'm performing some action. Also there's an added bonus of it being easier to test. I've been writing a lot of Jest tests, so by using a method, it makes it way easier to mock.

```javascript
window.location.assign = jest.fn();

myUrlUpdateFunction();

expect(window.location.assign).toBeCalledWith('http://my.url');
```

_Credit [StackOverflow: @kieranroneill](https://stackoverflow.com/a/50604116):_

But for that that are rooting for `href` to do a page redirect. I found a performance test and running in my version of Chrome, it was faster. Again performance test ranges with browser and different versions, it may be faster now, but perhaps in future browsers, the places might be swapped.

> [JSPerf: href vs assign](https://jsperf.com/location-href-vs-location-assign)

## Scratch your own itch 👍

Okay, a bit of a tangent and give you a glimpse of how this cheatsheet came to be. I was googling how to redirect to another page and encountered the window.location object. Sometimes I feel a developer is a journalist or detective - there's a lot of digging and combing through multiple sources for you to gather all the information available. Honestly, I was overwhelmed with the materials out there, they all covered different pieces, but I just wanted a single source. I couldn't find much, so I thought, I'll cover this in a tidbit cheatsheet! Scratch your own itch I always say 👍

## Community Input

_[@jam3sn_codes](https://www.instagram.com/p/B_NQQjLgD9T/):_ This is awesome, I’ve used window.location.href in the past, but didn’t realise how simple it is to access sections of the URL!

If you want to see a live-action of what James is talking about, check out the table of content at the top of this article. Click on it and it will scroll down to the specific section of the page.

```javascript
// 1. Add the hash identifier as an "id" to any element
<h1 id="top">Top Section</h1>

// 2. Pass that id name as the hash
<a href="https://samanthaming.com/#top">Back to top</a>
```

## Resources

- [MDN Web Docs: Window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [MDN Web Docs: Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
- [w3schools: window.location](https://www.w3schools.com/js/js_window_location.asp)
- [w3schools: Location](https://www.w3schools.com/jsref/obj_location.asp)
- [HTML Spec: Location](https://html.spec.whatwg.org/multipage/history.html#the-location-interface)
- [w3docs: How to Redirect a Web Page with JavaScript](https://www.w3docs.com/snippets/javascript/how-to-redirect-a-web-page-with-javascript.html)
- [freecodecamp: Window Location](https://guide.freecodecamp.org/javascript/window-location/)
- [FrontBackEnd: Difference location.replace, location.assign and location.href](https://frontbackend.com/javascript/what-is-the-difference-between-location-replace-and-location-href)
- [Medium: How do you redirect to another page in JavaScript?](https://medium.com/@marikalam/how-do-you-redirect-to-another-page-in-javascript-6c7524c1f88a)
- [Stack Overflow: Difference between window.location.assign() and window.location.replace()](https://stackoverflow.com/questions/4505798/difference-between-window-location-assign-and-window-location-replace)
- [Stack Overflow: Why does location.toString() report the same as location.href?](https://stackoverflow.com/questions/6329092/why-does-location-tostring-report-the-same-as-location-href)
- [Stack Overflow: Get the current URL with JavaScript](https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript)
- [Stack Overflow: Difference between host and hostname](https://stackoverflow.com/questions/6549117/whats-the-difference-between-window-location-host-and-window-location-hostname)
- [Stack Overflow: href property vs. assign() method](https://stackoverflow.com/questions/10302905/location-href-property-vs-location-assign-method)
