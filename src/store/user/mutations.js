// import GET_USER_INFO from './mutataions-types'
import Vue from 'vue'
export default {
  setUser (state, payload) {
    Vue.set(state, 'userInfo', payload)
  },
  setLogin (state, payload) {
    state.isLogin = payload.isLogin
  }
}
