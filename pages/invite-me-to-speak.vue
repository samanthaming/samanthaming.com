<template>
  <div class="mb-10">
    <!-- TOP -->
    <div class="bg-ink">
      <div class="mx-auto max-w-screen-xl md:grid grid-cols-10 gap-x-10">
        <!-- Right -->
        <div class="col-span-5">
          <div class="max-w-2xl">
            <app-image
              dir="app"
              img="samantha-ming-speaking"
              bg-class="bg-ink-50"
              width="771"
              height="367"
            />
          </div>
        </div>
        <!-- Left -->
        <div class="col-span-5 flex items-center justify-center">
          <div class="w-full md:w-2/3 lg:w-1/2">
            <a
              :href="`mailto:${$options.CONTACT_DATA.email}?subject=Invitation to speak`"
              class="text-lg xs:text-xl md:text-lg lg:text-xl w-full md:rounded-full font-medium font-head block text-center py-3 border border-transparent shadow-sm text-white bg-indigo hover:text-indigo-darker hover:bg-indigo-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo md:transform hover:scale-110 transition-transform duration-300"
            >
              Invite me to speak!
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- BOTTOM -->
    <div
      class="mt-14"
      :class="[$options.TW.SECTION_P_DESKTOP, $options.TW.SECTION_P]"
    >
      <!-- PARAGRAPH -->
      <div class="max-w-screen-md mx-auto">
        <div class="sm-markdown sm-markdown-text-1">
          <p>
            I love sharing my experience and insights. I've spoken at high
            schools, colleges, and tech companies. From my experience on how I
            grew my personal brand to 20k+ within a year OR how I switched
            careers into tech without a CS degree OR how kindness has made me
            more successful. My goal is to bring value, motivate action, and
            inspire kindness in your audience.
          </p>
        </div>

        <a
          :href="$options.CONTACT_DATA.pressKit"
          rel="noopener noreferrer"
          target="_blank"
          class="text-lg font-head mt-10 font-semibold flex items-center justify-center px-6 py-2.5 border border-indigo-light shadow-sm text-indigo bg-white hover:text-indigo-darker hover:bg-indigo-light hover:border-indigo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo transform hover:-translate-y-2 transition-transform duration-200"
        >
          Press Kit
        </a>
      </div>
      <hr class="border-gray-lighter my-16" />
      <!-- TALK LIST -->
      <div
        :class="[
          $options.TW.SECTION_CONTAINER_WIDE,
          $options.TW.SECTION_P,
          $options.TW.SECTION_P_DESKTOP,
        ]"
      >
        <ul
          class="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 xl:gap-x-10 lg:gap-y-16"
        >
          <li
            v-for="talk in talks"
            :key="talk.slug"
            class="border-b border-gray-lighter sm:border-0 grid grid-cols-10 gap-x-4 sm:block py-4 sm:p-0 sm:shadow-md"
          >
            <div class="col-span-4">
              <app-image
                dir="talks"
                :img="talk.slug"
                width="492"
                height="369"
                :alt="`Samantha Ming giving a presentation at ${talk.event}`"
              />
            </div>
            <div class="col-span-6 sm:px-5 sm:pt-5">
              <h2 class="text-base font-medium leading-snug">
                {{ talk.name }}
              </h2>
            </div>
            <div class="col-span-full sm:px-5 sm:pb-5">
              <p class="mt-5 text-sm text-ink-50">
                {{ talk.description }}
              </p>
              <div
                class="flex space-x-4 sm:space-x-0 sm:block items-center mt-5 text-ink-lighter italic font-light"
              >
                <small class="sm:mt-4">
                  <span class="mr-1 text-ink-lightest">
                    <fa :icon="['fas', 'map-marker-alt']" />
                  </span>
                  <span>{{ talk.event }}</span>
                </small>
                <small class="sm:mt-0.5 block">
                  <span class="mr-1 text-ink-lightest">
                    <fa :icon="['far', 'calendar-alt']" />
                  </span>
                  <span>{{ talk.country }} </span>
                  <span>{{ talk.year }}</span>
                </small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- BANNER -->
    <div
      class="bg-indigo-light my-20 py-20 flex flex-col items-center justify-center"
    >
      <div>
        <a
          :href="`mailto:${$options.CONTACT_DATA.email}?subject=Invitation to speak`"
          class="text-lg md:text-xl xl:text-2xl rounded-full font-medium font-head text-center py-3 px-16 md:px-20 border border-transparent shadow-sm text-white bg-indigo hover:bg-indigo-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo md:transform hover:scale-110 transition-transform duration-300"
        >
          Invite me to speak!
        </a>
      </div>
      <div class="mt-5">
        <a
          :href="$options.CONTACT_DATA.pressKit"
          rel="noopener noreferrer"
          target="_blank"
          class="font-head text-md lg:text-lg border-b border-dotted hove:border-solid hover:text-fuscia-dark"
        >
          Press Kit
        </a>
      </div>
    </div>
    <!-- SCROLL -->
    <div
      :class="[
        $options.TW.SECTION_CONTAINER_WIDE,
        $options.TW.SECTION_PL,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <blog-scroll />
    </div>
  </div>
</template>

<script>
import { CONTACT_DATA, TALK_DATA, TW, routeMeta } from '~/lib';

export default {
  CONTACT_DATA,
  TW,
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
  computed: {
    talks() {
      return Object.values(TALK_DATA).reverse();
    },
  },
};
</script>
