<template>
  <picture>
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=250&format=webp`)"
      type="image/webp"
    />
    <source
      :srcSet="require(`~/assets/img/${image}.jpg?resize&size=250`)"
      type="image/jpeg"
    />
    <img :src="require(`~/assets/img/${image}.jpg?resize&size=250`)" />
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
