import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import { defineComponent } from 'vue'
import AppLanding from '@/views/AppLanding.vue'
import AppSuccess from '@/views/AppSuccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLanding
    },
    {
      path: '/success',
      name: 'success',
      component: AppSuccess
    }
  ]
})

export default router
