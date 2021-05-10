import _sampleSize from 'lodash/sampleSize';

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
  recentBlogs4(state) {
    return state.recentBlogs.slice(0, 4);
  },
  recentBlogs5(state) {
    return state.recentBlogs.slice(0, 5);
  },
  randomTopBlogs4(state) {
    return _sampleSize(state.topBlogs, 4);
  },
  randomTopBlogs5(state) {
    return _sampleSize(state.topBlogs, 5);
  },
};
