import React from "react";
import {Link}    from 'react-router-dom';

class SideNav extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div class="leftside">
				<dl id="sidenav">
					<dt class="menu_title menu_home">
						<Link to="/Home">
							<span>首页</span>
						</Link>
					</dt>

					<dt class="menu_title menu_dev">
						<Link to="/Dev">
							<span>开发管理</span>
						</Link>
					</dt>

					<dt class="menu_title menu_id">
						<Link to="/Id">
							<span>用户身份</span>
						</Link>
					</dt>

					<dt class="menu_title menu_data">
						<Link to="/Data">
							<span>数据分析</span>
						</Link>
					</dt>

					<dt class="menu_title menu_notice">
						<Link to="/Home">
							<span>模板消息</span>
						</Link>
					</dt>

					<dt class="menu_title menu_server">
						<Link to="/Home">
							<span>客服消息</span>
						</Link>
					</dt>

					<dt class="menu_title menu_neibor">
						<Link to="/Home">
							<span>附近的小程序</span>
						</Link>
					</dt>

					<dt class="menu_title menu_center">
						<Link to="/Home">
							<span>运维中心</span>
						</Link>
					</dt>

					<dt class="menu_title menu_ad">
						<Link to="/Home">
							<span>推广</span>
						</Link>
					</dt>

					<dt class="menu_title menu_setting">
						<Link to="/Home">
							<span>设置</span>
						</Link>
					</dt>
				</dl>	
			</div>
		);
	}
}
export default SideNav;