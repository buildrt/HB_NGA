module.exports = {
  publicPath: './',
  devServer: {
    http2: true,
    https: true,
    proxy: {
      '/api': {
        target: 'http://43.142.76.39:5000/',
        changeOrigin: true,
      },
      '/test': {
        target: 'https://www.4ha.club:5050/',
        changeOrigin: true,
      }
    },
  }
}