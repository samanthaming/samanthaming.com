import { RECENT_DATA_LIMIT, TOP_BLOG_SLUGS } from '../constants/model';

export class Blog {
  static contentPath = 'blog';

  static async fetchRecents({ content }) {
    return await content(this.contentPath)
      .sortBy('createdAt', 'desc') // TODO: use updatedAt in production
      .only(['title', 'description', 'path', 'slug'])
      .limit(RECENT_DATA_LIMIT)
      .fetch();
  }

  static async fetchTops({ content }) {
    return await content(this.contentPath)
      .only(['slug', 'path', 'title'])
      .where({ slug: { $in: TOP_BLOG_SLUGS } })
      .fetch();
  }

  static async dispatchRecents({ content, store }) {
    if (store.state.blog.recentBlogs.length) {
      return store.state.blog.recentBlogs;
    }

    const recents = await this.fetchRecents({ content });
    store.dispatch('blog/setRecentBlogs', recents);
    return recents;
  }

  static async dispatchTops({ content, store }) {
    if (store.state.blog.topBlogs.length) {
      return store.state.blog.topBlogs;
    }

    const tops = await this.fetchTops({ content });
    store.dispatch('blog/setTopBlogs', tops);
    return tops;
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
