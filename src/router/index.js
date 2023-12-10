import { createWebHistory, createRouter } from 'vue-router'

const routes = [

  {
  path: '/',
  name: 'HomeView',
  component: () => import('../views/HomeView.vue'),
  // props: {
  //   darkMode: true
  // }
  },

  {
  path: '/projetos',
  name: 'projetos',
  component: () => import('../views/ProjectsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
