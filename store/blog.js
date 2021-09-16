import _shuffle from 'lodash/shuffle';

const SET_RECENT_BLOG = 'SET_RECENT_BLOG';
const SET_RECENT_BLOGS = 'SET_RECENT_BLOGS';
const SET_TOP_BLOGS = 'SET_TOP_BLOGS';

export const state = () => ({
  recentBlogs: [],
  topBlogs: [],
});

export const mutations = {
  [SET_RECENT_BLOG](state, payload) {
    state.recentBlog = payload;
  },
  [SET_RECENT_BLOGS](state, payload) {
    state.recentBlogs = payload;
  },
  [SET_TOP_BLOGS](state, payload) {
    state.topBlogs = payload;
  },
};

export const actions = {
  setRecentBlog({ commit }, payload) {
    commit(SET_RECENT_BLOG, payload);
  },
  setRecentBlogs({ commit }, payload) {
    commit(SET_RECENT_BLOGS, payload);
  },
  setTopBlogs({ commit }, payload) {
    commit(SET_TOP_BLOGS, payload);
  },
};

export const getters = {
  recentBlog(state) {
    return state.recentBlogs[0];
  },
  recentBlogs(state) {
    return _shuffle(state.recentBlogs.slice(0, 10));
  },
  topBlogs(state) {
    return _shuffle(state.topBlogs);
  },
};
