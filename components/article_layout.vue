<template>
  <div>
    <!-- TOP -->
    <div
      class="w-full max-w-screen-3xl mx-auto mt-10 lg:px-4 xl:pl:5 xl:pr-2 2xl:px-10"
    >
      <div class="lg:grid grid-cols-12">
        <!-- LEFT -->
        <div class="hidden lg:block col-span-3 xl:col-span-2">
          <div v-if="hasToc" class="sticky top-20 overflow-y-auto">
            <h5
              class="text-ink uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"
            >
              On this page
            </h5>
            <toc :toc="article.toc" />
          </div>
        </div>
        <!-- CENTER -->
        <div
          class="medium-zoom-container col-span-9 xl:col-span-7 mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[800px]"
        >
          <article-content-layout
            class="px-3 sm:px-5 md:px-3 lg:pl-8 xl:px-9 2xl:px-0"
            :article="article"
            :next="next"
            :category="category"
            :related="related"
          >
            <!-- Passing down slot reference > https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component -->
            <template
              v-for="(_, name) in $scopedSlots"
              :slot="name"
              slot-scope="slotData"
            >
              <slot :name="name" v-bind="slotData" />
            </template>
          </article-content-layout>
        </div>
        <!-- RIGHT -->
        <div class="hidden xl:block xl:col-span-3">
          <slot name="right">
            <tidbit-side
              list-class="grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3"
            />
            <blog-side-list
              class="mt-8"
              text-class="text-sm 2xl:text-base"
              :border="true"
            />
            <course-side-list class="mt-10" breakpoint="sm" />
          </slot>
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <div class="mx-auto mt-16 xl:mt-20 2xl:mt-24">
      <slot name="bottom">
        <!-- TODO: Add loading? -->
      </slot>
    </div>
  </div>
</template>

<script>
import { mediumZoomMixin } from '../mixins/medium_zoom.mixin';

export default {
  mixins: [mediumZoomMixin],
  props: {
    article: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      default: null,
      // Can't set "required: true" b/c next can be null
    },
    related: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    hasToc() {
      return this.article.toc?.length;
    },
  },
};
</script>
