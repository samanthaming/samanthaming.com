<template>
  <!-- "viewBox" is not a Vue attribute, it's a HTML non-hyphenated attribute
        https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox -->
  <!-- eslint-disable vue/attribute-hyphenation -->
  <content-loader
    v-bind="$attrs"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :primary-color="primaryColor"
  >
    <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

// TODO: problematic for smaller sizes, it's not representative. Maybe it's better just to use loading-components

export default {
  components: {
    ContentLoader,
  },
  inheritAttrs: false,
  props: {
    width: {
      type: [Number, String],
      required: false,
      default: '1360',
    },
    height: {
      type: [Number, String],
      required: false,
      default: '620',
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 1360 620',
    },
    primaryColor: {
      type: String,
      default: '#E2E2E4',
      required: false,
    },
  },
};
</script>
