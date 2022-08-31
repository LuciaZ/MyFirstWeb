import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/load',
    name: 'load',
    component: () => import(/* webpackChunkName: "about" */ '../components/LoadPage/LoadPage.vue')
  },
  {
    path: '/works/arknights',
    name: 'arknights',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/ArknightsView.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "about" */ '../views/artwork/ArtWorkView.vue')
  },
  {
    path: '/works/vocaloid',
    name: 'vocaloid',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/VocaloidView.vue')
  },
  {
    path: '/works/fatego',
    name: 'fatego',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/FategoView.vue')
  },
  {
    path: '/works/original',
    name: 'original',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/OriginalView.vue')
  },
  {
    path: '/works/character',
    name: 'character',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/CharacterView.vue')
  },
  {
    path: '/works/others',
    name: 'others',
    component: () => import(/* webpackChunkName: "about" */ '../views/albums/OtherView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/etc/AboutWeb.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/MkdView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/RotatePage/RotatePage.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
