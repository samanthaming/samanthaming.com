<template>
  <div>
    <div
      class="flex justify-center"
      :class="[
        $options.TW.SECTION_CONTAINER,
        $options.TW.SECTION_P,
        $options.TW.SECTION_P_DESKTOP,
      ]"
    >
      <div class="pt-16 md:pt-20 xl:pt-24">
        <div class="text-lg md:text-xl">
          <h1 class="page-title mb-10 md:mb-12 xl:mb-14 2xl:mb-16">Contact</h1>

          <div class="max-w-prose">
            <p class="text-xl leading-relaxed">
              Hello! Before sending me an email, please check out my
              <nuxt-link
                v-scroll-to="{ el: '#FAQ' }"
                :to="{ hash: 'faq' }"
                class="text-fuscia hover:underline"
              >
                faq
              </nuxt-link>
              first. And please note, I get a lot of emails, so it may take me a
              while to get back to you. But I love to hear from you, so please
              do reach out!
            </p>

            <p class="mt-5 text-center md:text-left">
              <span class="text-gray mr-0.5">
                <fa :icon="['fas', 'envelope']" />
              </span>
              <a
                :href="`mailto:${$options.CONTACT_DATA.email}`"
                class="text-fuscia hover:underline cursor-pointer"
              >
                {{ $options.CONTACT_DATA.email }}
              </a>
            </p>
          </div>

          <div class="text-center sm:text-left">
            <!-- <p class="mb-4">
              If you want to say hello! Best way to reach me is on social media
              👋 Please check out my <a>FAQ</a>
            </p>
            <div
              class="flex flex-col items-center space-y-4 xs:block xs:space-x-16 xs:space-y-0"
            >
              <a
                v-for="social in socialMedia"
                :key="social.icon"
                :href="social.path"
                class="text-fuscia hover:underline inline-flex items-center"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="">
                  <fa :icon="['fab', social.icon]" />
                </div>
                <div class="pl-3 font-head">{{ social.title }}</div>
              </a>
            </div> -->

            <hr class="border-gray-lighter my-10" />

            <div class="space-y-10 lg:space-y-0 lg:grid grid-cols-3">
              <div v-for="(issue, index) in $options.ISSUES_LIST" :key="index">
                <h3 class="mb-2">{{ issue.title }}</h3>
                <a
                  :href="issue.path"
                  class="text-fuscia hover:underline cursor-pointer font-head external-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {{ issue.pathTitle }}
                </a>
              </div>
            </div>

            <!-- <hr class="border-gray-lighter my-10" />

            <h2 class="text-xl md:text-2xl font-bold font-head mb-3">
              For all business inquiries, please email me 🤝
            </h2>
            <p>
              <a
                :href="`mailto:${$options.CONTACT_DATA.email}`"
                class="text-fuscia hover:underline cursor-pointer"
              >
                {{ $options.CONTACT_DATA.email }}
              </a>
            </p> -->

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
    <!-- FAQ -->
    <div id="FAQ"></div>
    <div class="bg-purple-white mt-12">
      <div
        class="max-w-7xl mx-auto pt-12 pb-20 px-4 divide-y-2 divide-ink-light sm:px-6 lg:py-16 lg:px-8 xl:pb-20"
      >
        <h2 class="text-3xl font-extrabold sm:text-4xl text-purple-black">
          Frequently asked questions
        </h2>
        <div class="mt-6">
          <dl class="space-y-8 divide-y divide-gray">
            <div
              v-for="(faq, index) in $options.FAQ"
              :key="index"
              class="pt-6 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt
                class="max-w-prose text-lg font-semibold text-ink md:col-span-5"
              >
                {{ faq.question }}
              </dt>
              <dd class="max-w-prose mt-3 md:mt-0 md:col-span-7">
                <p class="text-base text-ink" v-html="faq.answer"></p>
                <!-- <p class="text-base text-ink" v-html="faq.answer">
                  {{ faq.answer }}
                </p> -->
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <!-- BANNER -->
    <tidbit-scroll direction="left" background="orange" text="Top Tidbits" />
  </div>
</template>

<script>
import {
  SOCIAL_MEDIA_DATA,
  CONTACT_DATA,
  ROUTE_DATA,
  TW,
  routeMeta,
} from '~/lib';

const { uses, techstack } = ROUTE_DATA;

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

// TODO: run these through grammarly
const FAQ = [
  {
    question: 'I love your content, how can I better support your site?',
    answer:
      'Thank you so much for wanting to support my content! My goal is to knowledge share and encourage more people to get into tech. If you found my content helpful, please consider sharing it with a friend.<br><br>I do have ad support on the site, so if you want to chip in and help pay for my hosting fee. Please consider turing off ad block for my site 💛',
  },
  {
    question:
      'Do you accept advertisement, sponsored posts, or cross promotions?',
    answer:
      "Thank you for wanting to give me money 😂. But at this moment, I'm not accepting any sponsorships or partnerships.",
    // answer:
    //   "At this moment, I'm not accepting sponsored post. Although I would love to do a partnership for us to generate content that can add value to the community. Feel free to email me your proposal and we can discuss further!",
  },
  {
    question: 'Do you accept guest posts?',
    answer:
      'Thank you for wanting to contribute to my site. However, at this time I prefer to produce and host my own content.',
  },
  // {
  //   question: 'Can I recurit you to work at my company?',
  //   answer:
  //     "I'm so happy you would like me to join your team! Unfortuantely, I'm not currently looking for new opportunities.",
  // },
  {
    // TODO: Change this to consulting work
    question: 'Can I hire you for contract or consulting work?',
    answer:
      "Thank you for the opportunity! Unfortunately, working full time as a Frontend Engineer and maintaining this website consume all my time, so I don't have the capactiy to take on additional work.",
  },
  {
    question: 'What tools did you use to build your site?',
    answer: `You can find my techstack <a href="${techstack.path}" class="underline">here</a>.`,
  },
  {
    question: 'What tools did you use to make your Code Tidbits?',
    answer: `You can find all the tools I use <a href="${uses.path}" class="underline">here</a>.`,
  },
];

export default {
  ISSUES_LIST,
  FAQ,
  CONTACT_DATA,
  TW,
  head() {
    const { name, path } = this.$route;
    return routeMeta({ name, path });
  },
  computed: {
    socialMedia() {
      return [SOCIAL_MEDIA_DATA.instagram, SOCIAL_MEDIA_DATA.twitter];
    },
  },
};
</script>
