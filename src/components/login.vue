<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title tc">
        <span>登录</span>
      </div>
      <div class="login-form">
        <div class="form-item">
          <span>账号：</span><input v-model.trim="adminUser" type="text">
        </div>
        <div class="form-item">
          <span>密码：</span><input type="text">
        </div>
      </div>
      <div class="login-btn">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const Home = resolve => require.ensure([], () => resolve(require('@/components/adminHome')), 'home')

export default {
  name: 'login',
  data () {
    return {
      adminRouter: [],
      adminUser: ''
    }
  },
  methods: {
    login () {
      this.routerDate(this.adminUser)
        .then(res => {
          const data = res
          if (data.msg) {
            alert(data.msg)
            return
          }
          let sessionRouter = JSON.parse(window.sessionStorage.getItem('router'))
          if (!sessionRouter) {
            console.log(sessionRouter)
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
            data.map(item => {
              newRouter[0].children.push(
                {
                  path: '/home' + item.path,
                  name: item.path,
                  component: resolve => require.ensure([], () => resolve(require(`@/components/${item.routerFile}`)), 'login')
                }
              )
            })
            this.$router.addRoutes(newRouter)
          }
          window.sessionStorage.router = JSON.stringify(data)
          this.setRouterList(data)
          this.setToken(1)
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    ...mapMutations({
      setRouterList: 'SET_ROUTER_LIST',
      setToken: 'SET_TOKEN'
    }),
    routerDate (params) {
      let routerList = []
      if (params === 'admin') {
        routerList = [
          {path: '/one', routerFile: 'one'},
          {path: '/two', routerFile: 'two'},
          {path: '/three', routerFile: 'three'},
          {path: '/four', routerFile: 'four'}
        ]
      } else if (params === 'userAdmin') {
        routerList = [
          {path: '/three', routerFile: 'three'},
          {path: '/four', routerFile: 'four'}
        ]
      } else {
        routerList = {msg: '请输入账号'}
      }
      return new Promise((resolve, reject) => {
        resolve(routerList)
      })
    }
  }
}
</script>
