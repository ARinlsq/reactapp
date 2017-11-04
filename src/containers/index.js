import React, { Component } from 'react'
// Funtion Component
const News = (props) => {
	const { news } = props
	return (
		<div>
			<div>新闻条数：{ news.length }</div>	
			{
				news.map((data, index) => (
					<div key={data.id}>
						<div>序号：{index+1}</div>
						<div>标题：{data.title}</div>
						<div>内容：{data.content}</div>
					</div>
				))
			}
		</div>
	)
}
// Class Component
class Index extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const news = [
			{
				id:160,
				title:'James Harden 大胡子',
				content:'休斯顿火箭 中国人气很高 哈哈哈哈'
			},
			{
				id:159,
				title:'詹皇大爆发57分，终结4连败',
				content:'勒夫说，詹皇无人能挡，balbalbal。。。。'
			},
			{
				id:158,
				title:'凯尔特人逆转雷霆，7连胜',
				content:'欧文50分塔图姆10分。。。。。。。。'
			}
		]
		return (
			<div>
				<div>HUPU NBA</div>
				<News news={news} />
			</div>
		)
	}
}
export default Index
