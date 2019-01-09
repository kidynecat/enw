import Vue from 'vue';
import Router from 'vue-router';
import index from './views/Index.vue';

Vue.use(Router);

// let metadata = {
//   title:""
// }

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SearchWord.vue'),
    },
    {
      path: '/learn',
      name: 'search',
      component: () => import( './views/LearnNewWord.vue'),
    },
  ],
});
