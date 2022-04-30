import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/createNFT',
        name: 'createNFT',
        component: () => import('../views/createNFT.vue'),
    },
    {
        path: '/',
        component: layout,
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: () => import('../views/home.vue'),
            },
            {
                path: '/LoanMarket',
                name: 'LoanMarket',
                component: () => import('../views/loanMarket.vue'),
            },
            {
                path: '/AssignmentMarket',
                name: 'AssignmentMarket',
                component: () => import('../views/assignmentMarket.vue'),
            },

        ]
    }
]
const router = new VueRouter({
    routes
})

export default router
