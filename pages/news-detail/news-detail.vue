<template>
	<view class="news-detail">
		<text class="title">{{newsDetailList.title}}</text>
		<view class="info">
			<text>发表时间:{{newsDetailList.add_time | formatDate}}</text>
			<text>浏览:{{newsDetailList.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="newsDetailList.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import {myRequest} from '../../js/ajax.js'
	export default {
		data() {
			return {
				id: 0,
				newsDetailList: {}
			}
		},
		methods: {
			async getNewsDetail () {
				const res = await myRequest({
					url: '/api/getnew/' + this.id
				})
				this.newsDetailList = res.data.message[0]
			}
		},
		onLoad (options) {
			this.id = options.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
	.news-detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			width: 710rpx;
			text-align: center;
			display: block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
