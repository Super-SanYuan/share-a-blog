import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  isLogin: false,
  userInfo: null
}

export default {
  namespaced: true, // 命名空间
  state,
  actions,
  getters,
  mutations
}
