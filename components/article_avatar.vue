<template>
  <div class="flex items-center text-ink-light">
    <div>
      <img
        class="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full"
        src="~/assets/img/app/samantha_ming_tb.jpg"
        alt="Samantha Ming thumbnail"
      />
    </div>
    <div class="ml-2 lg:ml-3">
      <div class="font-medium text-xs lg:text-sm">Samantha Ming</div>
      <div class="flex text-2xs lg:text-xs space-x-2">
        <div>Updated {{ updatedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    updatedAt: {
      type: String,
      required: true,
    },
  },
  computed: {
    updatedDate() {
      return dayjs(this.updatedAt).format('MMM D YYYY');
    },
  },
};
</script>
