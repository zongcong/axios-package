import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import CreatePersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new CreatePersistedState({
  key: 'object', // 不写默认为vuex
  storage: window.localStorage,
  // 选择要存储的变量
  reducer: state => ({
    token: ''
  })
})

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  plugins: [vuexPersisted]
})
