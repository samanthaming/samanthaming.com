const SET_TIMESTAMP = 'SET_TIMESTAMP';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SET_FLASH = 'SET_FLASH';

export const state = () => ({
  timestamp: Date.now(),
  sidebar: false,
  flash: null,
});

export const mutations = {
  [SET_FLASH](state, payload) {
    state.flash = payload;
  },
  [SET_TIMESTAMP](state, payload) {
    state.timestamp = payload;
  },
  [TOGGLE_SIDEBAR](state, payload) {
    state.sidebar = payload === undefined ? !state.sidebar : payload;
    document.body.style.overflow = state.sidebar ? 'hidden' : 'visible';
  },
};

export const actions = {
  setFlash({ commit }, payload) {
    commit(SET_FLASH, payload);
  },
  resetFlash({ commit }) {
    commit(SET_FLASH, null);
  },
  resetTimestamp({ commit }) {
    commit(SET_TIMESTAMP, Date.now());
  },
  toggleSidebar({ commit }, payload) {
    commit(TOGGLE_SIDEBAR, payload);
  },
};
