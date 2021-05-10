<template>
  <div class="page-container mt-12 lg:mt-20 mb-16 md:mb-20 lg:mb-24">
    <div class="lg:grid grid-cols-12 md:px-6 lg:px-5 2xl:px-0">
      <!-- LEFT -->
      <section class="col-span-9 md:pr-10">
        <article class="md:max-w-4xl">
          <h1 class="page-title mb-10 md:mb-12 xl:mb-14 2xl:mb-16">About Me</h1>
          <div class="sm-markdown sm-markdown-text-3 -sm-markdown-leading-2">
            <p>
              👋 I'm Samantha Ming, a Front End Developer from Canada. I love to
              learn and discover all things JavaScript, HTML, and CSS. You can
              catch my code tidbits on
              <a
                :href="$options.SOCIAL_MEDIA_DATA.instagram.path"
                rel="noopener noreferrer"
                target="_blank"
                >Instagram</a
              >
              and
              <a
                :href="$options.SOCIAL_MEDIA_DATA.twitter.path"
                rel="noopener noreferrer"
                target="_blank"
                >Twitter</a
              >
              .
            </p>
          </div>

          <div class="sm-markdown sm-markdown-scoped sm-markdown-text-1">
            <div class="max-w-lg markdown-image">
              <app-image dir="app" name="samantha-ming" aspect-ratio="4x3" />
            </div>

            <p>
              So you're here to learn more about me. Excellent! I love talking
              about myself 😝. How did I get into tech? I love learning new
              things. Naturally, tech was the perfect place to be. It’s always
              changing and always moving forward. First, there was jQuery, then
              Angular, then React, and now we have Vue.Js. Holy moly! Some
              people might find this overwhelming but I love it. You’ll never
              run out of things to learn. #StudentMindset
            </p>

            <p>
              Currently, I'm working as a Frontend Engineer at GitLab where I
              develop features and make improvements to the Source Code
              Management product.
            </p>

            <h2>
              <nuxt-link :to="$options.ROUTE_DATA.tidbits.path">
                Code Tidbits
              </nuxt-link>
            </h2>

            <p>
              Code Tidbits are byte size snippets that is info-nutritious for
              all developers. It's like a supplement you take to keep that
              programming brain sharp. I share new tidbit every week on my
              <a
                :href="$options.SOCIAL_MEDIA_DATA.instagram.path"
                rel="noopener noreferrer"
                target="_blank"
                >Instagram</a
              >
              and
              <a
                :href="$options.SOCIAL_MEDIA_DATA.twitter.path"
                rel="noopener noreferrer"
                target="_blank"
                >Twitter</a
              >
              .
            </p>

            <h2>
              <nuxt-link :to="$options.ROUTE_DATA.flexbox30.path">
                Flexbox30
              </nuxt-link>
            </h2>

            <p>
              This is the first courses I created. Learn Flexbox in 30 days. It
              was a big success, amassing over 850+ stars on GitHub. I plan on
              releasing more courses. So stay tuned. View the
              <nuxt-link :to="$options.ROUTE_DATA.flexbox30.path">
                FREE course
              </nuxt-link>
              now!
            </p>

            <h2>
              <nuxt-link :to="$options.ROUTE_DATA.talk.path">
                Invite me to speak
              </nuxt-link>
            </h2>

            <p>
              I love sharing what I've learned. I've spoken at high schools,
              colleges, and tech companies. From my experience on how I grew my
              personal brand to 20k+ within a year OR how I switched careers
              into tech without a CS degree OR how kindness has made me more
              successful. My goal is to bring value, motivate action, and
              inspire kindness in your audience! Learn more about my
              <nuxt-link to="/"> previous speaking events </nuxt-link> and
              <nuxt-link to="/"> invite me to speak </nuxt-link>!
            </p>

            <h2>
              <nuxt-link :to="$options.ROUTE_DATA.contact.path">
                Questions
              </nuxt-link>
            </h2>

            <p>
              Got a question for me or would like to get in touch,
              <nuxt-link :to="$options.ROUTE_DATA.contact.path">
                contact me </nuxt-link
              >!
            </p>
          </div>
        </article>
      </section>
      <!-- RIGHT -->
      <div class="col-span-3 mt-10 lg:mt-0">
        <div class="sticky top-20">
          <side-list :list="sideLinks" color="orchid" size="md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIAL_MEDIA_DATA, ROUTE_DATA } from '~/lib';

export default {
  SOCIAL_MEDIA_DATA,
  ROUTE_DATA,
  computed: {
    sideLinks() {
      const { tidbits, blog, flexbox30, courses, talk, contact } = ROUTE_DATA;
      return [tidbits, blog, flexbox30, courses, talk, contact];
    },
  },
};
</script>

<style scoped>
.sm-markdown.sm-markdown-scoped h2 > a {
  @apply border-b border-dotted pb-1 text-ink-50 inline-flex items-center hover:no-underline hover:text-fuscia;
}

.sm-markdown.sm-markdown-scoped h2 > a::after {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f0da';

  @apply text-2xl pl-2 pt-1;
}
</style>
