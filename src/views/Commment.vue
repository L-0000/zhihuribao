<template>
	<div id="commment">
		<div class="backTwo">
			<router-link :to="{name:'swiperDetails'}">
			<img src="../assets/img/back.png" />
			</router-link>
			<h1>13条评论</h1>
		</div>
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
