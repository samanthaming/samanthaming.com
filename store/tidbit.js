const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_RECENT_TIDBITS = 'SET_RECENT_TIDBITS';

export const state = () => ({
  recentTidbit: {},
  recentTidbits: [],
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
  },
  [SET_RECENT_TIDBITS](state, payload) {
    state.recentTidbits = payload;
  },
};

export const actions = {
  setRecentTidbit({ commit }, payload) {
    commit(SET_RECENT_TIDBIT, payload);
  },
  setRecentTidbits({ commit }, payload) {
    commit(SET_RECENT_TIDBITS, payload);
  },
};

export const getters = {
  recentTidbits4(state) {
    return state.recentTidbits.slice(0, 4);
  },
  recentTidbits6(state) {
    return state.recentTidbits.slice(0, 6);
  },
};
