// 编辑博客
const EditBlog = () => import(/* webpackChunkName: "Edit" */ "@/views/EditBlog")
export default {
  path: '/edit/:id',
  component: EditBlog
}