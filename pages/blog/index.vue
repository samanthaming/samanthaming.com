<template>
  <div class="mt-8 lg:mt-10">
    <div class="xl:container mx-auto px-2 sm:px-3 lg:px-2 xl:px-0">
      <div class="grid gap-x-10 grid-cols-1 lg:grid-cols-12">
        <div class="col-span-6 order-2 lg:order-1">
          <blog-feature-list />
        </div>
        <div class="col-span-6 order-1 lg:order-2">
          <blog-feature />
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <filter-bar color="green" type="blog" class="mt-8" />
    <div class="xl:container mx-auto mt-10 px-2 sm:px-3 lg:px-2 xl:px-0">
      <div class="md:grid grid-cols-10 gap-x-10">
        <!-- LEFT LIST -->
        <div class="col-span-6">
          <loading-component v-if="$fetchState.pending" />
          <ul v-else class="space-y-3 divide-y divide-gray-lighter">
            <li
              v-for="blog in blogs"
              :key="blog.slug"
              class="grid grid-cols-10 gap-x-3 pt-3"
            >
              <div class="col-span-3 md:col-span-4 lg:col-span-2 group">
                <nuxt-link
                  :to="blog.path"
                  class="transform duration-100 block group-hover:scale-105"
                >
                  <app-image dir="blog" :img="blog.slug" />
                </nuxt-link>
              </div>
              <div class="col-span-7 md:col-span-6 lg:col-span-8">
                <div class="max-w-prose">
                  <nuxt-link :to="blog.path" class="hover:text-fuscia">
                    <h4
                      class="font-body font-semibold leading-none text-sm sm:text-base lg:text-lg mt-1"
                    >
                      {{ blog.title }}
                    </h4>
                  </nuxt-link>
                  <p
                    class="text-xs sm:text-sm lg:text-base mt-2 text-ink-lighter font-body"
                  >
                    {{ blog.description }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- RIGHT SIDE -->
        <div class="col-span-4 mt-10 md:mt-0">
          <tidbit-side />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    blogs: [],
  }),
  async fetch() {
    const blogs = await this.$content('blog')
      .only(['slug', 'path', 'title', 'description'])
      .limit(5)
      .fetch();

    this.blogs = blogs;
  },
};
</script>
