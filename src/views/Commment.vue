<template>
	<div id="commment">
		<div class="backTwo">
			<router-link to="swiperDetails">
			<img src="../assets/img/back.png" />
			</router-link>
			<h1>13条评论</h1>
		</div>
		<!-- <div class="long">
			<h2>1条长评</h2>
			<div class="longWords">
				<div class="longLeft">
					<img src="../assets/img/1.jpg" />
				</div>
				<div class="longRight">
					<h3>无为天君</h3>
					<p>语言GV的开始变为法院关于为规范与发给我的不错的减少了编程四UI传播电视剧，外出看不到</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/img/评论.png" class="ping" />
						<img src="../assets/img/点赞.png" />
					</div>
				</div>
			</div>
		</div> --><!--long end-->
		<div class="long">
			<h2>15条长评</h2>
			<div class="longWords" v-for="long in long" :key="long.title">
				<div class="longLeft">
					<img :src="long.avatar" />
				</div>
				<div class="longRight">
					<h3>{{ long.author }}</h3>
					<p>{{long.content}}</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/img/点赞.png" />
						<img src="../assets/img/评论.png" class="ping" />
					</div>
				</div>
			</div>
		</div><!--long end-->
		<div class="short">
			<h2>14条短评</h2>
			<!-- <div class="shortWords">
				<div class="shortLeft">
					<img src="../assets/img/1.jpg" />
				</div>
				<div class="shortRight">
					<h3>清耳</h3>
					<p>你不是说我只能的5分吗？</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/img/评论.png" class="ping" />
						<img src="../assets/img/点赞.png" />
					</div>
				</div>
			</div> --><!--shortWords end-->
			<div class="shortWords" v-for="short in short" :key="short.title">
				<div class="shortLeft">
					<img :src="short.avatar" />
				</div>
				<div class="shortRight">
					<h3>{{ short.author }}</h3>
					<p>{{ short.content }}</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/img/点赞.png" />
						<img src="../assets/img/评论.png" class="ping" />
					</div>
				</div>
			</div><!--shortWords end-->
		</div><!--short end-->
	</div>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				long:[],
				short:[]
			}
		},
		//接口
		mounted:function(){
			this.axios.get("story/4232852/long-comments").then(res =>{
			this.long=res.data.comments;	
			});
			this.axios.get("story/4232852/short-comments").then(res =>{
			this.short=res.data.comments;	
			});
		}
	}
</script>

<style>
</style>
