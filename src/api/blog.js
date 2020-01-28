import request from '@/utils/request'

/**
 * 获取博客列表
 * @param {*} page 页码，不传默认 page 为1。如果设置该参数则获取博客列表的第 page 页博客列表
 * @param {*} userId 用户 id，不传则获取全部用户的数据，如果设置则获取某个用户的博客列表
 * @param {*} atIndex 是否展示在首页，传递 true则只得到显示到首页的博客列表，不传得到全部类型(包括展示到首页和不展示到首页)的博客列表，false得到不展示到首页的列表
 */
export const getBlogs = ({ page = 1, userId, atIndex } = { page: 1 }) =>
  request({
    method: 'get',
    url: '/blog',
    params: {
      page,
      userId,
      atIndex
    }
  })

/**
 * 获取首页所有博客数据
 * @param {*} param0 基于getBlogs 二度封装
 */
export const getHomeBlogs = ({ page = 1 } = { page: 1 }) => {
  return getBlogs({ page, atIndex: true })
}

/**
 * 获取博客详情
 * @param {*} blogId 博客id
 */
export const getBlogDetail = blogId => request({
  method: 'get',
  url: `/blog/${blogId}`,
})

/**
 * 创建博客
 * @param {*} param0 标题 内容 描述说明
 */
export const createBlog = ({ title, content, description }) => request({
  method: 'post',
  url: '/blog',
  data: {
    title,
    content,
    description
  }
})

/**
 * 修改制定博客内容
 * @param {*} param0 标题 内容 描述说明 是否展示到首页
 */
export const editBlog = ({ blogId, title, content, description, atIndex }) => request({
  method: 'patch',
  url: `/blog/${blogId}`,
  data: {
    title,
    content,
    description,
    atIndex
  }
})

/**
 * 删除指定博客
 * @param {*} blogId 博客id
 */
export const delBlog = (blogId) => request({
  method: 'delete',
  url: `/blog/${blogId}`,
})
