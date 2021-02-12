<template>
  <picture>
    <source
      :srcSet="require(`~/assets/img/${img}.jpg?webp&size=300`)"
      type="image/webp"
    />
    <source
      :srcSet="require(`~/assets/img/${img}.jpg?resize&size=300`)"
      type="image/jpeg"
    />
    <img :src="require(`~/assets/img/${img}.jpg?resize&size=300`)" />
  </picture>
</template>

<script>
export default {
  props: {
    img: {
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
