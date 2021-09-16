# TODO

- [FIX] add loading component for any component using fetch
- [FEATURE] grey background for avatar when loading
- [FEATURE] if user has loaded entire tidbits, when navigating back
  to tidbits, it should load all of them. Or have lazy loading.
- [IMPROVE] Refactor to GET request for caching, once this issue has been resolved > https://github.com/nuxt/content/issues/664
- [SPIKE] Remove open sidebar in bigger screens
- [IMPROVE] update recent article use bullet list loading > https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/BulletList.js
- [REFACTOR] rename tidbit_scroll to tidibt_scroll_banner, same for blog. Create scroll shared component.
- [REFACTOR] create shared folder.
- [IMPROVE] could we use this to improve filter_bar? > https://nuxtjs.org/docs/2.x/features/data-fetching#listening-to-query-string-changes
- [IMPROVE] Use DOMPurify for v-html instances > https://github.com/cure53/DOMPurify
- [REFACTOR] Namespace lib variables, similar to TW
- [IMPROVE] 404 page > https://tailwindui.com/components/marketing/feedback/404-pages
- [IMPROVE] consider adding min-height on pages to solve the jump. The loading component height only solves when navigate programatically. For initial load (ssr), the jump will still happen. Also, consider moving the section-head to the page vue files (instead of components) b/c all vue components outside of pages dir won't load right away even if static.

## Soon

- [IMPROVE] a11y: add tooltip in search when user hover on icon, it will display type of page (ie. Code Tidbit, Article, Course) OR make it as a badge
- [IMPROVE] Add affiliate links.
- [FEATURE] add custom image meta from article and meta data
- [FIX] if using duration, need to make sure `transition` is included
- [IMPROVE] blog page load some list to be bigger image, so not as monotonous
- [FEATURE] calculate article length and divide space
- [IMPROVE] Add FAQ to footer (hash)
- [IMPROVE] update meta description
- [BUG] Load page button is shown even no more pages on blog and tidbit index page. There's no easy way to check if there are more results. We need a hack to query twice. A possible way to query one more and check it it exists or not.

## Doing

- [NEW] office hour page
- [FEATURE] Add RSS feed https://github.com/nuxt-community/feed-module

## Next

- [CHORE] Fix "FIXME" items and address "TODO"
- add contact links
- pictorials: add block code

## Now

- Prepare submodule split
- Test out digital ocean
- Update article edit link
- rename `instance` to `_this`
