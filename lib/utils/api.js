/**
 * This will return next pagination that starts over
 * "next" will return the next content (standard behaviour)
 * but will return first content if at the end instead of null
 * "prev" remains unchanged
 * currently used for course lessons
 *
 */
export async function fetchPrevNext({
  $content,
  params,
  store,
  contentPath,
  dispatchType,
  stateName,
}) {
  // fetch prev and next of content
  const result = await $content(contentPath)
    .only(['title', 'slug', 'order'])
    .sortBy('order')
    .surround(params.slug)
    .fetch();

  const prev = result[0];
  let next = result[1];

  // fetch first content
  if (!next) {
    next = store.state.course[stateName];

    if (!next) {
      const [lesson] = await $content(contentPath)
        .only(['title', 'path', 'slug', 'order'])
        .where({ order: { $eq: 1 } })
        .fetch();

      next = lesson;
      store.dispatch(dispatchType, lesson);
    }
  }

  return {
    prev,
    next,
  };
}
