// 创建博客
const CreateBlog = () => import(/* webpackChunkName: "Create" */ "@/views/CreateBlog")
export default {
  path: '/create/',
  component: CreateBlog
}