import request from '@/utils/request'

export const register = (username, password) => request({
  method: 'post',
  url: '/auth/register',
  data: {
    username, password
  }
})

export const login = (username, password) => request({
  method: 'post',
  url: '/auth/register',
  data: {
    username, password
  }
})

export const logout = () => request({
  method: 'get',
  url: '/auth/logout'
})

export const getInfo = () => request({
  method: 'get',
  url: '/auth'
})