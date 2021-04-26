<template>
  <div>
    <course-layout>
      <course-tidbits :tidbits="tidbits" :order="true" />
    </course-layout>
  </div>
</template>

<script>
import { CODETIDBITS30_DATA } from '~/lib';
export default {
  computed: {
    tidbits() {
      return Object.values(CODETIDBITS30_DATA);
    },
  },
};
</script>
