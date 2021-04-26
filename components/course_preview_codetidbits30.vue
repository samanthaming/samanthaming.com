<template>
  <div>
    <course-preview
      :course="$options.CODETIDBITS_COURSE_DATA"
      :lessons="tidbits"
      :order="true"
    />
  </div>
</template>

<script>
import { COURSES_DATA, CODETIDBITS30_DATA } from '~/lib';

const { codetidbits30: CODETIDBITS_COURSE_DATA } = COURSES_DATA;

export default {
  CODETIDBITS_COURSE_DATA,
  computed: {
    tidbits() {
      const tidbits = Object.values(CODETIDBITS30_DATA);
      return tidbits.slice(0, 6);
    },
  },
};
</script>
