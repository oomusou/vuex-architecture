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
      name: 'home',
      component: Counter,
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "about" */ './views/Todo.vue'),
    },
  ],
});
