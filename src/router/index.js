import Vue from 'vue'
import Router from 'vue-router'
import stote from '../stote'
import HelloWorld from '@/components/HelloWorld'
const Login = resolve => require.ensure([], () => resolve(require('@/components/login')), 'login')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  addRouter(to, from, next)
})

function addRouter (to, from, next) {
  let sessionRouter = JSON.parse(window.sessionStorage.getItem('router'))
  let routerList = stote.getters.adminRouter
  if (routerList.length) {
    next()
  } else {
    let newRouter = []
    if (!sessionRouter) {
      next()
    }
    // sessionRouter.map(item => {
    //   newRouter.push(
    //     {
    //       path: item.path,
    //       name: item.path,
    //       component: resolve => require.ensure([], () => resolve(require(`@/components/${item.routerFile}`)), 'login')
    //     }
    //   )
    // })
    // router.addRoutes(newRouter)
    // console.log(sessionRouter)
    // stote.dispatch('setNewRouter', sessionRouter)
    //   .then(res => {
    //     // console.log(res)
    //     next({...to})
    //   })
  }
}

export default router
