<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
import {apiAddress} from '@/request/api' // 导入我们的api接口
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // this.onLoad()
  },
  methods: {
    // 获取数据
    onLoad () {
      // 调用api接口，并且提供了两个参数
      apiAddress({
        type: 0,
        sort: 1
      }).then(res => {
        // 获取数据成功后的其他操作
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
