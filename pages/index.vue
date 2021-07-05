<template>
  <div class="mt-8 xl:mt-10 2xl:mt-14">
    <div class="page-container-full">
      <!-- TOP -->
      <div
        class="xl:min-h-[302px] 2xl:min-h-[350px] grid grid-cols-none md:grid-cols-12 gap-y-8 xl:mx-5"
      >
        <!-- Right/Top -->
        <div
          class="md:col-span-6 lg:col-span-5 2xl:col-span-4 md:order-2 px-5 md:pl-7 lg:px-0 lg:pr-5 xl:pr-0"
        >
          <div class="max-w-lg mx-auto lg:mx-0">
            <h1
              class="md:mt-3 lg:mt-5 text-3xl xl:text-4xl leading-tight font-semibold font-head text-center md:text-left"
            >
              Hi, I'm <span class="bg-fuscia-50 text-white px-4">Samantha</span>
            </h1>
            <p
              class="text-lg xl:text-xl mt-5 font-light md:leading-normal lg:leading-relaxed xl:leading-relaxed"
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
          class="md:col-span-6 lg:col-span-7 2xl:col-span-8 md:order-1 lg:pr-8 xl:pr-14 2xl:pr-20"
        >
          <tidbit-feature />
        </div>
      </div>
    </div>
    <!-- TIDBITS -->
    <div class="max-w-screen-2xl mx-auto" :class="$options.SECTION_MARGIN_TOP">
      <section-head
        text="Top Tidbits"
        size="lg"
        color="orange"
        class="mb-4"
        to="tidbits"
      />
      <div class="xl:min-h-[286px] 2xl:min-h-[302px] xl:px-8 2xl:px-0">
        <tidbit-row-js />
      </div>
    </div>
    <!-- BLOG -->
    <div class="max-w-screen-2xl mx-auto" :class="$options.SECTION_MARGIN_TOP">
      <section-head
        text="Articles"
        size="lg"
        color="green"
        class="mb-9"
        to="blog"
      />
      <div
        :class="[
          $options.TW.SECTION_P_DESKTOP,
          $options.TW.HERO_BLOG_CONTAINER,
        ]"
      >
        <div :class="$options.TW.HERO_BLOG_LIST">
          <blog-feature-list has-border-first />
        </div>
        <div :class="$options.TW.HERO_BLOG_FEATURE">
          <blog-feature class="xl:pl-5" />
        </div>
      </div>
    </div>
    <!-- FAVS BANNER -->
    <div
      class="bg-green-lightest py-8 px-3 sm:px-8 md:px-0"
      :class="$options.SECTION_MARGIN_TOP"
    >
      <favorite-banner-list />
    </div>
    <!-- FEATURE COURSE -->
    <div class="max-w-screen-2xl mx-auto" :class="$options.SECTION_MARGIN_TOP">
      <section-head
        text="Courses"
        size="lg"
        color="blue"
        class="mb-5"
        to="courses"
      />
      <div class="pl-3" :class="$options.TW.SECTION_P_DESKTOP">
        <course-preview-flexbox30 :hide-header="true" />
      </div>
    </div>
    <!-- COURSES BANNER -->
    <div class="bg-blue-lighter py-14" :class="$options.SECTION_MARGIN_TOP">
      <div class="page-container">
        <course-card-list :hide-header="true" />
      </div>
    </div>
    <!-- COURSE DUAL -->
    <div
      class="max-w-screen-2xl mx-auto mt-12 md:mt-16 2xl:mt-20 px-3 md:px-4"
      :class="$options.TW.SECTION_P_DESKTOP"
    >
      <div
        class="grid xs:grid-cols-2 gap-8 xs:gap-6 sm:gap-12 lg:gap-14 xl:gap-20 2xl:gap-28"
      >
        <course-card-basics />
        <course-card-pictorials />
      </div>
    </div>
    <!-- SOCIAL BANNER -->
    <div
      class="bg-ink py-12 md:py-14"
      :class="[$options.SECTION_MARGIN_TOP, $options.TW.SECTION_P_DESKTOP]"
    >
      <div class="max-w-screen-2xl p-container">
        <social-banner-list />
      </div>
    </div>
    <!-- FOOTER -->
    <div
      class="mt-14 xl:mt-16 2xl:mt-20 mb-14 xs:mb-16 sm:mb-20 xl:mb-24 max-w-screen-2xl mx-auto"
    >
      <home-foot
        class="px-4 xs:px-3 sm:px-5 md:px-10"
        :class="$options.TW.SECTION_P_DESKTOP"
      />
    </div>
  </div>
</template>

<script>
import { TW } from '~/lib';

const SECTION_MARGIN_TOP = 'mt-10 sm:mt-12 2xl:mt-16';

export default {
  layout: 'home',
  TW,
  SECTION_MARGIN_TOP,
};
</script>
