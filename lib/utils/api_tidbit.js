import { RECENT_DATA_LIMIT } from '../constants/model';

// Odd: param has to be an object > (content) won't work
export async function fetchRecentTidbits({ content }) {
  // 'dir' is used to display icon in "search"
  const recentTidbits = await content('tidbits')
    .only(['title', 'description', 'path', 'slug', 'order', 'dir'])
    .sortBy('order', 'desc') // TODO: replace with updatedAt > .sortBy('updatedAt', 'desc')
    .limit(RECENT_DATA_LIMIT)
    .fetch();

  return recentTidbits;
}

export async function dispatchRecentTidbits({ content, store }) {
  if (store.getters['tidbit/recentTidbit']) {
    return;
  }

  const recents = await fetchRecentTidbits({ content });

  store.dispatch('tidbit/setRecentTidbits', recents);
  return recents;
}

export async function fetchTidbitPrevNext({ content, params, store }) {
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
    [next] = await dispatchRecentTidbits({
      content,
      store,
    });
  }

  return {
    prev,
    next,
  };
}
