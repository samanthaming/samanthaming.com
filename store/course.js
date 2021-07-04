import _sampleSize from 'lodash/sampleSize';

const SET_FLEXBOX30_LESSONS = 'SET_FLEXBOX30_LESSONS';
const SET_BASICS_LESSONS = 'SET_BASICS_LESSONS';
const SET_PICTORIALS_LESSONS = 'SET_PICTORIALS_LESSONS';
const SET_RANDOM_FLEXBOX30_LESSONS = 'SET_RANDOM_FLEXBOX30_LESSONS';
const SET_RANDOM_BASICS_LESSONS = 'SET_RANDOM_BASICS_LESSONS';
const SET_RANDOM_PICTORIALS_LESSONS = 'SET_RANDOM_PICTORIALS_LESSONS';
const SET_RECENT_FLEXBOX30 = 'SET_RECENT_FLEXBOX30';
const SET_RECENT_BASICS = 'SET_RECENT_BASICS';
const SET_RECENT_PICTORIALS = 'SET_RECENT_PICTORIALS';

export const state = () => ({
  flexbox30Lessons: [],
  basicsLessons: [],
  pictorialsLessons: [],
  randomFlexbox30Lessons: [],
  randomBasicsLessons: [],
  randomPictorialsLessons: [],
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
  [SET_RANDOM_FLEXBOX30_LESSONS](state, payload) {
    state.randomFlexbox30Lessons = payload;
  },
  [SET_RANDOM_BASICS_LESSONS](state, payload) {
    state.randomBasicsLessons = payload;
  },
  [SET_RANDOM_PICTORIALS_LESSONS](state, payload) {
    state.randomPictorialsLessons = payload;
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
  setRandomFlexbox30Lessons({ commit }, payload) {
    commit(SET_RANDOM_FLEXBOX30_LESSONS, payload);
  },
  setRandomBasicsLessons({ commit }, payload) {
    commit(SET_RANDOM_BASICS_LESSONS, payload);
  },
  setRandomPictorialsLessons({ commit }, payload) {
    commit(SET_RANDOM_PICTORIALS_LESSONS, payload);
  },
};

export const getters = {
  randomBasicsLessons3(state) {
    return _sampleSize(state.randomBasicsLessons, 3);
  },
  randomPictorialsLessons3(state) {
    return _sampleSize(state.randomPictorialsLessons, 3);
  },
  randomBasicsLessons4(state) {
    return _sampleSize(state.randomBasicsLessons, 4);
  },
  randomPictorialsLessons4(state) {
    return _sampleSize(state.randomPictorialsLessons, 4);
  },
};
