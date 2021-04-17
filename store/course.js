const SET_FLEXBOX30_LESSONS = 'SET_FLEXBOX30_LESSONS';
const SET_BASICS_LESSONS = 'SET_BASICS_LESSONS';
const SET_PICTORIALS_LESSONS = 'SET_PICTORIALS_LESSONS';

export const state = () => ({
  flexbox30Lessons: [],
  basicsLessons: [],
  pictorialsLessons: [],
});

export const mutations = {
  [SET_FLEXBOX30_LESSONS](state, payload) {
    state.flexbox30Lessons = payload;
  },
  [SET_BASICS_LESSONS](state, payload) {
    state.basicsLessons = payload;
  },
  [SET_PICTORIALS_LESSONS](state, payload) {
    state.pictorialsLessons = payload;
  },
};

export const actions = {
  setFlexbox30Lessons({ commit }, payload) {
    commit(SET_FLEXBOX30_LESSONS, payload);
  },
  setBasicsLessons({ commit }, payload) {
    commit(SET_BASICS_LESSONS, payload);
  },
  setPictorialsLessons({ commit }, payload) {
    commit(SET_PICTORIALS_LESSONS, payload);
  },
};
