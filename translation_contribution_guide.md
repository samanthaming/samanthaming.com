# Translation Contribution Guide

Thank you for wanting to translate my articles 💛 Here's the guideline to help you get started 👏

**Note**: The site currently does NOT display translated articles. But it will be coming soon...

## Overview

1. Add translated `.md` to the respective language folder.
1. Update the [TRANSLATION] file.

### Step 1

1. Start off by selecting an article you want to translate.
1. Create a folder titled with the [Language Code](#language-code). This folder might already be created, in that case, you can just use that 👍
1. Within that language folder, create the category folder (ie. tidbits) where the article will live.
1. Please name your translated article using the original file name.

```bash
📁 articles/
  📁 es
    📁 tidbits/
      1-convert-to-true-array.md # 👈 your translated article
  📁 basics/
  📁 blog/
  📁 flexbox30/
  📁 pictorials/
  📁 tidbits/
    1-convert-to-true-array.md
```

### Step 3

The site utilizes [Nuxt's content frontmatter](https://content.nuxtjs.org/writing/#front-matter). Please include the following frontmatter in your translated article

```bash
---
title: # Title of the article
createdAt: # date format > YYYY-MM-DD
translator: # your GitHub username
---
```

Example: `pt/tidbits/1-convert-array-like-to-true-array.md`

```bash
---
title: 'Use o `console.table` para mostrar seus dados'
createdAt: 2020-09-22
translator: '@wenderpmachado'
---
```

## [Language Code](#language-code)

Referenced [developer.chrome.com](https://developer.chrome.com/webstore/i18n#localeTable)

| Language Code | Language (region) |
| ------------- | ----------------- |
| ar            | Arabic            |
| am            | Amharic           |
| bg            | Bulgarian         |
| bn            | Bengali           |
| ca            | Catalan           |
| cs            | Czech             |
| da            | Danish            |
| de            | German            |
| el            | Greek             |
| en            | English           |
| es            | Spanish           |
| et            | Estonian          |
| fa            | Persian           |
| fi            | Finnish           |
| fil           | Filipino          |
| fr            | French            |
| gu            | Gujarati          |
| he            | Hebrew            |
| hi            | Hindi             |
| hr            | Croatian          |
| hu            | Hungarian         |
| id            | Indonesian        |
| it            | Italian           |
| ja            | Japanese          |
| kn            | Kannada           |
| ko            | Korean            |
| lt            | Lithuanian        |
| lv            | Latvian           |
| ml            | Malayalam         |
| mr            | Marathi           |
| ms            | Malay             |
| nl            | Dutch             |
| no            | Norwegian         |
| pl            | Polish            |
| pt            | Portuguese        |
| ro            | Romanian          |
| ru            | Russian           |
| sk            | Slovak            |
| sl            | Slovenian         |
| sr            | Serbian           |
| sv            | Swedish           |
| sw            | Swahili           |
| ta            | Tamil             |
| te            | Telugu            |
| th            | Thai              |
| tr            | Turkish           |
| uk            | Ukrainian         |
| vi            | Vietnamese        |
| zh-cn         | Chinese (China)   |
| zh-tw         | Chinese (Taiwan)  |
