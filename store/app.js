const SET_TIMESTAMP = 'SET_TIMESTAMP';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const state = () => ({
  timestamp: Date.now(),
  sidebar: false,
});

export const mutations = {
  [SET_TIMESTAMP](state, payload) {
    state.timestamp = payload;
  },
  [TOGGLE_SIDEBAR](state, payload) {
    state.sidebar = payload === undefined ? !state.sidebar : payload;
    document.body.style.overflow = state.sidebar ? 'hidden' : 'visible';
  },
};

export const actions = {
  resetTimestamp({ commit }) {
    commit(SET_TIMESTAMP, Date.now());
  },
  toggleSidebar({ commit }, payload) {
    commit(TOGGLE_SIDEBAR, payload);
  },
};
