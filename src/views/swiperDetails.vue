<template>
	<div id="swiper">
		<div class="swiperBan">
			<img :src="image" />
		</div>
		<div class="swiperContent" v-html="body">
			<!-- <h1></h1>
			<div class="explain">
				<span class="autor"></span>
				<a href="#"></a>
			</div>
			<p></p> -->
		</div>
		<div class="swiperFoot">
			<ul>
				<li>
					<router-link :to="{name:'Index'}">
						<img src="../assets/img/back.png" />
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'Commment'}">
						<img src="../assets/img/评论.png" />
					</router-link>
				</li>
				<!-- <li @click="zan"><img :src="fabulou>0? require('../assets/img/点赞2.png') : require('../assets/img/点赞.png')"><span>{{ fabulous }}</span></li> -->
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
				body:[],
				// fabulou:0,
				// fabulous:0,
			}
		},
		// zan(){
		// 	if(this.fabulou==1){
		// 		this.fabulous=this.fabulous-1;
		// 		this.fabulou=0;
		// 	}else{
		// 		this.fabulousthis.fabulous+1;
		// 		this.fabulou=1;
		// 	}
		// },
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
