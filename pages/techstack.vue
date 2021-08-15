<template>
  <favorite-layout :article="article" />
</template>

<script>
import { routeMeta } from '~/lib';

export default {
  async asyncData({ $content, redirect }) {
    try {
      const article = await $content('favorites', 'techstack').fetch();
      return {
        article,
      };
    } catch (error) {
      redirect('/');
    }
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
};
</script>
