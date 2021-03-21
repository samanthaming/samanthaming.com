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
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar;
  },
};

export const actions = {
  resetTimestamp({ commit }) {
    commit(SET_TIMESTAMP, Date.now());
  },
  toggleSidebar({ commit }) {
    commit(TOGGLE_SIDEBAR);
  },
};
