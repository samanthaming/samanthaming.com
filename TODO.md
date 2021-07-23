# TODO

- [FIX] add loading component for any component using fetch
- [FEATURE] grey background for avatar when loading
- [FEATURE] if user has loaded entire tidbits, when navigating back
  to tidbits, it should load all of them. Or have lazy loading.
- [IMPROVE] Refactor to GET request for caching, once this issue has been resolved > https://github.com/nuxt/content/issues/664
- [SPIKE] Remove open sidebar in bigger screens
- [FIX] if using duration, need to make sure `transition` is included
- Add flash whenever there's a redirect, so use know it's being redirected and something is wrong.
- [IMPROVE] blog page load some list to be bigger image, so not as monotonous
- [IMPROVE] update recent article use bullet list loading > https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/BulletList.js
- [REFACTOR] rename tidbit_scroll to tidibt_scroll_banner, same for blog. Create scroll shared component.
- [IMPROVE] could we use this to improve filter_bar? > https://nuxtjs.org/docs/2.x/features/data-fetching#listening-to-query-string-changes
- [IMPROVE] Use DOMPurify for v-html instances > https://github.com/cure53/DOMPurify
- [REFACTOR] Namespace lib variables, similar to TW

## Ready

- pictorials: add block code
- Flash message
- office hour page
- Fix "FIXME" items
- [IMPROVE] consider adding min-height on pages to solve the jump. The loading component height only solves when navigate programatically. For initial load (ssr), the jump will still happen. Also, consider moving the section-head to the page vue files (instead of components) b/c all vue components outside of pages dir won't load right away even if static.
- [REFACTOR] create shared folder.
- [IMPROVE] Add FAQ to footer (hash)

## Next

- add rest of tidbits
- Implement https://www.joshwcomeau.com/blog/how-i-built-my-blog/
- remove loading? for SPA navigation?
- Remove all "[[toc]]" from markdown files
- Add favicon or site icon
- Add section head size to account for custom. ie. lesson layout (text is too small in mobile)

## Doing

- add side course to lesson slug
