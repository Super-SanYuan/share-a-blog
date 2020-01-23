
const User = () => import(/* webpackChunkName: "User" */ "@/views/User")

export default {
  name: "User",
  path: '/user/',
  component: User
}