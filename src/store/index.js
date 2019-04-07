import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import getters from './getters';
import user from './modules/user';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
  },
  getters
});

export default store;
