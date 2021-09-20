---
title: HTML `<audio>` Tag
description: Super simple to add audio files to your site with the HTML audio tag.
tags: [html]
order: 82
createdAt: 2020-03-07
updatedAt: 2020-04-13
---

Super simple to add and play audio files on your site. No more fussing with embedding a Flash file or whatever the old way was 😂 Simplify and move forward with HTML5 `<audio>` tag, yay 🎉

```html
<audio controls>
  <source src="sound.ogg" type="audio/ogg" />
  <source src="sound.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
```

## Attributes

**`controls`**

This is a boolean attribute that specifies whether or not to display the audio controls (ie. start/pause button, scroll, volume).

```html
<audio controls></audio>
<!-- OR -->
<audio controls="true"></audio>
```

_Note_: If it's missing, the audio file will not be displayed. Typically, you should always include this. Unless you want to create your own control panel using JavaScript

**`autoplay`**

This is a boolean attribute that plays the audio file automatically after the page loads.

```html
<audio autoplay></audio>
<!-- OR -->
<audio autoplay="true"></audio>
```

_Note_: this feature might not work due to [Chrome's autoplay policy change](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

**`muted`**

This is a boolean attribute that specifies whether the audio will be initially silenced. The default is `false` or un-muted.

```html
<audio muted></audio>
<!-- OR -->
<audio muted="true"></audio>
```

**`loop`**

This is a boolean attribute that specifies if the audio file will repeat continuously from the beginning after it's done playing.

```html
<audio loop></audio>
<!-- OR -->
<audio loop="true"></audio>
```

**`preload`**

This attribute is used to specify how the audio should be loaded when the page loads. It's your way of communicating to the browser whether it should download and cache the audio file or not.

```html
<audio preload="none"></audio>
```

The browser should not load the audio when the page loads. Helpful if you want to minimize unnecessary traffic and when the user is not expected to use the media resource right away.

```html
<audio preload="metadata"></audio>
```

The browser should only load the metadata when the page loads. Again, this is used when the user doesn't need the media resource right away. The metadata that you can fetch may include the audio length, track list, dimensions...etc

```html
<audio preload="auto"></audio>
```

The browser should load the entire audio when the page loads.

_Note_ sometimes this attribute may be ignored in certain instances (ie. when `preload` is present).

## Single Audio Source

You can set the `<audio>` with a single source using the `src` attribute:

```html
<audio controls src="sound.ogg">
  Your browser does not support the audio tag.
</audio>
```

You can also do it via the `<source>` tag:

```html
<audio controls>
  <source src="sound.ogg" type="audio/ogg" />
  Your browser does not support the audio tag.
</audio>
```

## Multiple Audio Sources

`ogg` audio files have a better sound quality and lower file size compared to `mp3` files. Unfortunately, it's not supported by all browsers. Luckily we can pass multiple sources in the `audio` tag. Hence doing it like this:

```html
<audio controls>
  <source src="sound.ogg" type="audio/ogg" />
  <source src="sound.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
```

It goes top down. That is why we listed `ogg` first and we add a default text if the browser doesn't support the `audio` tag.

You can view more audio support from [w3schools](https://www.w3schools.com/html/html5_audio.asp)

## CSS Styling Audio Elements

You can't style individual components of the audio player such as the button size or icons, or the font style. It will take on the default of the particular browser. But you can style the outer player unit.

```css
/* Example: */
audio {
  display: /*...*/,
  border: /*...*/,
  padding: /*...*/,
  margin: /*...*/,
}
```

## JavaScript Audio Events

There are a lot of events you can listen to on the audio file. For example:

| Event   | Fired when                    |
| ------- | ----------------------------- |
| `play`  | When the audio starts to play |
| `pause` | When the audio is paused      |
| `ended` | When the audio is completed   |

You can find the full event list on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Events)

### Basic Usage

You can add an event listener like this:

<!-- prettier-ignore -->
```javascript
// 1. Select our audio tag
document.querySelector('audio')
  // 2. Attach our event listener
  .addEventListener('play', () => {
    // do something
  })
```

Alternately, you can also add the event using the event attributes like this:

```html
<audio onplay="doSomething()"></audio>
```

```javascript
function doSomething() {
  // do something
}
```

Essentially, the syntax for the event attributes is like this:

```html
<element on[event name]="..."></element>
```

## Browser Support

The support is excellent for all modern browsers, including Internet Explorer 9 and up 👍

[MDN Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Browser_compatibility)

## Community Input

_@iamjaydeep1:_ What is autoplay and What were the problems with it? Browsers have historically been poor at helping the user manage sound. When users open a webpage and receive sound they did not expect or want, they have a poor user experience. This poor user experience is the problem we are trying to solve. Unwanted noise is the primary reason that users do not want their browser to autoplay content. To overcome the problems with autoplay chrome have did some policy change. follow the [link](https://developers.google.com/web/updates/2016/07/autoplay) for more details. What is solution? Simple audio won't play automatically. you must need user interaction to play audio like click on button to play or pause.

_[@MrBenJ5](https://twitter.com/samantha_ming/status/1236933988293308416?s=21):_ I made a lib that lets you make audio visualizations from your audio tag. It's opensource too: check it out! [audica.surge.sh](audica.surge.sh)

## Resources

- [MDN Web Docs: HTML audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [w3schools: HTML audio](https://www.w3schools.com/html/html5_audio.asp)
- [w3docs: HTML audio](https://www.w3docs.com/learn-html/html-audio-tag.html)
- [TutorialRepublic: HTML audio](https://www.tutorialrepublic.com/html-reference/html5-audio-tag.php)
- [FlaviocopesL HTML audio tag](https://flaviocopes.com/html-audio-tag/)
- [Audio - The preload attribute](https://justmarkup.com/articles/2015-08-11-audio-the-preload-attribute/)
- [w3schools: HTML audio attribute](https://www.w3schools.com/tags/att_audio_preload.asp)
- [HTML | audio preload Attribute](https://www.geeksforgeeks.org/html-audio-preload-attribute/)
- [Smashing Magazine: Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
- [HTML standard](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-media-preload)
