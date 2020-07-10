<template>
	<view class="news">
		<news-item :newsList="newsList" @itemClick="goNewsDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$reqNews()
				this.newsList = res.data.message
			},
			goNewsDetail (id) {
				uni.navigateTo({
					url: '../news-detail/news-detail?id='+id
				})
			}
		},
		components:{ 'news-item': newsItem }
	}
</script>

<style lang="scss" scoped>

</style>
