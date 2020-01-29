// 编辑博客
const EditBlog = () => import(/* webpackChunkName: "Edit" */ "@/views/EditBlog")
export default {
  name: 'edit',
  path: '/edit/:id',
  meta: { requireAuth: true },
  component: EditBlog
}