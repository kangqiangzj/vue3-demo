/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-07 17:04:21
 * @FilePath: \vue3-demo\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import RefView from '../views/RefView.vue'
import SuspenseView from '../views/SuspenseView.vue'
import Editor from '../views/Editor.vue'
import NotFound from '@/components/NotFound.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ref',
    name: 'Ref',
    component: RefView
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: SuspenseView
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
