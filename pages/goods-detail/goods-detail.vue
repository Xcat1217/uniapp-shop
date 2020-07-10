<template>
	<view class="goods-detail">
		<!-- 轮播图区域 -->
		<swiper indicator-dots autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<!-- 价格标题区域 -->
		<view class="info-top">
			<text class="new">￥{{info.sell_price}}</text>
			<text class="old">￥{{info.market_price}}</text>
			<view class="title">
				{{info.title}}
			</view>
		</view>
		<!-- 货号库存信息区域 -->
		<view class="info-bottom">
			<view class="bottom1">货号: {{info.goods_no}}</view>
			<view class="bottom2">库存: {{info.stock_quantity}}</view>
		</view>
		<!-- 详细介绍区域 -->
		<view class="desc">
			<view class="tit">
				详细介绍
			</view>
			<view class="desc-content">
				<rich-text :nodes="desc.content"></rich-text>
			</view>
		</view>
		<!-- 底部导航区域 -->
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import {
		myRequest
	} from '../../js/ajax.js'
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				desc: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getSwipers() {
				const res = await myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.swipers = res.data.message
			},
			async getInfo() {
				const res = await myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.info = res.data.message[0]
			},
			async getDesc() {
				const res = await myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.desc = res.data.message[0]
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getInfo()
			this.getDesc()
		},
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		line-height: 80rpx;

		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info-top {
			.title {
				margin-left: 25rpx;
				font-weight: bold;
			}

			.new {
				font-size: 40rpx;
				color: #FF3030;
				font-weight: bolder;
				margin-left: 30rpx;
			}

			.old {
				font-size: 25rpx;
				color: #808080;
				text-decoration: line-through;
				margin-left: 30rpx;
			}
		}

		.info-bottom {
			border-top: 6rpx solid #999999;
			border-bottom: 6rpx solid #999999;
			margin: 15rpx 0;

			.bottom1 {
				margin-left: 25rpx;
			}

			.bottom2 {
				margin-left: 25rpx;
			}
		}

		.desc {
			padding: 10rpx;
			width: 750rpx;
			padding-bottom: 50rpx;
			.tit {
				font-size: 40rpx;
				margin-left: 25rpx;
			}
		}
		.goods-nav{
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
