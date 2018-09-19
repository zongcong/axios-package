import * as types from './mutations-types'

const mutations = {
  [types.SET_TOKEN] (state, number) {
    state.token = number
  },
  [types.SET_ROUTER_LIST] (state, array) {
    state.adminRouter = array
  }
}

export default mutations
