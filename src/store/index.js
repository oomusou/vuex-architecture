import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import todolist from './modules/todolist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    todolist,
  },
});
