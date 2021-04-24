import { RECENT_DATA_LIMIT } from '../constants/model';

//   sortByKey = 'createdAt',
//   sortByDirection = 'desc',

export class Tidbit {
  static async fetchRecents({ content }) {
    const recents = await content('tidbits')
      .only(['title', 'description', 'path', 'slug', 'order', 'dir'])
      .sortBy('order', 'desc') // TODO: replace with updatedAt > .sortBy('updatedAt', 'desc')
      .limit(RECENT_DATA_LIMIT)
      .fetch();

    return recents;
  }

  static async dispatchRecents({ content, store }) {
    if (store.getters['tidbit/recentTidbit']) {
      return;
    }

    const recents = await this.fetchRecents({ content });

    store.dispatch('tidbit/setRecentTidbits', recents);
    return recents;
  }

  static async fetchPrevNext({ content, params, store }) {
    // fetch prev and next of content
    const paginations = await content('tidbits')
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
