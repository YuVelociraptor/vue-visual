import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import C60 from '@/components/C60Fullerene.vue'
import SecondPage from '@/components/SecondPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/c60',
        name: 'C60',
        component: C60
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