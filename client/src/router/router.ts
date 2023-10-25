import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/signup',
        component: () => import('../views/SignUpView.vue')
    },
    {
        path: '/user',
        component: () => import('../views/UserView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router