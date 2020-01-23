import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入路由插件
import routeOptions from './router.options' // 引入封装的路由数组数据

Vue.use(VueRouter) // 安装插件


// 构造路由实例
const router = new VueRouter({
  // options
  base: '/', // 整个项目的根路径  如果部署到服务器 /app/ 目录下  就应该配置 /app/..
  mode: 'hash', // 路由模式  默认 hash(适用浏览器) history(需要服务器配合) abstract(node端)
  routes: routeOptions, // 路由隐射表 array
  scrollBehavior (to, from, savePosition) {
    console.log('路由滚动行为', to, from, savePosition)
  }
})


export default router