const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_TOTAL_TIDBITS_COUNT = 'SET_TOTAL_TIDBITS_COUNT';

export const state = () => ({
  recentTidbit: {},
  totalTidbitsCount: 0,
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
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

      const totalTidbits = await context
        .$content('tidbits')
        .only(['order'])
        .fetch();

      commit(SET_TOTAL_TIDBITS_COUNT, totalTidbits.length || 0);
      commit(SET_RECENT_TIDBIT, recentTidbit);
    } catch (error) {
      console.error(error);
    }
  },
};
