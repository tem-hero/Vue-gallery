import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () => import('./views/Portfolio.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('./views/Blog.vue'),
            children: [
                { path: 'post',
                  name: 'BlogPostFull',
                  component: () => import('./components/BlogPostFull.vue') }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        }
    ]
})
