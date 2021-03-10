const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_RECENT_TIDBITS = 'SET_TOP_TIDBITS';
const SET_TOTAL_TIDBITS_COUNT = 'SET_TOTAL_TIDBITS_COUNT';

export const state = () => ({
  recentTidbit: {},
  recentTidbits: [],
  totalTidbitsCount: 0,
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
  },
  [SET_RECENT_TIDBITS](state, payload) {
    state.recentTidbits = payload;
  },
  [SET_TOTAL_TIDBITS_COUNT](state, payload) {
    state.totalTidbitsCount = payload;
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
      const totalTidbits = await context.$content('tidbits').only(['']).fetch();

      const recentTidbits = await context
        .$content('tidbits')
        .only(['slug', 'path', 'title'])
        .sortBy('order', 'desc')
        .limit(6)
        .fetch();

      commit(SET_TOTAL_TIDBITS_COUNT, totalTidbits.length || 0);
      commit(SET_RECENT_TIDBIT, recentTidbit);
      commit(SET_RECENT_TIDBITS, recentTidbits);
    } catch (error) {
      console.error(error);
    }
  },
};

export const getters = {
  recentTidbits5(state) {
    return state.recentTidbits.slice(0, 5);
  },
  recentTidbits6(state) {
    return state.recentTidbits.slice(0, 6);
  },
};
