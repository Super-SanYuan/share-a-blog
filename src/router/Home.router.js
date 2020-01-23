const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home")

export default {
  path: "/", // 路径
  component: Home, // 组件
  name: "Home", // 路由命名
}