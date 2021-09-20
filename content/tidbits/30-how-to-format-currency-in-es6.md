---
title: How to Format Currency in ES6
description: You can use the NumberFormat instance to format any number into a currency value.
tags: [javascript, number]
order: 30
createdAt: 2018-08-25
updatedAt: 2020-07-17
---

You can now use the NumberFormat instance to format any number into a currency value.

```javascript
const money = 💰;

// Old Way
money.toLocaleString('en-US',
  {style: 'currency', currency: 'USD'}
); // '$100.00'

// ✅ ES6 Way
new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' }
).format(money); // '$100.00'
```

<markdown-toc></markdown-toc>

## More Currency Conversion

```javascript
const money = 10000;

new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format(money); // '€ 10,000.00'

new Intl.NumberFormat('jp-JP', {
  style: 'currency',
  currency: 'JPY',
}).format(money); // 'JP¥ 10,000'

new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY',
}).format(money); // 'CN¥ 10,000.00'
```

## Understanding the Parameter

Let's talk about the parameters. It's made up of the `locales` and the `options` object.

```javascript
new Intl.NumberFormat([locales[, options]])
```

### A. Parameter: Locales

First, you have the `locales`, this is the language and region settings. It is made up of language code and the country code.

```
language code + country code
```

Let's take a look at some examples:

**Ex 1:**

```
en-CA

en = English (language)
CA = Canada (country)
```

**Ex 2:**

```
de-DE

de = German (language)
DE = Germany (country)
```

**Some More example**

- en-IN (English India)
- fr-CA (French Canada)
- ja-JP (Japanese Japan)

Here is a list of the Language code:
[w3schools: Language Codes](https://www.w3schools.com/tags/ref_language_codes.asp)

Here is a list of the Country code:
[w3schools: Country Codes](https://www.w3schools.com/tags/ref_country_codes.asp)

### B. Parameter: Options

There are tons of options, but let's just talk the two that we're using: `styles`, `currency`.

**Options: Style**

The style is the easy part. This is the style for your number formatting. Since this is a currency blog, our choice would be `currency`. The 3 possible values are:

- decimal (plain number formatting, the default)
- currency (currency formatting, what we're using)
- percent (percent formatting)

```javascript
const money = 100;

new Intl.NumberFormat('en-CAD', { currency: 'CAD'
  style: 'decimal',
}).format(money); // '100'

new Intl.NumberFormat('en-CAD', { currency: 'CAD'
  style: 'currency',
}).format(money); // 'CA$ 100.00'

new Intl.NumberFormat('en-CAD', { currency: 'CAD'
  style: 'percent',
}).format(money); // '10,000%'
```

**Options: Currency**

Obviously there are tons of currency options. You can see the full list here:
[Current currency & funds code list](https://www.currency-iso.org/en/home/tables/table-a1.html)

Here are some examples:

- CAD (Canadian dollar)
- USD (US dollar)
- EUR (Euro)
- CNY (Chinese RMB)

## Resources

- [MDN Web Docs - Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
- [w3schools: Language Codes](https://www.w3schools.com/tags/ref_language_codes.asp)
- [w3schools: Country Codes](https://www.w3schools.com/tags/ref_country_codes.asp)
- [Current currency & funds code list](https://www.currency-iso.org/en/home/tables/table-a1.html)
