<template>
  <div class="min-h-screen" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <top-banner class="bg-red-lighter text-red-darker text-sm font-light">
      🔥 NEW Code Tidbit Every Week 🔥
    </top-banner>
    <header class="sticky top-0 z-40 w-full">
      <navbar />
    </header>
    <main class="min-h-screen">
      <Nuxt />
    </main>
    <home-foot></home-foot>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('app', ['toggleSidebar']),
    // Side swipe
    // https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/theme-default/layouts/Layout.vue
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
