<template>
  <div
    class="cursor-pointer mr-2 py-3 pl-6 pr-5 xs:pr-6"
    @click="$emit('click')"
  >
    <svg
      class="icon w-6 h-6 text-gray-light"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
      />
    </svg>
  </div>
</template>
