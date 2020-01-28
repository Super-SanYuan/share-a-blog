// 博客详情
const BlogDetail = () => import(/* webpackChunkName: "Blog" */ "@/views/BlogDetail")
export default {
  name: 'blogDetail',
  path: "/detail/:id",
  component: BlogDetail
}