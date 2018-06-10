import React from 'react'
import BottomNav from "component/nav-bottom/index.jsx"
import "./dev.css"

class Dev extends React.Component{
	render(){
		return(
			<div class="main">
				<div class="dev">
					<div class="devtitle">开发管理</div>
					<div class="devcontent">
						<p class="devcontent_title">线上版本</p>
						<div class="devcontent_content"><p>尚未提交线上版本</p></div>
					</div>
					<div class="devcontent">
						<p class="devcontent_title">审核版本</p>
						<div class="devcontent_content"><p>你暂无提交审核的版本或者版本已发布上线</p></div>
					</div>
					<div class="devcontent">
						<p class="devcontent_title">开发版本</p>
						<div class="devcontent_content"><p>你尚未绑定任何开发者，请先绑定开发者</p></div>
					</div>
				</div>
				<BottomNav />
			</div>
			);
	}
}
export default Dev