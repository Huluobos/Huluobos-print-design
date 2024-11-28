module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'example/main.js',
      // 模板来源
      template: 'example/index.html',
    },
  }
}
