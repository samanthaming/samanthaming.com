<template>
  <div>
    <page-layout></page-layout>
    <div
      class="bg-gray-lighter text-gray-dark text-sm h-14 pl-10 flex items-center font-head"
    >
      <span
        >&copy; Copyright {{ new Date().getFullYear() }}. Samantha Ming. All
        Rights Reserved.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  // Must provide component name for custom layout
  // https://stackoverflow.com/questions/63981989/how-to-fix-invalid-component-name-when-changing-page-with-custom-layout-in-nux
  name: 'Home',
};
</script>
