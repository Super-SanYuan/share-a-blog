import Vue from 'vue' // 引入vue
import store from '@/store'
import VueRouter from 'vue-router' // 引入路由插件
import routeOptions from './router.options' // 引入封装的路由数组数据

Vue.use(VueRouter) // 安装插件
window.store = store
// 构造路由实例
const router = new VueRouter({
  // options
  base: '/', // 整个项目的根路径  如果部署到服务器 /app/ 目录下  就应该配置 /app/..
  mode: 'hash', // 路由模式  默认 hash(适用浏览器) history(需要服务器配合) abstract(node端)
  routes: routeOptions, // 路由隐射表 array
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.dispatch('user/checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router