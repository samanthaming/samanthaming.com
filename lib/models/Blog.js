import { RECENT_DATA_LIMIT } from '../constants/model';

export class Blog {
  static contentPath = 'blog';

  static async fetchRecents({ content }) {
    return await content(this.contentPath)
      .sortBy('createdAt', 'desc') // TODO: use updatedAt in production
      .only(['title', 'description', 'path', 'slug'])
      .limit(RECENT_DATA_LIMIT)
      .fetch();
  }

  static async dispatchRecents({ content, store }) {
    if (store.state.blog.recentBlogs.length) {
      return store.state.blog.recentBlogs;
      // Don't do this > "return;"
      // - Will cause issue of article not loading when SPA navigating.
      // - Will load on page refresh but not when nuxt-link towards it.
      // - Probably because we're using the return value to do something
      // - ie. in "fetchPrevNext" > [next] = await this.dispatchRecents()
      // - and we don't have a check in that function to check if it's undefined.
      // - Also we don't have a try/catch in "await Blog.fetchPrevNext()"
      // - so it just stops executing after that line.
    }

    const recents = await this.fetchRecents({ content });
    store.dispatch('blog/setRecentBlogs', recents);
    return recents;
  }

  static async fetchPrevNext({ content, params, store }) {
    // fetch prev and next of content
    const paginations = await content(this.contentPath)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc') // TODO: use updatedAt in production
      .surround(params.slug)
      .fetch();

    const prev = paginations[0];
    let next = paginations[1];

    // fetch first content
    if (!next) {
      [next] = await this.dispatchRecents({
        content,
        store,
      });
    }

    return {
      prev,
      next,
    };
  }
}
