import { RECENT_DATA_LIMIT, TOP_TIDBIT_SLUGS } from '../constants/model';
import { TAG_JS } from '../constants/tag';

//   sortByKey = 'createdAt',
//   sortByDirection = 'desc',

export class Tidbit {
  static contentPath = 'tidbits';

  // FETCH

  static async fetchRecents({ content }) {
    return await content(this.contentPath)
      .only(['title', 'description', 'path', 'slug', 'order', 'dir'])
      .sortBy('order', 'desc') // TODO: replace with updatedAt > .sortBy('updatedAt', 'desc')
      .limit(RECENT_DATA_LIMIT)
      .fetch();
  }

  static async fetchTops({ content }) {
    return await content(this.contentPath)
      .only(['slug', 'path', 'title'])
      .where({ slug: { $in: TOP_TIDBIT_SLUGS } })
      .fetch();
  }

  static async fetchByLanguage(language, { content, limit = 5 }) {
    // TODO: need to add try/catch or return error!
    return await content(this.contentPath)
      .sortBy('order', 'desc') // TODO: changed to updatedAt
      .where({ tags: { $contains: language } })
      .limit(limit)
      .fetch();
    // .catch((err) => {
    //   // TODO: add error
    //   console.error(err);
    // });
  }

  // DISPATCH

  static async dispatchJsTops({ content, store }) {
    if (store.state.tidbit.jsTopTidbits.length) {
      return store.state.tidbit.jsTopTidbits;
    }

    store.dispatch('tidbit/toggleJsTopTidbitsFetching', true);
    const jsTops = await this.fetchByLanguage(TAG_JS, { content });
    store.dispatch('tidbit/setJsTopTidbits', jsTops);
    store.dispatch('tidbit/toggleJsTopTidbitsFetching', false);

    return jsTops;
  }

  static async dispatchRecents({ content, store }) {
    if (store.state.tidbit.recentTidbits.length) {
      return store.state.tidbit.recentTidbits;
      // Don't do this > "return;"
      //  Will cause issue of article not loading when SPA navigating.
      //  Will load on page refresh but not when nuxt-link towards it.
      //  Probably because we're using the return value to do something
      //  ie. in "fetchPrevNext" > [next] = await this.dispatchRecents()
      //  and we don't have a check in that function to check if it's undefined.
      //  Also we don't have a try/catch in "await Blog.fetchPrevNext()"
      //  so it just stops executing after that line.
    }

    const recents = await this.fetchRecents({ content });
    store.dispatch('tidbit/setRecentTidbits', recents);
    return recents;
  }

  static async dispatchTops({ content, store }) {
    if (store.state.tidbit.topTidbits.length) {
      return store.state.tidbit.topTidbits;
    }

    const tops = await this.fetchTops({ content });
    store.dispatch('tidbit/setTopTidbits', tops);
    return tops;
  }

  // PAGINATION

  static async fetchPrevNext({ content, params, store }) {
    // fetch prev and next of content
    const paginations = await content(this.contentPath)
      .only(['title', 'slug', 'order'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug) // same as: .surround(params.slug, { before: 1, after: 1 })
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
