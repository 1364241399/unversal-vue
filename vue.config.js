module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port: 80,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target: 'http://localhost:8087',
        changeOrigin: true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      } 
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': '/src'
  //     }
  //   }
  // }
}
