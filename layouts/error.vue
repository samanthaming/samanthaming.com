<template>
  <div
    class="font-head min-h-body flex items-center justify-center bg-ink-light"
  >
    <div class="text-center">
      <h1
        class="font-bold text-gray-darker leading-tight text-8xl sm:text-9xl xl:text-[10rem]"
      >
        404
      </h1>
      <p class="text-gray-dark leading-tight text-3xl md:text-5xl">
        Sorry, page not found
      </p>
      <div class="mt-12 md:mt-16 xl:mt-18">
        <nuxt-link
          to="/"
          class="inline-block uppercase border border-pink-70 text-xl sm:text-2xl text-pink-70 px-16 sm:px-20 py-5 hover:underline hover:text-pink-light hover:border-pink-light"
        >
          Go back
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
