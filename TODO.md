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

## Ready

- pictorials: add block code
- add min height when loading, so no jump
- Flash message
- uses page
- office hour page
- Fix "FIXME" items
- Implement https://www.joshwcomeau.com/blog/how-i-built-my-blog/
- add tech stack to FAQ
- Add FAQ to footer (hash)

## Next

- home page
- add rest of tidbits

## Doing

- install https://github.com/egoist/vue-content-loader
