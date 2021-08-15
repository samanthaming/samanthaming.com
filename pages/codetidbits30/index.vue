<template>
  <div>
    <course-layout>
      <course-tidbits :tidbits="tidbits" :order="true" />
    </course-layout>
  </div>
</template>

<script>
import { CODETIDBITS30_DATA, routeMeta } from '~/lib';

export default {
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
  computed: {
    tidbits() {
      return Object.values(CODETIDBITS30_DATA);
    },
  },
};
</script>
