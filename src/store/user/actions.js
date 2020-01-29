import * as auth from '@/api/auth'

export default {
  // 登录
  async login ({ commit }, { username, password }) {
    let res = await auth.login({ username, password })
    commit('setUser', res.data)
    commit('setLogin', { isLogin: true })
    return res
  },
  // 注册
  async register ({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    if (res.status === 'ok') {
      commit('setUser', res.data)
      commit('setLogin', { isLogin: true })
    }
    return res
  },
  // 登出
  async logout ({ commit }) {
    let res = await auth.logout()
    commit('setLogin', { isLogin: false })
    return res
  },
  // 是否登录
  async checkLogin ({ commit, state }) {

    if (state.isLogin) return true
    let res = await auth.getInfo()
    commit('setUser', res.data)
    if (!res.isLogin) return false
    commit('setLogin', { isLogin: true })
  }

}



