import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stote'
import './less/components-style.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
