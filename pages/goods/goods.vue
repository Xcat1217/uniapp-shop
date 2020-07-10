<template>
	<view class="goods-list">
		<goods-list :goodsList="goodsList" @navGoodsDetail="navGoodsDetail"></goods-list>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods-list/goods-list.vue'
	import { myRequest } from '../../js/ajax.js'
	export default {
		data () {
			return {
				pageindex: 1,
				goodsList: [],
				flag: false
			}
		},
		onLoad () {
			this.getGoodsList()
		},
		// 监听下拉刷新
		onPullDownRefresh () {
			this.pageindex = 1
			this.goodsList = [],
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
		// 下拉刷新数据
		onReachBottom () {
			if (this.goodsList.length < this.pageindex*10) return uni.showModal({
				content: '没有更多商品了!'
			})
			this.pageindex++
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表
			async getGoodsList (callback) {
				const res = await myRequest({
					url: `/api/getgoods?pageindex=${this.pageindex}`
				})
				this.goodsList = [...this.goodsList, ...res.data.message]
				// 关闭下拉刷新
				callback && callback()
			},
			// 导航到商品详情页
			navGoodsDetail (id) {
				uni.navigateTo({
					url: '../goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			'goods-list': GoodsList
		}
	}
</script>

<style>
	.goods-list{
		background-color: #eee;
	}
</style>
