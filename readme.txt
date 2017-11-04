tips1 命令行打印Error说明安装错误，不能忽略，请检查原因或者重新安装，可能是权限不足或者被墙了；打印Warn说明有警告提示，可以忽略。
tip2 把所有的业务代码放在一个文件夹src，就是源代码source的简写

step1 开发环境安装webpack到项目中，同时安装hot dev中间件（什么是中间件？？）
	npm install --save-dev webpack
	npm install --save-dev webpack-hot-middleware webpack-dev-middleware 
step2 安装express服务器
	npm install --save-dev express
step3 立即生成package文件
	npm init -y
step4 线上环境安装react、react-dom
	npm install --save react react-dom
step5 在根目录创建webpack.config.js配置文件
	touch webpack.config.js (linux环境)
	type nul>webpack.config.js (windows环境)
step6 创建一个express服务器启动的js文件
	type nul>server.js (windows环境)
step7 安装babel-loader处理js文件
	npm install --save-dev babel-core babel-loader 
step8 现在是es6的时代，需要安装能够解析es6代码变成es5代码的babel，es6也叫es2015，就是指2015年正式发布的意思；顺便也安装解析react代码的babel
	npm install --save-dev babel-preset-es2015 babel-preset-react 
step9 执行完上一步后，babel无法直接处理，需要给babel添加一个配置文件.babelrc
	type nul>.babelrc
	内容也是配置对象，如下：
	{
		"presets": ["react","es2015"],
		"env": {
			"development": {
				"presets":["react"]
			}
		}
	}
step10 安装处理html页面的插件，安装删除dist内容的插件
	npm install --save-dev html-webpack-plugin
	npm install --save-dev clean-webpack-plugin