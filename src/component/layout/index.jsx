import React from "react";
import TopNav from "component/nav-top/index.jsx";
import SideNav from "component/nav-side/index.jsx";
import "./theme.css"

class Layout extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div id="layout">
				<TopNav />
				<SideNav />
				{this.props.children}
			</div>	
		);
	}
}
export default Layout;