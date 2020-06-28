# Building my New Site with VuePress

I'm so happy to finally launch my new website! In terms of the tech stack, I stayed within my favorite world -- Vue 😆. But this time I decided to use VuePress instead. In this article, I want to share how this decision came to be and what my thoughts are on using VuePress.

- What I was using before
- Why did I switch from Nuxt to VuePress
- Benefits of VuePress
- Challenges of VuePress
- Was it worth the switch from Nuxt to VuePress

## What I was using before

Prior to this, I was using Nuxt. I chose Nuxt because it was the only one offering server-side rendering. This was important to me as it has the benefit of SEO. Let me explain what that means.

This is the initial HTML output. Vue then takes over and insert all your components into the `id=app` part. That's why in Vue, you always have to indicate the element you want to attach your vue app to. As a user, you don't really notice this because it happens really fast (depending on your internet speed).

_Vue App_

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script src="/js/app.js"></script>
  </body>
</html>
```

As you can see it's quite bare in the initial load. And this makes it difficult for our search engine bot to crawl and mine your precious data because nothing is there to begin with.

However, with Nuxt, your app is generated on the server-side first. So once it hits your browser, all your pages are already populated.

_Nuxt App_

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="app">
      <h1>Hello there</h1>
    </div>
    <script src="/js/app.js"></script>
  </body>
</html>
```

Here's how I like to compare it. Vue is like those blue apron (not sponsored) meals that you have to assemble at home. And Nuxt is like ordering take out from a restaurant, everything arrives ready to eat 😋.

Anyhow, I wasn't trying to build a fancy site. I was merely trying to build a content site to display my code tidbits and articles 😄. So I didn't need a Single Page App. I just needed some good old fashion plain HTML, and that's why Nuxt was it for me!

## Why did I switch from Nuxt to VuePress

If Nuxt was so great, why switch. Why not just keep going with it. Well, because I was lazy lol. The great thing about Nuxt is that it's super configurable. That's also its downside, I had to configure everything myself. I didn't want to do that anymore. It's like choosing to buy a property. You can either buy a piece of empty land or pre-built home. The land is great because you can build whatever home you want on top of it, you're essentially starting from scratch. But for me, I want a pre-built home where I can simply move in and not worry about anything.

And that to me was VuePress. It has a built-in search plugin, super fancy markdown already set up with tons of cool features like code highlighting, and it was designed for a content static site. Which is exactly what I was building. So I made the switch!

**Runner up: Gridsome**

I was so close to picking [Gridsome](https://gridsome.org/). It provided everything I wanted to create a static content site. But the Vue team came along with their own alternative, VuePress. So I thought if the Vue team created this, I'm in! In hindsight, I think I should have looked into this more as there were some challenges with VuePress. More on this later.

## Benefits of VuePress

Alright, let's talk about some of the stuff I love about VuePress. Here are my top 3:

### 1. Markdown Feature

This was the main reason I switched to VuePress. I remember I had such a tough time setting up markdown in Nuxt. But that might be due to my limited programming experience at that time. So I only implemented only the bare minimum for it to work. With VuePress, I barely had to do any work to get these cool features to work!

**Line Highlighting**

```html{2}
<p>I am not highlighted</p>
<p>I am highlighted</p>
```

**Using Vue in markdown**

```md
# My markdown

<VueComponent />
```

**Internal Links**

```md
[Home](/) <!-- I can use relative links -->
```

You can see the entire Markdown Extensions [here](https://vuepress.vuejs.org/guide/markdown.html#markdown-extensions)

### 2. Search

Who knew such a small feature could make such a big impact. In my old site, there was no search feature. So I would use Google to search my own site to find specific tidbits. I'm surprised I never got any complaint emails on this. Maybe those folks just stopped using my site all together 😳 I don't blame ya 🤦‍♀️.

And guess what! VuePress had a built-in search feature. It's a header-based search plugin. What it does mean is, it will crawl through all your markdown files, and return the header that matches your query. Fantastic!

<ArticleImage name="search" no-download />

### 3. Frontmatter

Frontmatter is like data for your markdown file. When you write a markdown article, a lot of times you want to include some extra information along with it. For example, the author's name, the created date, the modified date, etc. How do you pass the information along in your markdown. That's with a frontmatter block.

```md
---
author: Samantha Ming
created: Jan 26
modified: Jan 30
---

# My new blog post
```

I wanted this feature for my old site. I couldn't get it to work, so I instead created a JavaScript object that contains all my article data. That's putting my developer creative juice to work. When you don't get it to work, you find another way. That's the great thing about working on your own project. It doesn't have to be perfect. As long as you can get to your destination. Even if that means taking the long way, it's fine. Because it's your party so you get to set the rules! 😂

## Challenges of VuePress

I wish I could say this journey of building my site in VuePress was perfect. Unfortunately, it wasn't. VuePress is great for building a technical documentation site. But my site is essentially like a blog. So here I am trying to mold VuePress to suit my needs, and this was tough.

### Documentation Lacks Examples for Configurable Tasks

The VuePress documentation although great for the main features. It was a bit challenging for the more advanced or configurable tasks. I found the docs a bit lacking in examples. Let me give you an example (high five on the smooth example transition 😂).

I was trying to install `vue-fontawesome` into my app so I can use the Font Awesome icons. I could not able to figure out how to do that. Luckily, I had some guidance, and finally had figured it out. I wish they would have mentioned some use case examples on their official docs. If so, I think that would have definitely helped me out. If you ever read the Vue documentation, it's packed with examples and so simple to read. Good news is I know the VuePress team is trying to improve on this. So here being excited for that to happen 👏.

By the way, here's how you install the plugin to work with VuePress, if you're curious.

[GitHub Link](https://github.com/vuejs/vuepress/issues/2072)

### Limited Meta Data Support

When I was using Nuxt, there was this awesome plugin called `vue-meta`. It allows to programmatically to create metadata for your pages. This is super important for SEO, and to create those Twitter or Facebook sharing cards.

Yes, VuePress supports this. You can set a general one in your `config` file, and you can set individual ones in your markdown file.
Remember I mentioned, because of my failure to set up frontmatter in my Nuxt app. I ended up using a huge JavaScript object to store all my data for each of my articles. It also happened to contain all my metadata. So I wanted to set my meta date programmatically. Yes, I found some unofficial plugins. But they were mainly relying on the metadata being set in the front matter. So those didn't work.

Remember when I mentioned my runner up option, Gridsome. They HADE it! Ugh 🤦‍♀️ It was part of their package. Under their hood, they were using `vue-meta`. I was so close to switching to Gridsome just for this feature. But I was so far along, I decided to stick with VuePress. You might ask, why don't you just configure `vue-meta` with VuePress. Great question! If you figure out how, please email me! It's not that I don't want to, I just couldn't figure it out. Also time is ticking, so I decided to move on. By the way, I need to set up `vue-meta` with Server Side Rendering. So the complication is a bit higher.

Anyways the current solution I have is using my own custom plugin that programmatically pulls in my metadata from my JavaScript object and sets it in the front matter through a custom plugin. The problem is when my site is deployed, now I have duplicated metadata (which I just recently discovered). Ugh, that's going into the issue bucket. I'll deal with that later 🤦‍♀️ (Will post an update if I figure out the solution 🤞).

I also created an issue in the VuePress official repo, so hopefully, they will consider adding this. Feel free to chime in, if you like this feature as well:

> [VuePress Feature Request](https://github.com/vuejs/vuepress/issues/2153)

## Was it worth the switch from Nuxt to VuePress

Yes, 100% Yes!!!! It took me a full crazy 2 months working around the clock to complete the site. VuePress had so many wonderful features already pre-built into it, I saved tons of time not having to work build those myself. Speed is the game here! I don't want to spend any time configuring anything. I don't want to build anything I don't have to. I want to spend my time, just executing. That's why I wanted to pick something that had a lot of things pre-built. Hence, selecting VuePress.

Hope you enjoy this summary of my experience and feedback on using VuePress.

The next post I want to cover is why I decided to switch CSS framework and used [Tailwindcss](https://tailwindcss.com/). So stay tuned 😊.

## Resources

- [VuePress](https://vuepress.vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [Gridsome](https://gridsome.org/)
- [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)
