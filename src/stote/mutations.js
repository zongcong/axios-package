import * as types from './mutations-types'

const mutations = {
  [types.SET_TOKEN] (state, number) {
    state.menuIndex = number
  }
}

export default mutations
