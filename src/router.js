import Vue from 'vue';
import Router from 'vue-router';
import Counter from './views/Counter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hone',
      component: Counter,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import(/* webpackChunkName: "about" */ './views/TodoList.vue'),
    },
  ],
});
