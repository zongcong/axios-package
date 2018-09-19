import * as types from './mutations-types'

export const setNewRouter = function ({commit}, newRouter) {
  return new Promise((resolve, reject) => {
    commit(types.SET_ROUTER_LIST, newRouter) // 存储最新路由
    resolve(newRouter)
  })
}
