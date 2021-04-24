/**
 * This will return next pagination that starts over
 * "next" will return the next content (standard behaviour)
 * but will return first content if at the end instead of null
 * "prev" remains unchanged
 *
 */
export async function fetchPrevNext({
  content,
  params,
  store,
  contentPath,
  fetchRecent, // function(content, store)
  sortByKey = 'createdAt',
  sortByDirection = 'desc',
}) {
  // fetch prev and next of content
  const paginations = await content(contentPath)
    .only(['title', 'slug', 'order'])
    .sortBy(sortByKey, sortByDirection)
    .surround(params.slug) // same as: .surround(params.slug, { before: 1, after: 1 })
    .fetch();

  const prev = paginations[0];
  let next = paginations[1];

  // fetch first content
  if (!next) {
    next = await fetchRecent({ content, store });
  }

  return {
    prev,
    next,
  };
}
