<template>
  <picture>
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=400&format=webp`)"
      type="image/webp"
    />
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=400`)"
      type="image/jpeg"
    />
    <img :src="require(`~/assets/img/${image}.jpg?resize&size=400`)" />
  </picture>
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

<style scoped>
img[lazy='loading'] {
  filter: blur(15px);
  width: 400px;
  height: 400px;
}
</style>
