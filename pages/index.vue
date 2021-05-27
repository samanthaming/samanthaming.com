<template>
  <div class="mt-8 lg:mt-10 xl:mt-14 mb-20">
    <div class="page-container-full">
      <!-- TOP -->
      <div class="grid grid-cols-none lg:grid-cols-12 gap-y-8 xl:mx-5">
        <!-- Right/Top -->
        <div
          class="lg:col-span-5 2xl:col-span-4 lg:order-2 px-5 lg:px-0 lg:pr-5 xl:pr-0"
        >
          <div class="max-w-lg mx-auto lg:mx-0">
            <h1
              class="text-3xl xl:text-4xl leading-tight font-semibold font-head mt-3"
            >
              Hi, I'm <span class="bg-fuscia-50 text-white px-4">Samantha</span>
            </h1>
            <p
              class="text-xl lg:text-lg xl:text-xl mt-5 font-light leading-relaxed lg:leading-relaxed xl:leading-relaxed"
            >
              I'm a Front End Developer who shares programming goodness with the
              community
              <span class="text-fuscia-50 ml-1">❤</span>
            </p>
            <ul class="flex mt-6 text-gray-darker justify-between xl:w-3/4">
              <li>#JavaScript</li>
              <li>#HTML</li>
              <li>#CSS</li>
              <li>#Vue</li>
            </ul>
          </div>
        </div>
        <!-- Left/Bottom -->
        <div
          class="lg:col-span-7 2xl:col-span-8 lg:order-1 lg:pr-8 xl:pr-14 2xl:pr-20"
        >
          <tidbit-feature />
        </div>
      </div>
    </div>
    <div class="page-container">
      <!-- TIDBITS -->
      <div class="mt-16">
        <section-head
          text="Top Tidbits"
          size="lg"
          color="orange"
          class="mb-4"
        />
        <tidbit-row-js />
      </div>
      <!-- BLOG -->
      <div class="mt-16">
        <section-head text="Articles" size="lg" color="green" class="mb-9" />
        <div class="grid gap-x-10 grid-cols-1 lg:grid-cols-12">
          <div class="col-span-6 order-2 lg:order-1">
            <blog-feature-list />
          </div>
          <div class="col-span-6 order-1 lg:order-2 mb-4 lg:mb-0">
            <blog-feature />
          </div>
        </div>
      </div>
      <!-- COURSES -->
      <div class="mt-16">
        <section-head text="Courses" size="lg" color="blue" class="mb-5" />
        <course-preview-flexbox30 :hide-header="true" />
      </div>
    </div>
    <!-- Course Banner -->
    <div class="bg-blue-lighter mt-16 py-14">
      <div class="page-container">
        <course-card-list :hide-header="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
};
</script>
