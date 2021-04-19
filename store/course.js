const SET_FLEXBOX30_LESSONS = 'SET_FLEXBOX30_LESSONS';
const SET_BASICS_LESSONS = 'SET_BASICS_LESSONS';
const SET_PICTORIALS_LESSONS = 'SET_PICTORIALS_LESSONS';
const SET_RECENT_FLEXBOX30 = 'SET_RECENT_FLEXBOX30';
const SET_RECENT_BASICS = 'SET_RECENT_BASICS';
const SET_RECENT_PICTORIALS = 'SET_RECENT_PICTORIALS';

export const state = () => ({
  flexbox30Lessons: [],
  basicsLessons: [],
  pictorialsLessons: [],
  // Setting as "null" instead of "{}"" for easy conditional check
  recentFlexbox30: null,
  recentBasics: null,
  recentPictorials: null,
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
  [SET_RECENT_FLEXBOX30](state, payload) {
    state.recentFlexbox30 = payload;
  },
  [SET_RECENT_BASICS](state, payload) {
    state.recentBasics = payload;
  },
  [SET_RECENT_PICTORIALS](state, payload) {
    state.recentPictorials = payload;
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
  setRecentFlexbox30({ commit }, payload) {
    commit(SET_RECENT_FLEXBOX30, payload);
  },
  setRecentBasics({ commit }, payload) {
    commit(SET_RECENT_BASICS, payload);
  },
  setRecentPictorials({ commit }, payload) {
    commit(SET_RECENT_PICTORIALS, payload);
  },
};
