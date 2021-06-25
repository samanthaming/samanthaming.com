<template>
  <div>
    <scrollactive
      tag="ul"
      highlight-first-item
      active-class="is-active"
      :offset="50"
      :scroll-offset="0"
      :duration="0"
      class="space-y-3"
    >
      <li
        v-for="link of links"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink
          :to="`#${link.id}`"
          class="scrollactive-item text-ink-lighter hover:underline leading-tight text-sm"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </scrollactive>
  </div>
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

.toc3 {
  @apply leading-none ml-3.5;
}

.toc3::marker {
  content: '◦ ';

  @apply text-ink-lighter;
}

li.toc2 ~ li.toc3 {
  @apply my-3;
}

li.toc2 + li.toc3 {
  @apply mt-2;
}

li.toc3 + li.toc2 {
  @apply mt-3.5;
}
</style>
