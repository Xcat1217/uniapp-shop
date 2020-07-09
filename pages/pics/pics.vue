<template>
	<view class="pics">
		<scroll-view scroll-y class="left">
			<view class="left-item" @click="getPicsList(index, item.id)" :class="active === index? 'active' : ''" :key="item.id"
			 v-for="(item,index) in picsClass">
				{{item.title}}
			</view>
		</scroll-view>
		<!-- 二级图片列表展示区域 -->
		<scroll-view class="pics-list"scroll-y>
			<view class="item" v-for="item in picsList" :key="item.id">
				<image :src="item.img_url" @click="previewImg(item.img_url)"></image>
				<text>{{item.zhaiyao}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		myRequest
	} from '../../js/ajax.js'
	export default {
		data() {
			return {
				picsClass: [],
				active: 0,
				picsList: [],
			}
		},
		onLoad() {
			this.getImgClass()
		},
		methods: {
			// 获取图片分类
			async getImgClass() {
				const res = await this.$reqImgClass()
				this.picsClass = res.data.message
				this.getPicsList(0, this.picsClass[0].id)
			},
			// 获取二级图片列表
			async getPicsList(index, id) {
				this.active = index
				const res = await myRequest({
					url: '/api/getimages/' + id
				})
				if(res.data.message.length === 0) return uni.showToast({
					title:'暂无数据'
				})
				this.picsList = res.data.message
			},
			// 预览图片
			previewImg (current) {
				const urls = this.picsList.map(item => {
					return item.img_url
				})
				uni.previewImage({
					urls,
					current,
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		display: flex;
		height: 100%;


		.left {
			width: 200rpx;
			border-right: 2rpx solid #C0C0C0;
			height: 100%;

			.left-item {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 2rpx solid #eee;
			}

			.active {
				background-color: #EE0000;
				color: #FFFFFF;
			}
		}


		.pics-list {
			width: 500rpx;
			height: 100%;
			margin: 10rpx auto;
			display: flex;

			.item {
				image {
					width: 500rpx;
					height: 500rpx;
					border-radius: 10rpx;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
