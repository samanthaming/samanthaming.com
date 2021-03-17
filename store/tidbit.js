const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_RECENT_TIDBITS = 'SET_RECENT_TIDBITS';
const SET_RANDOM_TIDBITS = 'SET_RANDOM_TIDBITS';
const SET_TOP_TIDBITS = 'SET_TOP_TIDBITS';
const SET_TIDBIT_COUNT = 'SET_TIDBIT_COUNT';

export const state = () => ({
  recentTidbit: null, // Setting to null (instead of object), so more easily to check when not filled.
  recentTidbits: [],
  randomTidbits: [],
  topTidbits: [],
  tidbitCount: 0,
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
  },
  [SET_RECENT_TIDBITS](state, payload) {
    state.recentTidbits = payload;
  },
  [SET_RANDOM_TIDBITS](state, payload) {
    state.randomTidbits = payload;
  },
  [SET_TOP_TIDBITS](state, payload) {
    state.topTidbits = payload;
  },
  [SET_TIDBIT_COUNT](state, payload) {
    state.tidbitCount = payload;
  },
};

export const actions = {
  setRecentTidbit({ commit }, payload) {
    commit(SET_RECENT_TIDBIT, payload);
  },
  setRecentTidbits({ commit }, payload) {
    commit(SET_RECENT_TIDBITS, payload);
  },
  setRandomTidbits({ commit }, payload) {
    commit(SET_RANDOM_TIDBITS, payload);
  },
  setTopTidbits({ commit }, payload) {
    commit(SET_TOP_TIDBITS, payload);
  },
  setTidbitCount({ commit }, payload) {
    commit(SET_TIDBIT_COUNT, payload);
  },
};

export const getters = {
  recentTidbits4(state) {
    return state.recentTidbits.slice(0, 4);
  },
  recentTidbits5(state) {
    return state.recentTidbits.slice(0, 5);
  },
  recentTidbits6(state) {
    return state.recentTidbits.slice(0, 6);
  },
  randomTidbits5(state) {
    return state.randomTidbits.slice(0, 5);
  },
};
