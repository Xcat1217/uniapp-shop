<template>
	<!-- 资讯组件-----------********** -->
	<view class="news">
		<view class="news-item" :key="item.id" v-for="item in newsList" @click="goNewsDetail(item.id)">
			<image :src="item.img_url"></image>
			<view class="tit-info">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text class="time">发表时间: {{item.add_time | formatDate}}</text>
					<text class="skim">浏览: {{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['newsList'],
		// 时间过滤器
		filters:{
			formatDate (date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2, 0)
				const day = nDate.getDay().toString().padStart(2, 0)
				return `${year}年${month}月${day}日`
			}
		},
		methods: {
			goNewsDetail (id) {
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-item {
		display: flex;
		border-bottom: 2rpx solid #FF3030;
		width: 100%;
		height: 200rpx;
		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 180rpx;
			margin: 10rpx;
		}
		.tit-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-size: 30rpx;
				margin-top: 10rpx;
			}

			.info {
				// height: 100rpx;
				font-size: 24rpx;
				line-height: 50rpx;
				.skim {
					margin-left: 20rpx;
				}
			}
		}
	}
</style>

