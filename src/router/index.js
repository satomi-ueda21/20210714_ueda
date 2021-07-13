import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component:Todo
  }
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     !store.state.auth
//   ) {
//     next({
//       path: "/",
//       query: {
//         redirect: to.fullPath,
//       },
//     });
//   } else {
//     next();
//   }
// });

export default router
