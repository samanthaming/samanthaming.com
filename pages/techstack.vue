<template>
  <favorite-layout :article="article" />
</template>

<script>
import { routeMeta, FLASH_404_PAGE } from '~/lib';

export default {
  async asyncData({ $content, redirect, store }) {
    try {
      const article = await $content('favorites', 'techstack').fetch();
      return {
        article,
      };
    } catch (error) {
      store.dispatch('app/setFlash', { message: FLASH_404_PAGE });
      redirect('/');
    }
  },
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
};
</script>
