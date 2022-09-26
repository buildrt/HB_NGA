module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target:'http://43.142.76.39:5000',
        changeOrigin:true
      }
    }
  },
}