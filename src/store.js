import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello Vuex'
  },
  mutations: {
    changeMsg (state, str) {
      state.msg = `${state.msg}, ${str}`
    }
  },
  actions: {

  },
});
