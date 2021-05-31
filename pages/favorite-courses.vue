<template>
  <favorite-layout :article="article" />
</template>

<script>
export default {
  async asyncData({ $content, redirect }) {
    try {
      const article = await $content('favorites', 'courses').fetch();
      return {
        article,
      };
    } catch (error) {
      redirect('/');
    }
  },
};
</script>
