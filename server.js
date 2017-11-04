// 该服务器启动脚本代码大同小异的，看懂就好，不要求自己会写，网上一堆教程。。。
webpack=require('webpack')
webpackDevMiddleware=require('webpack-dev-middleware')
webpackHotMiddleware=require('webpack-hot-middleware')
config=require('./webpack.config')
app=new (require('express'))()
port=1718
compiler=webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use((req,res)=>{
  	res.sendFile(__dirname + '/src/index.html')
})
app.listen(port, (error)=>{
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})