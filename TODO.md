# TODO

- [FIX] add loading component for any component using fetch
- [FEATURE] grey background for avatar when loading
- [FEATURE] if user has loaded entire tidbits, when navigating back
  to tidbits, it should load all of them. Or have lazy loading.
- Refactor to GET request for caching, once this issue has been resolved > https://github.com/nuxt/content/issues/664
- Remove open sidebar in bigger screens
- Make responsive grid, so it fits row if possible
- [FIX] if using duration, need to make sure `transition` is included
- turn pictorial page to 3 col (toc on side)
- Add flash whenever there's a redirect, so use know it's being redirected and something is wrong.
- [IMPROVE] blog page load some list to be bigger image, so not as monotonous
- [IMPROVE] consider adding min-height on pages to solve the jump. The loading component height only solves when navigate programatically. For initial load (ssr), the jump will still happen.
- [IMPROVE] update recent article use bullet list loading > https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/BulletList.js
- [CLEAN] rename tidbit_scroll to tidibt_scroll_banner, same for blog

## Ready

- pictorials: add block code
- Flash message
- uses page
- office hour page
- Fix "FIXME" items
- Implement https://www.joshwcomeau.com/blog/how-i-built-my-blog/
- add tech stack to FAQ
- Add FAQ to footer (hash)
- add error page
- Make the tidbit filter sticky? try it out
- make section header support links
- [CLEAN] change fetchState prop to "loading", see tidbit_row for example

## Next

- add rest of tidbits

## Doing

- home page
