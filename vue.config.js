module.exports = {
	devServer: {
		proxy: {
			'/api':{
				target:'http://news-at.zhihu.com/api/4/',  //api服务器的地址
				ws:true,   //代理websockets
				changeOrigin:true,   //虚拟的站点需要更管origin
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}