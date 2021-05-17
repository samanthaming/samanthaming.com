<template>
  <!-- Reference > https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/ImageList.js -->
  <content-loader v-bind="$attrs" :primary-color="primaryColor">
    <rect x="0" y="0" rx="2" ry="2" width="64" height="30" />
    <rect x="75" y="0" rx="2" ry="2" width="250" height="5" />
    <rect x="75" y="10" rx="2" ry="2" width="180" height="5" />
    <rect x="75" y="20" rx="2" ry="2" width="125" height="5" />

    <rect x="0" y="40" rx="2" ry="2" width="64" height="30" />
    <rect x="75" y="40" rx="2" ry="2" width="250" height="5" />
    <rect x="75" y="50" rx="2" ry="2" width="180" height="5" />
    <rect x="75" y="60" rx="2" ry="2" width="125" height="5" />

    <rect x="0" y="80" rx="2" ry="2" width="64" height="30" />
    <rect x="75" y="80" rx="2" ry="2" width="250" height="5" />
    <rect x="75" y="90" rx="2" ry="2" width="180" height="5" />
    <rect x="75" y="100" rx="2" ry="2" width="125" height="5" />

    <rect x="0" y="120" rx="2" ry="2" width="64" height="30" />
    <rect x="75" y="120" rx="2" ry="2" width="250" height="5" />
    <rect x="75" y="130" rx="2" ry="2" width="180" height="5" />
    <rect x="75" y="140" rx="2" ry="2" width="125" height="5" />

    <rect x="0" y="160" rx="2" ry="2" width="64" height="30" />
    <rect x="75" y="160" rx="2" ry="2" width="250" height="5" />
    <rect x="75" y="170" rx="2" ry="2" width="180" height="5" />
    <rect x="75" y="180" rx="2" ry="2" width="125" height="5" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

// "viewBox" is not a Vue attribute, it's a HTML non-hyphenated attribute
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
// eslint-disable vue/attribute-hyphenation

export default {
  components: {
    ContentLoader,
  },
  inheritAttrs: false,
  props: {
    primaryColor: {
      type: String,
      default: '#E2E2E4',
    },
  },
};
</script>
