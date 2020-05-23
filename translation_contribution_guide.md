# Translation Contribution Guide

Thank you for wanting to translate my articles 💛 Here's the guideline to help you get started 👏

**Note**: The site currently does NOT display translated articles. But it will be coming soon...

## Overview

1. Add translated `.md` to the respective language folder.
1. Update the [TRANSLATION] file.

### Step 1

1. Start off by selecting an article you want to translate.
1. Create a subfolder titled with the [Language Code](#language-code). This folder might already be created, in that case, you can just use that 👏
1. You can name your translated article using the original file name OR you can create a translated version. But please make sure you prefix it with the article number (ex. `1-`) if the original file name contains it.

```bash
📁 articles/
  📁 basics/
  📁 blog/
  📁 flexbox30/
  📁 pictorials/
  📁 tidbits/
    1-convert-to-true-array.md
    📁 es
      1-convert-to-true-array.md OR 1-localize-name.md
```

### Step 1

Now let's update our TRANSLATION file so the site have the necessary information to include your translation.

| Category     | File                                                |
| ------------ | --------------------------------------------------- |
| Code Tidbits | [TRANSLATION.js](articles/tidbits/TRANSLATION.js)   |
| Flexbox30    | [TRANSLATION.js](articles/flexbox30/TRANSLATION.js) |
| Basics       | [TRANSLATION.js](articles/basics/TRANSLATION.js)    |
| Blog         | [TRANSLATION.js](articles/blog/TRANSLATION.js)      |

Here's the information that is required:

<!-- prettier-ignore -->
```javascript
module.exports = {
  'tidbits/1-convert-to-true-array': {
    'es': {
      'file': '',       // 👈 the file name
      'title': '',      // 👈 the Title of the article
      'description': '' // 👈 the Description of the article
    }
  }
}
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
