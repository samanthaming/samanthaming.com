<template>
  <div class="flex items-center text-ink-light">
    <div>
      <img
        class="inline-block h-10 w-10 lg:w-12 lg:h-12 rounded-full"
        src="~/assets/img/app/samantha_ming_tb.jpg"
        alt="Samantha Ming thumbnail"
      />
    </div>
    <div class="ml-2 lg:ml-3">
      <div class="font-medium text-sm sm:text-base lg:text-lg">
        Samantha Ming
      </div>
      <div class="flex text-sm lg:text-base">
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
      return dayjs(this.updatedAt).format('MMM D, YYYY');
    },
  },
};
</script>
