import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import { defineComponent } from 'vue'
import AppLanding from '@/views/AppLanding.vue'
import AppSuccess from '@/views/AppSuccess.vue'

let redirectPath = '/eng'
const lang = localStorage.getItem('lang')
if (lang) {
  redirectPath = `/${lang}`
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: redirectPath
    },
    {
      path: '/:lang',
      name: 'home',
      component: AppLanding,
      beforeEnter: (to, from, next) => {
        const lang = to.params.lang.toString();
        const validLangs = ['eng', 'mev'];
        if (validLangs.includes(lang)) {
          localStorage.setItem('lang', lang);
          next();
        } else {
          //todo: redirect to 404
          next('/eng');
        }
      }
    },
    // {
    //   path: '/mev',
    //   name: 'home-mev',
    //   component: AppLanding
    // },
    {
      path: '/success',
      name: 'success',
      component: AppSuccess
    }
  ]
})

export default router
