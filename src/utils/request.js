import axios from 'axios'
import Qs from 'qs'
import { Message } from 'element-ui'



// 创建 axios 实例
const service = axios.create({
  baseURL: "http://blog-server.hunger-valley.com/", // 请求跟地址
  timeout: 1000,
  headers: { // 请求头
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  },
  withCredentials: true // 异步请求也携带 token
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 需补充请求头的 token 携带
  config.data = Qs.stringify(config.data)
  return config
}, error => {
  return new Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  const httpStatus = Number(response.status) || 200 // http状态码
  // const resStatus = response.data.status // 后端定义的接口状态
  let resMessage // 后端定义的请求结果文字
  if (httpStatus !== 200) {
    // http 状态码错误处理
    switch (httpStatus) {
      case 401:
        resMessage = 'token失效'
        break
      case 500:
        resMessage = '服务器错误'
        break
      default:
        resMessage = response.data.msg
        break
    }
    Message({
      type: "error",
      message: resMessage,
      onClose: () => {
        // 重定向到登录页面
        window.location.href(window.origin + '/login')
      }
    })
    return new Promise.reject(new Error(resMessage))
  }
  return response.data
}, error => {
  return new Promise.reject(new Error(error))
})

export default service