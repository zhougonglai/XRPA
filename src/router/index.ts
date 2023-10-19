import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import DefaultLayout from '@/layout/default.layout.vue';
import HomePage from '@/views/home/index.page.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'index',
          component: HomePage
        },
        {
          path: 'strategy',
          name: 'strategy',
          component: () => import('@/views/strategy/index.page.vue'),
        },
        {
          path: 'market',
          name: 'market',
          component: () => import('@/views/market/index.page.vue'),
        },
      ]
    }
  ],
})

export default router
