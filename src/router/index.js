import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import C60 from '@/components/C60Fullerene.vue'
import GameOfLife from '@/components/GemeOfLife.vue'

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
        path: '/gol',
        name: 'Game Of Life',
        component: GameOfLife
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router