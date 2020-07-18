# Create a Downloadable Link using HTML5 Download Attribute

The default of your anchor tag is a navigational link, it will go to the link you specified in your `href` attribute.

However, when you add the `download` attribute, it will turn that into a download link. Prompting your file to be downloaded. The downloaded file will have the same name as the original filename. However, you can also set a custom filename by pass a value to the download attribute 🤩

```html
<a href="/samanthaming.png" download>
  Download with original filename -> samanthaming.png
</a>

<a href="/samanthaming.png" download="logo">
  Download with custom filename -> logo.png
</a>
```

## Download Restrictions

The `download` attribute only works for same-originl URLs. So if the `href` is not the same origin as the site, it won't work. In other words, you can only download files that belongs to that website. This attribute follows the same rules outline in the _same-origin policy_.

### What is the _same-origin policy_?

This policy is a security mechanism that helps to isolate potentially malicious documents and reduce possible attack vectors. So what does that mean for our `download` attribute? Well, it means that users can only download files that are from the origin site. Let's take a look at an example:

| Origin: `https://www.samanthaming.com`  |                 |
| --------------------------------------- | --------------- |
| `https://www.samanthaming.com/logo.png` | This will work  |
| `https://www.google.com/logo.png`       | This won't work |

You can learn more about this policy on the [MDN Web Doc](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

## Browser Support

This feature is not supported by all browsers (cough cough IE). So if there is a specific browser you're targeting, make sure you check compatibility before using this attribute.

[Can I Use: Download attribute](https://caniuse.com/#feat=download)

## What's the use case for passing a new filename?

Question: What would be use case for this? Isn't it logical to name your file how you want it to be downloaded?

My response: Yes, that would be ideal. But sometimes you might have a custom file naming convention you need to follow which might not makes sense for the user. So being able to pass in a custom file name can be useful 👍

- _[@dj_yanic](https://www.instagram.com/dj_yanic/):_ good use case: I keep track of my resume version number, but the recruiter that download it from my website doesn’t need to know what version it is.

- _[@build.script.log](https://www.instagram.com/build.script.log/):_ also you could programmatically change the file name, to included the date or user name for example. Neat tip!

## Community Feedback

- _[@vikneshwaran_jk](https://www.instagram.com/vikneshwaran_jk/):_ I have used this download attribute in my personal portfolio website to make my resume as downloadable(pdf). Simply powerful👌

- _[chriskelly7777](https://twitter.com/chriskelly7777/status/1053787519240663040):_ A very handy tip. A little gotcha that caught me off guard initially is that this only works on same origin requests, not cross origin, where it is ignored: [Stack Overflow](https://stackoverflow.com/a/42266268) - just to save anyone else pulling out their own hair like I did

## Resources

- [MDN Web Docs: Anchor Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)
- [MDN Web Docs: Anchor Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [w3schools: download](https://www.w3schools.com/tags/att_a_download.asp)
- [Quick Tip Using the HTML5 Download Attribute](https://webdesign.tutsplus.com/tutorials/quick-tip-using-the-html5-download-attribute--cms-23880)
- [David Walsh: Download Attribute](https://davidwalsh.name/download-attribute)
