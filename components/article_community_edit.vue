<template>
  <div
    class="mt-8 text-gray-dark text-sm italic px-5 py-2 border rounded border-gray-lighter"
  >
    <a
      class="hover:text-ink-50 cursor-pointer font-light"
      :to="link"
      target="_blank"
    >
      <strong class="font-medium">Spot an error?</strong>
      <span> Edit this post</span>
      <fa :icon="['far', 'edit']" />
    </a>
  </div>
</template>

<script>
import { communityEditLink } from '~/lib';

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    link() {
      return communityEditLink(this.path);
    },
  },
};
</script>
