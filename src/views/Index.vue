<template>
	<div id="index">
		<div class="indexHeader">
			<div class="leftHeader">
				<p class="oneP">{{time | nowDay}}</p>
				<p>{{time | nowMonth}}</p>
			</div>
			<div class="centerHeader">
				<h1 v-if="grt=(ho<9?'早上好':
					ho<12?'上午好！':
					ho<15?'中午好！':
					ho<19?'下午好！':
					'晚上好'
					)">{{grt}}</h1>
			</div>
			<div class="rightHeader">
				<router-link to="My">
				<img src="../assets/img/1.jpg" />
				</router-link>
			</div>
		</div>
		<div class="banner">
			<!-- <swiper :options="swiperOption">
				<swiper-slide v-for="banner in banner" :key="banner.title">
					<router-link to="banner.url">
						<img :src="banner.image" />
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
			</swiper> -->
			<van-pull-refresh>
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="banner in banner" :key="banner.title">
						<a :href="banner.url">
							<img :src="banner.image" />
							<p>
								{{ banner.title }}
								<span>{{ banner.hint }}</span>
							</p>
						</a>
					</van-swipe-item>
				</van-swipe>
			</van-pull-refresh>
		</div>
		<div class="articleList">
			<router-link to="swiperDetails" v-for="articleList in articleList" :key="articleList.title">
				<div class="leftList">
					<h2>{{ articleList.title }}</h2>
					<p>{{ articleList.hint }}</p>
				</div>
				<div class="rightList">
					<img :src="articleList.images" />
				</div>
			</router-link>
		</div>
		<div class="agoTime">
			<span>2 月 11 日</span>
			<span class="line"></span>
		</div>
		<div class="agoTimeList">
			<a :href="agoTimeList.url" v-for="agoTimeList in agoTimeList" :key="agoTimeList.title">
				<div class="leftList">
					<h2>{{ agoTimeList.title }}</h2>
					<p>{{ agoTimeList.hint }}</p>
				</div>
				<div class="rightList">
					<img :src="agoTimeList.images" />
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import "../assets/css/swiper.min.css";
	import Vue from 'vue';
	import { Swipe,SwipeItem } from 'vant';
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default{
		components:{
			
		},
		data(){
			return{
				banner:[],
				articleList:[],
				agoTimeList:[],
				//时间
				time:Date.parse(new Date()),
				//问候语
				 grt:"hello",
				 ho:new Date().getHours(),
				slideImages:[],
				conList:[],
			}
		},
		//时间
		filters:{
		    nowDay: function (value) {
				let date = new Date(value);
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				return d
				},
				nowMonth: function (value){
				let date = new Date(value);
				let MM = date.getMonth()+1;
				MM = MM < 10 ? (MM) : MM;
				return MM+'月'
				}
		},
		//接口
		mounted:function(){
			this.axios.get("news/latest").then(res =>{
				this.banner=res.data.top_stories;
				this.articleList=res.data.stories;
			});
			this.axios.get("news/before/20131119").then(res =>{
				this.agoTimeList=res.data.stories;
			})
		}
	}
</script>

<style>
</style>
