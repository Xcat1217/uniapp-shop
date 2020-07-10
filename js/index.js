/* api函数模块 */
import {myRequest} from './ajax.js'
// ****轮播图接口
export const reqSwiper = () => myRequest({ url : '/api/getlunbo' })
// 获取商品列表
export const reqGoodsList = () => myRequest({ url: '/api/getgoods?pageindex=1'})
// 获取图片分类/api/getimgcategory
export const reqImgClass = () => myRequest({ url : '/api/getimgcategory' })
// 资讯列表
export const reqNews = () => myRequest({ url : '/api/getnewslist' })
