import _chunk from 'lodash/chunk';

const SET_TIDBITS = 'SET_TIDBITS';

export const state = () => ({
  tidbitsData: [],
});

export const mutations = {
  [SET_TIDBITS](state, payload) {
    state.tidbitsData = payload;
  },
  // add(state, text) {
  //   state.list.push({
  //     text,
  //     done: false,
  //   });
  // },
  // remove(state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1);
  // },
  // toggle(state, todo) {
  //   todo.done = !todo.done;
  // },
};

export const actions = {
  setTidbits({ commit }, payload) {
    commit(SET_TIDBITS, payload);
  },
};

export const getters = {
  // Arguments: state, getters, rootState
  tidbitChunks(state) {
    return _chunk(state.tidbitsData, 5);
  },
  randomTidbits(state) {
    // const random
  },
  // Note that getters accessed via methods will run each time you call them, and the result is not cached.
  // getTodoById: (state) => (id) => {
  //   return state.tidbitsData.filter(todo => todo.id === id)
  // }
  // tidbitsData() {
  //   return state.tidbitsData.slice(-1);
  // }
};
