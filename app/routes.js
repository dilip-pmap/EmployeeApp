// Dependencies.
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';
// Pages.
// Pages.
import Homepage from './App';
import Loginpage from './login';

// Routes template.
export default (
	<Router history={createBrowserHistory()}>
		<Route path="/homepage" component={Homepage} title="Home Page" />
		<Route path="/" component={Loginpage} title="Login Page" />
	</Router>
);
