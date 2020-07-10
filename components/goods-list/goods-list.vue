<template>
	<!-- -***********商品列表组件 -->
	<view class="home-goods-list">
		<view class="home-goods-item" :key="item.id" v-for="item in goodsList" @click="navGoodsDetail(item.id)">
			<image :src="item.img_url"></image>
			<view class="goods-price">
				<text class="new-price">￥{{item.sell_price}}</text>
				<text class="old-price">{{item.market_price}}</text>
			</view>
			<view class="goods-name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 接收  其他使用商品列表的组件 的数据
		props: ['goodsList'],
		data() {
			return {

			}
		},
		methods: {
			navGoodsDetail (id) {
				this.$emit('navGoodsDetail', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-goods-list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.home-goods-item{
			background-color: #FFFFFF;
			width: 355rpx;
			margin: 10rpx 0;
			box-sizing: border-box;
			image{
				display: block;
				width: 80%;
				height: 300rpx;
				margin: 0 auto;
			}
			.goods-price{
				width: 355rpx;
				margin: 10rpx 0;
				text{
					margin: 7rpx;
				}
				.new-price{
					font-size: 35rpx;
					color: #FF0000;
					font-weight: bolder;
				}
				.old-price{
					font-size: 17rpx;
					text-decoration: line-through;
					color: #C0C0C0;
				}
			}
			.goods-name{
				line-height: 50rpx;
				font-size: 28rpx;
				color: 	#000000;
				padding: 10rpx;
			}
		}
	}
</style>
