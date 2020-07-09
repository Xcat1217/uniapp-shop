<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="contact-content">
			<view class="contact-tel" @click="callTel">联系电话 : 199-6666-4444 (点击拨打)</view>
			<view class="contact-address">地址 : 广州市黄埔区香雪三路1号广州市黄埔区香雪三路1号广州市黄埔区香雪三路1号</view>
			<map 
			:latitude="22.251424" 
			:longitude="114.193843"
			:markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [{
					latitude: 22.251424,
					longitude: 114.193843,
					iconPath: '/static/logo.jpg',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			// 点击拨打电话
			callTel () {
				uni.makePhoneCall({
					phoneNumber: '19966664444'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	font-size: 35rpx;
	image{
		width: 100%;
		height: 300rpx;
	}
	.contact-content{
		padding: 0 20rpx;
		.contact-tel{
			width: 700rpx;
			line-height: 80rpx;
		}
		.contact-address{
			width: 700rpx;
			line-height: 80rpx;
		}
		map{
			width: 700rpx;
			height: 700rpx;
		}
	}
}
</style>
