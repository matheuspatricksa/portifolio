import { createWebHistory, createRouter } from 'vue-router'
import { useAuthPortifolio } from '../stores/AuthPortifolio'
import { storeToRefs } from 'pinia'

const routes = [
  {
    path: '/',
    name: 'home',
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
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authPortifolio = useAuthPortifolio()
  const { isLoggedIn } = storeToRefs(authPortifolio)

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
