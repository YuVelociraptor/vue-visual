import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import FirstPage from '@/components/FirstPage.vue'
import SecondPage from '@/components/SecondPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/01',
        name: 'First',
        component: FirstPage
    },
    {
        path: '/02',
        name: 'Second',
        component: SecondPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router