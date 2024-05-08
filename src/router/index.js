import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RecipeDetailPage from '@/views/RecipeDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/RecipeDetail',
      name: 'RecipeDetail',
      component: RecipeDetailPage
    }
  ]
})

export default router
