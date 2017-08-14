import React, { Component } from 'react';

class SportView extends Component {
	render(){
		return(
			

			<div className="topnav">
				<h1 className="headermain">General Sports Information</h1>
				<img className="logo" src="https://s-media-cache-ak0.pinimg.com/originals/e3/9c/be/e39cbe91f97263c3775d112d1c0e93b2.jpg" alt=""/>
				<img className="logoo"src="http://diylogodesigns.com/blog/wp-content/uploads/2016/01/cricket-blast-logo-design-creative-idea.png" alt=""/>


				<nav>
				<ul>
				<li>NBA</li>
				<li>NFL</li>
				<li>SOCCER</li>
				<li>NHL</li>
				<li>CRICKET</li>
				</ul>
				</nav>
			</div>
			)
	}
}

export default SportView;