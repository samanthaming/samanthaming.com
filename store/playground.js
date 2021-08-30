const SET_PLAYGROUND_HTML_CODE = 'SET_PLAYGROUND_HTML_CODE';

export const state = () => ({
  htmlCode: '',
  cssCode: '',
  jsCode: '',
});

export const mutations = {
  [SET_PLAYGROUND_HTML_CODE](state, payload) {
    state.htmlCode = payload;
  },
};

export const actions = {
  setHtmlCode({ commit }, payload) {
    commit(SET_PLAYGROUND_HTML_CODE, payload);
  },
};
