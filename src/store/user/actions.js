import * as auth from '@/api/auth'

export default {
  // 登录
  login ({ commit }, { username, password }) {
    auth.login({ username, password })
      .then(res => {
        commit('setUser', res.data)
      })
  }
}



