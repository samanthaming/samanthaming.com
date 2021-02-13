<template>
  <div class="pl-2 md:pl-5 lg:pl-0">
    <section-head class="mt-10 mb-6" text="Top Tidbits" />
    <ul class="flex justify-between space-x-4 scrollbar overflow-x-auto pb-3">
      <li v-for="tidbit in tidbits" :key="tidbit.slug" class="flex-shrink-0">
        <tidbit-block
          :title="tidbit.title"
          :path="tidbit.path"
          :image="tidbit.slug"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tidbits: {
      type: Array,
      required: true,
    },
  },
};
</script>
