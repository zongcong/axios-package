<template>
  <div class="home">
    <div class="left">
      <div class="logo"></div>
      <ul>
        <li v-for="(item, index) in adminRouter" @click="$router.push('/home' + item.path)" :key="index">{{item.routerFile}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="top">
        <button @click="out">退出</button>
      </div>
      <div class="router">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    out () {
      // 清空 vuex 的路由
      this.setRouterList([])
      // 设置token
      this.setToken('')
      // 删除 sessionStorage 路由
      window.sessionStorage.removeItem('router')
      this.$router.push('/login')
    },
    ...mapMutations({
      setRouterList: 'SET_ROUTER_LIST',
      setToken: 'SET_TOKEN'
    })
  },
  computed: {
    ...mapGetters([
      'adminRouter'
    ])
  }
}
</script>

<style scoped>
  .home {
    display: flex;
  }

  .home ul {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .logo {
    width: 100%;
    height: 100px;
    background-color: coral;
  }

  .home li {
    cursor: pointer;
    padding: 0 15px;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
  }
  .top {
    background-color: #333333;
    text-align: right;
  }
  .top button {
    background-color: coral;
    line-height: 1;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .right {
    flex: 1;
  }
  .router {
    padding: 20px;
  }
</style>
