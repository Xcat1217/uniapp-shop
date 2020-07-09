import Vue from 'vue'
import App from './App'
import { reqSwiper, reqGoodsList, reqImgClass } from './js'


Vue.prototype.$reqSwiper = reqSwiper
Vue.prototype.$reqGoodsList = reqGoodsList
Vue.prototype.$reqImgClass = reqImgClass

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
