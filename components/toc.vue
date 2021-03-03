<template>
  <ul class="">
    <scrollactive
      tag="ul"
      highlight-first-item
      active-class="is-active"
      :offset="50"
      :scroll-offset="0"
      :duration="0"
      class="space-y-2"
    >
      <li
        v-for="link of links"
        :key="link.id"
        class=""
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink
          :to="`#${link.id}`"
          class="scrollactive-item text-indigo-dark hover:underline inline-block leading-none text-sm"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </scrollactive>
  </ul>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    links() {
      return this.toc.length > 0 ? this.toc : this.$parent.article.toc;
    },
  },
  methods: {
    scrollTo(hash) {
      const { name } = this.$route;
      this.$router.push({ name, hash: `#${hash}` });
    },
  },
};
</script>

<style scoped>
.scrollactive-item.is-active {
  @apply font-semibold text-indigo;
}
</style>
