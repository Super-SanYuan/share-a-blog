// 我的
const Mine = () => import(/* webpackChunkName: "Mine" */ "@/views/Mine")
export default {
  name: "mine",
  path: "/mine/",
  meta: { requireAuth: true },
  component: Mine
}