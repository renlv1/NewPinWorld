//


module.exports = {
  publicPath: './',

  productionSourceMap: false,

  configureWebpack: {
    // 设置别名路径
    resolve: {
      alias: {
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
}
