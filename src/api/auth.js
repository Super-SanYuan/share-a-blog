import request from '@/utils/request'

/**
 * 用户注册
 * @param {*} username 用户名, 长度1到15个字符，只能是字母数字下划线中文
 * @param {*} password 密码, 长度6到16个任意字符
 */
export const register = (username, password) => request({
  method: 'post',
  url: '/auth/register',
  data: {
    username, password
  }
})

/**
 * 用户登录
 * @param {*} username 用户名, 长度1到15个字符，只能是字母数字下划线中文
 * @param {*} password 密码, 长度6到16个任意字符
 */
export const login = (username, password) => request({
  method: 'post',
  url: '/auth/register',
  data: {
    username, password
  }
})

/**
 * 登出
 */
export const logout = () => request({
  method: 'get',
  url: '/auth/logout'
})

/**
 * 判断用户是否登录
 */
export const getInfo = () => request({
  method: 'get',
  url: '/auth'
})