import React from 'react'
import BottomNav from "component/nav-bottom/index.jsx"
import "./id.css"

class Id extends React.Component{
	render(){
		return(
			<div class="main">
				<div class="id">
					<div class="idtitle">用户身份</div>		
					<div class="idcontent">
						<div>
							<span class="idcontent_title">管理员</span>
							<span class="idcontent_title2">可设置风险操作保护、风险操作提醒等帐号安全</span>
						</div>
						<div>
							<div>
								<div></div>
							</div>
						</div>
					</div>		
					<div class="idcontent">
						<div>
							<span class="idcontent_title">成员管理</span>
							<span class="idcontent_title2">管理员可添加小程序项目成员，并配置成员的权限，查看详细说明。</span>
							<span><button class="id_button1">编辑</button></span>
							<span><button class="id_button2">∨</button><div>添加成员</div></span>
						</div>
						<div>
							<input placeholder="请输入搜索关键字"/>
						</div>
						<div>	
							<table>
								<table class="table">
							        <thead class="thead">
							            <tr>
							                <th class="table_cell opr_cell"></th>
							                <th class="table_cell role_cell">成员</th>
							                <th class="table_cell">开发者权限</th>
							                <th class="table_cell">体验者权限</th>
							                <th class="table_cell">登录</th>
							                <th class="table_cell">数据分析</th>
							                <th class="table_cell">开发管理</th>
							                <th class="table_cell">开发设置</th>
							                <th class="table_cell">暂停服务</th>
							                <th class="table_cell">解除关联公众号</th>
							                <th class="table_cell">腾讯云管理</th>							                
							                <th class="table_cell">小程序插件</th>							                
							            </tr>
							        </thead>
							        <tbody class="tbody">							        				            
							            <tr class="role_row">
							                <td class="table_cell opr_cell">
							                </td>
							                <td class="table_cell role_cell">
							                    <div class="role_info_box">
							                        <img class="role_avatar" src="" />
							                        <span class="role_name">曹昱RICO</span> 
							                    </div>
							                </td>
							         
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>
							                <td class="table_cell">
							                    <span class="icon_allow"></span>
							                </td>							                
							            </tr>							            							          				            
							        </tbody>
							    </table>
							</table>
						</div>
					</div>		
				</div>
				<BottomNav />
			</div>
			);
	}
}
export default Id