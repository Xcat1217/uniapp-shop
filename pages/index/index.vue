<template>
	<view class="home">
		<!-- *************首页轮播图*********** -->
		<view class="home-swiper">
			<swiper class="swiper" 
			indicator-dots
			autoplay
			circular
			interval="3000" 
			duration="500">
				<swiper-item :key="item.id" v-for="item in swipers">
						<image :src="item.img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- *********首页导航区域********** -->
		<view class="home-nav">
			<view class="nav-item" :key="index" v-for="(item,index) in navs" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="home-hot-goods">
			<view class="tit">推 荐 商 品</view>
			<!-- 商品列表组件 -->
			<goods-list :goodsList="goodsList"></goods-list>
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goodsList: [],
				navs: [{
					icon: 'iconfont icon-ziyuan',
					title: '超市',
					path: '/pages/goods/goods'
				}, {
					icon: 'iconfont icon-guanyuwomen',
					title: '我们',
					path: '/pages/contact/contact'
				}, {
					icon: 'iconfont icon-tupian',
					title: '图片',
					path: '/pages/pics/pics'
				}, {
					icon: 'iconfont icon-shipin',
					title: '视频',
					path: '/pages/videos/videos'
				}]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图数据的函数
			async getSwipers () {
				const res = await this.$reqSwiper()
				this.swipers = res.data.message
			},
			// 获取商品列表
			async getGoodsList () {
				const res = await this.$reqGoodsList()
				this.goodsList = res.data.message
			},
			// nav*** 点击跳转函数
			navItemClick (url) {
				uni.navigateTo({
					url
				})
			}
		},
		components: {
			'goods-list': GoodsList
		}
	}
</script>

<style lang="scss" scoped>
	// 轮播图样式
.home-swiper{
	swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
}
	// 导航区域样式
.home-nav{
	display: flex;
	.nav-item{
		width: 25%;
		text-align: center;
		view{
			width: 120rpx;
			height: 120rpx;
			background-color: #98F5FF;
			border-radius: 50%;
			margin: 10rpx auto;
			line-height: 120rpx;
			font-size: 60rpx;
			color: 	#FFFFFF;
		}
		text{
			font-size: 30rpx;
		}
	}
}
   // 推荐商品区域样式
.home-hot-goods{
	background-color: #eee;
	overflow: hidden;
	.tit{
		height: 100rpx;
		font-size: 40rpx;
		line-height: 100rpx;
		text-align: center;
		background-color: #fff;
		letter-spacing: 15rpx;
		margin: 7rpx 0;
	}
}
	
</style>
