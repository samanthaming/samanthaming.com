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
- [FEATURE] Add RSS feed https://github.com/nuxt-community/feed-module
- [IMPROVE] 404 page > https://tailwindui.com/components/marketing/feedback/404-pages

## Ready

- [NEW] office hour page
- [IMPROVE] consider adding min-height on pages to solve the jump. The loading component height only solves when navigate programatically. For initial load (ssr), the jump will still happen. Also, consider moving the section-head to the page vue files (instead of components) b/c all vue components outside of pages dir won't load right away even if static.
- [REFACTOR] create shared folder.
- [IMPROVE] Add FAQ to footer (hash)
- [FEATURE] calculate article length and divide space
- [FEATURE] add custom image meta from article and meta data
- [IMPROVE] update meta description

## Next

- Add affliate links
- [CHORE] Fix "FIXME" items and address "TODO"
- add contact links
- pictorials: add block code

## Doing

- Prepare submodule split
- Test out digital ocean
- Update article edit link
- Hide current blog from blog banner and side blog
