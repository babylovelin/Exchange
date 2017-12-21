import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 3,
  drawer: false,
  userInfo: {
    uId: '',
    token: '123456'
  },
  language: 1 // 1简体2繁体3英文

}
const mutations = {
  add(state) {
    state.count += 1
  },
  reduce(state) {
    state.count -= 1
  },
  changeDarwer(state) {
    state.drawer = !state.drawer
  },
  openDrawer(state) {
    state.drawer = true
  },
  closeDrawer(state) {
    state.drawer = false
  },
  setuId(uid) {
    state.userInfo.uId = uid
  },
  setLanguage(languageid) {
    state.language = languageid
  }
}
export default new Vuex.Store({
  state,
  mutations
})
