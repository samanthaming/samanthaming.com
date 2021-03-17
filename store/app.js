const SET_TIMESTAMP = 'SET_TIMESTAMP';

export const state = () => ({
  timestamp: Date.now(),
});

export const mutations = {
  [SET_TIMESTAMP](state, payload) {
    state.timestamp = payload;
  },
};

export const actions = {
  resetTimestamp({ commit }) {
    commit(SET_TIMESTAMP, Date.now());
  },
};
