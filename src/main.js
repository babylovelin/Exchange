import Vue from 'vue'
// import vux from 'vux'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'common/less/index.less'
import verify from 'vue-verify-plugin'
import global from './common/js/global.js'
import VueClipboard from 'vue-clipboard2'
// Axios.defaults.baseURL = 'http://exchange.tiny-calf.com/api/'
// Axios.defaults.baseURL = 'http://www.9158mobi.com/api/'
// Axios.defaults.baseURL = 'http://120.92.92.77:8333/'
Axios.defaults.baseURL = 'http://192.168.8.200:8332/'
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers['Content-Type'] = 'application/json'
// 'application/x-www-form-urlencoded'
Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.prototype.global = global
var myRules = {
  sixnum: {
    test: function(val) {
      var regExp = /^\d{6}$/
      if (!regExp.test(val)) {
        return false
      }
      return true
    },
    message: '必须包含6个数字'
  },
  pass: {
    test: function(val) {
      // var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
      var regExp = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/

      if (!regExp.test(val)) {
        return false
      }
      return true
    },
    message: '必须包含数字'
  }
}
Vue.use(VueClipboard)
Vue.use(verify, {
  blur: true,
  rules: myRules
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  verify,
  render: h => h(App)
})