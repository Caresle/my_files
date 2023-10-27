import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {
    mdiHome,
    mdiAccount,
} from '@mdi/js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            show: true,
            name: "Home",
            icon: mdiHome,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            show: false,
            name: "login",
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignUpView.vue'),
        meta: {
            show: false,
            name: "signup",
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/UserView.vue'),
        meta: {
            show: true,
            name: "User",
            icon: mdiAccount,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router