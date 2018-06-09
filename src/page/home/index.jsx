import React from 'react'
import "./home.css"

class Home extends React.Component{
	render(){
		return(
			<div class="main">
				<div class="home">
					<div class="hometitle">小程序发布流程</div>		
					<div class="homestep"><p>step</p><p>1</p></div>		
					<div class="homecontent">
						<div class="home_content_1">
							<div>
								<p>小程序信息</p>
							</div>
							<div>
								<p>补充小程序的基本信息，如名称、图标、描述等</p>
							</div>
							<div>
								<p>已完成</p>
								<a>查看详情</a>
							</div>
						</div>
						<div class="home_content_2">
							<div>
								<p>小程序开发与管理</p>
							</div>
							<div></div>
							<div>
								<button>添加开发者</button>
							</div>
							<div>
								<p>开发工具</p>
							</div>
							<div><p>下载开发者工具进行代码的开发和上传： 普通小程序开发者工具 、 小游戏开发者工具</p></div>
							<div></div>
							<div>
								<p>添加开发者</p>
							</div>
							<div><p>添加开发者，进行代码上传</p></div>
							<div></div>
							<div>
								<p>配置服务器</p>
							</div>
							<div><p>在开发设置页面查看AppID和AppSecret，配置服务器域名</p></div>
							<div></div>
							<div>
								<p>帮助文档</p>
							</div>
							<div><p>可以阅读入门介绍（普通小程序 | 小游戏）、开发文档（普通小程序 | 小游戏）、设计规范和运营规范</p></div>
							<div></div>
						</div>
					</div>		
					<div class="homestep"><p>step</p><p>2</p></div>		
					<div class="homecontent">
						<div class="home_content_3">
							<div>
								<p>版本发布</p>
							</div>
							<div>
								<p>先提交代码，然后提交审核，审核通过后可发布</p>
							</div>
							<div>
								<button>前往发布</button>
							</div>
						</div>
					</div>		
				</div>
			</div>
			);
	}
}
export default Home