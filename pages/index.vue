<template>
  <div class="mt-8 lg:mt-10 xl:mt-14">
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
          to="tidbits"
        />
        <tidbit-row-js />
      </div>
      <!-- BLOG -->
      <div class="mt-16">
        <section-head
          text="Articles"
          size="lg"
          color="green"
          class="mb-9"
          to="blog"
        />
        <div class="grid gap-x-10 grid-cols-1 lg:grid-cols-12">
          <div class="col-span-6 order-2 lg:order-1">
            <blog-feature-list />
          </div>
          <div class="col-span-6 order-1 lg:order-2 mb-4 lg:mb-0">
            <blog-feature />
          </div>
        </div>
      </div>
    </div>
    <!-- FAVS BANNER -->
    <div class="bg-green-lightest mt-16 py-8 px-3 sm:px-8 md:px-0">
      <favorite-banner-list />
    </div>
    <!-- FEATURE COURSE -->
    <div class="page-container mt-16">
      <section-head
        text="Courses"
        size="lg"
        color="blue"
        class="mb-5"
        to="courses"
      />
      <course-preview-flexbox30 :hide-header="true" />
    </div>
    <!-- COURSES BANNER -->
    <div class="bg-blue-lighter mt-16 py-14">
      <div class="page-container">
        <course-card-list :hide-header="true" />
      </div>
    </div>
    <!-- COURSE DUAL -->
    <div class="page-container mt-20">
      <div
        class="grid md:grid-cols-2 gap-16 md:gap-12 lg:gap-14 xl:gap-20 2xl:gap-28"
      >
        <course-card-basics />
        <course-card-pictorials />
      </div>
    </div>
    <!-- SOCIAL BANNER -->
    <div class="bg-ink mt-16 py-12 md:py-14">
      <div class="max-w-screen-2xl p-container">
        <social-banner-list />
      </div>
    </div>
    <!-- FOOTER -->
    <div
      class="mt-20 mb-14 xs:mb-16 sm:mb-20 xl:mb-24 max-w-screen-2xl mx-auto"
    >
      <home-foot />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
};
</script>
