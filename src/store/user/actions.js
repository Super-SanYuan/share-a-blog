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
    return await auth.register({ username, password }).then(res => {
      commit('setUser', res.data)
      commit('setLogin', { isLogin: true })
    })
  },
  // 登出
  async logout ({ commit }) {
    console.log('登出');
    return await auth.logout().then(res => {
      commit('setLogin', res.isLogin)
    })
  },
  // 是否登录
  async checkLogin ({ commit, state }) {
    if (state.isLogin) return true
    let res = await auth.getInfo()
    commit('setUser', res.data)
    if (!res.isLogin) return false
    commit('setLogin', { isLogin: false })
  }

}



