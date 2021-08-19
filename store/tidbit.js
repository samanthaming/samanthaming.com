import _sampleSize from 'lodash/sampleSize';

const SET_RECENT_TIDBITS = 'SET_RECENT_TIDBITS';
const SET_TOP_TIDBITS = 'SET_TOP_TIDBITS';
const SET_JS_TOP_TIDBITS = 'SET_JS_TOP_TIDBITS';
const SET_HTML_TOP_TIDBITS = 'SET_HTML_TOP_TIDBITS';
const SET_CSS_TOP_TIDBITS = 'SET_CSS_TOP_TIDBITS';
const SET_TIDBIT_COUNT = 'SET_TIDBIT_COUNT';

export const state = () => ({
  recentTidbits: [],
  topTidbits: [],
  jsTopTidbits: [],
  htmlTopTidbits: [],
  cssTopTidbits: [],
  tidbitCount: 0,
});

export const mutations = {
  [SET_RECENT_TIDBITS](state, payload) {
    state.recentTidbits = payload;
  },
  [SET_TOP_TIDBITS](state, payload) {
    state.topTidbits = payload;
  },
  [SET_JS_TOP_TIDBITS](state, payload) {
    state.jsTopTidbits = payload;
  },
  [SET_HTML_TOP_TIDBITS](state, payload) {
    state.htmlTopTidbits = payload;
  },
  [SET_CSS_TOP_TIDBITS](state, payload) {
    state.cssTopTidbits = payload;
  },
  [SET_TIDBIT_COUNT](state, payload) {
    state.tidbitCount = payload;
  },
};

export const actions = {
  setRecentTidbits({ commit }, payload) {
    commit(SET_RECENT_TIDBITS, payload);
  },
  setTopTidbits({ commit }, payload) {
    commit(SET_TOP_TIDBITS, payload);
  },
  setJsTopTidbits({ commit }, payload) {
    commit(SET_JS_TOP_TIDBITS, payload);
  },
  setHtmlTopTidbits({ commit }, payload) {
    commit(SET_HTML_TOP_TIDBITS, payload);
  },
  setCssTopTidbits({ commit }, payload) {
    commit(SET_CSS_TOP_TIDBITS, payload);
  },
  setTidbitCount({ commit }, payload) {
    commit(SET_TIDBIT_COUNT, payload);
  },
};

export const getters = {
  recentTidbit(state) {
    return state.recentTidbits[0];
  },
  recentTidbits4(state) {
    return state.recentTidbits.slice(0, 4);
  },
  recentTidbits5(state) {
    return state.recentTidbits.slice(0, 5);
  },
  recentTidbits6(state) {
    return state.recentTidbits.slice(0, 6);
  },
  randomTopTidbits5(state) {
    return _sampleSize(state.topTidbits, 5);
  },
};
