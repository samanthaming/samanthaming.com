<template>
  <ul>
    <scrollactive
      tag="ul"
      highlight-first-item
      active-class="is-active"
      :offset="50"
      :scroll-offset="0"
      :duration="0"
    >
      <li
        v-for="link of links"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink
          :to="`#${link.id}`"
          class="scrollactive-item text-ink-lighter hover:underline inline-block leading-none text-sm"
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
  @apply font-medium text-indigo;
}

.toc2 {
  @apply py-2;
}

.toc3 {
  @apply pl-4 py-0.5;
}

li.toc3 + li.toc2 {
  @apply mt-1;
}

li.toc2 + li.toc3 {
  @apply -mt-1;
}

a::before {
  display: block;
  content: attr(title);
  font-weight: bold;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
