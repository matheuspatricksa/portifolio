import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
