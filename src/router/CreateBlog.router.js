// 创建博客
const CreateBlog = () => import(/* webpackChunkName: "Create" */ "@/views/CreateBlog")
export default {
  name: 'create',
  path: '/create/',
  meta: { requireAuth: true },
  component: CreateBlog
}