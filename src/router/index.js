import Vue from 'vue'
import Router from 'vue-router'
import stote from '../stote'
import HelloWorld from '@/components/HelloWorld'
const Login = resolve => require.ensure([], () => resolve(require('@/components/login')), 'login')
const Home = resolve => require.ensure([], () => resolve(require('@/components/adminHome')), 'home')

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    // {
    //   path: '**', // 未知路由
    //   redirect: '/login'
    // }
  ]
})

router.beforeEach((to, from, next) => {
  addRouter(to, from, next)
})

function addRouter (to, from, next) {
  let sessionRouter = JSON.parse(window.sessionStorage.getItem('router'))
  let routerList = stote.getters.adminRouter
  let token = stote.getters.token
  // 当 vuex 中存在路由时（为正常登陆存储），进入下一个路由
  if (routerList.length) {
    next()
  } else {
    // 当 vuex 中没有路由信息时，动态添加路由，并且提交 actions 存储路由
    let newRouter = [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          // 添加该字段，表示进入这个路由是需要登录的
          requireAdmin: true
        },
        children: []
      }
    ]

    // 当 sessionStorage 存在路由信息
    if (sessionRouter) {
      sessionRouter.map(item => {
        newRouter[0].children.push(
          {
            path: '/home' + item.path,
            name: item.path,
            component: resolve => require.ensure([], () => resolve(require(`@/components/${item.routerFile}`)), 'login')
          }
        )
      })
      router.addRoutes(newRouter)
      // action 存储路由
      stote.dispatch('setNewRouter', sessionRouter)
        .then(res => {
          next({...to})
          // 不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录, history 下才起作用
          router.replace(to.path)
        })
      // console.log(newRouter)
    } else {
      // 当 sessionStorage 不存在路由信息
      // 判断当前路由时登陆页面，return 防止死循环
      if (to.path === '/login') {
        next()
        return
      }

      // 当存在 token 信息时，进入下个路由
      if (token) {
        next()
      } else {
        // 当不存在 token 信息时，返回登陆页面
        next({
          path: '/login'
        })
      }
    }
  }
}

export default router
