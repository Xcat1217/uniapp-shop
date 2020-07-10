import Vue from 'vue'
import App from './App'
import { reqSwiper, reqGoodsList, reqImgClass, reqNews } from './js'


Vue.prototype.$reqSwiper = reqSwiper
Vue.prototype.$reqGoodsList = reqGoodsList
Vue.prototype.$reqImgClass = reqImgClass
Vue.prototype.$reqImgClass = reqImgClass
Vue.prototype.$reqNews = reqNews

// 全局时间过滤器
Vue.filter('formatDate', (date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2, 0)
	const day = nDate.getDay().toString().padStart(2, 0)
	return `${year}年${month}月${day}日`
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
