import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import My from '../views/My.vue'
import swiperDetails from '../views/swiperDetails.vue'
import Commment from '../views/Commment.vue'
import Time from '../views/Time.vue'

Vue.use(VueRouter)

const routes = [
	{
    path:'/',
  	name:'Index',
  	component:Index
	},
	{
	path:'/My',
	name:'My',
	component:My  
	},
	{
	path:'/swiperDetails',
	name:'swiperDetails',
	component:swiperDetails  
	},
	{
	path:'/Commment',
	name:'Commment',
	component:Commment  
	},
	{
	path:'/Time',
	component:Time  
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
