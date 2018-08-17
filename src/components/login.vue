<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title tc">
        <span>登录</span>
      </div>
      <div class="login-form">
        <div class="form-item">
          <span>账号：</span><input type="text">
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

export default {
  name: 'login',
  data () {
    return {
      adminRouter: []
    }
  },
  methods: {
    login () {
      this.routerDate()
        .then(res => {
          const data = res
          window.sessionStorage.router = JSON.stringify(data)
          this.setRouterList(data)
          this.setToken(1)
          // this.$router.addRoutes(router)
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
    routerDate () {
      let routerList = [
        {path: '/one', routerFile: 'one'},
        {path: '/two', routerFile: 'two'},
        {path: '/three', routerFile: 'three'},
        {path: '/four', routerFile: 'four'},
        {path: '/home', routerFile: 'adminHome'}
      ]
      return new Promise((resolve, reject) => {
        resolve(routerList)
      })
    }
  }
}
</script>
