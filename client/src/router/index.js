import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/HelloWorld';
import Posts from '@/components/Posts';
import Cigars from '@/components/Cigars';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/cigars',
      name: 'Cigars',
      component: Cigars,
    },
  ],
});

export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello,
//     },
//     {
//       path: '/posts',
//       name: 'Posts',
//       component: Posts,
//     },
//   ],
// });
