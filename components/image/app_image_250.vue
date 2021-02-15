<template>
  <div v-lazy-container="{ selector: 'img' }">
    <img
      :data-src="require(`~/assets/img/${image}.jpg?resize&size=250`)"
      :data-loading="require(`~/assets/img/${image}.jpg?lqip`)"
      width="250"
      height="250"
      class="bg-gray-lighter"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
