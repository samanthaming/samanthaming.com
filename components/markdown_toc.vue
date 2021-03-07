<template>
  <div
    v-if="links"
    class="sm-markdown-toc border border-indigo bg-blue-lightest rounded p-3 mt-8 lg:hidden text-sm"
  >
    <div class="text-ink uppercase tracking-wide text-xs font-semibold mb-3">
      On this page
    </div>
    <ul class="">
      <li
        v-for="link of links"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`" class="text-blue">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$parent.document.toc || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.sm-markdown-toc {
  ul {
    @apply m-0 space-y-1.5;
  }

  li {
    @apply p-0 m-0;
  }

  li::before {
    content: none;
  }

  .toc3 {
    @apply pl-3;
  }

  a {
    @apply text-indigo;
  }
}
</style>
