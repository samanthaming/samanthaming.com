<template>
  <div class="page-container min-h-body flex items-center justify-center">
    <div class="py-16 md:py-20 lg:py-0">
      <div class="text-lg md:text-xl">
        <h1 class="page-title mb-10 md:mb-12 xl:mb-14 2xl:mb-16">Contact</h1>

        <div class="text-center sm:text-left">
          <p class="mb-4">
            If you want to say hello! Best way to reach me is on social media 👋
          </p>
          <div
            class="flex flex-col items-center space-y-4 xs:block xs:space-x-16 xs:space-y-0"
          >
            <a
              v-for="social in socialMedia"
              :key="social.icon"
              :href="social.path"
              class="text-fuscia hover:underline inline-flex items-center"
            >
              <div class="">
                <fa :icon="['fab', social.icon]" />
              </div>
              <div class="pl-3 font-head">{{ social.title }}</div>
            </a>
          </div>

          <hr class="border-gray-lighter my-10" />

          <div class="space-y-10 lg:space-y-0 lg:grid grid-cols-3">
            <div v-for="(issue, index) in $options.ISSUES_LIST" :key="index">
              <h3 class="mb-2">{{ issue.title }}</h3>
              <a
                :href="issue.path"
                class="text-fuscia hover:underline cursor-pointer font-head"
                rel="noopener noreferrer"
                target="_blank"
              >
                {{ issue.pathTitle }}
              </a>
            </div>
          </div>

          <hr class="border-gray-lighter my-10" />

          <h2 class="text-xl md:text-2xl font-bold font-head mb-2">
            For all business inquiries, please email me 🤝
          </h2>
          <p>
            <a
              :href="`mailto:${$options.CONTACT_DATA.email}`"
              class="text-fuscia hover:underline cursor-pointer"
            >
              {{ $options.CONTACT_DATA.email }}
            </a>
          </p>

          <hr class="border-gray-lighter my-12" />

          <div>
            <a
              :href="$options.CONTACT_DATA.pressKit"
              class="inline-flex items-center px-10 py-2 border border-gray shadow-sm text-base rounded-full text-ink-lighter bg-white hover:text-fuscia hover:border-fuscia focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:-translate-y-1 hover:scale-110 transition-transform duration-200 ease-in"
              rel="noopener noreferrer"
              target="_blank"
            >
              Press Kit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIAL_MEDIA_DATA, CONTACT_DATA } from '~/lib';

const ISSUES_LIST = [
  {
    title: 'Spot a bug on the site?',
    pathTitle: 'Submit issue',
    path: '',
  },
  {
    title: 'Can the site be improved?',
    pathTitle: 'Request feature ',
    path: '',
  },
  {
    title: 'Got a topic you want me to cover?',
    pathTitle: 'Suggest content',
    path: '',
  },
];

export default {
  ISSUES_LIST,
  CONTACT_DATA,
  computed: {
    socialMedia() {
      return [SOCIAL_MEDIA_DATA.instagram, SOCIAL_MEDIA_DATA.twitter];
    },
  },
};
</script>
