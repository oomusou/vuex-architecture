import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const addCount = (state, payload) => state.count += payload;

const state = {
  count: 0,
};

const mutations = {
  addCount,
};

export default {
  namespaced: true,
  state,
  mutations,
};
