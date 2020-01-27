// import GET_USER_INFO from './mutataions-types'
export default {
  setUser (state, payload) {
    state.userInfo = payload
  },
  setLogin (state, payload) {
    state.isLogin = payload.isLogin
  }
}
