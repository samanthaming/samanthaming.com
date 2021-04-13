const SET_FLEXBOX30_LESSONS = 'SET_RECENT_TIDBITS';

export const state = () => ({
  flexbox30Lessons: [],
});

export const mutations = {
  [SET_FLEXBOX30_LESSONS](state, payload) {
    state.flexbox30Lessons = payload;
  },
};

export const actions = {
  setFlexbox30Lessons({ commit }, payload) {
    commit(SET_FLEXBOX30_LESSONS, payload);
  },
};
