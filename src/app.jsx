import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Id from 'page/id/index.jsx';
import Data from 'page/data/index.jsx';
import Dev from 'page/dev/index.jsx';
import Layout from 'component/layout/index.jsx';

import './index.css';

class App extends React.Component{
    render(){
    	return(
	        <Router>
	        	<Layout>
		        	<Switch>
			        	<Route exact path="/" component={Home} />
			        	<Route exact path="/id" component={Id} />
			        	<Route exact path="/dev" component={Dev} />
			        	<Route exact path="/data" component={Data} />
			        	<Redirect from="*" to="/"/>
		        	</Switch>
	        	</Layout>
	        </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);	