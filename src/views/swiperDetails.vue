<template>
	<div id="swiper">
		<div class="swiperBan">
			<!-- <img src="../assets/img/banner01.png" /> -->
			<img :src="image" />
		</div>
		<div class="swiperContent" v-html="body">
			<!-- <h1>那些学生时代喜欢一下课就打篮球的男生后来怎么样了？</h1>
			<div class="explain">
				<span class="autor">作者 / 像少年拉菲迟</span>
				<a href="#">进入[ 知乎 ]查看全文</a>
			</div>
			<p></p> -->
		</div>
		<div class="swiperFoot">
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/img/back.png" />
					</router-link>
				</li>
				<li>
					<router-link to="Commment">
						<img src="../assets/img/评论.png" />
					</router-link>
				</li>
				<li><img src="../assets/img/点赞.png" /></li>
				<li><img src="../assets/img/收藏.png" /></li>
				<li><img src="../assets/img/分享.png" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				image:[],
				body:[]
			}
		},
		//接口
		mounted:function(){
			this.axios.get("news/3892357").then(res =>{
				this.image=res.data.image;
				this.body=res.data.body;
			})
		}
	}
</script>

<style>
	@import url("http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3");
</style>
