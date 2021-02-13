<template>
  <picture>
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=300&format=webp`)"
      type="image/webp"
    />
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=300`)"
      type="image/jpeg"
    />
    <img :src="require(`~/assets/img/${image}.jpg?resize&size=300`)" />
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
  width: 300px;
  height: 300px;
}
</style>
