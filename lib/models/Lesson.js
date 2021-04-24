import _groupBy from 'lodash/groupBy';

export class Lesson {
  static async fetchRecent({ content, contentPath }) {
    const [recentLesson] = await content(contentPath)
      .only(['title', 'path', 'slug', 'order'])
      .where({ order: { $eq: 1 } })
      .fetch();

    return recentLesson;
  }

  static async fetchLessons({ content, contentPath }) {
    return await content(contentPath)
      .sortBy('order')
      .only(['path', 'title', 'order'])
      .fetch();
  }

  static async dispatchRecent({
    content,
    contentPath,
    store,
    stateName,
    dispatchType,
  }) {
    if (store.state.course[stateName]) {
      return;
    }

    const recentLesson = await this.fetchRecent({ content, contentPath });

    store.dispatch(dispatchType, recentLesson);
    return recentLesson;
  }

  static async dispatchLessons({
    content,
    contentPath,
    store,
    stateName,
    dispatchType,
  }) {
    if (store.state.course[stateName].length) {
      return;
    }

    const recentLessons = await this.fetchLessons({ content, contentPath });

    store.dispatch(dispatchType, recentLessons);
    return recentLessons;
  }

  static async fetchChunkLessons({ content, contentPath, sections }) {
    const results = await content(contentPath)
      .sortBy('order')
      .only(['slug', 'path', 'title', 'order', 'section'])
      .fetch();

    const group = _groupBy(results, 'section');
    return sections.map((section) => [section, group[section]]);
  }

  /**
   * This will return next pagination that starts over
   * "next" will return the next content (standard behaviour)
   * but will return first content if at the end instead of null
   * "prev" remains unchanged
   *
   */
  static async fetchPrevNext({
    content,
    contentPath,
    params,
    store,
    stateName,
    dispatchType,
  }) {
    // fetch prev and next of content
    const paginations = await content(contentPath)
      .only(['title', 'slug', 'order'])
      .sortBy('order')
      .surround(params.slug)
      .fetch();

    const prev = paginations[0];
    let next = paginations[1];

    // fetch first content
    if (!next) {
      next = await this.dispatchRecent({
        content,
        contentPath,
        store,
        stateName,
        dispatchType,
      });
    }

    return {
      prev,
      next,
    };
  }
}
