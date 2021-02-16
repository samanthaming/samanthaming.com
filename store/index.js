const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';

export const state = () => ({
  recentTidbit: {},
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
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

      commit(SET_RECENT_TIDBIT, recentTidbit);
    } catch (error) {
      console.error(error);
    }
  },
};
