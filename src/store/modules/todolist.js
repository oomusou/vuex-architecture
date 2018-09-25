import Vue from 'vue';
import Vuex from 'vuex';
import todoApi from '../../api/todosApi';

Vue.use(Vuex);

const setTodos = (state, payload) => state.todos = payload;

const addItem = (state, payload) =>
  state.todos.push({ title: payload, completed: false });

const finishItem = (state, payload) =>
  state.todos[payload].completed = !state.todos[payload].completed;

const error = e => console.log(e);

const response = commit =>
  res => commit('setTodos', res.data.slice(0, 5));

const getTodos = ({ commit }) =>
  todoApi
    .fetchTodos()
    .then(response(commit))
    .catch(error);

const state = {
  todos: [],
};

const mutations = {
  setTodos,
  addItem,
  finishItem,
};

const actions = {
  getTodos,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
