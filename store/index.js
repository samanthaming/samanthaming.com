const SET_RECENT_TIDBIT = 'SET_RECENT_TIDBIT';
const SET_RECENT_TIDBITS = 'SET_RECENT_TIDBITS';

export const state = () => ({
  recentTidbit: {},
  recentTidbits: [],
});

export const mutations = {
  [SET_RECENT_TIDBIT](state, payload) {
    state.recentTidbit = payload;
  },
  [SET_RECENT_TIDBITS](state, payload) {
    state.recentTidbits = payload;
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

      const recentTidbits = await context
        .$content('tidbits')
        .only(['slug', 'path', 'title'])
        .sortBy('order', 'desc')
        .limit(6)
        .fetch();

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
