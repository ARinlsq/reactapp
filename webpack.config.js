const HtmlWebpackPlugin = require('html-webpack-plugin'); // 使用html模板插件
const webpack = require('webpack'); //引用webpack
const path = require('path');
const path_output = path.join(__dirname,'dist')
const CleanPlugin=require('clean-webpack-plugin') 
const isProduction=process.env.NODE_ENV === 'production'
const rules = [
  {
    test: /\.js$/,
    use: [ 'babel-loader' ],
    exclude: /node_modules/,
    include: __dirname
  }
]
const plugins = [
  new webpack.optimize.UglifyJsPlugin(), // ugly 丑陋的、Uglify 丑化某样东西
  new HtmlWebpackPlugin({
    template: './src/bundle.html'
  }),
  new CleanPlugin(path_output), // 打包的时候删除已存在的dist目录里的文件
  new webpack.HotModuleReplacementPlugin()
]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path_output,
    publicPath: '/static/', // 根路径的static目录
    filename: 'bundle'+(isProduction?'.[hash]':'')+'.js', // 希望生成的bundle带哈希版本号，
  },
  module: {
    rules
  },
  plugins
};


