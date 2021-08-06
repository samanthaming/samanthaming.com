---
title: New features in 2.0
description: SamanthaMing.com 2.0 is bringing your more programming goodness with a brand new website. More content and way better user experience. Check out these awesome new features.
tags: [site, programming, vue]
createdAt: 2020-02-02
---

I added a lot of cool features to the new site. Honestly, a lot of it was courtesy of VuePress. That’s why I picked it. My goal was to rebuild the site with the least amount of effort 😂

So let’s see what are some cool features I have on SamanthaMing.com 2.0 🤩

✅ Search <br>
✅ Better Mobile Navigation <br>
✅ More Content <br>
✅ Download HQ Images <br>
✅ Article Sharing on Social Media <br>
✅ Edit Articles <br>
✅ Submit Tickets <br>

## Search

I knew my site MUST have a search feature. Why? Because I’ve been using Google to find articles on my site 😓. So when VuePress came out, that was the first I checked. Did it have a pre-built search function? And to my delight it did. Sold!

It is a header-based search plugin. So that means it will only return the matching header of your search term. All my articles are in Markdown. So a header in Markdown is whatever that starts with `#`.

<!-- prettier-ignore -->
```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

If I wanted to go fancy, I could use the built-in [Algolia feature](https://vuepress.vuejs.org/theme/default-theme-config.html#algolia-docsearch) but that costs money. So the free, not fancy version works just fine with me 😉. No more googling on my own to find content, yay 👍

<ArticleImage full-name="building-my-new-site-with-vuepress-search" no-download :max-width="500" />

### Search Keyboard Shortcut

Also, something super cool! If you press `s` on your keyboard. It automatically places focus on the search bar so you can start typing your search inquiry right away. How did I built that, you ask? VuePress baby!

## Mobile Navigation

Another cool VuePress feature is the sidebar or mobile navigation. You can swipe on your phone and the sidebar will just slide out. And you can either click the `x` button to or on the page to close it.

<ArticleImage name="swipe-sidebar" no-download />

## More Content

Features are cool, but at the end of the day, you’re visiting my blog for the content. I’m excited to say, there’s MORE content. Here’s what additional content I added:

**A. [Blog](/blog/)**

Finally, I'm hosting all my blog content 🤩

**B. [Flexbox30](/flexbox30/)**

<ArticleImage folder="courses" full-name="flexbox30" no-download :max-width="500" />

**C. [Pictorials](/pictorials/)**

<ArticleImage folder="courses" full-name="pictorials" no-download :max-width="500" />

**D. [Web Basics](/basics/)**

<ArticleImage folder="courses" full-name="basics" no-download :max-width="500" />

## Edit the Articles

As you know I live life on the edge and test in production 😂. So oftentimes, my articles contain a few typos. I’m very fortunate that many of YOU will let me know when I made an error. You will either email or DM me. And then I’ll make the fix. Well, I wanted to make the process even easier...for me 😂. At the bottom of all my articles, there is an "Edit this post" link.

<ArticleImage name="edit-post" no-download :max-width="400" />

This will navigate you to my official Markdown file on GitHub where you can edit the file directly!

<ArticleImage name="github-edit-file" no-download :max-width="600" />

So if you notice an error in my articles, please do help me with the edit. This way it will ensure others don’t get confused and will read the most correct version of my article. Being a one-person shop, this will be super helpful, thank you in advance for helping out! 💛

## Download HQ Images

You might have noticed the images on the site is a bit grainy. I did that on purpose to ensure a better performance speed for you, especially if you’re on your phone or if you have a slow internet connection. My blog is super image-heavy, so I had to use the smallest size as possible. But I know some of you like to download my images for keeps. And you can! Just click on the "_Download HD Image_" and this will navigate you to my official repo on GitHub that contains the original image.

> <span class="text-gray-darker">Download HD Image</span>

Feel free to download it for your own reference or share it with your friends! You don’t have to give me attribution OR ask me for permission when you share my image. It has attribution built into it. So I kindly ask that you don’t edit my images. Honestly, if you don’t, I’m not going to come after you 😅. But I trust you will do the right thing 😇

## Share the Articles

Many of you share my articles. Which I am so incredibly grateful for. My content will always be FREE. My goal is to knowledge share and encourage more folks to get into tech. That’s why I don’t want to charge for my content. If you have found my content, it will mean the world to me if you share it with your friends. You don’t need to buy me coffee or send me gifts. All I ask you is that you tell ONE friend about my site or get them to follow my content on social media 💛

<ArticleImage name="share-post" no-download :max-width="400" />

Continuing my dangerous lifestyle of testing in production 😅. I have not tested if the links work for LinkedIn, Reddit or Hacker News. So if those links break, please let me know ASAP or [submit a ticket on GitHub](https://github.com/samanthaming/samanthaming.com/issues/new?assignees=samanthaming&labels=&template=site-bug-report.md&title=%5BBug+Report%5D).

## Get involved & Submit Tickets

I built my blog for YOU. So the one thing I really want to improve is giving YOU a bigger input in directing the content of my site and the features I build.

That’s why I have created these quick links for you on my site and on my GitHub repo for you to submit tickets and get involved. I think this will be a great way to engage our awesome community and get you involved!

<ArticleImage name="submit-ticket" no-download :max-width="400" />

I hope you like the new version of SamanthaMing.com ✌️ Thanks for reading ♥
