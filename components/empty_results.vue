<template>
  <div class="max-w-screen-sm lg:max-w-screen-lg mx-auto text-center">
    <a
      class="group block w-full border-2 border-gray border-dashed rounded-lg p-12 text-center hover:border-fuscia bg-gray-lightest"
      :href="$route.path"
      @click.prevent="onClick"
    >
      <p class="text-lg text-ink-light">
        No results found
        <span v-if="tagQuery"> for &quot;{{ tagQuery }}&quot; </span>
      </p>
      <p
        class="text-xl mt-8 text-fuscia-50 underline font-head group-hover:text-fuscia"
      >
        {{ anchorText }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    anchorText() {
      return `Reload ${this.text}`;
    },
    tagQuery() {
      return this.$route.query?.tag;
    },
  },
  methods: {
    onClick() {
      const hash = `#${this.$route.name}`;

      this.$scrollTo(hash);
      this.$router.push({
        name,
      });
    },
  },
};
</script>
