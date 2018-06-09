import React from "react";

class TopNav extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div id="topnav">
			 	<a class="logo"></a>
			 	<div class="topnav_right">
			 		<ul>
			 			<li class="underline">文档</li>
			 			<li class="underline"> 社区</li>
			 			<li>
				 			<i class="notice"></i>
				 			<div class="noticenum">1</div>
			 			</li>
			 			<li><i class="headimg"></i></li>s
			 		</ul>
			 	</div>
			</div>	
		);
	}
}
export default TopNav;