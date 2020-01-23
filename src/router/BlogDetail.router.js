// 博客详情
const BlogDetail = () => import(/* webpackChunkName: "Blog" */ "@/views/BlogDetail")
export default {
  path: "/blog/:id",
  component: BlogDetail
}