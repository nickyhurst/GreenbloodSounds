import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import file
import './index.scss';

import Demo from './layout/GbsLayout';
import error404 from './elements/error404';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
	render() {
		return (
			<BrowserRouter basename={'/'}>
				{/* <PageScrollTop> */}
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />

					<Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
					<Route component={error404} />
				</Switch>
				{/* </PageScrollTop> */}
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
