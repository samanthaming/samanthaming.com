import { RECENT_DATA_LIMIT, TOP_TIDBIT_SLUGS } from '../constants/model';

//   sortByKey = 'createdAt',
//   sortByDirection = 'desc',

export class Tidbit {
  static contentPath = 'tidbits';

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

  static async dispatchRecents({ content, store }) {
    if (store.state.tidbit.recentTidbits.length) {
      return;
    }

    const recents = await this.fetchRecents({ content });
    store.dispatch('tidbit/setRecentTidbits', recents);
    return recents;
  }

  static async dispatchTops({ content, store }) {
    if (store.state.tidbit.topTidbits.length) {
      return;
    }

    const tops = await this.fetchTops({ content });
    store.dispatch('tidbit/setTopTidbits', tops);
    return tops;
  }

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
      [next] = await this.dispatchRecentTidbits({
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
