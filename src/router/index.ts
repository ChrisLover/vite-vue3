import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'HelloWorld',
    component:(): any=>import('@/views/HelloWorld.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
