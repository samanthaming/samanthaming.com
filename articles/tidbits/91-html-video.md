# HTML Video

Super easy to add video directly to your site! No more dealing with Flash or whatever crazy plugins back in the day 😂. Simplify and move forward with HTML5 <video> tag, yay 🥳

```html
<video controls>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  <track src="subtitle.vtt" kind="subtitles" />
  Your browser doesn't support HTML5 video.
</video>
```

| Tag        |                           |
| ---------- | ------------------------- |
| `<video>`  | Defines the video element |
| `<source>` | Defines the video source  |
| `<track>`  | Defines the text track    |

[[toc]]

## HTML5 Video Basics

Here's the very basic for you to get your video added to your site.

```html
<video src="video.mp4" controls></video>
```

## Video Fallback

The support for `<video>` is quite good. But just in case your user's browser doesn't support HTML5 video tag, it's good to add a text to let them know. The content inside the tag acts as a fallback in browsers that don't support the `<video>` element.

```javascript
<video src="video.mp4" controls>
  Your browser doesn't support HTML5 video tag.
</video>
```

What's even better! If your video is hosted somewhere else, you can link that up. That way your user can still watch your video.

```javascript
<video src="video.mp4" controls>
  <p>
    Your browser doesn't support HTML5 video tag.
    Here's <a href="video.mp4">a link to the video</a>
  <p>
</video>
```

Of course, the fallback can be anything. You can add use an `<img>`.

```javascript
<video src="video.mp4" controls>
  <img src="image.png" >
</video>
```

Or I daresay even some flash object 😳

```html
<video src="video.mp4" controls>
  <object type="application/x-shockwave-flash">
    <!-- flash stuff -->
  </object>
</video>
```

## Defining Video Source

There are 2 ways you can specify the source of your video.

### 1. Define with `src` attribute

```javascript
<video
  src="video.mp4" // 👈
  controls
></video>
```

### 2. Define `source` tag

```javascript
<video controls>
  <source src="video.mp4">
</video>
```

The benefit of using `<source>` is that you can add different video **type** of your videos. Not all browsers support the same video format. So by passing in multiple video file formats, you can let your browser decide which works them 👍

```javascript
<video controls>
  <source src="video.webm" type="video/webm">
  <source src="video.ogg"  type="video/ogg">
  <source src="video.mp4"  type="video/mp4">
</video >
```

## Video Attribute

The video attribute are very similar to the `<auto>` attributes and it operates very similar. I discuss these shared attributes in my [HTML audio attributes](https://www.samanthaming.com/tidbits/82-html-audio-tag/#attributes) article, so check that out if you want to read about them.

- `controls`
- `autoplay`
- `muted`
- `loop`
- `preload`

Let me go through some of the attributes that are unique to `<video>`

**`poster`**

This attribute allow to pass in an image url, so an image can be displayed while the video is downloading or until the play button is pressed.

```javascript
<video poster="image.png"></video>
```

<video src="video.mp4" controls poster="https://via.placeholder.com/400x250/ffff00/000000/?text=SamanthaMing.com"></video>

**`height`**

You can use this attribute to set the height of the video player.

```html
<video height="100"></video>
<!-- translates to 100 pixels -->
```

Note, you can only pass absolute values. No percentages!

**`width`**

You can use this attribute to set the height of the video player.

```html
<video width="100"></video>
```

## Adding Subtitles & Captions using `<track>` tag

If you want to add a text track, then you can add the `<track>` child element to your `<video>`. There are 4 attributes of the `<track>` tag.

```html
<track kind="..." label="..." src="..." srclang="..." />
```

**`kind`**

There are several text tracks you can add, and you can indicate it in the `kind` attribute.

```html
<track kind="..." />
```

| kind           |                                                                               |
| -------------- | ----------------------------------------------------------------------------- |
| `subtitles`    | Dialogue in different languages                                               |
| `captions`     | Transcription of the video                                                    |
| `descriptions` | Textural description of the video content helps user who can't view the video |
| `chapters`     | Chapter titles are useful when navigating the media resource                  |
| `metadata`     | It is used by script and not visible by the user                              |

**`srclang`**

When you set the `kind="subtitles"`, you must also define the `srclang`

```html
<track kind="subtitles" srclang="zh-TW" />
```

It must be a valid [BCP 47](https://www.techonthenet.com/js/language_tags.php) language tag.

**`src`**

In this attribute, is where you indicate your `.vtt` file.

```html
<track src="subtitles.vtt" />
```

**`label`**

This attribute is where you specify the title of your text track.

```html
<track label="English" />
```

**`default`**

If you have multiple text track, you can use the `default` boolean attribute to identify which track should be enabled by default if the user's preference is not specified.

```html
<video>
  <track kind="subtitles" src="english-subtitles.vtt" srclang="en" default />
  <track kind="subtitles" src="chinese-subtitles.vtt" srclang="zh-TW" />
</video>
```

## JavaScript Video Events

There are a lot of events you can listen to on the video file. For example:

| Event   | Fired when                    |
| ------- | ----------------------------- |
| `play`  | When the video starts to play |
| `pause` | When the video is paused      |
| `ended` | When the video is completed   |

You can find the full event list on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Events)

### How to check when video has finished

To listen to an event, you can use the `addEventListener` to listen for the specific event.

```html
<video id="some-video"></video>
```

```javascript
const videoEl = document.getElementById('some-video');
videoEl.addEventListener('ended', function() {
  // do something when the video has finished playing
});
```

> [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

You can also add the even using the event attribute like this:

```html
<video onended="doSomething()"></video>
```

```javascript
function doSomething() {
  // do something
}
```

Alternatively, you can also access this as a property on the element all in your js file like this:

```javascript
const videoEl = document.getElementById('some-video');
videoEl.onended = function() {
  // do something when the video has finished playing
};
```

> [MDN: onevent handler](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

## Browser Support

The support is excellent for all modern browsers, including Internet Explorer 9 and up 👍

| Browser           |     |
| ----------------- | --- |
| Chrome            | ✅  |
| Firefox           | ✅  |
| Safari            | ✅  |
| Edge              | ✅  |
| Internet Explorer | ✅  |

- [Browser Support: video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/videos#Browser_compatibility)

## Community Input

- _[@faintpulses](https://www.instagram.com/p/CA0qf8aAKH_/):\_ Tip: for cross browser support, if you want auto play set, make sure to mute the video within the `<video>` tag.

- _[@sssangha90](https://www.instagram.com/p/CA0qf8aAKH_/):\_ You can leave out `controls` to avoid browser default controls, set a class to the video tag, and style the controls and functionality of the controls within the stylesheet.css and script.js

## Resources

- [MDN Web Docs: source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
- [MDN Web Docs: track](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [MDN Web Docs: Media Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)
- [MDN Web Docs: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Web Docs: Adding captions and subtitles to HTML5 video](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [MDN Web Docs: Video Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes)
- [w3schools: HTML5 Video](https://www.w3schools.com/html/html5_video.asp)
- [w3schools: video](https://www.w3schools.com/tags/tag_video.asp)
- [w3schools: track](https://www.w3schools.com/tags/tag_track.asp)
- [w3schools: source](https://www.w3schools.com/tags/tag_source.asp)
- [w3schools: HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)
- [w3: HTML5 Video Events and API](https://www.w3.org/2010/05/video/mediaevents.html)
- [HTML5 Video](https://www.html5rocks.com/en/tutorials/video/basics/)
- [How to Embed a Video in HTML](https://www.bitdegree.org/learn/html5-video-player)
- [Stack Overflow: Detect when an HTML5 video finishes](https://stackoverflow.com/questions/2741493/detect-when-an-html5-video-finishes)
- [Stack Overflow: Image placeholder fallback for HTML5 Video](https://stackoverflow.com/questions/14616453/image-placeholder-fallback-for-html5-video)
- [Stack Overflow: How can I display an image if browser does not support HTML5's video tag](https://stackoverflow.com/questions/9718109/how-can-i-display-an-image-if-browser-does-not-support-html5s-video-tag)
- [Videos can be expensive](https://www.freecodecamp.org/news/html5-video/)
