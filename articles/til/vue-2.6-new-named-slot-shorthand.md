# Use the new named slot shorthand with `#`

As of Vue 2.6.0+, there is now a new named slot shorthand. You can use `#` to reference the the content of your named slots 👍

<!-- prettier-ignore -->
```html
<!-- Before -->
<template v-slot:content>

<!-- ✅ After -->
<template #content>
```

## Quick Intro to Vue Slots

Vue Slots are a great way to add customized content into your reusable components.

### 1. How to create a slot

To create a slot, you simply use `<slot>` and provide a name. If you only have one slot, the name is optional.

```html
<!-- TitleComponent -->
<div>
  <h1>
    <slot name="title">
  </h1>
  <h2>
    <slot name="subtitle">
  </h2>
</div>
```

### 2. Using the slot

And now we can call our `TitleComponent` (that we created in step 1), in other components like this:

<!-- prettier-ignore -->
```html
<title-component>
  <template #title>Samantha Ming</template>

  <template #subtitle>
    Frontend Developer from <span>Canada</span>
  </template>
</title-component>
```

## Resources

- [Vue: named slots shorthand](https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand)
