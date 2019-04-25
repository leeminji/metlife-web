module.exports = {
	publicPath: '',
	assetsDir: '',
	outputDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: undefined,
	parallel: undefined,
	css: undefined,
	chainWebpack: config => {
		config.module
		  .rule('images')
			.use('url-loader')
			  .loader('url-loader')
			  .tap(options => Object.assign(options, { limit: 10240 }))
	  }	
  }