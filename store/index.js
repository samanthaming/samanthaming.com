import _sampleSize from 'lodash/sampleSize';
import { allowedOrderTidbits } from '~/lib';

const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_RECENT_TIDBITS = 'SET_TOP_TIDBITS';
const SET_RANDOM_TIDBITS = 'SET_RANDOM_TIDBITS';
const SET_RANDOM_ORDER_TIDBITS = 'SET_RANDOM_ORDER_TIDBITS';
const SET_TIMESTAMP = 'SET_TIMESTAMP';

export const state = () => ({
  recentTidbit: {},
  recentTidbits: [],
  randomTidbits: [],
  randomOrderTidbits: [],
  timestamp: Date.now(),
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
  [SET_RANDOM_ORDER_TIDBITS](state, payload) {
    state.randomOrderTidbits = payload;
  },
  [SET_TIMESTAMP](state, payload) {
    state.timestamp = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      const [recentTidbit] = await context
        .$content('tidbits')
        .sortBy('order', 'desc')
        .without(['body'])
        .limit(1)
        .fetch();

      // Update once this issue has been addressed
      // https://github.com/nuxt/content/issues/378
      const totalTidbits = await context.$content('tidbits').only([]).fetch();
      const randomOrderTidbits = allowedOrderTidbits(totalTidbits.length);

      const recentTidbits = await context
        .$content('tidbits')
        .only(['slug', 'path', 'title'])
        .sortBy('order', 'desc')
        .limit(6)
        .fetch();

      commit(SET_RANDOM_ORDER_TIDBITS, randomOrderTidbits);
      commit(SET_RECENT_TIDBIT, recentTidbit);
      commit(SET_RECENT_TIDBITS, recentTidbits);
    } catch (error) {
      console.error(error);
    }
  },
  setRandomTidbits({ commit }, payload) {
    commit(SET_RANDOM_TIDBITS, payload);
  },
  resetTimestamp({ commit }) {
    commit(SET_TIMESTAMP, Date.now());
  },
};

export const getters = {
  recentTidbits5(state) {
    return state.recentTidbits.slice(0, 5);
  },
  recentTidbits6(state) {
    return state.recentTidbits.slice(0, 6);
  },
  getRandomOrderTidbits: (state) => (size) => {
    return _sampleSize(state.randomOrderTidbits, size);
  },
};
